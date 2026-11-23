# Custom code consolidation and jsDelivr switch-over: the plan (R-117, D-027)

Written 20 November 2026 by Claude, for the next working session.

**Progress, 23 November 2026:** an interim step done before stage 1: the registered scripts on Home and Estimate and the Code Embeds (Home, Portfolio Nav) were moved into the editable custom code boxes, so every page-level line is now in a box Michael can see. Box copies are in `snapshots/2026-11-23/` (part of stage 0). The Estimate fixes are one `<style>` and one `<script>`, ready to lift into `src/estimate/`. Proposed D-028 would bring the shared core (below, "Not in this job") into this job. Michael wants the pricing tablet band rethought before it is ported (STATUS, 23 November 2026).

## Why now
On 20 November one small pricing change took an evening. Here's what went wrong:
- The Home footer box hit Webflow's 50,000-character limit.
- One script (PricingTabletBand) found another by matching a comment, so shortening a comment broke the tablet layout.
- Agents can't safely edit one script inside a shared box: the MCP replaces the whole box.
- Michael had to hunt for code in Webflow.

Code is spread across site and page head/footer boxes, 22 registered scripts, HTML embeds, and copies in `src/` that have been out of date since 6 November.

**Michael, 20 November 2026:** "It should ALL be collated, revised, shortened (comments mainly), consolidated and deployed via jsdeliver. I'm happy for per page jsdeliver tags so that code only loads and reaches pages it's necessary on."

## What we keep
The build from R-117 is already here and works. `src/<bundle>/index.js` and `index.css` build into `dist/<bundle>.min.js` and `.min.css` with esbuild (target Safari 15). `npm run dev` serves `dist/` at `http://localhost:5173`. This plan uses all of that.

## What changes
1. **One source of truth.** Every line of custom JS and CSS lives in `src/`, one file per feature. Webflow holds only loader lines and the few things that must run before the first paint.
2. **Per-page bundles, loaded from jsDelivr:**

| Bundle | Loads on | Holds |
|---|---|---|
| `site` (.js + .css) | every page | menu, page transition, menu contact pills, menu close on leave, shared config |
| `home` (.js + .css) | Home | ticker, ticker mask, pricing, contact bubbles, contents device, nav jump, scroll redraw, testimonial wall extras, tablet bands |
| `portfolio` (.js + .css) | project template | project menu anchors, swipe nav, nav arrow styles |
| `estimate` (.js + .css) | Estimate | the seven estimate fixes (or fewer, see stage 2) |
| `perf` | every page, early in the head | MWPPerf (stays its own small bundle because it must run first) |

FaultyTerminal and the estimate tool stay in their own repos on jsDelivr, as now.

3. **The version lives in one place.** A small inline loader in the Site head sets the release (`MWP_VERSION = 'v1.0.0'`). Each page calls `MWP.load('home')` (or `'estimate'` and so on), which adds the script tag and stylesheet link for that release. A release means changing one string in the Site head and publishing. Scripts are added with `async = false`, so they run in order, like `defer`.
4. **A dev switch that skips the publish loop.** Visiting any staging page with `?mwpdev=1` remembers (in localStorage) that the loader should use `http://localhost:5173/` instead of jsDelivr, and shows a small "DEV" badge. `?mwpdev=0` switches back.
   - The loop becomes: run `npm run dev`, edit in `src/`, reload staging. No commit, tag or Webflow publish until it's right.
   - Chrome allows an https page to load from localhost. Safari and the iPad need checking: the iPad can't reach the Mac's localhost, so tablet checks use a pushed tag.
5. **Shared config replaces the hacks.** `site` sets `window.MWP` with the breakpoints, including the pricing band (stacked below 1280px), the tier from MWPPerf, and small helpers. Scripts read it, so nothing overrides `matchMedia` or looks for another script's comment. Because the bundles control their own order, the "this must run before that" fixes become plain imports.
6. **Comments get short.**
   - Each file opens with one or two lines: what it does, which R- items it serves, and what it needs (for example "needs ScrollTrigger").
   - `TUNE:` comments on settings stay.
   - History ("v2.3: …", "4 Nov: …") moves to ROADMAP and DECISIONS, where it already mostly is.
   - Minified output has no comments, but the source stays readable.
7. **Release command.** `npm run release` bumps the version, builds, commits `dist/` and tags it. Michael pushes (`git push && git push --tags`), changes the version string in the Site head, and publishes. A new tag means a new address, so jsDelivr's cache never gets in the way.

