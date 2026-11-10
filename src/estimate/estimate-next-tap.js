/* R-119: one tap on the estimator's Next button always counts, on phones. On touch screens (iPhone Safari especially) a
   button with a :hover style can spend the first tap "hovering" and only act on the second; the tool's .iwa-btn has one
   (it lifts 1px). This (1) switches the lift off on touch screens, (2) turns off double-tap-to-zoom on the buttons, and
   (3) acts on the finger lifting off the button (touchend), then swallows the click that would follow so it can't count
   twice. A finger that moved (a scroll) does nothing. The tool (MWP-Instant-Website-Estimate, loaded from jsDelivr)
   still does the work: this just calls its own click. Written by Claude. Remove this when the tool itself does it. */
(function () {
  var s = document.createElement('style');
  s.setAttribute('data-r119', '');
  s.textContent = '.iwa-btn{touch-action:manipulation}@media (hover:none){.iwa-btn:hover{transform:none}}';
  document.head.appendChild(s);

  var MOVE = 10, GAP = 450;
  var sx = 0, sy = 0, moved = false, last = 0;
  function btn(e) { return e.target.closest && e.target.closest('[data-mwp="next"],[data-mwp="back"]'); }
  document.addEventListener('touchstart', function (e) {
    if (!btn(e) || e.touches.length !== 1) return;
    sx = e.touches[0].clientX; sy = e.touches[0].clientY; moved = false;
  }, { passive: true });
  document.addEventListener('touchmove', function (e) {
    if (!btn(e) || !e.touches.length) return;
    if (Math.abs(e.touches[0].clientX - sx) > MOVE || Math.abs(e.touches[0].clientY - sy) > MOVE) moved = true;
  }, { passive: true });
  document.addEventListener('touchend', function (e) {
    var b = btn(e);
    if (!b || moved || !e.cancelable || e.changedTouches.length !== 1) return;
    if (b.getAttribute('aria-disabled') === 'true' || b.disabled) return;
    var now = Date.now();
    if (now - last < GAP) return e.preventDefault();
    last = now;
    e.preventDefault();
    b.click();
  }, { passive: false });
})();
