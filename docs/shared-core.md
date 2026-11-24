# Shared timing core (D-028)

Written 23 November 2026 by Claude. One small inline script at the top of the Site head defines `window.MWP`; page scripts register with it instead of adding their own listeners, loops and polls. Built in the Webflow custom code boxes first (tested on staging), then moved into `src/` for the jsDelivr bundles (docs/js-consolidation-plan.md).

## What it provides
| | Replaces |
|---|---|
| `MWP.onScroll(fn)`: one dispatcher, at most once per frame; runs inside Lenis's own scroll callback while Lenis is scrolling (no one-frame lag) | separate `scroll` + `lenis.on('scroll')` listeners and rAF queues in pricing, contents device, folio hover, About sequence |
| `MWP.onResize(fn)`: one debounced resize (150ms) | per-script resize timers |
| `MWP.loop(el, fn)`: `fn(now)` every frame only while `el` (or any of an array of elements) is within a screen of the viewport | always-running rAF loops (ticker flick/highlight, contact logo) |
| `MWP.lenis(fn)`, `MWP.scrollTrigger(fn)`: run once Lenis / ScrollTrigger exist | the 100ms polls in folio hover, scroll magnet, scroll-redraw hook, pricing short-screen switch-off |
| `MWP.desktop`, `MWP.reduce`, `MWP.clamp`, `MWP.lerp`, `MWP.ease` | the same helpers written out in three or four scripts |

## Rules
- Restructure, not rewrite: each script keeps its behaviour and its TUNE settings. The tuned fixes (sticky re-measure, `mwpPlayInOrder`, Lenis timing, the scroll magnet's wheel capture) stay as they are.
- A subscriber that throws is logged and skipped; the others still run.

## Steps (each: test copy in frames, write, publish to staging, hash-check)
1. Core in the Site head; Site footer folio hover and scroll magnet onto it. **Done 24 November 2026** (staging, `snapshots/2026-11-24/`).
2. Home head: scroll-redraw hook, contents device, hash landing, pricing short-screen switch-off. **Done 24 November 2026**: hook and contents device moved; hash landing and pricing switch-off kept (they wait for layout or the pin, not just ScrollTrigger).
3. Home footer: pricing, ticker and contact (loops sleep off screen), About sequence. **Done 24 November 2026**; `MWP.loop` now also takes several elements (Contact runs while the testimonial wall or Contact is near).
