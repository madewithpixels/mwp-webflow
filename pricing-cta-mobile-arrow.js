/* R-101: tricolour arrow on the Pricing CTA estimate button, phones only (written by Claude).
   The arrow wrapper is switched on in the Designer; this keeps it off above the phone breakpoint (desktop looks as before)
   and lets the button text share the row with the arrow (the text node was set to span both grid columns). */
(function () {
  var s = document.createElement('style');
  s.setAttribute('data-r101', '');
  s.textContent =
    '@media screen and (min-width:479px){.instant-quote-btn.mobile .grad-arrow-wrapper{display:none!important}}' +
    '@media screen and (max-width:478px){.instant-quote-btn.mobile .button-inner>div:first-child{grid-area:auto!important}}';
  document.head.appendChild(s);
})();
