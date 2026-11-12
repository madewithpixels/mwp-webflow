# Perf watcher: what the device tests showed (6 November 2026)

Written 6 November 2026 after a day of testing `MWPPerf` (the tier script, R-102) on real devices with the `?perf-debug` overlay. Everything below was measured on the published staging site (madewithpixels-dev.webflow.io), Home page, scrolled slowly top to bottom.

## Devices
| Device | What Safari/Chrome reports | Starting tier | What measurement did |
|---|---|---|---|
| iPhone 15 | 4 cores, memory unknown, dpr 3, Apple GPU | mid (score 2) | Stayed. 64 readings at about 59fps, worst 43fps (Contact). `innerHeight` changed 36 times (548 to 743): the toolbar. |
| iPad Air 2 | 4 cores, memory unknown, dpr 2, Apple GPU | mid (score 2) | Stepped to **low** after two readings (about 16 to 22fps). |
| Samsung (Android, 90Hz, 4GB, 8 cores) | cores, 4GB, dpr 3.4 | mid (score 1) | Stepped to **low** in the Testimonial wall. 68 readings, 7 slow; worst: testi-wall 15fps (3 of 4), Folio wall 23fps, Intro 23fps. Pricing was smooth. |
| Apple Store iPad (newer, lowest-spec on sale) | 4 cores, memory unknown, dpr 2 | mid (score 2) | Hero 59fps. Not scrolled. |

**Finding 1: the static signals cannot tell devices apart on iOS.** An iPhone 15, an iPad Air 2 and a current iPad all report 4 cores, no memory and "Apple GPU". Everything starts at mid by design. **Measurement is what separates them**, and it picked the right tier on every device.

**Finding 2: the starting guess is not the weakness; timing is.** Measurement arrives after the first slow stretch, and the result is forgotten when the tab closes.

## Where the iPad Air 2 loses its frames (kill switches, tier forced to high so it cannot step down)
`?perf-kill=` switches one thing off so its cost shows in the overlay. Slow = under 30fps.

| Run | Readings | Slow | Worst | Sections (worst fps, slow/readings) |
|---|---|---|---|---|
| baseline | 9 | 9 | 6 (About) | About 6, Testi 10, Portfolio 11, Hero 18, Pricing 21 |
| `ft` (terminal off) | 17 | 7 | 9 (About) | About 9 (3/4), Folio 19, Portfolio 19, Pricing 22 |
| `fx` (filters, shadows, blends off) | 8 | 8 | 9 (About) | About 9, Folio 15, Portfolio 15, Pricing 19 |
| `ft,fx` | 20 | 4 | 8 (About) | About 8 (3/4), Portfolio 22, Folio 30, Pricing 31, Intro 45 |
| `folio`, `testi` | 4, 3 | all | 12, 14 | no improvement |
| lite (`?perf=low`) | 19 | 12 | 8 (Pricing) | Pricing 8 (3/6), Folio 13, Intro 13, Contact 15, Portfolio 20; About not in the worst five |
| **lite + `ft`** | **17** | **2** | 8 (Portfolio, 1 reading) | Intro 29, Folio 36, About 45, Testi 45; last six readings 45 to 59 |

What this says:
- **Filters, blurs, shadows, blend modes: not the cause** (`fx` alone changed nothing).
- **Folio images and the Testimonial rows: not the cause** (hiding them changed nothing).
- **Faulty Terminal** (full-screen WebGL at dpr 2) is the cost in the hero, Folio wall, Intro and Pricing. At load the hero reads 17 to 19fps with it, 59fps without.
- **About is slow independently of the terminal** (about 8 to 9fps with it off). It is the long pinned section with the promise and sectors animations. Killing GSAP fixes it (45fps).
- Together, **no GSAP + no terminal** gives a steady 45 to 59fps on the iPad Air 2.

## How the animations are wired (live staging page)
`window.gsap` and `window.ScrollTrigger` (both 3.15.0) are reachable from page script. 22 ScrollTriggers (14 scrubbed, 1 pinned: Pricing; 8 non-scrubbed Folio list blocks), about 220 tweens. Lenis is present (`window.lenis`).

Killing everything with revert works technically (page 5% shorter) but leaves some sections in a broken static state:
- Folio wall: fine. Intro: fine.
- **About:** all layers pile up (promise text, big letters, sector words, logo).
- **Pricing:** the "Wondering about the cost" heading overlaps the cards and the clipping mask sits over the third card.
So "GSAP off" needs a designed static layout for About and Pricing (probably also Portfolio, Testimonial wall, Contact): the low stylesheet.

## The decision (D-025)
Low means: **static image instead of the Faulty Terminal; all GSAP animation off; a separate low stylesheet for the static layouts.** See DECISIONS.md D-025.

