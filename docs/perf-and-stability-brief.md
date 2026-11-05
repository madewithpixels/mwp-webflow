# Brief: device-aware performance + mobile scroll stability (R-102)

Written 5 November 2026. Do this LAST, after Michael has finished the animation and layout work. Start by reading STATUS.md, then the project notes (folio wall, testimonial wall, pricing, ticker, heart morph, nav-jump-and-sticky, the faulty-terminal logo-resolve brief) and the frame-probe repo.

## Goal
Make the site stable and smooth on weak and touch devices without changing the desktop experience.
1. **Mobile stability:** fast scrolling, or scrolling before animations finish, leaves animations and layout flaky. Desktop is solid (nav-jump fixes, mwpPlayInOrder, the sticky re-measure wrapper); mobile is not.
2. **Performance on weak devices:** detect capability, then throttle effects to suit. Test devices: iPad Air 2 (iOS 15.8.8, 2GB RAM, DPR 2, 1024x768 landscape / 768x1024 portrait) and a very basic Samsung Android phone. The iPhone 15 is fine.

## Key finding (to confirm on the iPad)
Layout switches are width-based (>=992px = desktop). An iPad in landscape is 1024px wide, so it gets every desktop path: the scroll-tied heart morph, the Pricing GSAP pin, the Ticker wipe, the full Testimonial Wall choreography. This probably explains why the heart morph is still scroll-tied and jerky there while it is fine on the iPhone (timed v2.2 path, below 992px).

## The model: three independent switches
- **Layout:** width-based, unchanged.
- **Input:** `data-input="touch|pointer"` on `<html>`. Decides scroll mechanics (timed vs scrubbed, svh vs dvh, resize guard, Lenis on/off).
- **Tier:** `data-perf="high|mid|low"` on `<html>`, exposed as `window.MWPPerf` (tier, change callback). Frame rate caps: high 60, mid 30, low 25 (Michael: "good enough for film").

## Rules
1. Layout-affecting choices are made once at load, never mid-scroll (Testi timeline choice, folio rows/tiles, Pricing pin vs sticky).
2. The live monitor only changes cheap, layout-neutral things (CSS filters, Faulty Terminal quality, fps cap). It only steps DOWN, at most one tier per session, no recovery. The tier is remembered (sessionStorage/localStorage).
3. Initial tier from cheap signals (cores, deviceMemory where available, DPR, touch, WebGL renderer, saveData) plus measured frame rate. Android: measured frame rate decides (Michael: many capable Android phones), with deviceMemory/cores as a head start. On first load, Faulty Terminal's first ~20 frame times feed MWPPerf; if slow, skip the resolve and show the HTML heart.
4. `?perf=low|mid|high` forces a tier (remembered in sessionStorage). `?perf-debug` shows an overlay: signals, measured fps, tier, innerHeight changes, ScrollTrigger refresh count.
5. The settle pass runs at every tier: redraw all scrubbed triggers in order (mwpPlayInOrder) on `scrollend` where supported (not Safari 15: use a ~150ms idle timer), plus `touchend`, `pageshow`, `orientationchange`.
6. Scrub smoothing is tiered: low/touch uses scrub true or ~0.3, not 1 to 1.5.

## Mobile stability work
- `dvh` -> `svh` for every pinned or sticky height on touch layouts (Folio Wall sticky is 100dvh at medium).
- ScrollTrigger resize guard: `ScrollTrigger.config({ ignoreMobileResize: true })` if it applies to IX3's GSAP instance; extend the st.refresh wrapper to skip or debounce height-only refreshes while scrolling.
- Pricing is the only GSAP-pinned section (position fixed, can jitter on iOS momentum scroll): CSS sticky plus a tall wrapper on touch/low.
- Heart morph: mode chosen by input/tier, not width (timed on touch or low). Michael wants more time "in the air" on the timed version: FLY_MS 1200 -> ~1800, wider SPREAD, fire slightly earlier, optionally a small arc/lift per pixel.
- Check whether Lenis runs on touch; consider off on touch.

