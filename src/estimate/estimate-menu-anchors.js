/* R-106: on /estimate the burger menu's About, Pricing, Work, Testimonials and Contact links point at `#` (the library menu
   links to a section on the current page, and /estimate has none of those sections). Send them to the home page's sections
   instead. Written by Claude. Home and the Instant Estimate button are untouched. */
(function () {
  var MAP = { About: '/#about', Pricing: '/#pricing', Work: '/#portfolio', Testimonials: '/#testimonials', Contact: '/#contact' };
  function fix(root) {
    var links = (root || document).querySelectorAll('a[href="#"]');
    for (var i = 0; i < links.length; i++) {
      var to = MAP[(links[i].textContent || '').trim()];
      if (to) { links[i].setAttribute('href', to); links[i].setAttribute('data-r106', ''); }
    }
  }
  fix();
  new MutationObserver(function () { fix(); }).observe(document.documentElement, { childList: true, subtree: true });
  /* Capture phase, so the menu's own click handler (which expects a section on this page) does not swallow the jump. */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-r106]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault(); e.stopPropagation();
    window.location.href = a.getAttribute('href');
  }, true);
})();