**Not in this job.** The old R-117 "shared core" (one scroll dispatcher, ported animations) is a performance rewrite and stays a separate later step. This job only moves, shortens and untangles code, and the site should behave exactly the same afterwards.

## Stages
Each stage: move the code, switch the page to the bundle, publish to staging, run the checks, and only then remove the old copies. Michael backs up before each publish (D-008).

**Rollback:** paste the old box back from the snapshot, or point the version at the previous tag.

**0. Snapshot and inventory (first session, about an hour)**
- Read every live code location through the MCP and save it under `snapshots/2026-11-xx/`:
  - Site head and footer
  - every page's head and footer (49 pages; most are empty)
  - all registered scripts with their source
  - every HTML embed on pages and in components (Portfolio Nav, SB Header, and others)
- Write `docs/code-inventory.md`, one row per block: where it is, size, what it does, which bundle it goes to, whether it's needed before first paint, what it depends on, and keep / fold / delete. Most of this is in the project doc "script-registry-2026-11-20" and `README.md`.
- Mark dead code, such as `custom.js` and any stopgaps the estimate tool should absorb.

**1. Loader and dev switch (small)**
- Add `MWP.load` and the dev switch to the Site head.
- Build an empty `test` bundle, tag `v0.2.0`, and check that it loads from jsDelivr and from localhost on staging.

**2. Estimate page (smallest, lowest risk)**
- Seven registered scripts. Decide per script: fold into the estimate tool repo (R-108/109/110/119 say they're stopgaps) or into `src/estimate/`.
- Switch, check at 1440, 768 and 393, then remove the registrations (Michael backs them up first).

**3. Project pages**
- Swipe nav, project menu anchors, Portfolio Nav embed CSS, image-drag rule.
- Check swipe, arrows and the menu anchors.

**4. Site-wide** (Site head about 10.6k, footer about 28.4k at the 12 November snapshot)
- Page transition, menu fixes and contact pills.
- The perf and FaultyTerminal registrations stay as they are.
- What must stay inline: the view-transition and arrival-cover pieces that run before first paint, and the loader.

**5. Home (biggest)**
- Home head about 38.7k and footer about 48.4k, plus 9 registered scripts.
- Split into files in their current run order. PricingTabletBand becomes part of `home` and reads `MWP` config.
- The hash-arrival cover (`html.mwp-arriving`) and `<link rel="expect">` stay inline in the Home head, because they must act before first paint.
- Probably two sessions: (a) CSS, contents device, ticker, testimonial extras; (b) nav jump, scroll redraw, pricing, contact bubbles.

**6. Clean-up**
- Delete the registrations that are no longer applied.
- Run R-146 (CSS back into the Designer) on the now-tidy `src/*.css`.
- Update README, AGENTS §6 (agents change the repo, not Webflow: D-005's qualifier) and STATUS.

## Checks for every stage (on published staging)
- **Widths:** 2044, 1440, 1234 (the pricing tablet band), 1024, 768, 393.
- **Menu:** every link, from the top and from part-way down, plus arriving with `/#pricing` from another page.
- **Modes:** reduced motion, lite mode (`?perf=low`), and Safari on the Mac. The iPad gets a checklist for Michael.
- **Console:** no errors, and the bundle size reported by the build.

## Risks and how we handle them
- **Run timing.** An inline box runs where it sits; a bundle runs after parsing. Scripts that patch something before Webflow or another script uses it (matchMedia, ScrollTrigger hooks, Lenis) must keep their order. The bundle's import order and the `MWP` ready hooks keep it, and each move is checked against the snapshot.
- **jsDelivr down.** Rare, but the site would lose its custom behaviour, not its content. Possibly add a fallback to the GitHub raw CDN later; not needed for launch.
- **Cache.** Always a new tag, never `@latest` or a branch name.
- **Character limits.** No longer an issue: Webflow keeps only loader lines.

## Decisions (settled by Michael, 20 November 2026)
1. The version lives in one place: the loader in the Site head.
2. jsDelivr tags (`@v1.0.0`), never moved.
3. The estimate tool's repo keeps only the tool's logic; the Estimate page fixes go into `src/estimate/` here. Styling fixes (gap, centring, question weight) go into the Designer if the Style panel can hold them (R-146), otherwise `src/estimate/`. The reliable-tap fix (R-119) is really a tool bug, so it moves into the tool the next time that repo is worked on.
