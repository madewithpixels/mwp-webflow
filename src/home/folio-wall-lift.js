/* "foliowalllift" 1.0.0 (R-154, brief #577, Claude night shift, 12 November 2026). Live in Webflow as an inline script applied
   in the Home page header (registered script, not the head code block). Not bundled into dist.
   At 479px and under the folio wall box is 100lvh (R-121), taller than the screen while the phone's address bar shows, so the
   gap that opens in the middle sat low. This measures the difference (100lvh minus the visible height), and lifts the sticky
   box by half of it, so the gap is centred in what can be seen. The box stays full height (no slate gaps, no change to scroll
   lengths): only its sticky top moves, through a CSS variable (the page's scroll-refresh code clears inline tops, so none is used).
   Becomes 0 when the bar hides. Phones only; the lift is capped at 120px. */
(function () {
  var r = document.documentElement,
    s = document.createElement('style'),
    p;
  s.textContent = '@media (max-width:479px){.folio-wall .folio-wall_sticky{top:calc(var(--mwp-fw-lift,0px)*-1)}}';
  document.head.appendChild(s);
  function set() {
    var d = Math.round((p.offsetHeight - window.innerHeight) / 2);
    r.style.setProperty('--mwp-fw-lift', Math.min(120, Math.max(0, d)) + 'px');
  }
  document.addEventListener('DOMContentLoaded', function () {
    p = document.createElement('div');
    p.setAttribute('aria-hidden', 'true');
    p.style.cssText = 'position:fixed;left:0;top:0;width:0;height:100lvh;visibility:hidden;pointer-events:none';
    document.body.appendChild(p);
    set();
    window.addEventListener('resize', set, { passive: true });
    window.addEventListener('orientationchange', set);
  });
})();
