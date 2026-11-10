// Swipe left / right on a project page to go to the next / previous project (R-134).
// A swipe taps the matching arrow, so it gets the same slide transition (page-transition.js, R-083).
// Swipe left = next (right arrow); swipe right = previous (left arrow). Touch only; ignores scrolls, pinches and swipes that start in a scrolling strip.
(function () {
  if (location.pathname.indexOf('/portfolio/') !== 0) return;
  var MIN = 60, MAX_MS = 700, x0, y0, t0, ok = false;
  function scrollsSideways(el) {
    for (; el && el !== document.body; el = el.parentElement) {
      if (el.scrollWidth > el.clientWidth + 2 && /(auto|scroll)/.test(getComputedStyle(el).overflowX)) return true;
    }
    return false;
  }
  addEventListener('touchstart', function (e) {
    var t = e.touches[0];
    ok = e.touches.length === 1 && !scrollsSideways(e.target);
    x0 = t.clientX; y0 = t.clientY; t0 = Date.now();
  }, { passive: true });
  addEventListener('touchend', function (e) {
    if (!ok) return;
    ok = false;
    var t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0;
    if (Date.now() - t0 > MAX_MS || Math.abs(dx) < MIN || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    var a = document.querySelector('a.project-nav_arrow[data-portfolio-nav="' + (dx < 0 ? 'next' : 'prev') + '"][href]');
    if (a) a.click();
  }, { passive: true });
})();
