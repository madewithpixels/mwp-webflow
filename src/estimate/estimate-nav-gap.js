/* R-108: a clear gap between the estimator's Back and Next buttons. The tool's own styles (MWP-Instant-Website-Estimate,
   loaded from jsDelivr) lay the two buttons out edge to edge, so they touch. This adds a gap on the button row.
   Written by Claude. Remove this when the tool itself does it. */
(function () {
  var s = document.createElement('style');
  s.setAttribute('data-r108', '');
  s.textContent = '.iwa-nav{gap:24px}@media screen and (max-width:479px){.iwa-nav{gap:16px}}';
  document.head.appendChild(s);
})();
