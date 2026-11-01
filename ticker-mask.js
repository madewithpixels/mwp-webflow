/* Written by Codex — 1 November 2026 — R-035.
 * Native Webflow GSAP drives the promise/sweep/mask phases; an SVG clip follows the H2.
 * A shared sticky stage holds the promise and ticker without a vertical ticker entrance.
 * Unlike a PNG mask, the letter shape can move without encoding a bitmap per frame.
 */
(function () {
  'use strict';

  function init() {
    const panel = document.querySelector('.ticker__sticky');
    const source = panel && panel.querySelector('.ticker__mask');
    const heading = source && source.querySelector('.type__mask');
    if (!heading || panel.querySelector('[data-ticker-mask-content]')) return;
    if (!CSS.supports('clip-path', 'url("#mwp-ticker-letter-window")')) return;
    const rows = Array.from(panel.children).filter(el => el.matches('.ticker__row'));
    if (!rows.length) return;
    const sequence = panel.closest('[data-mwp-sequence]');
    const wipePhase = sequence && sequence.querySelector('[data-sequence-phase="wipe"]');
    const maskPhase = sequence && sequence.querySelector('[data-sequence-phase="mask"]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (sequence && wipePhase && maskPhase) sequence.setAttribute('data-mwp-sequence-ready', '');
    let readDistance = 0;
    let wipeDistance = 0;
    let textDistance = 0;
    let lastSequenceHeight = 0;

    function measureSequence(height) {
      if (!sequence || !wipePhase || !maskPhase) return;
      readDistance = height * 1.15;
      wipeDistance = panel.clientWidth * 1.1;
      // One real heading, measured after fonts and responsive sizing settle.
      // Its rendered width is the mask phase's scroll distance; it is not repeated.
      textDistance = heading.getBoundingClientRect().width;
      const total = height + readDistance + wipeDistance + textDistance;
      wipePhase.style.top = readDistance + 'px';
      wipePhase.style.height = wipeDistance + 'px';
      maskPhase.style.top = (readDistance + wipeDistance) + 'px';
      maskPhase.style.height = textDistance + 'px';
      sequence.style.height = total + 'px';
      sequence.setAttribute('data-sequence-text-distance', textDistance.toFixed(2));
      if (Math.abs(total - lastSequenceHeight) > 1) {
        lastSequenceHeight = total;
        // IX3 keeps its GSAP instance private. A real resize event requests its
        // normal re-measure after this measured stage changes the page length.
        requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
      }
    }

    // This inline marker follows the real HTML baseline, including GSAP's y move.
    const baseline = document.createElement('span');
    baseline.setAttribute('aria-hidden', 'true');
    baseline.style.cssText = 'display:inline-block;width:0;height:0;padding:0;margin:0;vertical-align:baseline;';
    heading.appendChild(baseline);

    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.style.cssText = 'position:absolute;left:0;top:0;pointer-events:none;';
    const defs = document.createElementNS(ns, 'defs');
    const clip = document.createElementNS(ns, 'clipPath');
    clip.id = 'mwp-ticker-letter-window';
    clip.setAttribute('clipPathUnits', 'userSpaceOnUse');
    const letters = document.createElementNS(ns, 'text');
    letters.setAttribute('xml:space', 'preserve');
    clip.appendChild(letters);
    defs.appendChild(clip);
    svg.appendChild(defs);
    panel.insertBefore(svg, source);

    const backing = document.createElement('div');
    backing.setAttribute('data-ticker-mask-backing', '');
    backing.setAttribute('aria-hidden', 'true');
    backing.style.cssText = 'position:absolute;inset:0;pointer-events:none;mix-blend-mode:hard-light;opacity:0.7;';
    panel.insertBefore(backing, source);

    const layer = document.createElement('div');
    layer.setAttribute('data-ticker-mask-content', '');
    layer.style.cssText = 'position:absolute;inset:0;display:flex;flex-direction:column;box-sizing:border-box;';
    panel.insertBefore(layer, source);
    rows.forEach(row => layer.appendChild(row));

    let queued = false;
    let needsMeasure = true;
    let paddingLeft = 0;
    function sync() {
      queued = false;
      const p = panel.getBoundingClientRect();
      if (!p.width || !p.height) return;
      if (needsMeasure) {
        needsMeasure = false;
        const type = getComputedStyle(heading);
        const layout = getComputedStyle(panel);
        letters.textContent = heading.textContent.replace(/\s+/g, ' ').trim();
        ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'fontStretch',
          'letterSpacing', 'fontKerning', 'fontFeatureSettings', 'fontVariationSettings']
          .forEach(key => { letters.style[key] = type[key]; });
        paddingLeft = parseFloat(type.paddingLeft) || 0;
        ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
          'justifyContent', 'alignItems', 'rowGap'].forEach(key => { layer.style[key] = layout[key]; });
        backing.style.backgroundColor = type.color;
        backing.style.clipPath = 'url("#mwp-ticker-letter-window")';
        layer.style.clipPath = 'url("#mwp-ticker-letter-window")';
        measureSequence(p.height);
        if (heading.style.opacity !== '0') heading.style.opacity = '0';
        if (!panel.hasAttribute('data-ticker-mask-ready')) panel.setAttribute('data-ticker-mask-ready', '');
      }
      const h = heading.getBoundingClientRect();
      const b = baseline.getBoundingClientRect();
      letters.setAttribute('x', String(h.left - p.left + paddingLeft));
      letters.setAttribute('y', String(b.top - p.top));
      if (sequence && wipePhase && maskPhase) {
        const distance = -sequence.getBoundingClientRect().top;
        const phase = distance < readDistance ? 'read' :
          distance < readDistance + wipeDistance ? 'wipe' :
          distance < readDistance + wipeDistance + textDistance ? 'mask' : 'exit';
        if (sequence.getAttribute('data-sequence-state') !== phase) sequence.setAttribute('data-sequence-state', phase);
        const visible = reducedMotion.matches || phase === 'mask' || phase === 'exit';
        layer.style.visibility = backing.style.visibility = visible ? 'visible' : 'hidden';
      }
    }
    function queue(measure) {
      needsMeasure = needsMeasure || measure === true;
      if (queued) return;
      queued = true;
      requestAnimationFrame(sync);
    }
    window.mwpRefreshTickerMask = () => queue(true);
    const resize = new ResizeObserver(() => queue(true));
    resize.observe(panel);
    resize.observe(heading);
    // Webflow writes the H2's GSAP transform to its style attribute. Update only
    // the SVG position for those frames; typography/layout is cached until resize.
    new MutationObserver(records => queue(records.some(r => r.type !== 'attributes')))
      .observe(heading, {attributes: true, attributeFilter: ['style'], childList: true, characterData: true, subtree: true});
    window.addEventListener('resize', () => queue(true), {passive: true});
    window.addEventListener('scroll', () => queue(false), {passive: true});
    reducedMotion.addEventListener('change', () => queue(true));
    window.addEventListener('pageshow', () => queue(true));
    if (document.fonts) {
      document.fonts.ready.then(() => queue(true));
      document.fonts.addEventListener('loadingdone', () => queue(true));
    }
    queue(true);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();
})();
