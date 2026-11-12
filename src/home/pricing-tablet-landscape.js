/* R-148: 992 to 1180px wide (iPad landscape) uses the phone and portrait tablet pricing layout: cards stacked, no pin.
   Copies the pricing rules from Webflow's (max-width: 991px) block into a 992-1180 media query, so Designer edits to the tablet
   layout carry over, and switches off the pricing pin (the Desktop scroll animation). Reloads when the window crosses the band.
   Pricing Mobile (479px and under) is untouched. Written by Claude. */
(function () {
  var inBand = function () { return innerWidth > 991 && innerWidth < 1181; }, was = inBand(), t;
  addEventListener('resize', function () { clearTimeout(t); t = setTimeout(function () { if (inBand() !== was) location.reload(); }, 300); });
  if (!was || !document.querySelector('.pricing')) return;
  var css = '', re = /pricing|price|section-clipping-mask|cta-grid|instant-quote/;
  for (var i = 0; i < document.styleSheets.length; i++) {
    var rs; try { rs = document.styleSheets[i].cssRules; } catch (e) { continue; }
    for (var j = 0; j < rs.length; j++) {
      if (!rs[j].media || rs[j].conditionText !== 'screen and (max-width: 991px)') continue;
      for (var k = 0; k < rs[j].cssRules.length; k++) if (re.test(rs[j].cssRules[k].selectorText || '')) css += rs[j].cssRules[k].cssText;
    }
  }
  var s = document.createElement('style');
  s.textContent = '@media (min-width:992px) and (max-width:1180px){' + css + '}';
  document.head.appendChild(s);
  var n = 0, h = setInterval(function () {
    var ST = window.ScrollTrigger, done = false;
    if (ST) ST.getAll().forEach(function (x) { if (x.trigger && /(^| )pricing( |$)/.test(x.trigger.className || '')) { x.kill(true); done = true; } });
    if (done) ST.refresh();
    if (done || ++n > 50) clearInterval(h);
  }, 200);
})();
