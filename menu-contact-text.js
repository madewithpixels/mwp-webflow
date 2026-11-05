// R-105 (brief #314): while the burger menu is open, the telephone number and email address become plain off-white text,
// right-aligned in the header row, and slide in. Closed state is untouched (the coral pills stay).
// Live in Webflow as inline script "MenuContactText" 1.0.1 (site header). Copy here per R-029. No new class (D-006).
// Colour is the site's --offwhite variable (note: not --off-white).
(function () {
  var o = 'header.mwp-css-nav[data-state=open] .contact-btn-wrapper';
  var s = document.createElement('style');
  s.textContent =
    o + '{position:absolute;top:0;right:0;height:72px;width:auto;flex-direction:column;align-items:flex-end;justify-content:center;gap:.25rem}' +
    o + ' .menu-button{width:auto;padding:0;background:none;border-radius:0;justify-content:flex-end;animation:mwp-contact-in .45s cubic-bezier(.22,1,.36,1) both}' +
    o + ' .menu-button.email{animation-delay:.08s}' +
    o + ' .menu-button>.w-embed{display:none}' +
    o + ' .menu-button-label{max-width:24rem;margin-left:0;opacity:1;color:var(--offwhite);user-select:text;-webkit-user-select:text}' +
    '@keyframes mwp-contact-in{from{opacity:0;transform:translateX(1rem)}}' +
    '@media (prefers-reduced-motion:reduce){' + o + ' .menu-button{animation:none}}';
  document.head.appendChild(s);
})();