## Per-tier effects (starting proposal)
| | High | Mid | Low |
|---|---|---|---|
| GSAP fps | 60 | 30 | 25 |
| Faulty Terminal | full | scale ~0.75, fewer extras | scale ~0.5, DPR capped at 1, 15-20fps, no resolve, HTML heart |
| Testi blur / shadows / back rows | on | no back rows, no blur | all off, chip colours pinned (no Testi Inner Mix) |
| Testi timeline | Designer version | Designer version | our own simplified one (no tilt; plain part + fade; kills the IX3 trigger; not Designer-editable, Michael agreed) |
| Folio images/tiles | 500px set | 500px set | small set (~256px) swapped by script, fewer rows/tiles |
| Heart morph | scroll-tied (pointer devices) | timed on touch | timed |
| Pricing | GSAP pin | GSAP pin | CSS sticky on touch |

## Preliminary findings (5 November 2026)
- FT shows faintly through the Testimonial section: `div.testi-wall_bg-overlay` (absolute, full section, z-index 0) is `rgba(43,70,78,0.85)` and the section itself is transparent on staging. **This overlay is the deliberate fade layer from R-031 / D-022**, not a leftover. Making it opaque while keeping its fade at the end of the wall animation is a Designer style change (D-006, D-007: describe it and get approval first). Once covered sections are opaque, FT can pause while covered (all tiers); check whether it already pauses when covered or off-screen.
- Live FT is v1.12.2; the instance exposes setFieldProgress, holdFullScale and the logo-resolve calls. A quality API (`setQuality` / perfTier) belongs in the library, not site-side hacks.
- Page measured about 98fps on the Mac Studio.

## iPad Air 2 specifics
- DPR 2: cap WebGL at DPR 1 (or lower) on low.
- 2GB RAM: iOS tab kills likely. 119 decoded folio images (500x500) plus the huge Testi row layers are the suspects; the small image set matters most here.
- iOS 15.8: no `scrollend`; no `color-mix()` (Safari 16.2+), so the Testi inner-row fade may not render there at all. Audit other CSS against Safari 15. Check FT's WebGL2 needs on the A8X.

## Folio small-image set
Hosted in a git repo on jsDelivr (avoids Webflow asset-API 429s and manual repointing); a script swaps URLs by filename on low, before the originals download (check lazy-loading). Michael chose a second small set swapped by script (one smaller set for all would look soft on retina desktop at the 1.6x exit scale). Existing mapping: the compressed asset map in the Claude project notes. Claude cannot reach the Webflow CDN from the sandbox, so images go via the browser pane.

## Order of work
1. Diagnose: tier script + `?perf-debug`; frame-probe on the iPad; Safari Web Inspector timelines/memory graph if the iPad can connect to the Mac. Read the overlay in both orientations.
2. Foundation: MWPPerf, data-input, svh change, resize guard, settle pass.
3. CSS gating of heavy effects + fps/scrub caps.
4. Faulty Terminal quality API + pause-when-covered (library change: new version, SRI, changelog).
5. Folio small set.
6. Testi simplified timeline, heart mode switch + tuning, Pricing sticky on touch.
7. Test matrix: iPad Air 2 (both orientations), iPhone 15, basic Samsung, a mid-range Android if available, Mac Chrome with `?perf=low` + 6x CPU throttle.

## Working rules
- Designer and MCP only. Check `isFromLibrary` before editing mwp-css-nav_* classes. Interactions: get_interaction first; timelines are a full replace.
- Publish to staging only, only when asked. Michael checks and backs up after every step; Michael commits.
- The tier script is the first custom code to move into this repo and be served via jsDelivr (R-029, R-055). Record the three-switch model as a decision in DECISIONS.md when the work starts.
- Respect prefers-reduced-motion separately from perf tiers.

## Open questions
- Which of Michael's current animation/layout changes land first (re-read STATUS.md).
- Whether Android needs a mid-tier visual treatment beyond frame-rate-driven stepping.
- Whether the iPad's landscape/portrait behaviour differs as predicted.
