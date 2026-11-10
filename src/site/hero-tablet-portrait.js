/* R-129: a tablet held upright (480 to 767px wide, e.g. iPad mini) counts as Webflow's phone-landscape band, which doubles the hero height. Keep the tablet value (100svh) when the screen is portrait. Registered in Webflow as inline script "HeroTabletPortrait" 1.0.0 on the Home page header. */
(function () {
  var s = document.createElement('style');
  s.textContent = '@media (min-width: 480px) and (max-width: 767px) and (orientation: portrait) { body { --_structure---hero-height: 100svh; } }';
  document.head.appendChild(s);
})();
