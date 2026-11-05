/* R-109: on phones, the estimator's question at the top of each step is heavier, bigger and pure white
   (weight 500, 28px, #fff; the tool has 200, 24px, rgb(230,230,230)). Michael picked "Bolder and bigger" on 5 November 2026.
   Desktop is untouched. The tool's own code (MWP-Instant-Website-Estimate, loaded from jsDelivr) sets these, so this adds a
   phone-only rule. Written by Claude. Remove when the tool itself does it. */
(function () {
  var s = document.createElement('style');
  s.setAttribute('data-r109', '');
  s.textContent = '@media screen and (max-width:767px){.iwa-question{font-weight:500!important;font-size:28px!important;color:#fff!important}}';
  document.head.appendChild(s);
})();
