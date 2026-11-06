# R-121: every `dvh` on the site (read-only sweep, 6 November 2026)

Read from the live Webflow site (styles at every breakpoint, Site and Home custom code, Estimate page code, the 23 Home interactions, the Estimate tool's CSS on jsDelivr). **Update 6 November 2026: step 1 applied (section A, phone settings changed to `svh` in the Designer, unpublished). The "Setting now" column below is the old value, kept for undoing. Everything else is unchanged.** `svh` is the small viewport height: it does not move when the phone's address bar shows or hides, `dvh` does.

Webflow breakpoints: desktop (main) and larger; medium = 991px and under; small = 767px and under; tiny = 478px and under. Base styles cascade down to every smaller breakpoint unless that breakpoint overrides them.

## A. Phone (tiny) sections that are pinned or sticky, proposed dvh to svh
Intro Section Mobile and Pricing Section Mobile are GSAP pins that play on tiny only.
| Class | Setting now | Notes |
|---|---|---|
| Intro | tiny: height 100dvh, min-height 100dvh | pinned by "Intro Section Mobile" |
| intro_sticky | tiny: height 100dvh | |
| Pricing | tiny: height 100dvh, margin-bottom 50dvh | pinned by "Pricing Section Mobile" |
| Pricing Wrapper | tiny: height 100dvh, min-height 100dvh | |
| Pricing CTA | tiny: height 100dvh, min-height 100dvh | |
| Section Clipping Mask | tiny: height 100dvh | |
| ticker__sticky | tiny: height 100dvh | same class as the base row in D |

## B. Tablet (medium) and phone landscape (small), proposed dvh to svh
| Class | Setting now |
|---|---|
| folio-wall_sticky | medium: height 100dvh |
| Pricing Wrapper | medium: min-height 100dvh |
| testi-wall_sticky | small: height 100dvh |

## C. Base (desktop) values that also reach phones and tablets, proposed dvh to svh
Desktop browsers have no moving address bar, so desktop looks identical; phones stop resizing these.
| Class | Setting now | What it does |
|---|---|---|
| Contact | min-height 100dvh | Contact section |
| Contact Grid | top 10dvh, margin-top 30dvh, margin-bottom 20dvh | sticky grid in Contact |
| ticker__sticky | height 100dvh | ticker panel |
| Ticker__Item | font-size calc(100dvh / 7) | ticker type size (text reflows when the bar moves) |
| type__mask | font-size 160dvh, margin-top 9.5dvh | "Sectors & Specialisms" mask text (R-035) |

## D. Custom code (Home page head), proposed dvh to svh
| Rule | Now |
|---|---|
| `[data-mwp-sequence-ready] > .about-section.top` | height: 100dvh (not inside a media query) |
| `@media (prefers-reduced-motion: reduce) { [data-mwp-sequence-ready] .ticker` | height: 100dvh |
Editing this means replacing the whole Home head block (read it first, change only these two values, read it back).

## E. Found but left alone unless Michael says otherwise
- Burger menu: `mwp-css-nav_panel` height and min-height 100dvh; `mwp-css-nav_primary` padding-bottom 2.5dvh, and at medium padding-top 5dvh, padding-bottom 0dvh. A full-screen menu overlay arguably should follow the visible area, and same-named copies live in the SmashBurger library (D-006, R-030).
- `MWP Graph Col` (small): max-height 78vh (plain `vh`, the large viewport).

## F. Not CSS, so not fixed by this change (R-102)
`window.innerHeight` is read in 12 places and moves with the address bar just like `dvh`: site footer (4), Home head (4: nav offsets, refresh, contents device), Home footer (4: pricing, contact bubbles). The resize guard in R-102 covers these.

## G. Clean
- Interactions: none use dvh or vh values (only `svh` in "About Section Desktop"); their trigger positions are percentages.
- Estimate page code: no dvh. The Estimate tool's CSS (3.1.0 on jsDelivr): none.
- Repo files in `src/`: none.

## Lenis (Site footer)
`new Lenis({ autoRaf, autoToggle, anchors, allowNestedScroll, naiveDimensions, stopInertiaOnNavigate })`. No `syncTouch`, so Lenis's default applies (touch scrolling stays native). Not confirmed on the live page by reading `lenis.options`.

## Follow-up (6 November 2026)
After the staging test the phone and tablet pinned boxes in section A and B, and the About-top head rule, went from `svh` to `lvh` (see ROADMAP R-121). The old `dvh` values above remain the original record.
