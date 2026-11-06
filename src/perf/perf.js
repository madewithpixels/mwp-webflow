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
    stats: { fps: 0, windows: 0, bad: 0, innerHeight: { now: 0, min: 0, max: 0, changes: 0 }, refreshes: 0 },
  };
  window.MWPPerf = api;
  apply();

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
  function pushFrame(ms) {
    if (!(ms > 0) || ms > 250) return; // a stall or a hidden tab is not a frame rate
    buf.push(ms);
    if (buf.length < WINDOW) return;
    var m = median(buf);
    buf = [];
    api.stats.fps = Math.round(1000 / m);
    api.stats.windows++;
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
      var gl = c.getContext('webgl') || c.getContext('experimental-webgl');
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
          'perf ' + api.tier + ' (' + api.fps + 'fps cap)  input ' + api.input + '\n' +
          api.reason + '\n' +
          'cores ' + (s.cores || '?') + '  mem ' + (s.memory ? s.memory + 'GB' : '?') + '  dpr ' + s.dpr + '  touch ' + s.touchPoints + (s.saveData ? '  saveData' : '') + (s.reducedMotion ? '  reduced-motion' : '') + '\n' +
          'gpu ' + (s.gpu || '(reading)') + '\n' +
          'measured ' + (st.fps || '-') + 'fps  readings ' + st.windows + '  bad run ' + st.bad + '\n' +
          'innerHeight ' + st.innerHeight.now + ' (min ' + st.innerHeight.min + ', max ' + st.innerHeight.max + ', changes ' + st.innerHeight.changes + ')\n' +
          'ScrollTrigger refreshes ' + st.refreshes + '  scrollY ' + Math.round(window.scrollY);
      }
      draw();
      setInterval(draw, 300);
    });
  }
})();
