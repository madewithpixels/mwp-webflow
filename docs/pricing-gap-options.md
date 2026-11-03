# Pricing cards: the gap under the separator (R-098)

Measured on published staging (madewithpixels-dev.webflow.io), Chrome on the Mac Studio, 3 November 2026. Each width was loaded in a same-origin iframe so the layout really switches. Nothing was changed in Webflow.

## What I found

The gap is a **16px top margin on `.pricing-block`**, and it only exists in Webflow's 1440px-and-up setting (the rule is `@media (min-width: 1440px) { .pricing-block { margin-top: 1rem; … } }`). It is not the interaction's start position, and it is not the separator.

- **Separator:** `.seperator.has-bg-slate.is-position-sticky-top` is sticky at `top: 0`, 8.4px high, and never moves. It is on top of everything (z-index 500).
- **Cards:** the three `.pricing-block` cards sit in `.pricing-wrapper`, inside `.section-clipping-mask` (top 0). The "Pricing Section Desktop" interaction does not move them. It reveals each card downwards by animating `clip-path: inset(0 0 X 0)` from the top edge, which starts at the card's own top. So the reveal begins 16px down, and the 7.6px between the separator's bottom and the card's top shows the slate background behind.

## The gap, per width

| Width | Layout | Card top − separator bottom, at rest | While the cards reveal |
|---|---|---|---|
| 1440 (and 1700, the Chrome window) | three columns, clip-path reveal | **+7.8px** (1700: +7.7px). Card top 16.2, separator bottom 8.4 | Same +7.8px throughout. Only the clip changes (e.g. 877px, 178px, 4px cut from the bottom). The gap never opens or closes |
| 1024 | same three columns | **−8.8px** (card top −0.4, so the separator covers the card's first 8px). No gap | Same −8.8px |
| 768 | cards stacked, scroll past normally, no clip reveal | n/a. Cards are 77px apart and scroll under the separator | n/a |
| 390 | cards stacked, no reveal | n/a. Cards 1px apart | n/a |

Why 1024 is fine: the 1440 rule's 1rem margin is simply not applied there (margin-top 0). At 1024 the media query for max-width 1439px is true, 991 is false. At 768 and 390 the section switches to a stacked layout, so there is no drop-down and no separator gap.

## Options

**A. Set the card's top margin to 0 at the 1440px-and-up setting (recommended).**
- What changes: in the Designer, on the existing class `.pricing-block`, at the 1440 setting, change Margin top from 1rem to 0. Nothing else.
- Result: desktop matches 1024. The cards start right under the top edge, with the separator covering their first 8px, so no gap shows at any point of the reveal. The text inside each card moves up 16px.
- New class: none. Interaction: none touched.
- Risk: that 16px may have been put there on purpose (to leave a slate rail under the separator). If you like the rail, pick C. Check afterwards that card text still sits well against the top and that the clip reveal looks the same.

**B. Make the margin negative so the cards sit exactly flush with the separator's bottom.**
- What changes: same property as A, set to about −0.5rem (the separator is 8.4px high).
- Result: no gap, no overlap beyond the separator.
- Why not: it ties the card position to the separator's height, which R-034 may change. A is safer because the separator already hides the extra 8px.

**C. Keep the margin, and make the separator cover the gap.**
- What changes: increase the bottom padding of `.seperator.has-bg-slate.is-position-sticky-top` by about 8px, so the bar is about 16px high.
- Result: no visible gap at 1440+. But the bar is thicker at every width, and it covers more of the cards at 1024 and below.
- Risk: that is the same separator R-034 wants to rework. Do this one only after R-034 decides what the separator looks like. It is a combo class, so it has to be done in the Designer (D-006).

## Overlaps and limits

- R-034 (separator in scroll animations) and R-032 (pricing text stagger) touch the same section. Option A touches neither the separator nor the interaction. Options B and C depend on the separator's height.
- 1440 is the edge of the setting. I did not test widths between 1025 and 1439 beyond the 1024 frame, but the rule is `min-width: 1440px` so they behave like 1024.
- Safari and Firefox not checked. Interactions are not visible in the snapshots.
