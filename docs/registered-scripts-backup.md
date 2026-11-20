https://cdn.prod.website-files.com/683cced100c63d0f60a847a3%2F689e5ba67671442434f3ca35%2F6af618c7a2c0aa3f91ab78ae%2Fpricingtabletlandscape-1.0.0.js

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

https://cdn.prod.website-files.com/683cced100c63d0f60a847a3%2F689e5ba67671442434f3ca35%2F6af6e91c7c5eeda4f74201f7%2Fpricingnomasktablet-1.0.0.js

/* Pricing: no mask animation on tablets (13 Nov 2026, written by Claude).
   The home footer's "Pricing (desktop)" script clips and pads the cards whenever the screen is 992px or wider. But 992-1180px
   (iPad landscape) already uses the stacked tablet layout (PricingTabletLandscape), so the clipping left the cards half cut off.
   This asks that one script's (min-width: 992px) check as (min-width: 1181px) instead, so it stays off on tablets and its
   inline clip-path and padding are cleared. Nothing else uses it: it only changes that exact call, from that exact script. */
(function () {
  var mm = window.matchMedia.bind(window);
  window.matchMedia = function (q) {
    var cs = document.currentScript;
    if (typeof q === 'string' && q.replace(/\s/g, '') === '(min-width:992px)' && cs && cs.textContent.indexOf('Pricing (desktop)') > -1) q = '(min-width: 1181px)';
    return mm(q);
  };
})();


https://cdn.prod.website-files.com/683cced100c63d0f60a847a3%2F689e5ba67671442434f3ca35%2F6af6eb0bdb29362069fd0e83%2Fportfolionooverlaptablet-1.0.0.js

/* Portfolio on tablet landscape (13 Nov 2026, written by Claude). From 992 to 1180px (iPad landscape) the pricing uses the stacked tablet
   layout (PricingTabletLandscape), but the Portfolio section kept its desktop -50svh top margin - made to overlap the pinned pricing -
   which hid the pricing CTA. It gets the tablet values from the Designer (max-width 991px): margin-top 0 and the tablet top padding. */
(function () {
  var s = document.createElement('style');
  s.textContent = '@media (min-width:992px) and (max-width:1180px){.portfolio{margin-top:0;padding-top:calc(var(--_structure---section-padding)*3)}}';
  document.head.appendChild(s);
})();


https://cdn.prod.website-files.com/683cced100c63d0f60a847a3%2F689e5ba67671442434f3ca35%2F6af43d2bc5096ddb6958899c%2Fportfoliobarup-1.0.0.js

/* R-137 (brief #466, Claude night shift, 11 November 2026): at 991px and under, lift the portfolio separator bar to the top of the Work section (it sat 15vw too low) and give the 3 x Section Padding back below it, so nothing under the bar moves. At 479px and under the old values stay (the section's own padding is already x1 there). */
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


https://cdn.prod.website-files.com/683cced100c63d0f60a847a3%2F689e5ba67671442434f3ca35%2F6af2f77825bad80337c3cef0%2Fmobilenavlanding-1.0.0.js


(function(){
/* Tablet and below (under 992px): where the primary nav's in-page links land, and where the Home page lands when it is opened with #about etc. (from the Estimate page's nav). Works with the nav jump in the Home head: before that runs, the clicked link is pointed at a zero-height marker placed at the right height. Phones (479 and under): About = Our promise held with its text showing, Pricing = the first card formed, Testimonials = the Praise heading, Work = the separator at the top. Tablets: Work and Testimonials the same. Remove this script to go back to the section tops. */
var K=/^(about|pricing|portfolio|testimonials|contact)$/,D=document;
function q(s){return D.querySelector(s)}
function top(e){return e.getBoundingClientRect().top+scrollY}
function pin(e,p){var s=e.closest('.pin-spacer');return s?top(s)+p*(s.offsetHeight-e.offsetHeight):top(e)}
function Y(k){var H=innerHeight,e=q('#'+k),c;
if(!e)return null;
if(k==='about'&&innerWidth<480&&(c=q('.about-section.top')))return pin(c,.5);
if(k==='pricing'&&innerWidth<480)return pin(e,.2);
if(k==='portfolio'){c=e.querySelector('.seperator');var g=getComputedStyle(e);return top(e)+parseFloat(g.paddingTop)+(c?parseFloat(getComputedStyle(c).marginTop):0)}
if(k==='testimonials')return top(e)-H+22/192*(e.offsetHeight+H);
return pin(e,0)}
D.addEventListener('click',function(e){
if(innerWidth>991)return;var a=e.target.closest&&e.target.closest('.mwp-css-nav_link[href^="#"]');
if(!a)return;var h=a.getAttribute('href'),k=h.slice(1);if(!K.test(k))return;
var y=Y(k);if(y==null)return;
var m=D.getElementById('mwp-m-'+k);
if(!m){m=D.createElement('div');m.id='mwp-m-'+k;m.style.cssText='position:absolute;left:0;width:1px;height:0;pointer-events:none';D.body.appendChild(m)}
m.style.top='0px';m.style.top=(y-top(m))+'px';
a.setAttribute('href','#mwp-m-'+k);
setTimeout(function(){a.setAttribute('href',h);if(history.replaceState)history.replaceState(null,'',h)},1500)},true);
addEventListener('load',function(){setTimeout(function(){
var k=location.hash.slice(1);if(innerWidth>991||!K.test(k))return;
var t=performance.now();(function f(){var y=Y(k);if(y!=null){if(window.lenis)window.lenis.scrollTo(y,{immediate:true,force:true});else scrollTo(0,y)}
if(window.mwpPlayInOrder)window.mwpPlayInOrder();if(performance.now()-t<700)requestAnimationFrame(f)})()},1800)});
})();