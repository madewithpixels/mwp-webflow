# Brief: quality levels, pause-when-covered and a still-image mode (faulty-terminal v1.13.0)

**ON HOLD (Michael, 6 November 2026): "I'll paste your response and ask it to hold until we're ready".** Do not start the terminal work yet. Reason: the low (lite) mode does not need any library change (the site blocks WebGL and shows a still image itself), and the brief mostly serves mid-tier devices, none of which has shown a need yet. Revisit after lite is finished and we have seen how real mid devices perform; pause-when-covered is the one item that would help every device, but its gain is unmeasured. Michael will say when to resume.

**Revised 6 November 2026** after the faulty-terminal thread's review of the first version. The corrections are marked "(revised)" below. Baseline is v1.12.2 (commit 7c99a93, the one the site loads), which lives on `fix/safari-first-run-stutter`, not on main: branch from there and leave out the 1.12.3 site-wiring commit.

Written 6 November 2026 from the perf watcher's device tests (`docs/perf-findings-2026-11-06.md`). For the faulty-terminal project; Michael runs this brief there himself. The site side (MWPPerf, the tier script) is Claude's and is described at the end.

## Why
On an iPad Air 2 (iOS 15.8, 2GB, dpr 2) the live Faulty Terminal is the biggest single cost on the Home page. Measured on the staging site with every other effect left alone:
- Hero at load: **17 to 19fps with the terminal, 59fps without** (`?perf-kill=ft`).
- With the terminal off the Folio wall, Intro and Pricing sections went from 13 to 22fps to 30 to 45fps.
- Hiding filters, shadows, Folio images or the Testimonial rows changed nothing: the terminal's full-screen WebGL at dpr 2 is the cost.
(revised) The site passes **no `dpr` option** (it sets only `warmStart`, `reveal`/`revealFallback` and `scale`, which is 2 above 767px wide and 1 at or below), so the library renders at its default dpr of 1, at CSS pixels times `renderScale`, capped by `maxPixels`. The iPad Air 2's own dpr of 2 is therefore not what costs the frames. The cost is the pixel count and the multi-pass phosphor. An iPad at 1024px wide also counts as desktop on the site, so it gets grid `scale` 2.

The iPhone 15 holds about 59fps with the terminal running, so this is about weak devices only. High-end behaviour must not change.

