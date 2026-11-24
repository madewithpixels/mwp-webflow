(function () {
  /* Menu phone + email pills (13 Nov 2026, written by Claude; replaces MenuContactText). While the burger menu is open the header's
     phone and email pills slide to the right edge and stay as pills (they used to turn into plain text).
     Desktop (992px and up): the labels stay open. Tablet and below: the pills stay closed (icons only). */
  var o = 'header.mwp-css-nav[data-state="open"] .contact-btn-wrapper';
  var s = document.createElement('style');
  s.textContent =
    o + '{position:absolute;top:0;right:0;width:auto}' +
    o + ' .menu-button{animation:mwp-contact-in .45s cubic-bezier(.22,1,.36,1) both}' +
    o + ' .menu-button.email{animation-delay:.08s}' +
    '@media (min-width:992px){' + o + ' .menu-button-label{max-width:24rem;margin-left:.75rem;opacity:1}}' +
    '@keyframes mwp-contact-in{from{opacity:0;transform:translateX(1rem)}}' +
    '@media (prefers-reduced-motion:reduce){' + o + ' .menu-button{animation:none}}';
  document.head.appendChild(s);
})();