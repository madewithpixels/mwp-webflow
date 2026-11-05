/* R-107: no 'Next' button at the top of an estimator step on phones. The tool (MWP-Instant-Website-Estimate, loaded
   from jsDelivr) puts a second Next button beside the question; the Back and Next buttons at the bottom stay.
   Hidden up to 767px wide. Written by Claude. Remove this when the tool itself does it. */
(function () {
  var s = document.createElement('style');
  s.setAttribute('data-r107', '');
  s.textContent = '@media screen and (max-width:767px){[data-mwp="next-top"]{display:none!important}}';
  document.head.appendChild(s);
})();
