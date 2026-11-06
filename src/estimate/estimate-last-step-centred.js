/* R-110: on phones, the headings and paragraphs on the estimator's last step ("What would you like the website to include?",
   with the "Editable content sections" group) are centred. Desktop is untouched. The tool's own code (MWP-Instant-Website-Estimate,
   loaded from jsDelivr) left-aligns them, so this adds a phone-only rule. Written by Claude. Remove when the tool itself does it. */
(function () {
  var s = document.createElement('style');
  s.setAttribute('data-r110', '');
  s.textContent = '@media screen and (max-width:767px){[data-stage="features"] .iwa-question,[data-stage="features"] .mwp-group-label,[data-stage="features"] .iwa-opt-help{text-align:center}}';
  document.head.appendChild(s);
})();
