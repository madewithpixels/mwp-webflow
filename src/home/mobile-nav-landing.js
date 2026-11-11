/* "mobilenavlanding" 1.2.0 (R-136, brief #372, Claude night shift, 11 November 2026): on a phone held sideways (landscape, 991 and
   under) the Work link lands with the "Work" heading a quarter of the screen down. Before, it landed at the separator, which left the
   heading squeezed against the bottom edge (667x375: heading at 292-369 of 375; and once R-137 moves the bar up it would be off screen).
   NOT YET IN WEBFLOW, like 1.1.0 below.
   "mobilenavlanding" 1.1.0 (R-138, brief #467, Claude night shift, 11 November 2026). NOT YET IN WEBFLOW: the live copy is 1.0.0,
   registered as a hosted script, so applying this means registering 1.1.0 and swapping it on the Home page. Not bundled into dist.
   1.0.0 (reconstructed from the live file on staging, 11 November 2026; this repo had no copy before) is everything below except the
   block marked "1.1.0".

   Tablet and below (under 992px): where the primary nav's in-page links land, and where the Home page lands when it is opened with
   #about etc. (from the Estimate page's nav). Works with the nav jump in the Home head: before that runs, the clicked link is pointed
   at a zero-height marker placed at the right height. Phones (479 and under): About = Our promise held with its text showing,
   Pricing = the first card formed, Testimonials = the Praise heading, Work = the separator at the top. Tablets: Work and
   Testimonials the same. Remove this script to go back to the section tops.

   1.1.0: 992 to 1199px wide (an iPad held sideways) was left out of the opening-with-a-hash path. The page's own scroll to the
   anchor ran before the pinned sections had built their spacers, so Work, Testimonials and Contact ended 2,688px short and stayed
   there (measured 1024x768 from the Estimate page). Now, in that band, the same click the menu would make is made on the matching
   menu link, so the Home head's desktop landing numbers are used and the result is identical to using the menu on Home
   (Work +154, Testimonials +960, Contact 0 at 1024x768; checked 11 November 2026 in a frame on staging). Nothing else changes. */
(function () {
  var K = /^(about|pricing|portfolio|testimonials|contact)$/,
    D = document;
  function q(s) {
    return D.querySelector(s);
  }
  function top(e) {
    return e.getBoundingClientRect().top + scrollY;
  }
  function pin(e, p) {
    var s = e.closest('.pin-spacer');
    return s ? top(s) + p * (s.offsetHeight - e.offsetHeight) : top(e);
  }
  function Y(k) {
    var H = innerHeight,
      e = q('#' + k),
      c;
    if (!e) return null;
    if (k === 'about' && innerWidth < 480 && (c = q('.about-section.top'))) return pin(c, 0.5);
    if (k === 'pricing' && innerWidth < 480) return pin(e, 0.2);
    if (k === 'portfolio') {
      // 1.2.0: sideways phone or small tablet (landscape, 991 and under): land with the "Work" heading a quarter of the screen down
      if (innerWidth > innerHeight && (c = e.querySelector('.portfolio-header'))) return top(c) - 0.25 * H;
      c = e.querySelector('.seperator');
      var g = getComputedStyle(e);
      return top(e) + parseFloat(g.paddingTop) + (c ? parseFloat(getComputedStyle(c).marginTop) : 0);
    }
    if (k === 'testimonials') return top(e) - H + (22 / 192) * (e.offsetHeight + H);
    return pin(e, 0);
  }
  D.addEventListener(
    'click',
    function (e) {
      if (innerWidth > 991) return;
      var a = e.target.closest && e.target.closest('.mwp-css-nav_link[href^="#"]');
      if (!a) return;
      var h = a.getAttribute('href'),
        k = h.slice(1);
      if (!K.test(k)) return;
      var y = Y(k);
      if (y == null) return;
      var m = D.getElementById('mwp-m-' + k);
      if (!m) {
        m = D.createElement('div');
        m.id = 'mwp-m-' + k;
        m.style.cssText = 'position:absolute;left:0;width:1px;height:0;pointer-events:none';
        D.body.appendChild(m);
      }
      m.style.top = '0px';
      m.style.top = y - top(m) + 'px';
      a.setAttribute('href', '#mwp-m-' + k);
      setTimeout(function () {
        a.setAttribute('href', h);
        if (history.replaceState) history.replaceState(null, '', h);
      }, 1500);
    },
    true,
  );
  addEventListener('load', function () {
    setTimeout(function () {
      var k = location.hash.slice(1);
      if (!K.test(k)) return;
      if (innerWidth > 991) {
        // 1.1.0: an iPad held sideways (992 to 1199): use the menu's own jump, after the pinned sections have settled
        if (innerWidth < 1200) {
          var l = q('.mwp-css-nav_link[href="#' + k + '"]');
          if (l) l.click();
        }
        return;
      }
      var t = performance.now();
      (function f() {
        var y = Y(k);
        if (y != null) {
          if (window.lenis) window.lenis.scrollTo(y, { immediate: true, force: true });
          else scrollTo(0, y);
        }
        if (window.mwpPlayInOrder) window.mwpPlayInOrder();
        if (performance.now() - t < 700) requestAnimationFrame(f);
      })();
    }, 1800);
  });
})();
