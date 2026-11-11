/* "portfoliobarup" 1.0.0 (R-137, brief #466, Claude night shift, 11 November 2026). Live in Webflow as an inline script applied
   in the Home page header. Not bundled into dist.
   At 991px and under, lifts the portfolio separator bar to the top of the Work section (it sat 15vw too low) and gives the
   3 x Section Padding back below it, so nothing under the bar moves. At 479px and under the old values stay (the section's own
   padding is already x1 there). Written as CSS in a script because the Webflow tools cannot write a calc() on a combo class (D-006). */
(function () {
  var S = '.seperator.has-bg-slate.is-position-sticky-top.is-in-portfolio.is-in-portfolio';
  var P = 'var(--_structure---section-padding)';
  var H = 'var(--_structure---separator-height)';
  var st = document.createElement('style');
  st.textContent =
    '@media (max-width:991px){' + S + '{margin-top:calc(-3*' + P + ');margin-bottom:calc(3*' + P + ' - ' + H + ' - 2px)}}' +
    '@media (max-width:479px){' + S + '{margin-top:calc(-1*' + P + ');margin-bottom:calc(' + P + ' - ' + H + ' - 2px)}}';
  document.head.appendChild(st);
})();
