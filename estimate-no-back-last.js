/* R-111: the estimator's last step ("What would you like the website to include?") has no Back button. The tool's own code
   (MWP-Instant-Website-Estimate, loaded from jsDelivr) only disables Back on the first step, so this hides it on the last.
   Written by Claude. Other steps keep their Back button. Remove this when the tool itself does it. */
(function () {
  var LAST_STAGE = '[data-stage="features"]';
  function sync() {
    var stage = document.querySelector(LAST_STAGE);
    var back = document.querySelector('[data-mwp="back"]');
    if (!stage || !back) return;
    back.style.display = stage.getAttribute('data-active') === 'true' ? 'none' : '';
  }
  function start() {
    var stage = document.querySelector(LAST_STAGE);
    if (!stage) return setTimeout(start, 300);
    sync();
    new MutationObserver(sync).observe(stage, { attributes: true, attributeFilter: ['data-active', 'style'] });
  }
  start();
})();