## Goal
Three additions, all off by default so every existing option reproduces v1.12.2 frame for frame:
1. A **quality API** the site can set per performance tier.
2. **Pause and resume**, including automatic pause while the terminal is completely covered.
3. A **still-image mode** that never creates a WebGL context (for the site's "low" mode).

## 1. Quality levels
`setQuality(q)`, also accepted as the constructor option `quality`. Fields (all optional, unspecified = leave as is):
| Field | Meaning |
|---|---|
| `renderScale` | Fraction of the canvas resolution to render at (the existing option; the API just lets the site change it live). |
| `maxDpr` | (revised) Optional, `min(current dpr, maxDpr)`: it can only lower the dpr. A no-op at the library's default dpr of 1, so `renderScale` is the real mid-tier lever. |
| `fps` | (revised) Runtime override of the existing `targetFPS`, with the same 2ms slack as v1.12.2. |
| `extras` | (revised) `true` (default) or `false`. `false` = phosphor off (the only multi-pass feature: scene to a render target, blend, copy to screen, three full-screen passes per frame) and chromatic aberration forced to 0. The degauss fringe is logo-only and is left alone. The changelog says so. On mid the visible change is the loss of the phosphor trail. |
- `setQuality` must work while running (resize the drawing buffer, no flash, no re-init) and must be safe to call before first paint.
- `autoTune` must respect the caps: it may lower quality further but never above what `setQuality` allows (one `renderScaleCap` feeding `targetScaleForSize`, `endWarm` and the autoTune climb). `holdFullScale` and the logo hold ignore it until the hand-off.
- Starting values the site will use (to be tuned on the iPad Air 2 and the Samsung):
| Tier | renderScale | maxDpr | fps | extras |
|---|---|---|---|---|
| high | unchanged | unchanged | unchanged | on |
| mid | about 0.75 | (not needed) | 30 | off (phosphor) |
| low | not used: still-image mode (3) | | | |
- Keep the existing note that the logo resolve renders at full scale until the hand-off; the site will not apply a lower tier until the resolve is done, or on mid it may skip the resolve (site decision).

## 2. Pause, resume, pause-when-covered
- `pause()` stops requesting animation frames and holds the last frame; `resume()` restarts without a jump in time (the field must not fast-forward). (revised) `iTime`, the ripple, the logo timeline and `startLoop` run on the raw rAF timestamp, so this needs a paused-time offset on the clock (0 when nothing is paused). Apply the no-jump clock only to `pause()`, `setVisible` and the covered pause; the hidden-tab path stays exactly as in v1.12.2. The existing `pause` option (freezes `iTime` while the loop keeps rendering) keeps its meaning; the new `pause()` method stops the loop.
- Option `pauseWhenHidden` (default `true`): pause when `document.hidden`.
- Option `pauseWhenCovered` (default `false`) with the site passing the covering elements as a selector list, e.g. `coverSelectors: ['.about', '.pricing', '.portfolio']` (to be confirmed on the site; Testimonial wall is not fully opaque, so it is not on the list). When the canvas is completely covered by opaque listed elements, pause; resume as soon as any of it is visible again. (revised) The terminal is fixed behind the whole page, so an observer on the terminal itself never fires, and an IntersectionObserver on a cover element only reports viewport crossings. Use IntersectionObserver with a fine threshold array on the cover elements as the trigger, then take the union of the cover rectangles against the canvas rectangle with a small tolerance (two adjacent covers such as About then Pricing can cover it together). No scroll listeners. The selector list is trusted for opacity; transparency cannot be detected.
- Also expose `setVisible(false|true)` so the site can drive it directly from its own timeline.
- Reason: on every device, rendering a full-screen shader nobody can see is wasted work; on the Mac it just burns power, on the iPad it costs frames in the neighbouring sections.

## 3. Still-image mode (no WebGL)
- Option `mode: 'live' | 'still'` (default `'live'`), or a separate call `FaultyTerminal.still(container, { src })`: whichever is simplest for the loader. In still mode:
  - No WebGL context is created and no shader is compiled. (revised) `createStaticInstance` already no-ops the API and fires `ready` and `logo-resolved`; the gaps are that init creates a WebGL context just to probe for software rendering, and that there is no image. For `mode: 'still'` branch before the Renderer is created and add an `<img>` with `object-fit: cover`, `aria-hidden` and `decoding="async"`.
  - The container shows an image: `src` (a URL the site gives it; the site hosts the file on jsDelivr), sized `cover`, same position and size as the canvas would have, `aria-hidden`.
  - The API stays callable and does nothing (`setFieldProgress`, `holdFullScale`, `retrigger`, logo-resolve calls resolve immediately), and fires the same events (including `faulty-terminal:logo-resolved`) so the site's timeline code does not need special cases. The HTML heart stays visible as it already is when `softwareFallback` is used.
  - Honours reduced motion already.
- This is the same state the site gets today when WebGL is refused (`?perf-kill=ft` makes `getContext('webgl')` return null and hides the wrapper), made deliberate and with a picture in it.
- Michael approves the still: a frame of the live hero at the field's resting state, delivered as a WebP around 1920 x 1080, under 150KB. The site (Claude) makes it and hosts it.

## Constraints
- Every new option off must reproduce v1.12.2 frame for frame (same shader output, same timings).
- No new dependency; keep the bundle size increase small (the still mode should add almost nothing).
- Safari 15 (iPad Air 2) is a target: no `scrollend`, no `color-mix`, WebGL2 limits as on the A8X; do not rely on newer browser features.
- Paint-safe start stays intact.

## Deliverables
- v1.13.0 build (dist + embed + loader SRI), CHANGELOG entry, README options table.
- A short "site wiring" note: how the site calls `setQuality` from the tier, passes `coverSelectors`, and chooses `mode: 'still'` with the image URL. Claude does the Webflow side from that note.
- Tell Claude the new version's jsDelivr URL and SRI hash; Claude registers it as a new FaultyTerminal script version in Webflow (as with 1.12.2) and wires the tier.

## Site side (Claude, afterwards)
`window.MWPPerf` already provides `tier` ("high", "mid", "low"), `onChange(fn)` and sets `data-perf` on `<html>`. The site will: on mid, call `setQuality` with the mid values and enable `pauseWhenCovered`; on low, start the terminal in `still` mode with the poster; on high, change nothing except optionally `pauseWhenCovered`. The tier is decided before the terminal starts wherever possible (remembered result, or a quick load-time check from the terminal's own first frames: hero 17 to 19fps on the iPad Air 2, 59 elsewhere).
