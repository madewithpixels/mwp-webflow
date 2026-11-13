// MWPPerf (R-102, step 1). Works out what kind of device this is and says so. It changes nothing else yet.
//
// Sets two attributes on <html>:
//   data-input = "pointer" (mouse/trackpad) or "touch"
//   data-perf  = "high" | "mid" | "low"    (frame-rate caps 60 / 30 / 25, used in later steps)
// and exposes window.MWPPerf { tier, input, fps, signals, reason, set(), onChange(), sample() }.
//
// How the tier is chosen (brief: docs/perf-and-stability-brief.md):
//   1. ?perf=low|mid|high forces it (remembered for the session); ?perf=auto clears that.
//   2. otherwise a tier remembered earlier this session (it may already have stepped down).
//   3. otherwise a starting tier from cheap signals: cores, memory (where reported), pixel ratio, touch, data-saver.
//   4. then the measured frame rate can step it DOWN one tier, once per session, never back up.
// ?perf-debug shows a small overlay (signals, tier and why, frame rate, innerHeight changes, ScrollTrigger refreshes).
// ?perf-debug=0 turns it off again.
(function () {
  if (window.MWPPerf) return;
  var doc = document.documentElement;
  var TIERS = ['high', 'mid', 'low'];
  var FPS = { high: 60, mid: 30, low: 25 };
  var KEY = 'mwp-perf';
  var DBG = 'mwp-perf-debug';

  function store(key, value) {
    try {
      if (value === undefined) return window.sessionStorage.getItem(key);
      if (value === null) window.sessionStorage.removeItem(key);
      else window.sessionStorage.setItem(key, value);
    } catch (e) {}
    return null;
  }
  function query(name) {
    try {
      return new URLSearchParams(window.location.search).get(name);
    } catch (e) {
      return null;
    }
  }

  // Lite is remembered across visits (localStorage, 30 days) so a device that needed it gets it from the first paint next time.
  var LKEY = 'mwp-lite';
  var LTTL = 30 * 864e5;
  function lstore(value) {
    try {
      if (value === undefined) return window.localStorage.getItem(LKEY);
      if (value === null) window.localStorage.removeItem(LKEY);
      else window.localStorage.setItem(LKEY, value);
    } catch (e) {}
    return null;
  }

  // The visitor's own choice of the full site ("View the full version" pill in lite) is remembered the same way, and beats every automatic decision.
  var FKEY = 'mwp-full';
  function lfull(value) {
    try {
      if (value === undefined) return window.localStorage.getItem(FKEY);
      if (value === null) window.localStorage.removeItem(FKEY);
      else window.localStorage.setItem(FKEY, value);
    } catch (e) {}
    return null;
  }

  // ---- ?perf-kill=ft,testi,folio,fx,layers,clip,paint : diagnostic only. Switches one effect off so its cost shows in the overlay.
  // ft: WebGL contexts are refused before the Faulty Terminal script runs (this script is in the head, the terminal in the footer).
  var kill = (query('perf-kill') || '').toLowerCase().split(',').filter(Boolean);
  var realGetContext = window.HTMLCanvasElement && window.HTMLCanvasElement.prototype.getContext;
  // Refuses WebGL contexts so the Faulty Terminal script (in the footer, after this one) cannot start. Used by kill=ft and by lite mode.
  var webglBlocked = false;
  var blockWebgl = function () {
    if (webglBlocked || !realGetContext) return;
    webglBlocked = true;
    window.HTMLCanvasElement.prototype.getContext = function (type) {
      if (/webgl/i.test(String(type))) return null;
      return realGetContext.apply(this, arguments);
    };
  };
  if (kill.length) {
    try {
      var css = [];
      if (kill.indexOf('ft') > -1) {
        css.push('.ft-wrapper{display:none!important}');
        blockWebgl();
      }
      if (kill.indexOf('fx') > -1)
        css.push('*,*::before,*::after{filter:none!important;-webkit-filter:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;box-shadow:none!important;text-shadow:none!important;mix-blend-mode:normal!important}');
      if (kill.indexOf('layers') > -1) css.push('*,*::before,*::after{will-change:auto!important}');
      if (kill.indexOf('clip') > -1)
        css.push('*,*::before,*::after{clip-path:none!important;-webkit-clip-path:none!important;mask:none!important;-webkit-mask:none!important}');
      if (kill.indexOf('paint') > -1) css.push('.about *{visibility:hidden!important}');
      if (kill.indexOf('testi') > -1) css.push('.testi-wall_row,.testi-wall_backrow{display:none!important}');
      if (kill.indexOf('folio') > -1) css.push('.folio-wall_tile{visibility:hidden!important}');
      if (css.length) {
        var ks = document.createElement('style');
        ks.textContent = css.join('');
        (document.head || document.documentElement).appendChild(ks);
      }
    } catch (e) {}
  }

  // ---- input: decided by what the primary pointer can do, not by width
  var input = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches ? 'pointer' : 'touch';

  // ---- signals
  var nav = window.navigator || {};
  var conn = nav.connection || {};
  var signals = {
    cores: nav.hardwareConcurrency || 0,
    memory: nav.deviceMemory || 0, // GB, rounded; Chromium only (Safari does not report it)
    dpr: window.devicePixelRatio || 1,
    touchPoints: nav.maxTouchPoints || 0,
    saveData: !!conn.saveData,
    reducedMotion: !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches),
    gpu: '',
  };

  // ---- starting tier from cheap signals
  function startingTier() {
    var score = 0;
    var why = [];
    function add(n, text) {
      score += n;
      why.push(text + ' +' + n);
    }
    if (signals.saveData) add(3, 'data-saver');
    if (signals.cores && signals.cores <= 2) add(2, signals.cores + ' cores');
    else if (signals.cores && signals.cores <= 4) add(1, signals.cores + ' cores');
    if (signals.memory && signals.memory <= 2) add(2, signals.memory + 'GB memory');
    else if (signals.memory && signals.memory <= 4) add(1, signals.memory + 'GB memory');
    if (input === 'touch' && signals.dpr >= 2 && signals.cores && signals.cores <= 4) add(1, 'touch, dpr ' + signals.dpr + ', few cores');
    var tier = score >= 3 ? 'low' : score >= 1 ? 'mid' : 'high';
    return { tier: tier, reason: 'signals: ' + (why.length ? why.join(', ') : 'nothing weak') + ' (score ' + score + ')' };
  }

  // ---- state
  var forced = query('perf');
  // ?perf=auto, high or mid forget the remembered lite (and this session's switch) so a device can be re-tested; ?perf=low does not remember anything
  if (forced === 'auto' || forced === 'high' || forced === 'mid') {
    lstore(null);
    store('mwp-lite-now', null);
    store('mwp-lite-tries', null);
    store('mwp-lite-cover', null);
    store('mwp-lite-jump', null);
    store('mwp-lite-offer', null);
    lfull(null);
  }
  var liteStored = parseInt(lstore() || '0', 10);
  var fullStored = parseInt(lfull() || '0', 10);
  var fullChosen = !forced && !!fullStored && Date.now() - fullStored < LTTL;
  var liteRemembered = !forced && !fullChosen && !!liteStored && Date.now() - liteStored < LTTL;
  var liteThisSession = !forced && !fullChosen && store('mwp-lite-now') === '1';
  var tier, reason, locked;
  var listeners = [];
  var stepped = false;
  if (forced && TIERS.indexOf(forced) > -1) {
    tier = forced;
    reason = 'forced by ?perf=' + forced;
    locked = true;
    store(KEY, forced);
  } else {
    if (forced === 'auto') store(KEY, null);
    var remembered = store(KEY);
    if (remembered && TIERS.indexOf(remembered) > -1) {
      tier = remembered;
      reason = 'remembered earlier this session';
    } else {
      var start = startingTier();
      tier = start.tier;
      reason = start.reason;
    }
    locked = false;
    if (liteRemembered || liteThisSession) {
      tier = 'low';
      reason = liteRemembered ? 'lite remembered from an earlier visit' : 'lite switched on earlier this session';
    }
  }

  function apply() {
    doc.setAttribute('data-perf', tier);
    doc.setAttribute('data-input', input);
  }
  function set(next, why) {
    if (TIERS.indexOf(next) < 0 || next === tier) return;
    var from = tier;
    tier = next;
    reason = why || 'set';
    store(KEY, tier);
    apply();
    api.tier = tier;
    api.fps = FPS[tier];
    api.reason = reason;
    for (var i = 0; i < listeners.length; i++) {
      try {
        listeners[i](tier, from);
      } catch (e) {}
    }
    try {
      window.dispatchEvent(new CustomEvent('mwp:perf', { detail: { tier: tier, from: from, reason: reason } }));
    } catch (e) {}
  }
  function stepDown(why) {
    if (locked || stepped) return;
    var i = TIERS.indexOf(tier);
    if (i >= TIERS.length - 1) return;
    stepped = true;
    set(TIERS[i + 1], why);
    if (tier === 'low') liteSwitch(why);
  }

  var api = {
    tier: tier,
    input: input,
    fps: FPS[tier],
    signals: signals,
    reason: reason,
    set: function (t, why) {
      set(t, why || 'set by script');
    },
    onChange: function (fn) {
      if (typeof fn === 'function') listeners.push(fn);
    },
    sample: function (ms) {
      pushFrame(ms);
    },
    stats: { fps: 0, windows: 0, bad: 0, worst: { fps: 0, y: 0, sec: '' }, bySec: {}, under30: 0, under20: 0, recent: [], innerHeight: { now: 0, min: 0, max: 0, changes: 0 }, refreshes: 0, lite: { on: false, how: '', queued: '', offer: '', state: '', still: '', triggers: 0, tweens: 0, kept: 0 } },
  };
  window.MWPPerf = api;
  apply();

  // ---- wall shadows, decided by tier (Michael, 12 Nov 2026)
  // Folio wall tile shadow moved here from the Designer (it was on .folio-wall_tile, off at the tablet breakpoint).
  // On: high, and mid with a mouse. Off: low, mid on a touch device at ANY width (the iPad in landscape is 1024px wide), and
  // tablet width and below (the old width rule, kept as a backstop until the tier is trusted on real tablets).
  // Testimonial wall: its drop-shadow filter lives in the Home head code (off at 991px and below there); here it is also
  // switched off for low (when not in lite: lite brings it back, see the lite block) and mid-touch. The inner rows' blur is a different rule and is left alone.
  try {
    var sh = document.createElement('style');
    sh.setAttribute('data-mwp-perf-shadows', '');
    sh.textContent =
      '.folio-wall_tile{box-shadow:0 2px 10px 3px hsla(0,0%,0%,.46)}' +
      '@media(max-width:991px){.folio-wall_tile{box-shadow:none}}' +
      'html[data-perf="low"] .folio-wall_tile,html[data-perf="mid"][data-input="touch"] .folio-wall_tile{box-shadow:none}' +
      'html[data-perf="low"]:not([data-lite]) .testi-wall_half:first-child>.testi-wall_row:first-child,' +
      'html[data-perf="low"]:not([data-lite]) .testi-wall_half:last-child>.testi-wall_row:last-child,' +
      'html[data-perf="mid"][data-input="touch"] .testi-wall_half:first-child>.testi-wall_row:first-child,' +
      'html[data-perf="mid"][data-input="touch"] .testi-wall_half:last-child>.testi-wall_row:last-child{filter:none!important}';
    (document.head || doc).appendChild(sh);
  } catch (e) {}

  // ---- measured frame rate: only while loading and while scrolling (no idle rAF loop)
  var WINDOW = 45; // frames per reading
  var buf = [];
  var last = 0;
  var active = false;
  var activeUntil = 0;
  var badRun = 0;
  function median(a) {
    var s = a.slice().sort(function (x, y) {
      return x - y;
    });
    return s[Math.floor(s.length / 2)];
  }
  // which section is in the middle of the screen (its first class name), so a slow reading says where
  function secName() {
    try {
      var e = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
      var n = e && e.closest ? e.closest('section,footer,header') : null;
      return n ? String(n.className || n.tagName).split(' ')[0].slice(0, 14) : '-';
    } catch (x) {
      return '?';
    }
  }
  function pushFrame(ms) {
    if (!(ms > 0) || ms > 250) return; // a stall or a hidden tab is not a frame rate
    buf.push(ms);
    if (buf.length < WINDOW) return;
    var m = median(buf);
    buf = [];
    var fps = Math.round(1000 / m);
    var y = Math.round(window.scrollY || 0);
    var st = api.stats;
    st.fps = fps;
    st.windows++;
    if (fps < 30) st.under30++;
    if (fps < 20) st.under20++;
    var sec = secName();
    if (!st.worst.fps || fps < st.worst.fps) st.worst = { fps: fps, y: y, sec: sec };
    var b = st.bySec[sec] || (st.bySec[sec] = { n: 0, min: 999, slow: 0 });
    b.n++;
    if (fps < b.min) b.min = fps;
    if (fps < 30) b.slow++;
    st.recent.push(fps + '@' + y);
    if (st.recent.length > 6) st.recent.shift();
    // thresholds are on an uncapped page (v1 caps nothing): high needs ~40fps, mid needs ~25fps
    var limit = tier === 'high' ? 25 : tier === 'mid' ? 40 : Infinity;
    if (m > limit && !document.hidden) {
      badRun++;
      api.stats.bad = badRun;
      if (badRun >= 2) stepDown('measured ' + Math.round(1000 / m) + 'fps over two readings');
    } else {
      badRun = 0;
      api.stats.bad = 0;
    }
  }
  function frame(t) {
    if (last) pushFrame(t - last);
    last = t;
    if (Date.now() < activeUntil) window.requestAnimationFrame(frame);
    else {
      active = false;
      last = 0;
      buf = []; // never join readings across separate bursts
    }
  }
  function wake(ms) {
    activeUntil = Math.max(activeUntil, Date.now() + ms);
    if (!active) {
      active = true;
      last = 0;
      window.requestAnimationFrame(frame);
    }
  }
  window.addEventListener('scroll', function () { wake(500); }, { passive: true });
  window.addEventListener('touchmove', function () { wake(500); }, { passive: true });
  window.addEventListener('load', function () {
    setTimeout(function () { wake(3000); }, 1500); // let the page settle first
  });

  // ---- the graphics chip, read once when idle; a software renderer steps the tier down
  function readGpu() {
    try {
      var c = document.createElement('canvas');
      var gc = realGetContext || c.getContext;
      var gl = gc.call(c, 'webgl') || gc.call(c, 'experimental-webgl');
      if (!gl) {
        signals.gpu = 'no WebGL';
        return;
      }
      var ext = gl.getExtension('WEBGL_debug_renderer_info');
      signals.gpu = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : 'hidden';
      var lose = gl.getExtension('WEBGL_lose_context');
      if (lose) lose.loseContext();
      if (/swiftshader|llvmpipe|software|basic render/i.test(signals.gpu)) stepDown('software graphics (' + signals.gpu + ')');
    } catch (e) {
      signals.gpu = 'error';
    }
  }
  window.addEventListener('load', function () {
    setTimeout(readGpu, 2000);
  });

  // ---- lite decided mid-session: remembered for the NEXT load, never swapped under the visitor
  // (Michael, 12 Nov 2026: a fade, reload and jump was "awful" on weak devices, a second full load on the slowest ones.)
  // The page the visitor is on is left alone. localStorage remembers lite for 30 days, so the next load starts in lite from the
  // first paint; the session flag covers a browser that blocks localStorage. Once per session.
  function liteSwitch(why) {
    if ((api.stats.lite && api.stats.lite.on) || store('mwp-lite-tries') || fullChosen) return;
    store('mwp-lite-tries', '1');
    store('mwp-lite-now', '1');
    lstore(String(Date.now()));
    api.stats.lite.queued = why;
    offerLite();
  }

  // ---- the two pills (Michael, 12 Nov 2026)
  // 1. A device found slow is asked, once per session and only when scrolling has stopped, whether it wants the lighter site now.
  //    "Switch" reloads into lite; "Not now" closes it (lite still starts from the first paint next visit).
  // 2. In lite a small "View the full version" pill stays on screen. It records the visitor's choice (30 days), which beats every automatic decision.
  function whenBody(fn) {
    if (document.body) fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  function pillStyle() {
    if (document.getElementById('mwp-pill-style')) return;
    var st = document.createElement('style');
    st.id = 'mwp-pill-style';
    st.textContent =
      '.mwp-pill{position:fixed;z-index:99990;font:14px/1.35 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#fff;background:#243e46;border:1px solid rgba(255,255,255,.22);border-radius:14px;box-sizing:border-box}' +
      '.mwp-pill button{font:inherit;font-weight:600;border-radius:999px;cursor:pointer;padding:9px 16px;min-height:40px;border:1px solid transparent}' +
      '.mwp-pill button:focus-visible{outline:2px solid #fff;outline-offset:2px}' +
      '.mwp-offer{left:12px;right:12px;bottom:calc(14px + env(safe-area-inset-bottom,0px));max-width:440px;margin:0 auto;padding:14px 16px;text-align:left}' +
      '.mwp-offer p{margin:0 0 12px}' +
      '.mwp-offer div{display:flex;gap:10px;flex-wrap:wrap}' +
      '.mwp-offer .mwp-yes{background:#ef8965;color:#1b2f35}' +
      '.mwp-offer .mwp-no{background:transparent;color:#fff;border-color:rgba(255,255,255,.4)}' +
      '.mwp-full{right:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));padding:0;border-radius:999px;background:transparent;border:0}' +
      '.mwp-full button{background:#243e46;color:#fff;border-color:rgba(255,255,255,.3);font-size:13px;min-height:36px;padding:7px 14px}';
    (document.head || doc).appendChild(st);
  }
  // the page address without ?perf=..., so a reload is not overruled by a forced tier
  function leave(goFull) {
    try {
      if (goFull) {
        lfull(String(Date.now()));
        lstore(null);
        store('mwp-lite-now', null);
        store('mwp-lite-tries', '1');
      } else {
        lfull(null);
        lstore(String(Date.now()));
        store('mwp-lite-now', '1');
        store('mwp-lite-tries', '1');
      }
      store(KEY, null);
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
      var u = new URL(window.location.href);
      u.searchParams.delete('perf');
      if (u.toString() === window.location.href) window.location.reload();
      else window.location.replace(u.toString());
    } catch (e) {
      window.location.reload();
    }
  }
  function showOffer() {
    if (store('mwp-lite-offer')) return;
    store('mwp-lite-offer', 'shown');
    api.stats.lite.offer = 'shown';
    pillStyle();
    var box = document.createElement('div');
    box.className = 'mwp-pill mwp-offer';
    box.setAttribute('role', 'status');
    var msg = document.createElement('p');
    msg.textContent = 'Your machine seems to be struggling. Want a lighter, faster version of the site?';
    var row = document.createElement('div');
    var yes = document.createElement('button');
    yes.type = 'button';
    yes.className = 'mwp-yes';
    yes.textContent = 'Switch';
    yes.addEventListener('click', function () {
      api.stats.lite.offer = 'switched';
      leave(false);
    });
    var no = document.createElement('button');
    no.type = 'button';
    no.className = 'mwp-no';
    no.textContent = 'Not now';
    no.addEventListener('click', function () {
      api.stats.lite.offer = 'not now';
      if (box.parentNode) box.parentNode.removeChild(box);
    });
    row.appendChild(yes);
    row.appendChild(no);
    box.appendChild(msg);
    box.appendChild(row);
    document.body.appendChild(box);
  }
  // wait until scrolling has stopped (and the tab is showing) before the offer appears
  function offerLite() {
    if (store('mwp-lite-offer') || fullChosen) return;
    var t = 0;
    var arm = function () {
      clearTimeout(t);
      t = setTimeout(function () {
        if (document.hidden || !document.body) return arm();
        window.removeEventListener('scroll', arm);
        window.removeEventListener('touchmove', arm);
        showOffer();
      }, 900);
    };
    window.addEventListener('scroll', arm, { passive: true });
    window.addEventListener('touchmove', arm, { passive: true });
    arm();
  }
  function addFullPill() {
    pillStyle();
    var wrap = document.createElement('div');
    wrap.className = 'mwp-pill mwp-full';
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = 'View the full version';
    b.addEventListener('click', function () { leave(true); });
    wrap.appendChild(b);
    document.body.appendChild(wrap);
  }

  // ---- first-paint check: a device that cannot run the page at load is switched before anyone scrolls
  // After load, two readings of 30 frames each, both slower than 24fps, with the page still at the top (hero + terminal on screen).
  // The older iPad reads 17 to 19fps here; the iPhone 15 and the newer iPad read 59.
  function loadCheck() {
    if ((api.stats.lite && api.stats.lite.on) || locked || store('mwp-lite-tries') || kill.length) return;
    var frames = [];
    var prev = 0;
    var slowRuns = 0;
    var started = Date.now();
    function f(t) {
      if (window.scrollY > 150 || document.hidden || Date.now() - started > 9000) return; // the visitor moved on: the normal watcher takes over
      if (prev) {
        var d = t - prev;
        if (d > 0 && d < 250) frames.push(d);
      }
      prev = t;
      if (frames.length >= 30) {
        var m = median(frames);
        frames = [];
        if (m > 41.7) slowRuns++;
        else slowRuns = 0;
        if (slowRuns >= 2) {
          set('low', 'slow at load: ' + Math.round(1000 / m) + 'fps with the page at the top');
          liteSwitch('slow at load');
          return;
        }
      }
      window.requestAnimationFrame(f);
    }
    window.requestAnimationFrame(f);
  }
  window.addEventListener('load', function () { setTimeout(loadCheck, 2000); });

  // ---- lite mode (step 1: only when asked for with ?perf=low in the address; nothing decides it automatically yet)
  // Turns the scroll-driven GSAP animation off before the first scroll: all ScrollTriggers are killed and reverted (and the tweens they drive with them).
  // The page is then a plain static layout; <html data-lite> lets a stylesheet tidy the sections that need it (later steps).
  var lite = api.stats.lite;
  var liteHow = query('perf') === 'low' ? 'forced by ?perf=low' : liteRemembered ? 'remembered' : liteThisSession ? 'switched this session' : '';
  if (liteHow) {
    lite.on = true;
    lite.how = liteHow;
    lite.state = 'waiting for GSAP';
    document.documentElement.setAttribute('data-lite', '1');
    // Still instead of the terminal: no WebGL, and the picture is the wrapper's background from first paint.
    // The file has a little transparency (alpha 226-255), so the wrapper carries the teal underneath it.
    lite.still = 'requested';
    blockWebgl();
    try {
      var stillUrl = 'https://cdn.jsdelivr.net/gh/madewithpixels/mwp-webflow@cce0a08/assets/ft-still.webp';
      var stillStyle = document.createElement('style');
      stillStyle.textContent =
        'html[data-lite] .ft-wrapper{opacity:1!important;visibility:visible!important;background:#243e46 url(' + stillUrl + ') center/cover no-repeat!important}' +
        'html[data-lite] .ft-wrapper canvas{display:none!important}' +
        // the terminal's own static fallback layer paints Webflow's teal (inline background-color) over the wrapper; let the still show through
        'html[data-lite] .ft-wrapper>[class*="faulty-terminal"]{background:transparent!important}';
      (document.head || document.documentElement).appendChild(stillStyle);
      var stillImg = new Image();
      stillImg.onload = function () { lite.still = 'loaded'; };
      stillImg.onerror = function () { lite.still = 'FAILED to load'; };
      stillImg.src = stillUrl;
    } catch (e) {
      lite.still = 'error: ' + e.message;
    }
    // Testimonial bubble bands in lite (Michael, 12 Nov 2026): the rows are static here, so the drop shadow and the blur are cheap and come back.
    // Front rows get the shadow at every width (the Home head code removes it at 991px and below). The animation that normally drives the inner
    // rows' blur, tint and the back rows is killed in lite, so its variables are set to where the scroll animation ends (parted: 5px, 50%, back rows shown, drift -38%).
    try {
      var tb = document.createElement('style');
      tb.setAttribute('data-mwp-lite-testi', '');
      tb.textContent =
        'html[data-lite] .testi-wall_half:first-child>.testi-wall_row:first-child,html[data-lite] .testi-wall_half:last-child>.testi-wall_row:last-child{filter:drop-shadow(0 .6svh 1.2svh rgba(0,0,0,.28))!important}' +
        'html[data-lite] .testi-wall_half>.testi-wall_row,html[data-lite] .testi-wall_backrow{--_animation---testi-inner-blur:5px!important;--_animation---testi-inner-mix:50%!important;--_animation---testi-back-show:1!important;--_animation---testi-back-drift:-38%!important}';
      (document.head || document.documentElement).appendChild(tb);
    } catch (e) {}
    // the lite stylesheet (static layouts), pinned to its commit with SRI
    try {
      var lk = document.createElement('link');
      lk.rel = 'stylesheet';
      lk.href = 'https://cdn.jsdelivr.net/gh/madewithpixels/mwp-webflow@814f21d/dist/perf-low.min.css';
      lk.integrity = 'sha384-9DgJ4SVH+avUppr2L2a+iHiJ4WqNAX41cKJdrRdwy2kfVXUENMWTdbeSlQXvE2+e';
      lk.crossOrigin = 'anonymous';
      (document.head || document.documentElement).appendChild(lk);
    } catch (e) {}
    // the hero logo shows through the sticky hero once nothing covers it; hide it when the Folio wall reaches the top
    var pastHero = false;
    var heroFade = 0;
    var checkPast = function () {
      var f = document.querySelector('.folio-wall');
      if (!f) return;
      var top = f.getBoundingClientRect().top;
      var past = top <= 0;
      // Hero copy (logo block with its strapline, the h1, the estimate button) fades out as the Folio wall comes up over it: the wall is
      // see-through between the tiles, so the copy would otherwise show through. Starts as the wall's top edge enters the screen and is
      // gone by the time it reaches 40% of the way up. One opacity on the hero container, written only while the wall is on the move.
      var hc = document.querySelector('.hero-container');
      if (hc) {
        var vh = window.innerHeight || 1;
        var fade = Math.max(0, Math.min(1, (vh - top) / (vh * 0.6)));
        if (fade !== heroFade) {
          heroFade = fade;
          hc.style.opacity = fade ? String(1 - fade) : '';
        }
      }
      if (past !== pastHero) {
        pastHero = past;
        if (past) document.documentElement.setAttribute('data-lite-past', '1');
        else document.documentElement.removeAttribute('data-lite-past');
      }
    };
    var pastQueued = false;
    window.addEventListener('scroll', function () {
      if (pastQueued) return;
      pastQueued = true;
      requestAnimationFrame(function () { pastQueued = false; checkPast(); });
    }, { passive: true });
    // Testimonials: the heading and quotes move into a plain list that scrolls through the gap between the pinned bubble bands
    var liteTesti = function () {
      try {
        var sec = document.querySelector('.testi-wall');
        if (!sec || sec.getAttribute('data-lite-done')) return;
        var sticky = sec.querySelector('.testi-wall_sticky');
        var quotes = sticky && sticky.querySelector('.testi-wall_quotes');
        if (!quotes || !quotes.children.length) return;
        var list = document.createElement('div');
        list.className = 'lite-testi-list';
        while (quotes.firstChild) list.appendChild(quotes.firstChild);
        quotes.parentNode.removeChild(quotes);
        sticky.parentNode.insertBefore(list, sticky.nextSibling);
        sec.setAttribute('data-lite-done', '1');
      } catch (e) {
        lite.state = 'testi error: ' + e.message;
      }
    };
    // pause the Folio wall's drift while it is off screen
    var liteFolioWatch = function () {
      try {
        var fw = document.querySelector('.folio-wall');
        if (!fw || !window.IntersectionObserver) return;
        new IntersectionObserver(function (entries) {
          var on = entries[entries.length - 1].isIntersecting;
          if (on) document.documentElement.removeAttribute('data-lite-folio-off');
          else document.documentElement.setAttribute('data-lite-folio-off', '1');
        }).observe(fw);
      } catch (e) {}
    };
    var liteSetup = function () { checkPast(); liteTesti(); liteFolioWatch(); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', liteSetup);
    else liteSetup();
    var liteTimer = 0;
    var liteStable = 0;
    var liteSeen = -1;
    var liteKill = function () {
      var ST = window.ScrollTrigger;
      var G = window.gsap;
      if (!ST || !G) return false;
      try {
        // Only scroll-driven animation is switched off: each ScrollTrigger is killed with revert, which also kills the tween or timeline it drives.
        // Time-based animation (the hero intro, menu, hovers) is left alone.
        var all = ST.getAll();
        lite.triggers += all.length;
        var before = G.globalTimeline ? G.globalTimeline.getChildren(true, true, true).length : 0;
        for (var i = all.length - 1; i >= 0; i--) all[i].kill(true);
        var after = G.globalTimeline ? G.globalTimeline.getChildren(true, true, true).length : 0;
        lite.tweens += Math.max(0, before - after);
        lite.kept = after;
      } catch (e) {
        lite.state = 'error: ' + e.message;
      }
      return true;
    };
    // IX3 builds its triggers a little after load; wait until the count has stopped changing, then kill, and kill again after a refresh
    (function poll(n) {
      var ST = window.ScrollTrigger;
      var count = ST && ST.getAll ? ST.getAll().length : -1;
      if (count > 0 && count === liteSeen) liteStable++;
      else liteStable = 0;
      liteSeen = count;
      if (liteStable >= 3 || n >= 60) {
        if (liteKill()) {
          lite.state = 'killed at ' + Math.round(window.scrollY) + 'px';
          if (ST && ST.addEventListener) ST.addEventListener('refresh', function () {
            if (ST.getAll().length) {
              liteKill();
              lite.state = 'killed again after a refresh';
            }
          });
        } else lite.state = 'GSAP not found';
        return;
      }
      setTimeout(function () { poll(n + 1); }, 150);
    })(0);
  }

  if (api.stats.lite.on) whenBody(addFullPill);

  // ---- numbers the overlay shows (and that the later stability steps need)
  var h = api.stats.innerHeight;
  h.now = h.min = h.max = window.innerHeight;
  window.addEventListener('resize', function () {
    var v = window.innerHeight;
    if (v !== h.now) h.changes++;
    h.now = v;
    h.min = Math.min(h.min, v);
    h.max = Math.max(h.max, v);
  });
  (function hook(n) {
    var ST = window.ScrollTrigger;
    if (ST && ST.addEventListener) {
      ST.addEventListener('refresh', function () { api.stats.refreshes++; });
      return;
    }
    if (n < 100) setTimeout(function () { hook(n + 1); }, 100);
  })(0);

  // ---- ?perf-debug overlay
  var dbg = query('perf-debug');
  if (dbg === '0') store(DBG, null);
  else if (dbg !== null) store(DBG, '1');
  if (store(DBG) === '1') {
    document.addEventListener('DOMContentLoaded', function () {
      var el = document.createElement('div');
      el.setAttribute('aria-hidden', 'true');
      el.style.cssText =
        'position:fixed;left:6px;bottom:6px;z-index:2147483000;pointer-events:none;max-width:92vw;padding:6px 8px;border-radius:6px;' +
        'background:rgba(0,0,0,.78);color:#9fe8a8;font:11px/1.35 ui-monospace,Menlo,monospace;white-space:pre-wrap';
      document.body.appendChild(el);
      function draw() {
        var s = api.signals;
        var st = api.stats;
        el.textContent =
          'perf ' + api.tier + ' (' + api.fps + 'fps cap)  input ' + api.input + (kill.length ? '  KILL ' + kill.join(',') : '') + '\n' +
          api.reason + '\n' +
          'cores ' + (s.cores || '?') + '  mem ' + (s.memory ? s.memory + 'GB' : '?') + '  dpr ' + s.dpr + '  touch ' + s.touchPoints + (s.saveData ? '  saveData' : '') + (s.reducedMotion ? '  reduced-motion' : '') + '\n' +
          'gpu ' + (s.gpu || '(reading)') + '\n' +
          'measured ' + (st.fps || '-') + 'fps  readings ' + st.windows + '  bad run ' + st.bad + '\n' +
          'worst ' + (st.worst.fps || '-') + 'fps at scrollY ' + st.worst.y + ' (' + st.worst.sec + ')  <30: ' + st.under30 + '  <20: ' + st.under20 + '\n' +
          'last ' + (st.recent.join('  ') || '-') + '\n' +
          'sections (worst fps, slow/readings): ' + Object.keys(st.bySec).sort(function (a, c) { return st.bySec[a].min - st.bySec[c].min; }).slice(0, 5).map(function (k) { var v = st.bySec[k]; return k + ' ' + v.min + ' ' + v.slow + '/' + v.n; }).join(' | ') + '\n' +
          'innerHeight ' + st.innerHeight.now + ' (min ' + st.innerHeight.min + ', max ' + st.innerHeight.max + ', changes ' + st.innerHeight.changes + ')\n' +
          (lite.queued ? 'LITE queued for next visit: ' + lite.queued + '  offer: ' + (lite.offer || 'waiting for a pause') + '\n' : '') + (fullChosen ? 'FULL VERSION chosen by the visitor\n' : '') + (lite.on ? 'LITE (' + lite.how + ') ' + lite.state + '  still ' + lite.still + '  triggers ' + lite.triggers + '  tweens killed ' + lite.tweens + '  kept ' + lite.kept + '\n' : '') +
          'ScrollTrigger refreshes ' + st.refreshes + '  scrollY ' + Math.round(window.scrollY);
      }
      draw();
      setInterval(draw, 300);
    });
  }
})();
