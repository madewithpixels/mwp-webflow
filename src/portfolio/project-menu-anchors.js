/* R-145: on a project page (/portfolio/...) the burger menu's About, Pricing, Work, Testimonials and Contact links point at `#`
   (the library menu links to a section on the current page, and a project page has none of those sections). Send them to the
   home page's sections instead, the same way /estimate does (R-106). Home, the Instant Estimate button and the previous / next
   arrows are untouched. Written by Claude. */
(function () {
  if (location.pathname.indexOf('/portfolio/') !== 0) return;
  var MAP = { About: '/#about', Pricing: '/#pricing', Work: '/#portfolio', Testimonials: '/#testimonials', Contact: '/#contact' };
  function fix() {
    var links = document.querySelectorAll('a[href="#"]');
    for (var i = 0; i < links.length; i++) {
      var to = MAP[(links[i].textContent || '').trim()];
      if (to) { links[i].setAttribute('href', to); links[i].setAttribute('data-r145', ''); }
    }
  }
  fix();
  new MutationObserver(fix).observe(document.documentElement, { childList: true, subtree: true });
  /* Capture phase, so the menu's own click handler (which expects a section on this page) does not swallow the jump. */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-r145]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault(); e.stopPropagation();
    window.location.href = a.getAttribute('href');
  }, true);
})();