## What is built (MWPPerf, hosted from jsDelivr, pinned by commit with SRI)
- 0.1.x: tier detection, `?perf=` forcing, step-down on measured fps, remembered per session, `?perf-debug` overlay (worst reading, per-section table, last six readings, and a LITE line), `?perf-kill=ft,testi,folio,fx,layers,clip,paint` diagnostics.
- 0.2.0: lite step 1 (`?perf=low`: ScrollTriggers killed, `<html data-lite>`).
- **0.3.x to 0.4.4 (current, script commit 12eefd3, stylesheet 652d59c): lite steps 2 and 3.** WebGL blocked in lite so the terminal never starts; `.ft-wrapper` shows `assets/ft-still.webp` (FT's own `.ft-static` layer made transparent). Only ScrollTriggers are killed; time-based tweens stay (hero intro runs). `dist/perf-low.min.css` (all rules `html[data-lite]`) loaded with SRI. The Testimonial quotes are moved into a plain list by script. The Home footer's bubbles-to-heart script is off in lite (one-line guard on `ENABLED`, unpublished).
- The diagnostic `?perf-kill` switches stay in the script for now; remove at tidy-up.

## Michael's lite layout brief (6 November 2026) and how it was built
- Hero: unchanged. Folio wall: static, 100lvh, no "hundreds of projects" line; three rows each 100lvh/3 drifting sideways (his option B), cut-off top and bottom rows hidden. Intro: unchanged, redundant sticky removed, logo marquee may run. Our promise: 100lvh, logo-wrapper show-through hidden. "We work with" ticker: removed. Your website built to last: 100lvh. Pricing cards: landscape three side by side with 1px gaps at 100lvh, portrait stacked with 1px gaps. Pricing CTA: 100lvh beneath; big arrow dull until clicked. Work: unchanged (items forced visible). Testimonials: parted bubbles as static pinned bands, blockquotes scrolling through the gap. Contact: unchanged except the heart script off.
- Rules: shadows and blurs are not blanket-removed on mid/touch until tested on very capable iPads and phones; capable machines must not report as mid; logo SVGs to be made white by Michael, then the lite `filter` rules can go.
- Result at desktop: page length about 70,000px down to 16,000 to 24,000px.

## Still to do
1. **iPad Air 2 full-scroll retest** of 0.4.4 with `?perf=low&perf-debug` (last numbers before the layouts: Pricing 11, About 29, Portfolio 27 fps).
2. **Simple hard-coded GSAP touches** in lite (Michael's idea), non-scrubbed, once the retest shows headroom.
3. **Automatic trigger**: calibrate from the terminal's first frames at load (hero 17 to 19fps on the iPad Air 2, 59 elsewhere), remember the result in localStorage for weeks, decide before the first scroll. The Samsung's trouble starts later (Testimonial wall), so scroll measurement still has to catch it.
4. **Faulty Terminal quality API** (mid tier) and pause-when-covered: `docs/ft-quality-brief.md` (on hold).
5. **Resize guard** for the iPhone's 36 toolbar-driven `innerHeight` changes; settle pass; R-123 small Folio images (tiles are larger in lite).
6. Test no-shadow/blur on capable iPads and phones before any blanket removal.
7. Watch Portfolio: one 8fps reading at scrollY 26,787 on the iPad in lite + `ft` (single reading).

## 12 November 2026 update: automatic lite and the desktop tests
- **iPads (staging, same address with `?perf=low&perf-debug`):** older iPad full site 7fps in About, 9 in Folio, 13 in Portfolio, 24 in Pricing; lite 59fps in every section (14 readings, none slow). Newer iPad full site 5fps in the Testimonial wall, 8 in About, 17 in Folio; lite 59fps with one 45 in Pricing. Page length about 13,300px in lite against 43,000 to 45,000px.
- **Signals:** the newer iPad reports the same 4 cores, no memory, dpr 2, Apple GPU as the older one, so it also starts at mid.
- **Fade, reload and jump (0.5.0)** was tried and rejected by Michael as slow and worse on weak devices. 0.5.1 remembers lite for the next load instead (D-026).
- **Desktops:** M1 Mac Studio high, worst 100fps; M1 MacBook Air high, worst 60fps; 2009 Mac Pro Firefox high, worst 70fps. 2009 Mac Pro Chrome and Parallels Windows 10 Chrome stepped to mid with 13fps in the Testimonial wall (Parallels Chrome also 17 in About), Firefox on the same Mac Pro smooth. Parallels Edge: no WebGL, so the terminal and intro heart steps do not run, and it is slow in About (9fps). Safari 14 on the Mac Pro breaks (no `svh`/`lvh`): unsupported by decision.
- **Decided not to do:** lite for slow desktops; any special handling of no-WebGL browsers; Safari 14 support (D-026).
