# Tuning inventory (25 November 2026)

Source: the four boxes as published on staging, snapshots in `snapshots/2026-11-25/`.
Webflow publishes an unused variable on `:root` (tested with Probe = 42), so every number below can live in the **Tuning** collection and be read in code as `--_tuning---<name>`, with today's value kept as the fallback.

Rule: plain numbers go to Tuning. Lists, text, selectors and on/off switches stay in a `tuning` block at the top of each script. Media-query widths and heights (992, 750, 767) cannot use variables, so they stay in code and are listed at the bottom.

Units: the variable holds a plain number. The unit is fixed by the name (`ms`, `px`, `vw`, `screens`, `s`).

## Site footer

| Feature | Setting (Webflow name) | Now | Unit |
|---|---|---|---|
| Faulty terminal | Terminal Phone Scale | 1 | scale |
| Faulty terminal | Terminal Desktop Scale | 2 | scale |
| Folio preview | Folio Preview Width | 400 | px |
| Folio preview | Folio Preview Gap | 16 | px |
| Folio preview | Folio Preview Fade | 150 | ms |
| Folio preview | Folio Preview Swap | 120 | ms |
| Folio preview | Folio Preview Scale From | 0.97 | ratio |
| Project slide | Project Slide Duration | 420 | ms |
| Project slide | Project Slide Stagger | 70 | ms |
| Project slide | Project Slide Edge Gap | 8 | px |
| Project slide | Project Slide Image Wait | 1200 | ms |
| Scroll magnet | Magnet Quiet | 220 | ms |
| Scroll magnet | Magnet Absorb Max | 2500 | ms |
| Scroll magnet | Magnet Glide Min | 0.35 | s |
| Scroll magnet | Magnet Glide Max | 1.1 | s |
| Scroll magnet | Magnet Zone Ahead | 0.35 | screens |
| Scroll magnet | Magnet Zone Past | 0.2 | screens |
| Scroll magnet | Magnet Rest | 140 | ms |
| Scroll magnet | Magnet Catch (1 on, 0 settle only) | 1 | switch |
| Touch swipe | Swipe Min Distance | 60 | px |
| Touch swipe | Swipe Max Time | 700 | ms |

Stay in code: the slide easing curve, the three slide targets, the storage keys, the Lenis options (autoRaf, anchors and so on), the `MOBILE_MAX_WIDTH` 767 and `MIN_WIDTH` 992 widths.

## Site head

| Feature | Setting | Now | Unit |
|---|---|---|---|
| Shared core | Resize Delay | 150 | ms |
| Header bubble | Bubble Edge Margin | 12 | px |
| Header bubble | Bubble Gap | 14 | px |
| Header bubble | Bubble Hide Delay | 250 | ms |
| Header bubble | Bubble Copied Reset | 1600 | ms |
| Page morph | Morph Title Duration | 0.35 | s |
| Page morph | Morph Image Duration | 0.6 | s |
| Page morph | Morph Page Fade | 0.45 | s |

Stay in code: the PORTFOLIO order list (arrows), the speculation rules, the core's internal 100ms/10s poll and loop margin.

## Home footer

| Feature | Setting | Now | Unit |
|---|---|---|---|
| Ticker | Ticker Friction | 0.94 | 0 to 1 |
| Ticker | Ticker Drag Threshold | 4 | px |
| Ticker | Ticker Sweep Start | 0.3 | of section |
| Ticker | Ticker Sweep End | 0.7 | of section |
| Ticker | Ticker Sweep Start Small | 0.1 | of section |
| Ticker | Ticker Sweep End Small | 0.9 | of section |
| Pricing | Pricing Drop End | 0.15 | of scroll |
| Pricing | Pricing Form End | 0.32 | of scroll |
| Pricing | Pricing Card Stagger | 0.025 | of scroll |
| Pricing | Pricing Inner Inset | 3 | vw |
| Pricing | Pricing Min Inset | 0.06 | of screen height |
| Pricing | Pricing Radius | 48 | px |
| Pricing | Pricing Gap | 2.4 | vw |
| Pricing | Pricing Max Card | 600 | px |
| Pricing | Pricing Max Gap | 48 | px |
| Pricing | Pricing Text Inset | 2.4 | vw |
| Pricing | Pricing Menu Clear | 16 | px |
| Bubble and heart | Heart Fly-in Start | 182 | wall units of 192 |
| Bubble and heart | Heart Fly-in End | -0.5 | screens |
| Bubble and heart | Heart Stagger | 0.35 | ratio |
| Bubble and heart | Heart Pick Margin | 0.25 | screens |
| Bubble and heart | Heart Wall Fade | 0.55 | of fly-in |
| Bubble and heart | Heart Hold | 4000 | ms |
| Bubble and heart | Heart Spin | 900 | ms |
| Bubble and heart | Heart Ripple | 500 | ms |
| Bubble and heart | Heart Spin Back (1 on, 0 off) | 0 | switch |
| Bubble and heart | Heart Trigger (small screens) | 0.1 | screen fraction |
| Bubble and heart | Heart Rearm (small screens) | 0.9 | screen fraction |
| Bubble and heart | Heart Pixel Pitch | 18 | px |
| Logo marquee | Marquee Speed | 180 | px per second |

Stay in code: the BUBBLE pixel map (7 strings), the ticker copy count 6 (the native Ticker Drift interaction assumes it), the pricing short-screen height 750, the `data-lite` switch.

## Home head

| Feature | Setting | Now | Unit |
|---|---|---|---|
| Menu jump | Menu Jump Settle | 450 | ms |
| Contents device | Contents Read Line | 0.5 | screen fraction |
| Contents device | Contents Rail Overhang | 8 | px |
| Hero scroll cue | Scroll Cue Sweep | 2.4 | s |
| Arrival cover | Arrival Failsafe | 4.5 | s |
| Hash arrival | Arrival Back Landing | 1.8 | s |

Stay in code: the ENTRIES list with its per-entry `land` offsets, every selector, the pricing short-screen height 750 and widths, the Home slate colour fallbacks.

## Estimate boxes

Nothing tunable (stopgaps only: 10px touch move, 450ms tap de-dupe, 24px/16px nav gap). Left as they are.

## Totals

About 70 numbers, 70 variables. Fixed in code: 992 / 767 / 750 media widths, all lists and selectors.

## Headroom

| Box | Characters | Limit |
|---|---|---|
| Site head | 26,448 | 50,000 |
| Site footer | 32,045 | 50,000 |
| Home head | 44,439 | 50,000 |
| Home footer | 36,404 | 50,000 |

Reading the variables adds about 250 characters to the Site head once (one helper), then roughly 40 per setting where it is used, so the Home footer needs about 2,000 and has 13,600. The Home head is the tight one (5,500 left).
