/*! anchor-probe v1 — madewithpixels
 * Read-only in-page recorder + tester for anchor landing positions.
 * Nothing connects from outside, so it cannot disturb the page it measures.
 *
 * Load: paste into DevTools console (or add as a <script>). Re-running just shows the panel.
 * Keys: Alt+R = record the current spot for the chosen anchor, Alt+P = show/hide the panel.
 *
 * Workflow
 *   1. Pick the anchor in the dropdown (it follows location.hash after a menu jump).
 *   2. Scroll to the exact spot you want it to land on.
 *   3. Press Record. Repeat for each anchor, at each window width you care about.
 *   4. Test runs the site's own nav link from the top and from the bottom of the page,
 *      then reports how far each landing is from the recorded spot (and whether it drifts).
 *   5. Copy puts the JSON (with ready-to-paste attribute values) on the clipboard.
 */
(() => {
  'use strict';
  if (window.__anchorProbe) { window.__anchorProbe.show(); return; }

  const STORE = 'mwp-anchor-probe-v1';
  // Webflow breakpoints (min-width for the up-breakpoints, max-width for the down ones)
  const BPS = [[1920, 'xxl'], [1440, 'xl'], [1280, 'large'], [992, 'desktop'], [768, 'medium'], [480, 'small'], [0, 'tiny']];
  const bp = () => BPS.find(b => innerWidth >= b[0])[1];
  const r1 = n => Math.round(n * 10) / 10;
  const r3 = n => Math.round(n * 1000) / 1000;
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const hashId = a => {
    try {
      const u = new URL(a.href, location.href);
      return u.pathname === location.pathname && u.hash.length > 1 ? decodeURIComponent(u.hash.slice(1)) : null;
    } catch (e) { return null; }
  };

  const host = document.createElement('div');
  host.id = 'anchor-probe-host';

  const targets = () => {
    const ids = new Set();
    document.querySelectorAll('a[href*="#"]').forEach(a => { const id = hashId(a); if (id) ids.add(id); });
    return [...ids].filter(id => document.getElementById(id));
  };
  const linkFor = id => [...document.querySelectorAll('a[href*="#"]')].find(a => hashId(a) === id);

  // The nav jump measures targets inside a .pin-spacer from the spacer, so do the same here.
  const spacerOf = el => el.closest('.pin-spacer');
  const baseOf = el => (spacerOf(el) || el).getBoundingClientRect().top + scrollY;

  const measure = el => {
    const y = scrollY, vh = innerHeight, sp = spacerOf(el), base = baseOf(el);
    const m = {
      scrollY: Math.round(y), vw: innerWidth, vh, bp: bp(),
      baseDocTop: Math.round(base), targetTop: r1(el.getBoundingClientRect().top),
      offsetScreens: r3((y - base) / vh), offsetPx: Math.round(y - base),
    };
    if (sp && sp.firstElementChild) {
      const lock = sp.offsetHeight - sp.firstElementChild.offsetHeight;
      m.pin = { lockPx: Math.round(lock), progress: lock > 0 ? r3(Math.min(1, Math.max(0, (y - base) / lock))) : null };
    }
    m.sticky = [...el.querySelectorAll('*')]
      .filter(n => getComputedStyle(n).position === 'sticky').slice(0, 4)
      .map(n => ({ cls: String(n.className).split(' ').slice(0, 2).join('.'), top: r1(n.getBoundingClientRect().top) }));
    // what is painted in the top 10px of the viewport (catches slate showing above a separator)
    m.topEdge = [0, 3, 6, 9].map(py => {
      // first element in the stack that actually paints a background (skips the transparent nav header etc.)
      const n = document.elementsFromPoint(innerWidth * 0.25, py).find(n => n !== host && getComputedStyle(n).backgroundColor !== 'rgba(0, 0, 0, 0)');
      return n ? n.tagName.toLowerCase() + '.' + String(n.className).split(' ')[0] + ' ' + getComputedStyle(n).backgroundColor : '-';
    });
    return m;
  };

  // ---- storage --------------------------------------------------------------
  let store = {};
  try { store = JSON.parse(localStorage.getItem(STORE) || '{}'); } catch (e) { /* ignore */ }
  const save = () => { try { localStorage.setItem(STORE, JSON.stringify(store)); } catch (e) { /* ignore */ } };
  const keyOf = (id, b) => location.pathname + '#' + id + '@' + (b || bp());

  // ---- layout-shift watch ---------------------------------------------------
  const events = [];
  const shifted = {};   // id -> total px the target's base has moved since the probe started
  const baseline = {};
  const note = msg => { events.unshift((performance.now() / 1000).toFixed(1) + 's ' + msg); events.length = Math.min(events.length, 6); paint(); };
  addEventListener('resize', () => note('resize ' + innerWidth + 'x' + innerHeight));
  const ST = window.ScrollTrigger;
  if (ST && ST.addEventListener) {
    ST.addEventListener('refreshInit', () => note('ScrollTrigger refreshInit'));
    ST.addEventListener('refresh', () => note('ScrollTrigger refresh'));
  }
  const watch = () => {
    targets().forEach(id => {
      const b = Math.round(baseOf(document.getElementById(id)));
      if (baseline[id] === undefined) { baseline[id] = b; return; }
      const d = b - baseline[id];
      if (Math.abs(d) > 2) { shifted[id] = (shifted[id] || 0) + d; baseline[id] = b; note('#' + id + ' moved ' + (d > 0 ? '+' : '') + d + 'px'); }
    });
  };

  // ---- actions --------------------------------------------------------------
  const record = () => {
    const id = sel.value, el = document.getElementById(id);
    if (!el) return;
    const e = measure(el);
    e.id = id; e.path = location.pathname; e.shiftedBeforeRecord = shifted[id] || 0; e.at = new Date().toISOString();
    store[keyOf(id)] = e; save(); status('recorded #' + id + ' @' + e.bp + '  ' + e.offsetScreens + ' screens'); paint();
  };

  const jump = y => window.lenis ? window.lenis.scrollTo(y, { immediate: true, force: true }) : scrollTo({ top: y, behavior: 'instant' });

  const test = async key => {
    const e = store[key], el = e && document.getElementById(e.id), link = e && linkFor(e.id);
    if (!e) return;
    if (!el || !link) { e.test = { error: 'no target or no nav link on this page' }; return; }
    if (bp() !== e.bp) { e.test = { error: 'window is ' + bp() + ', recorded at ' + e.bp }; return; }
    const runs = [];
    for (const from of ['top', 'bottom']) {
      jump(from === 'top' ? 0 : document.documentElement.scrollHeight);
      await wait(1500);
      const t0 = performance.now(), rel = [];
      link.click();
      for (const t of [150, 600, 1500, 3000]) {
        await wait(Math.max(0, t - (performance.now() - t0)));
        rel.push(scrollY - baseOf(el));
      }
      const vh = innerHeight, last = rel[rel.length - 1];
      runs.push({
        from, offsetScreens: r3(last / vh),
        diffPx: Math.round(last - e.offsetScreens * vh),     // + = landed further in than recorded
        driftPx: Math.round(Math.max(...rel) - Math.min(...rel)),
        topEdge: measure(el).topEdge,
      });
    }
    e.test = { pass: runs.every(r => Math.abs(r.diffPx) <= 3 && r.driftPx <= 2), runs };
    save();
  };

  const suggestion = e => e.pin && e.pin.progress != null
    ? '#' + e.id + ' [' + e.bp + ']  data-nav-progress="' + e.pin.progress + '"   (offset from spacer: ' + e.offsetScreens + ')'
    : '#' + e.id + ' [' + e.bp + ']  data-nav-offset="' + e.offsetScreens + '"';

  const exportJSON = () => {
    const rows = Object.values(store).filter(e => e.path === location.pathname);
    const out = JSON.stringify({ page: location.pathname, when: new Date().toISOString(), entries: rows, suggestions: rows.map(suggestion) }, null, 1);
    console.log(out);
    (navigator.clipboard ? navigator.clipboard.writeText(out) : Promise.reject()).then(
      () => status('copied ' + rows.length + ' entries'), () => status('clipboard blocked: JSON is in the console'));
  };

  // ---- panel ----------------------------------------------------------------
  const root = host.attachShadow({ mode: 'open' });
  root.innerHTML = `
  <style>
    .p{position:fixed;left:12px;bottom:12px;z-index:2147483647;width:312px;max-height:70vh;overflow:auto;font:11px/1.45 ui-monospace,Menlo,monospace;
       color:#eee;background:rgba(14,14,14,.93);border:1px solid #666;border-radius:8px;padding:8px;box-sizing:border-box}
    .p *{box-sizing:border-box}
    h4{margin:0 0 6px;font:600 11px ui-monospace,Menlo,monospace;color:#9ad}
    select,button{font:inherit;color:#eee;background:#2a2a2a;border:1px solid #666;border-radius:4px;padding:3px 6px;cursor:pointer}
    select{width:100%;margin-bottom:6px}
    .row{display:flex;gap:4px;margin:6px 0}.row button{flex:1}
    .live{color:#fc6;white-space:pre}.ev{color:#aaa;white-space:pre-wrap}.ok{color:#7d7}.bad{color:#f77}
    .ent{border-top:1px solid #444;padding-top:4px;margin-top:4px;white-space:pre-wrap}
    #st{color:#9ad;min-height:1.4em}
  </style>
  <div class="p"><h4>anchor-probe · Alt+R record · Alt+P hide</h4>
    <select id="sel"></select><div class="live" id="live"></div>
    <div class="row"><button id="rec">Record</button><button id="tst">Test all</button><button id="cpy">Copy</button><button id="clr">Clear</button></div>
    <div id="st"></div><div class="ev" id="ev"></div><div id="ents"></div></div>`;
  const $ = id => root.getElementById(id);
  const sel = $('sel');
  let busy = false;
  const status = s => { $('st').textContent = s; };

  const fillSelect = () => {
    const ids = targets(), want = decodeURIComponent(location.hash.slice(1));
    if (ids.join() !== [...sel.options].map(o => o.value).join()) {
      const cur = sel.value;
      sel.innerHTML = '';
      ids.forEach(id => sel.add(new Option('#' + id, id)));
      sel.value = ids.includes(cur) ? cur : (ids.includes(want) ? want : ids[0]);
    }
  };
  addEventListener('hashchange', () => { const w = decodeURIComponent(location.hash.slice(1)); if ([...sel.options].some(o => o.value === w)) sel.value = w; });

  function paint() {
    fillSelect();
    const el = document.getElementById(sel.value);
    if (el) {
      const m = measure(el), e = store[keyOf(sel.value)];
      $('live').textContent = bp() + ' ' + innerWidth + 'x' + innerHeight + '  y=' + m.scrollY + '\n' +
        'offset ' + m.offsetScreens + ' screens (' + m.offsetPx + 'px)' + (m.pin ? '\nprogress ' + m.pin.progress + ' of ' + m.pin.lockPx + 'px lock' : '') +
        (e ? '\nrecorded ' + e.offsetScreens + '  (now ' + (m.offsetPx - Math.round(e.offsetScreens * innerHeight) >= 0 ? '+' : '') + (m.offsetPx - Math.round(e.offsetScreens * innerHeight)) + 'px)' : '') +
        (shifted[sel.value] ? '\nlayout moved ' + shifted[sel.value] + 'px since probe start' : '');
    }
    $('ev').textContent = events.join('\n');
    const rows = Object.entries(store).filter(([, e]) => e.path === location.pathname);
    const box = $('ents'); box.textContent = '';
    rows.forEach(([k, e]) => {
      const d = document.createElement('div'); d.className = 'ent';
      let t = '#' + e.id + ' @' + e.bp + '  ' + e.offsetScreens + (e.pin ? '  p' + e.pin.progress : '') + (e.shiftedBeforeRecord ? '  ⚠ layout had moved ' + e.shiftedBeforeRecord + 'px' : '');
      if (e.test) {
        if (e.test.error) t += '\n  ' + e.test.error;
        else t += '\n  ' + (e.test.pass ? '✓ ' : '✗ ') + e.test.runs.map(r => r.from + ' ' + (r.diffPx > 0 ? '+' : '') + r.diffPx + 'px' + (r.driftPx ? ' drift ' + r.driftPx : '')).join('  ');
        d.className += e.test.pass ? ' ok' : (e.test.error ? '' : ' bad');
      }
      d.textContent = t; box.appendChild(d);
    });
  }

  $('rec').onclick = record;
  $('cpy').onclick = exportJSON;
  $('clr').onclick = () => { store = {}; save(); paint(); status('cleared'); };
  $('tst').onclick = async () => {
    if (busy) return; busy = true;
    const keys = Object.keys(store).filter(k => store[k].path === location.pathname && store[k].bp === bp());
    for (const k of keys) { status('testing #' + store[k].id + ' …'); await test(k); paint(); }
    console.table(keys.map(k => ({ anchor: '#' + store[k].id, bp: store[k].bp, pass: store[k].test && store[k].test.pass, top: store[k].test && store[k].test.runs && store[k].test.runs[0].diffPx, bottom: store[k].test && store[k].test.runs && store[k].test.runs[1].diffPx })));
    status(keys.length ? 'tested ' + keys.length + ' (see console.table)' : 'nothing recorded at ' + bp()); busy = false;
  };
  addEventListener('keydown', e => {
    if (!e.altKey) return;
    if (e.code === 'KeyR') { e.preventDefault(); record(); }
    if (e.code === 'KeyP') { e.preventDefault(); host.style.display = host.style.display === 'none' ? '' : 'none'; }
  });

  let raf = 0;
  addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; paint(); }); }, { passive: true });
  setInterval(() => { watch(); paint(); }, 400);

  document.documentElement.appendChild(host);
  watch(); paint();
  window.__anchorProbe = { show: () => { host.style.display = ''; }, record, test, store: () => store, export: exportJSON, events };
  console.log('[anchor-probe] ready. Alt+R records, Alt+P shows/hides.');
})();
