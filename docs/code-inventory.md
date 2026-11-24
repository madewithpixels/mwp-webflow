# Custom code inventory (R-117, stage 0)

Written 24 November 2026 by Claude, from the Webflow API (every page's custom code boxes, the site's registered scripts) and the published pages (embeds). Box copies: `snapshots/2026-11-24/` (Site head and footer, Home head and footer; the four former registered scripts as downloaded are in `registered/`) and `snapshots/2026-11-23/` (Estimate head and footer).

## Custom code boxes
| Where | Size | What it holds | Bundle later | Before first paint? |
|---|---|---|---|---|
| Site head | 19,383 | shared core (`MWP`), site CSS, menu scrollbar width, project transition hide classes, view transition, frame-probe switch, Safari fixes, Portfolio Nav arrows (CSS and script), menu-open phone and email pills (CSS) | `site` (+ `portfolio` for the arrows) | core: yes until bundles are proven; project transition hide classes and view transition CSS: yes |
| Site footer | 29,193 | Lenis (unpkg), FaultyTerminal config, Lenis start, folio hover, project page transition, Back button, scroll magnet, menu closed on leave, project pages: menu anchors and swipe | `site` | no |
| Home head | 43,261 | arrival cover, `<link rel="expect">`, testimonial wall CSS, scroll redraw and menu jump, About sequence CSS, contents device, former registered pieces, short-screen pricing CSS and switch-off, former page embeds | `home` | arrival cover, `rel=expect` and short-screen pricing CSS: yes |
| Home footer | 35,761 | ticker, pricing, Contact logo, About sequence mask, FT logo resolve (jsDelivr tag), logo marquee | `home` | no |
| Estimate head / footer | 796 / 3,245 | Estimate page fixes; the estimate tool tags | `estimate` | no |
| 40 project pages, footer | 81 each, cleared 24 November 2026 | only a stale comment (now removed): `<!-- Prev/next nav script moved into the Portfolio Nav component (2026-09-30) -->` (that code is now in the Site head) | none | no |
| The other 9 pages (Lab, Sheffield, Doors and Windows, Content use, Style Guide, 404, three form success pages) and the project template | 0 | empty | none | no |

## Registered scripts applied (site-wide)
Only two are left, both on jsDelivr and both staying until the bundles: **MWPPerf 0.6.7** (head; performance tier, must run first) and **FaultyTerminal1123 1.12.3** (footer, SRI).
Moved into the Site boxes on 24 November 2026 and no longer applied: MenuContactPills (CSS, end of the Site head), MenuCloseOnLeave, ProjectMenuAnchors and MWPSwipeNav (end of the Site footer; the last two keep their `/portfolio/` check). The 40 project pages are separate static pages (not a CMS template), so "project pages only" is a path check in the Site boxes.

Registered but not applied: 27 (the 23 listed in the plan plus MenuContactPills, MenuCloseOnLeave, ProjectMenuAnchors and MWPSwipeNav 1.0.0/1.0.1) (list in `docs/js-consolidation-plan.md`, "Where we are"). Delete at the end; homenavclearhash source saved in `docs/registered-scripts-backup.md`.

## HTML embeds with code (found on the published pages)
| Embed | Where | Size | What | Proposal (Michael decides) |
|---|---|---|---|---|
| `.skip-embed` | every page, first in body | 2,900 | skip link: CSS and a script | **agreed (Michael, 24 November 2026):** CSS into the Site head, script into the Site footer, only the link stays in the embed. Designer session |
| `.offscreen` | SB Header component (`header.mwp-css-nav`) | 1,494 | menu overlay behaviour: CSS and a script | **leave in the component** (agreed, Michael, 24 November 2026: SmashBurger is his reusable library) |
| (no class) | SB Header, inside `nav.mwp-css-nav_panel` | 265 | Designer-only: hides the overlay panel in the canvas | keep: CSS for the Designer canvas can only live in an embed |
| (no class) | Home | 863 | Designer-only: `html.wf-design-mode .about, .pricing …` | keep (same reason) |
| `.breakpoints` embed | Home, inside `div.breakpoints` (conditionally invisible) | 364 | a viewport-size readout (writes into `.viewport-size`); still runs on the published page although hidden | **keep** (Michael, 24 November 2026) |
| `.icon-scroll` | Lab | 1,930 | a self-contained animated scroll icon (mouse outline with a moving wheel and chevrons): the embed holds its markup and its CSS together | Claude now suggests leaving it: it's one self-contained widget on the experimental Lab page; moving 1.9k of CSS out gains nothing. Michael to confirm |

## Before first paint (stays inline after the bundles)
Arrival cover and `<link rel="expect">` (Home head); project transition hide classes and the view transition CSS (Site head); the short-screen pricing CSS (Home head, avoids a flash); the loader; the shared core until the bundles are proven.
