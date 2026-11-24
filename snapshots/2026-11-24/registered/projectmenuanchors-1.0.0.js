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
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-r145]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault(); e.stopPropagation();
    window.location.href = a.getAttribute('href');
  }, true);
})();