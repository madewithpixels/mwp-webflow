/* MenuCloseOnLeave - written by Claude, 20 Nov 2026. Menu links on the project and estimate pages navigate away with the burger menu still open, so the browser's Back button restored the page (from its back/forward cache) with the menu open. Close it as the page is left, and again if a page comes back from the cache. */
(function () {
  function closeMenu() {
    var m = document.querySelector('[data-mwp-menu]');
    if (m && m.open) m.open = false;
  }
  window.addEventListener('pagehide', closeMenu);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) closeMenu();
  });
})();