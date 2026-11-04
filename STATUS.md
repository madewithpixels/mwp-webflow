# madewithpixels website — Status

## 4 November 2026 — Claude (night shift) — Contents device: the About rail made solid and joined to About (R-099, brief #298)
**Changed:** Webflow, site madewithpixels, **Home page, head custom code** only: every other block kept exactly (read first, written back whole, echo checked); only the contents-device CSS changed. No classes, elements, interactions or other pages. Published to staging (madewithpixels-dev.webflow.io) only. Repo: `contents-device.html` (R-029), `snapshots/custom-code.json` (Home head). State: built. Evidence: verified (live). Acceptance: see below.
**Michael, in boss (brief #298):** a screenshot (Desktop, 4 November 2026, 13:45) with *"Make sense?"* and no other words. I read it as the closed device showing the About parts badly. **This is my reading (inferred — confirm).** What I saw in it: the rail was dotted, not solid; it began about a dash-height below About's dash and stopped short of the last part, so it did not join to About; the part dashes were dimmer than the main ones.
**Fixed:** (1) the rail is 2px, like the dashes, so it draws solid (a 1px line with a backdrop filter broke into dots); (2) it now runs from About's dash down to the last part's dash; (3) the part dashes are the same brightness as the main ones (opacity 0.6, was 0.5); inset 16px, was 14px. Nothing else changed: row heights, labels, hover and the jump behaviour are as in brief #295.
**Accepted by Michael in boss:** 4 November 2026 — R-099 (checked: not stated). Recorded as boss reported it. The brief above came in after, so this change is new and he has not seen it.
**Checked how (verified live, staging):** Chrome on the Mac Studio, 2044px viewport. Computed styles on the published page: rail 2px wide, top -9.75px, last rail bottom 6.9px, part dash opacity 0.6; screenshot zoom shows a solid rail from About's dash to the last part. The same rules were first tried by injecting them into the old page. Not checked: Safari and Firefox (`:has()` is supported in current versions); the open panel; other backgrounds; phone and tablet (hidden below 992px). If his screenshot meant something else, I have not seen it.
**Backups:** "boss · brief #298 · before" and "· after", both on the Webflow dashboard Backups page (fallback route: the Designer address redirected to the dashboard). Both seen in the list.
**Snapshot caveat:** only the Home head changed in `snapshots/custom-code.json`; interactions are not in snapshots.
**Still open:** Michael looks at the About parts on staging and says if this is what he meant. Acceptance of this change is his.
**Notes carried from boss's inbox:** the tasks without roadmap items are already covered (see the entry below); the deleted-task items (R-082, R-036, R-037, R-074, R-086, R-076, R-042, R-059) are still kept for him to decide; his reorders stand.
— Claude (night shift)

## 4 November 2026 — Claude (night shift) — New task written up (R-101, brief #297)
**Changed:** Added R-101, "in the pricing CTA section @mobile I've added a button for the estimate page - it's missing it's tricolour arrow. Add it" (Phase 3, after R-093), from Michael's task 43612359. Roadmap only: no Webflow, site or task changes. State: planned. Acceptance: pending.
**Already covered, no new item:** #43612357 is R-099 and #43612354 is R-097. The other inbox tasks (MWP landing pages, Launch MWP social campaign, Adjust Estimator, Launch prep, Finish MWP site, Responsive layouts) are group headings already covered by the goal and phases, as the roadmap preface says.
**Guesses in R-101 (marked "confirm"):** the section is the Home page Pricing CTA; the arrow is the coral, pink and teal one used on other buttons; phone width only.
**Tasks deleted in Michael's list, kept for him to decide:** R-082, R-036, R-037, R-074, R-086, R-076, R-042, R-059 (and R-043, already accepted). His reorders (R-038 and R-076 before R-075; R-082 before R-032; R-094 and R-034 before R-085) are kept; I saw nothing they put ahead of work it depends on.
**Checked how:** read the roadmap and STATUS; no browser used.
— Claude (night shift)

## 4 November 2026 — Claude (night shift) — Contents device: readable on every background, 25% tighter, About parts clearer (R-099, brief #295)
**Changed:** Webflow, site madewithpixels, **Home page, head custom code** only: every other block kept exactly (read first, written back whole, echo checked); the contents-device block replaced. No classes, elements, interactions or other pages. Published to staging (madewithpixels-dev.webflow.io) only. Repo: `contents-device.html` (R-029), `snapshots/custom-code.json` (Home head). State: built. Evidence: verified (live). Acceptance: pending.
**Michael, in boss (brief #295):** *"The contents markers need to be readable on every BG colour the site has, Will a mix blending mode be of use there? The lines are too spaced apart - it should be 25% tighter. The sub-sections of the about entry aren't immediately obvious as sub-sections - improve it"*
**1. Readability.** I tried `mix-blend-mode: difference` first (white dashes flip to dark on light backgrounds). It works on slate, offwhite, raspberry and coral, but on the site's teal (#37907f) the result has almost the same brightness as the background (contrast about 1.1 to 1), so the dashes would nearly vanish. So each dash now uses a backdrop filter (grayscale, invert, high contrast): it shows whatever is behind it as pure black or white, whichever contrasts. Seen white on slate and over the raspberry and teal pricing cards, black on the light grey. The open panel has its own dark backing, so its dashes are white there; the raspberry hover colour is kept. Not seen: over the coral card, the offwhite and darkgrey sections specifically, and a mid-grey photo (a background close to 50% grey is the one case where it will flicker between black and white).
**2. Tighter.** Row spacing cut so the whole stack is 180px tall, was 240px (exactly 25%): main rows 26px to 19.5px, About parts 21px to 15.8px. Measured live.
**3. About parts.** They are inset 14px from the main dashes and hang off a thin vertical rail, so they read as a bracket under About; smaller dashes and labels as before.
**Checked how (verified live, staging):** Chrome on the Mac Studio, viewport 1467 wide. Row heights measured by script (sum 180.1px); computed backdrop filter present on the published page; four `is-sub` rows; "We work with" marked current at 23500px; screenshots at Intro/About over the light panel, over the pricing cards and over slate; hover panel seen open on the page with the test styles before publishing (the same rules). No console errors. Not checked: Safari and Firefox (backdrop filters are supported in both, not seen); the open panel on the published copy; phone and tablet (hidden below 992px).
**Backups:** "boss · brief #295 · before" and "· after", both on the Webflow dashboard Backups page (fallback route: the Designer address redirected to the dashboard). Both seen in the list.
**Snapshot caveat:** only the contents block of the Home head was replaced in `snapshots/custom-code.json`; interactions are not in snapshots.
**Still open:** look at it on staging; whether a flat white dash with a shadow is preferred to the black/white flip. Acceptance is Michael's.
**Next useful action:** Michael tries it and says what to change.
— Claude (night shift)

## 4 November 2026 — Claude (night shift) — Burger menu desktop fault: Michael chose to fix it in SmashBurger; brief written (R-097, brief #293)
**Changed:** docs only (this entry, R-097 set to blocked, R-096 recorded as accepted). Nothing changed in Webflow or the code; nothing published.
**Accepted by Michael in boss:** 4 November 2026 — R-096 (checked: Looked at brief #294's result). This closes the "look at Home on staging" request from the previous entry.
**Michael, in boss, 4 November 2026 (brief #293):** chose option C — *"Tempted to choose C. Can you give me a brief for the smash burger development thread that I can copy/paste to get the issue fixed immediately"*.
**Outputs:** a copy-and-paste brief for the SmashBurger thread, sent to Michael in boss (full text there). It asks for `Webflow-Navbar-Light` (v0.2.6, `onBreakpointChange`) to close the menu only when the breakpoint actually changes, not on every `resize`; it gives the cause, the steps, the numbers and a test.
**Checked how:** nothing new run; the facts come from the 4 November 2026 stress-test entry below (brief #269).
**Still open:** the fix, the new library version, and pointing the site at it (R-030). Until then the menu is unusable on desktop widths (1024 and up) on staging. Option A (stop the fake `resize` in the Home head ticker script) is still available and small if the wait is long.
**Needs Michael:** take the brief to the SmashBurger thread.
**Next useful action:** when SmashBurger has a fixed version, repoint the site and re-test at 1440, 1024, 768 and 390 on staging.
— Claude (night shift)

## 4 November 2026 — Claude (night shift) — Hero strapline blur fixed on staging (R-096, R-087, brief #294)
**Changed (in Webflow, Home page):** the interaction "Hero Fade Out" (`i-7bbab732`), step "Brand Name Blur" only. It used to target the whole `--Can-blur` class, which hit both the logo wrapper and the strapline inside it. It now targets the logo wrapper element only (`ce1bc9e2-6596-7666-3e6f-6eb7e83a156e`). The strapline still blurs and fades with the wrapper, because it sits inside it. All other steps, timings and the trigger were sent back unchanged and read back identical. No class, style, element or custom code changed. Published to madewithpixels-dev.webflow.io only. State: built. Evidence: verified (live; Chrome on the Mac Studio, 1512px window only). Acceptance: pending.
**Michael's reasoning, confirmed:** two animations were driving one element. The step was one class-wide action, so the strapline got its own copy of the blur, which read a bad start value (5px) when drawn after its parent. Removing that second driver removes the stuck value. This is option A, done by retargeting rather than deleting, because the step is shared by class and there was no separate strapline step to delete.
**Checked how:** by script on published staging, strapline computed filter: first load `blur(0px)` (was `blur(5px)`); down to 2600px `blur(5px)`, opacity 0, then back to top `blur(0px)`, opacity 1; reload, scroll to 1500px after 1.5s, then top: `blur(0px)`; mid-scroll, jump to 9000px, jump to top: `blur(0.0874px)` 200ms after, `blur(0px)` settled. Wheel and keyboard input, a look by eye, and the 1024, 768 and 390 widths were not re-run.
**Backups:** "boss · brief #294 · before" and "boss · brief #294 · after", both made in the Designer.
**Snapshot:** no file under snapshots/ changed: the Webflow tools cannot snapshot interactions, so this change is in no snapshot. The before backup is the restore point. The write dropped an empty `breakpoints: []` from the reduced-motion rule, which has no effect.
**Left alone:** the empty duplicate `i-9e2a7fda`. The strapline's own opacity fade (Brand Name Fade) is also class-wide and still doubles up with the wrapper's fade; harmless for this bug, could be tidied the same way.
**Needs Michael:** look at Home on staging at the top, after a scroll to the bottom and back, and after an immediate scroll on load. Acceptance is his.
**Next useful action:** Michael accepts or rejects; if accepted, R-087 closes with it.
— Claude (night shift)

## 4 November 2026 — Claude (night shift) — Home page scroll length and pacing, section by section (R-042, brief #271)
**Changed:** docs only (this entry and the R-042 roadmap item). Nothing in Webflow, no interaction, no class, no custom code, no publish.
**Checked how (verified live, measured):** published staging Home (madewithpixels-dev.webflow.io), Chrome on the Mac Studio. **1440px:** the real window, viewport 1440 by 813. **390px:** the window would not shrink, so I loaded the same page in a 390 by 844 same-origin frame and measured inside it. Positions are read from the page (each section's top and height) and from the scroll animation library's start and end points, not by watching the page with my eyes. So the "feels long or short" notes are my judgement from length against content, not a viewing; I did not take screenshots. One viewport height (vh) = 813px at 1440, 844px at 390.

**Total page scroll length.** 1440px: page 53,746px tall, so 52,933px of actual scrolling = 65.1 viewport heights. 390px: 38,349px tall, so 37,505px of scrolling = 44.4 viewport heights. Phone is about 30% shorter, almost all because the Ticker sequence is hidden there and the Promise, Pricing and Work are not pinned.

**Table (px from the top of the page; "pinned" = a sticky stage holds the screen while the page scrolls under it).**

1440px wide:
- Hero strapline: 0 to 1,301 = 1,301px, 1.6 vh. Pinned (hero is sticky; its animation runs from 488 to 1,829).
- Project wall (folio-wall, the sideways project sequence): 1,301 to 11,626 = 10,325px, **12.7 vh**. Pinned, scrubbed throughout.
- Intro ("For almost two decades..."): 11,634 to 14,488 = 2,846px, 3.5 vh. Pinned (about 2,030px of hold).
- Promise hold ("Our promise"): 14,488 to 16,998 = about 2,510px, 3.1 vh. Pinned. **In flux (R-035).** The split between Promise and the Ticker is inferred from the animation start points (a 1,575px stretch from 15,423, then the Ticker stretch from 16,998).
- Sector mask / Ticker sequence: 16,998 to 26,463 = 9,465px, **11.6 vh**. Pinned. **In flux (R-035).**
- "Your website. Built to last." and the focus list: 26,463 to 28,902 = about 2,440px, 3.0 vh. Pinned for about 1 vh in the middle.
- Pricing: 28,902 to 32,966 = 4,064px, 5.0 vh. Pinned for 2,845px (3.5 vh), then the cards release and the next section starts under them (about 400px overlap with Work).
- Work (portfolio list): 32,966 to 37,835 = 4,869px, 6.0 vh. Not pinned; the project cards stagger in as you scroll.
- Testimonials (testi-wall): 37,843 to 52,640 = 14,797px, **18.2 vh**. Pinned, scrubbed throughout.
- Contact and page end: 52,640 to 53,746 = about 1,100px, 1.3 vh. Not pinned.

390px wide:
- Hero strapline: 0 to 1,398 = 1,398px, 1.7 vh. Pinned.
- Project wall: 1,398 to 12,117 = 10,719px, **12.7 vh**. Pinned.
- Intro: 12,126 to 13,822 = 1,688px, 2.0 vh. Not pinned (stage is a normal block); the text and brands animate as it passes.
- Promise: 13,822 to 14,812 = about 990px, 1.2 vh. Not pinned in practice (the sticky is declared but its parent is one screen tall). **In flux (R-035)**, but at this width there is no hold to speak of.
- Ticker sequence: hidden at this width, 0px.
- "Built to last": 14,812 to 15,925 = 1,113px, 1.3 vh. Not pinned.
- Pricing: 15,925 to 18,454 = 2,529px, 3.0 vh. Not pinned.
- Work: 18,453 to 21,673 = 3,220px, 3.8 vh. Not pinned.
- Testimonials: 21,682 to 37,043 = 15,361px, **18.2 vh**. Pinned.
- Contact and page end: 37,043 to 38,349 = about 1,300px, 1.5 vh.

**Where the length is.** At 1440px, three sections are 12.7, 11.6 and 18.2 vh: together 42.5 of the 65 vh (65%). The Ticker sequence is in flux, so the real pacing question is the other two. On phone, the project wall and testimonials alone are 31 of 44 vh (70%).

**What looks long or short for its content (judgement from numbers, not viewing).**
- **Testimonials, 18.2 vh at both widths: longest in proportion to content.** The same length on a phone as on a desktop, though the phone has less to read per step.
- **Project wall, 12.7 vh at both widths:** long, but it is the main showpiece, and it tells the story of hundreds of projects. Probably meant to be.
- **Ticker sequence, 11.6 vh (desktop only) and Promise, 3.1 vh: in flux.** Not judged.
- **Intro, 3.5 vh at desktop for one paragraph:** long compared with the phone's 2.0 vh.
- **"Built to last", about 3 vh at desktop but only 1.3 vh on phone:** gap between widths.
- **Pricing, 5.0 vh at desktop:** the cards need the time to drop in, so it is fair; on phone it just scrolls.
- **Work, 6.0 vh desktop and 3.8 vh phone:** fine for a list of eight cards that stagger in.
- **Hero, 1.6 vh:** short, quick; fine.
- **Contact, 1.3 vh:** short, as expected.

**Suggested pacing adjustments (options only, nothing built; under D-007 Michael picks, and any change to the scroll tracks is subject to the D-017 sticky and redraw checks).**
1. **Shorten the Testimonials hold.** Options: (a) cut the track by about a third (to roughly 12 vh) at desktop, keeping every card; (b) cut it harder on phone only (for example 10 vh), since one screen shows less; (c) leave desktop and only add a fast-forward by making the early cards appear sooner. Visitor sees: reaches Contact sooner. Risk: the entries are read one at a time; too short and they flash past.
2. **Trim the Project wall by 2 to 3 vh.** Options: (a) shorten by 20% at both widths; (b) shorten at phone only; (c) leave as is because it is the showpiece. Visitor sees: less empty scrolling between projects.
3. **Tighten the Intro hold at desktop.** Options: (a) bring 3.5 vh down towards the phone's 2.0 vh; (b) leave desktop and lengthen phone; (c) leave. Visitor sees: the paragraph resolves faster.
4. **Revisit Promise and Ticker once R-035 settles.** Options: (a) re-measure then and set a target as a share of the total (for example Promise plus Ticker no more than 12 vh); (b) fix Promise at about 2.5 vh and let the Ticker take what it needs. Nothing to do yet; both are in flux.
5. **Give the page an overall target.** Options: (a) aim for about 50 vh at desktop (cutting about 15 vh, mostly from options 1 to 3); (b) leave the total and just rebalance; (c) set a per-section ceiling (say 10 vh) for any one pinned stretch. Visitor sees: a shorter, more even page.
I would start with option 1 (a) and 3 (a): the lowest-risk, biggest gain, and neither touches the in-flux sections.

**Not checked:** how the pacing feels by eye or on a trackpad (no one at the screen); tablet widths; the scroll-magnet behaviour (desktop only, D-019). The two scroll tracks also depend on the ticker helper's measuring, so the numbers can shift by tens of pixels after a resize or redraw.
**Needs Michael:** nothing blocking. If he wants any of the options, pick in boss.
**Acceptance:** not applicable (measurement only).
**Next useful action:** Michael picks from the five options; then build in the Designer with a backup first.
— Claude (night shift)

## 4 November 2026 — Claude (night shift) — Separator in the scroll animations: three options (R-034, brief #270)
**Changed:** docs only (this entry and the R-034 roadmap item). Nothing in Webflow, no class, no interaction, no custom code, no publish.
**Checked how (verified live):** published staging Home, Chrome on the Mac Studio. The browser window would not go wider than 800px, so I measured inside a 1440px-wide same-origin frame, scrolling to 30 positions and reading each separator's position and width. I also read the repo snapshots (interactions and classes). The snapshots do not contain the interaction that sets the bottom separator's width, so how that one grows is not read. Looked by measurement, not by screenshot, so how it looks to the eye is not described.

**What the separator is now.** One component, class `seperator` (sic), 8.4px high, holding three `seperator-block` bars (raspberry, coral, teal), each a third of the width, 6.4px high. There are five of them on Home, at 1440px:
1. **Bottom rule** (`seperator has-bg-slate is-position-sticky-bottom`, between Intro and About in the page order). Width 0 at the top of the page, full width by about 1000px of scroll. Stuck to the bottom edge of the screen from then on, all through the project wall and Intro, until it reaches its own place at the top of About (about 16,030px), where it scrolls away.
2. **Top rule** (`seperator has-bg-slate is-position-sticky-top`, between the project wall and Intro). Takes over from about 12,870px and then stays stuck to the top edge of the screen to the very end of the page (z-index 500), above the Intro, About, the Ticker sequence, Pricing, Work, Testimonials and Contact. It never moves or changes. The pricing cards slide down from underneath it (R-098).
3. **Top of Work** (`seperator is-pos-absolute is-top-0`, inside Work, about 36,320px). A plain divider that scrolls past.
4. **Before Testimonials** (`seperator has-bg-slate`, about 41,190px). A plain divider that scrolls past.
5. **Page end** (`seperator`, about 58,730px). Plain divider above the footer.
Separately, the marquee words in the Ticker sequence each have a small gradient dash (class `Dash`, 114 of them; 0.6em by 0.035em, the same raspberry, coral, teal thirds). Those belong to R-035 and are not part of these options.
**In short:** only the two sticky ones are on screen for long, and the top one sits there through the whole animated stretch doing nothing. The other three are a flash of colour as they pass. Nothing is animated by scroll except the bottom rule's first appearance.

**Option 1: the divider draws itself in at each hand-over.** As a section meets the next, the three bars grow from the left (raspberry, then coral, then teal) while the divider crosses the lower part of the screen. Applies to rules 3, 4 and 5 (and the bottom rule's arrival into About).
- Visitor sees: each section break has a small, quick moment of colour as it arrives, instead of a static bar.
- Native Webflow or code: native. A scroll interaction on each divider ("top bottom" to "center center", scrub), animating the bars' width or scale from 0.
- New classes: none (target the existing `seperator-block` instances).
- D-017 risk: low to medium. These dividers sit after the long pinned stretches, so their start positions depend on the sticky-section measuring and the page-order redraw working; a wrong measure would leave a bar half-drawn at rest. Needs a check after a menu jump to Work and Testimonials. No change to the pinned sections themselves.
- R-035 dependency: none for rules 3 to 5. Do not use the Ticker as one of the hand-overs.

**Option 2: the separator is the wipe line between two sections.** A section is revealed downwards from the separator, which travels with the reveal's edge (the pricing cards already do the reveal without the travel). Candidate: Pricing to Work, or Work to Testimonials.
- Visitor sees: a coloured line sweeping down the screen with the next section appearing behind it, so the bar is the edge of the change rather than a bar that is already there.
- Native Webflow or code: native for the movement and the clip-path (GSAP in Webflow's interactions), but it needs an extra separator instance placed inside the section being revealed, moved by scroll. Reuses `seperator` and `is-pos-absolute`, so no new class is likely (confirm in the Designer). Placement inside a pinned stage would need custom code.
- New classes: none expected; if the travelling copy needs a position or offset, that would be a new combo class (not allowed through the MCP, D-006): I would ask first.
- D-017 risk: highest of the three. It adds a moving element and a clip-path inside the same sticky and pinned region as the pricing cards, and the top rule (z-index 500) is already above it, so the two bars would stack and visibly double up at the top of the screen.
- R-035 dependency: do not apply it to the Ticker hand-overs while R-035 is in progress (the sweep and fade there are being tuned). Only Pricing onwards is clear of it.

**Option 3: the top rule becomes a scroll-progress bar.** The three bars fill across the top of the screen as you read down from Intro to Contact: raspberry fills first, then coral, then teal.
- Visitor sees: a thin coloured line at the top edge, quietly filling as they scroll, so the page has a sense of progress. It uses the bar that is already on screen through the long animated part.
- Native Webflow or code: native. One scroll interaction on the page's main content wrapper (start at the top rule's takeover, end at the bottom of the page, scrub), with three timeline steps, one per bar, animating scale or width from 0 to full. No new class if the three existing bars are targeted directly. (If you would rather have a single fill line under the three bars, that needs one new element and class, for example `seperator-progress`: position absolute, left 0, top 0, height 100%, width 100%, background raspberry, transform-origin left, pointer-events none. I would only ask for it if you want that.)
- New classes: none for the three-bar version.
- D-017 risk: low to medium. One long trigger, driven by the page's main wrapper rather than the pinned stages, so it is not tied to their sticky maths; but the wrapper's length changes when the ticker helper measures, so the interaction must be checked after a redraw and after a menu jump. The top rule's height does not change, so R-098 stays correct.
- R-035 dependency: the progress length includes the ticker's pinned distance, which R-035 is still changing. The bar adjusts itself, but the fill rate through the Ticker stretch will change when R-035 settles. Also overlaps R-099 (contents device already marks position at the right edge): the two should look like they belong together.

**Recommendation: Option 3, then Option 1 as a second step.** Option 3 uses the one separator that is on screen through the longest animated stretch and needs no new class. It touches nothing inside the sticky sections. Option 1 is small and safe afterwards. I would leave Option 2 until R-035 has settled, because it is the one that can clash with the pinned sections and with the top rule. All three can be combined; none is built.
**Needs Michael:** pick an option (sent to boss). Acceptance not applicable (nothing built).
**Next useful action:** build the picked option in the Designer, with a backup first, then check on staging after a menu jump.
— Claude (night shift)

## 4 November 2026 — Claude (night shift) — Contents device: the four parts of About added (R-099, brief #292)
**Changed:** Webflow, site madewithpixels, **Home page, head custom code** only: every other block kept exactly (read first, written back whole, echo checked); the contents-device block replaced by the new version. No classes, elements, interactions or other pages. Published to staging (madewithpixels-dev.webflow.io) only. Repo: `contents-device.html` (R-029) and `snapshots/custom-code.json` (Home head, contents block only).
**Why:** Michael: "I want more detail. The about section has an intro, an 'our promise' section, a 'we work with' section and a 'Our technology' (might need a better title) section."
**What it is now:** under About, four shorter dashes: Intro, Our promise, We work with, Built to last. About stays long while any of them is current; the current part gets a longer dash. Hover opens the panel as before (the part names are a touch smaller). Clicking a part jumps there through the menu's own jump (blur, instant jump, redraw in page order, D-017), by pointing a hidden menu-style link at a temporary marker. The starts are read live from the page (the ticker's own markers `data-sequence-phase`), not fixed numbers, because the page's layout moves a few hundred pixels once Webflow re-measures after load.
**Title decision (inferred, easy to change):** I called the fourth part "Built to last", the words on screen ("Your website. Built to last."). "Our technology" would also fit; the label is one word in `ENTRIES`.
**Checked how (verified live, staging):** Chrome on the Mac Studio, window 1512x796 (viewport 1512 wide). After publishing and a fresh load: ten dashes in the right order; stepping scroll to 0, 12000, 15600, 19400, 23500, 34000, 36000, 50000 marked Home, Home, Intro, Our promise, We work with, We work with, Built to last, Testimonials; clicking each part landed with its content showing (promise text complete, the big W of the ticker, "Your website. Built to last." with the Webflow and Lovable box); the temporary link in the address bar is removed again; no console errors. The hover panel was seen open on the test copy before publishing.
**Not checked:** phone and tablet widths (hidden below 992px by a media query); Safari and Firefox; real trackpad scrolling; clicking a part when the menu is open; the jump from the live page to the Intro dash (checked on the test copy only).
**Backups:** "boss · brief #292 · before" and "· after". The Designer address was refused for Chrome in this session, so both were made on the Webflow dashboard Backups page (the fallback route) and seen in the list.
**Snapshot caveat:** the Webflow snapshot cannot see interactions. In `snapshots/custom-code.json` I only replaced the contents block; the Codex block above it is still formatted the older, compressed way there (the live code is the tidied version), so that file is not a perfect copy of the live Home head.
**Still open:** look and feel (Michael to tweak); whether About parts should also show when the panel is closed (they do, as small dashes); whether "Built to last" or "Our technology". R-076 vs R-099 question from the last entry stands. Acceptance is Michael's.
— Claude (night shift)

## 4 November 2026 — Claude (night shift) — Contents device built on staging (R-099, brief #273)
**Changed:** Webflow, site madewithpixels, **Home page, head custom code**: the existing block kept exactly and a new block appended (a `<style>` and a `<script>`, headed "Contents device (R-099...)"). Nothing else in Webflow: no classes, elements, interactions or other pages. Published to staging (madewithpixels-dev.webflow.io) only. Repo: `contents-device.html` (the block, R-029) and `snapshots/custom-code.json` (Home head updated).
**What it is:** a quiet row of six short dashes at the right edge, centred vertically (Home, About, Pricing, Work, Testimonials, Contact). The current section's dash is longer and brighter. Hover or Tab focus opens a dark blurred panel with the names (raspberry on the one under the pointer). Clicking clicks the menu's own hidden link, so the jump is the menu's own (blur, instant jump, redraw in page order, D-017). No Webflow classes: all its CSS is in the block (D-006). Desktop only, 992px and up.
**Checked how (verified live, staging):** Chrome on the Mac Studio, window 1440x900 (page viewport read as 2044 wide). Six links present at the right edge; hover opened the panel with names; clicking Pricing jumped to the pricing cards and the URL became #pricing; stepping scroll through 13 positions marked the right section each time (Home to 10000px, About 17000 to 34000, Pricing 41000 to 44000, Work 47000, Testimonials 53000 to 65000, Contact at the bottom); no console errors; the page source still contains the other head blocks (R-093, R-035, nav jump, testi back rows, pixel quotes).
**Not checked:** the phone and tablet widths (the window would not go narrower than the 2044px viewport, so the hidden-below-992px rule is untested, but it is a plain media query); Safari and Firefox; real trackpad scrolling; the device while the menu is open (z-index 900 is under the page blur at 997, so the blur should cover it); how the panel looks over every section (seen over the hero and Pricing only). The Webflow snapshot cannot see interactions; I did not touch them.
**Backups:** "boss · brief #273 · before" and "boss · brief #273 · after", both made in the Designer (Settings, Backups) and both seen in the list.
**Still open:** look and feel (Michael said he'll tweak). Decisions I took, all easy to change: dashes right-aligned, 14px from the edge; opens on hover or focus, not on click; the current dash is white and 28px long; labels copy the menu's. The panel covers part of the right-hand card at Pricing while it is open (see R-099).
**Needs Michael:** try it and say what to change. R-076 (the earlier contents-device item, task deleted) looks like the same job; say whether R-099 replaces it. Acceptance of R-099 is his.
**Next useful action:** tweak the look from his notes.
— Claude (night shift)

## 4 November 2026 — Claude (night shift) — Burger menu stress test: one real fault (desktop menu closes itself), a few small oddities (R-097, R-077, R-081, brief #269)
**Changed:** docs only (this entry, R-097 in the roadmap, R-098 recorded as accepted). Nothing changed or published in Webflow or the code. Webflow's style tool was refused in this run, so `isFromLibrary` was not read (see below).
**Accepted by Michael in boss:** 3 November 2026 — R-098 (checked: not stated).
**Method:** published staging Home, Chrome on the Mac Studio, same-origin iframes at 1440, 1024, 768 and 390 (scrollbar 8px), plus the top-level window (2044px) with real mouse and keyboard events. A per-frame sampler recorded the menu button position, `scrollY`, `data-state`, `details.open` and the html `lenis-*` classes. Scenarios: open at top, middle (20000px) and bottom; Escape; wheel, PageDown and ArrowDown while open; second click to close; double and rapid clicks (2 and 5 extra at 20 to 80ms); each of the six links (Home, About, Pricing, Work, Testimonials, Contact). Console: no errors or exceptions at any point.

**Odd 1 (real fault, desktop only): the menu closes itself about 100ms after it opens.**
- **Steps:** Home on staging at 1440 or 1024 wide (also seen at 2044 in the top window). Click the burger button, at the top, middle or bottom of the page.
- **Seen:** the panel starts to open, then closes again (`opening`, scroll lock on, then `closing`, `closed`, lock off) in 30 to 100ms. Repeated in every run at 1440 and 1024 (about ten script runs) and in 4 of 4 real mouse clicks at 2044. A real keyboard Enter on the focused button kept it open once at 2044, so it is a timing race, not constant; mouse and script clicks always lose it.
- **Not seen at 768 or 390:** the menu opens, stays open and works.
- **Cause (shown in the page):** a stack trace on `details.open = false` points to `onBreakpointChange` in the menu library (`Webflow-Navbar-Light@v0.2.6`, `navbar-light.min.js`), called from our own inline Home head code: `requestAnimationFrame(() => window.dispatchEvent(new Event('resize')))` in the ticker `measureSequence` (R-035 work). Chain: menu opens, Lenis locks scroll and the 8px scrollbar goes, the ticker panel width dips 2036 to 2028 for a frame, the ticker re-measures, its total height changes by more than 1px, it dispatches a fake `resize`, and the library closes the menu on any resize. The library is not wrong to react to a resize; our script should not be sending one for this.
- **Proof:** in a test frame only (nothing saved), I made that fake `resize` do nothing. The menu then stayed open at 1440 and 1024 in every scenario below.
- **Belongs to:** our own code (the Home head ticker script), set off by the library's resize handler. Not a `mwp-css-nav_*` class. **`isFromLibrary` was not checked** because the Webflow style tool was refused in this run; it isn't needed for this cause, and nothing was edited.
- **Probably a regression:** R-081 was accepted on 31 October, before the ticker sequence was revised (1 November); the fake `resize` is in that newer code. (inferred)

**What worked (with the fake resize blocked, desktop; unblocked, tablet and phone):**
- Button position: 32,48 at 1440 and 1024, 16,16 at 768 and 390, before, during and after, every scenario (range 0px, no sideways shift). R-081 holds.
- Scroll lock: `lenis-stopped` is on while open and off after closing in every case; no lock left on, no `overflow` left hidden. The 8px `padding-right` compensation is on only while open.
- Wheel, PageDown, ArrowDown while open: page did not move (20000 stayed 20000). Escape closed it. Second click closed it.
- Scroll after close: unchanged after Escape or the button (20000 stays 20000). After a link: jumps after the menu has finished closing, to About 11449 (768) / 11482 (390) / 12488 (1440 and 1024); Pricing 14314 / 15163 / 29725 / 29267; Work 16695 / 17648 / 32625 / 32167; Testimonials 20854 / 20904 / 38342 / 37492; Contact 35414 / 35464 / 51902 / 51052; Home 0. No stuck state.
- Double click (open then close then open) and rapid 5-click bursts ended in a consistent state matching the click count, with no stuck `closing` and no leftover scroll lock.

**Odd 2 (small, phone only): a 27px jolt when opening at the very bottom.** 390 wide, scroll to the very bottom, open the menu: `scrollY` went 35917, 35890, then back to 35917 after closing. Not at 768 (35893 steady) or at desktop. Likely the page height changing under the scroll lock. Not visible in a still frame; I did not film it. Belongs to our code or Lenis, not a library class (inferred).

**Odd 3 (note): the Home link** (`/`) on the Home page itself scrolls to the top rather than doing nothing. It is expected, not a fault.

**R-077 (double flash after a link click): not reproduced or ruled out.** My sampler records positions and classes, not paint, so it cannot see a flash. The menu state sequence after a link click is clean (`closing`, `closed`, then Lenis scrolling starts about 100 to 300ms later), with no repeated open or close, which fits a flash from the scroll starting after the close rather than two menu changes. A screen recording at real speed on the Mac Studio is still needed.
**Not checked:** `isFromLibrary` on `mwp-css-nav_*` (tool refused); the /estimate and project pages' menus; touch input and a real phone; Safari and Firefox; real trackpad or mouse-wheel input (wheel and keys were sent as events); visual flashes frame by frame; widths between those tested. Clicks at 768 and 390 came from the page's script, not the pointer, but the desktop reproduction was confirmed with real mouse events.
**Needs Michael:** how to fix Odd 1 (asked in boss). Options: A, change the ticker script so it does not send a fake resize while the menu is open (or at all when only the width dipped), custom code in the Home head, small; B, ask the ticker to use its own re-measure instead of dispatching `resize` (its comment says IX3 needs it, so riskier for the scroll animations, D-017); C, patch the library to ignore resizes that don't change the breakpoint (belongs to SmashBurger, waits for R-030). Recommend A.
**Next useful action:** build A with a before backup, publish to staging, re-run this matrix at 1440, 1024, 768 and 390 and a real-mouse click at 2044, then ask Michael to try it.
— Claude (night shift)

## 4 November 2026 — Claude (night shift) — Hero strapline blur re-tested: reproduced at every width, cause found, options written (R-096, R-087, brief #268)
**Changed:** docs only (this entry, R-096 and R-087 in the roadmap, and R-094 recorded as accepted). I used no Webflow tool, so no backups were made and no snapshot changed. Nothing published, no interaction or custom code edited, the empty duplicate `i-9e2a7fda` left alone. State of R-096: in progress. Evidence: verified (live; published staging madewithpixels-dev.webflow.io, Chrome on the Mac Studio; 1467px window, plus same-origin iframes at 1024, 768 and 390, 800px tall). Acceptance: pending.
**Result: reproduced.** Michael's screenshot (strapline smeared under the name) matches what I see. It is worse than on 1 November: the strapline is now blurred **on first load and stays blurred**.
**Matrix** (computed `filter` of `H3.hero-strapline`; "settled" = a few seconds after scrolling stopped):
- (a) First load, desktop: **reproduced**, `blur(5px)`, opacity 1, still 5px after 9 seconds and after three reloads. 1024, 768, 390: **reproduced**, `blur(5px)` each.
- (b) Down to 2600px (past the hero) and back to 0 slowly (Lenis, 4 to 5 seconds), all four widths: **reproduced**, `blur(5px)` (it was already 5px before scrolling, so scrolling neither causes nor cures it). Quick jump back (immediate), all four widths: **reproduced**, `blur(5px)`. Real mouse wheel down and up on desktop: **reproduced**, `blur(5px)`, zoomed screenshot visibly smeared. Keyboard (space x4 then Home) on desktop: result is not clean, `blur(0.2243px)`, because I had reset the animation by script earlier in that page (see below); not repeated on a fresh load. Treat keyboard as **not separately tested**.
- (c) Reload part-way (scrollY 1200): 1024 `blur(4.9888px)`, 768 `blur(4.9888px)`, 390 `blur(4.8495px)` (opacity about 0.025, so barely visible there); then up to the top: 1024 and 768 `blur(4.7634px)`, 390 `blur(4.1325px)`. **Reproduced**, with different values from the page's own start value.
- Other hero texts (name "madewithpixels", the Get an Instant Estimate button, "Web design in Sheffield since 2008", the menu buttons), checked by scanning every element on the page at the top for any filter other than `blur(0px)`: **not reproduced**. The strapline was the only one at every width. The logo wrapper (the name) is `blur(0px)` at the top and 5px only while scrolled away, as designed.
**Cause (shown in the page, not guessed):** the strapline has its own blur step inside the scroll-tied "Hero Fade Out" (`i-7bbab732`, trigger `folio-wall`, step "Brand Name Blur", 0 to 5px), and it sits inside the name's wrapper, which has the same step. The blur is a CSS variable, `--_animation---text-blur`, and variables are **inherited**. The scroll animation library (GSAP) reads a tween's start value only the first time that tween is drawn. If the wrapper's tween has already been drawn to its end (5px) at that moment, the strapline's tween reads 5px as its start, so it goes from 5px to 5px and is stuck for good. I proved it in the page: reset the animation and draw it in order, and the strapline's start is read as 5px as soon as the wrapper's blur is up; after that, even drawing back to time 0 leaves 5px (strapline inline style `--_animation---text-blur: 5px`). That happens on any first draw that is not a slow scroll from the top: a jump, a reload part-way, or the page's own redraw.
**Which step:** the "Brand Name Blur" step applied to the strapline (the strapline's own copy of the step; the wrapper's copy is fine). Not the empty duplicate `i-9e2a7fda`, and not the entrance animation (nothing in the entrance touches the blur).
**Why it differs from 1 November (inferred, not proven by reverting):** then, first load read `blur(0px)` and only a fast return left `blur(0.0045px)` (a start value read just past zero: the same mechanism, nearly invisible). On 3 November at 23:40 the Home head script's redraw was changed to draw every scroll animation at its end first (R-094, commit 9bff1b0) and it runs after the page builds. Drawing at the end first guarantees the strapline's tween is first drawn while the wrapper is at 5px. So the R-094 change very likely turned the tiny leftover into a full 5px on load. I checked that an old-style redraw (no end-first) also gives 5px once the start value is bad, but I could not test a fresh page load without it, because I must not edit the code.
**Options (D-017 applies; no new class; Michael's call, nothing done):**
- **A. Remove the strapline's own copy of the blur step from Hero Fade Out (Designer > Interactions).** The strapline is already inside the name's wrapper, which blurs everything in it, so it still goes soft when you leave the hero and sharp when you return. Smallest change, removes the cause. Risk: editing the interaction (D-017); needs a before backup and a re-test at all widths. I recommend this.
- **B. Remove the class `can-blur` from the strapline (Designer, Navigator).** Not a new class. Its filter then has nothing to read, and the wrapper's blur still covers it. Same effect as A for the visitor, easier to undo; but the strapline's blur step would still exist as a no-op, so A is tidier.
- **C. Fix it in the Home head script (custom code):** before the end-first redraw, make each timeline read its start values at the top (for example draw it at the very start of each tween first, in page order). Keeps the interaction as it is, but it is in the same redraw that R-094 just touched, so it needs careful testing of the testimonial wall and menu jumps again. Not recommended as the first move.
- **D. Leave it.** Not recommended: it is plainly visible on first load now.
**Also (separate):** while resetting animations by script I changed only the open page in my own tab; it was closed afterwards and nothing is saved.
**Not checked:** Safari and Firefox; trackpad inertia; a real phone; keyboard from a clean load; frame-by-frame of the entrance. Interactions are not in the snapshots, so I can't say they are unchanged; I did not touch them. Wheel and keyboard on the narrower widths were not done with real input (iframes get scripted scrolls only).
**Accepted by Michael in boss:** 3 November 2026 — R-094 (checked: not stated).
**Tasks deleted in Michael's list, kept for him to decide:** R-082, R-036, R-037, R-074, R-086, R-076, R-042, R-059 (and R-043, already accepted).
**Needs Michael:** pick A, B, C or D (asked in boss).
**Next useful action:** apply the pick with a before backup, publish to staging, re-test the matrix above, and watch the testimonial wall and menu jumps (R-094).
— Claude (night shift)

## 3 November 2026 — Claude (night shift) — Pricing cards: top margin removed on wide screens (R-098, brief #291)
**Changed (R-098):** Webflow, site madewithpixels, style `.pricing-block` (Pricing Block), 1440px-and-up (xl) setting: Margin top 1rem to 0px. Read back after writing: `margin-top: 0px`, the other xl values unchanged. No new class, interaction, element or custom code touched. Published to staging only (madewithpixels-dev.webflow.io), never the custom domain. Michael chose this option (A) in boss.
**Backups:** "boss · brief #291 · before" and "boss · brief #291 · after", both made from the Webflow dashboard Backups page (the Designer address redirected to the dashboard, so the Designer route wasn't available). The before backup exists twice (11:50:51 pm and 11:51:12 pm): my first attempt lost its typed name and Webflow applied it late.
**Checked how:** Evidence: verified (live), staging, Chrome on the Mac Studio, same-origin frames at 1700, 1440 and 1024, scrolled through the pricing section at three points. Card top versus separator bottom: 1700 and 1440 0.2px against 8.4px (separator covers it, no gap; was +7.8px); 1024 -0.4px against 8.4px (unchanged). Acceptance: pending.
**Snapshot:** `snapshots/styles/classes.json` updated by hand for that one value (the only Webflow data I changed). Interactions aren't in the snapshot, so I can't show they are unchanged; I didn't touch them.
**Not checked:** Safari and Firefox; 768 and 390 (no drop-down there, and the 1440 rule doesn't apply); a frame-by-frame look at the reveal; whether card text now sitting 16px higher looks right to the eye.
**Needs Michael:** try it on staging at 1440 or wider and accept or reject.
**Next useful action:** none until he looks.
— Claude (night shift)

## 3 November 2026 — Claude (night shift) — Gap under the separator above the pricing cards: measured, cause found, options written (R-098, R-034, brief #267)
**Changed (R-098):** docs only: `docs/pricing-gap-options.md` and this entry. Nothing changed in Webflow (I used no Webflow tool, so no backups were needed), no classes added, nothing published. Evidence: verified (live), staging, Chrome on the Mac Studio; 1700px window, plus same-origin frames at 1440, 1024, 768 and 390. Acceptance: pending.
**Cause:** the cards' own top margin. `.pricing-block` has `margin-top: 1rem` in the 1440px-and-up setting, so the cards start 16px below the top and the sticky separator (8.4px, top 0) only covers 8.4 of that. The slate behind shows through the 7.6 to 7.8px left. The interaction only reveals each card downwards with a clip-path from its own top, so it never opens or closes the gap.
**Gap measured:** 1440 and 1700: +7.8px and +7.7px at rest and the same throughout the reveal. 1024: none (the cards are 8.8px under the separator). 768 and 390: no drop-down (cards stacked, plain scroll), so n/a.
**Options (in the note, also sent to Michael in boss):** A set the card margin to 0 at the 1440 setting (recommended); B negative margin; C thicken the separator (wait for R-034).
**Not checked:** Safari and Firefox; widths between 1025 and 1439 other than 1024 (rule is min-width 1440). Interactions aren't in the snapshots.
**Needs Michael:** pick A, B or C.
**Next useful action:** apply the pick in the Designer (or via the MCP with a before backup), then check on staging at 1440 and 1700.
— Claude (night shift)

## 3 November 2026 — Claude (night shift) — Testimonial quotes no longer pile up after menu jumps (R-094, brief #272)
**Changed (R-094):** Webflow, site madewithpixels, Home page, **Page settings > Custom code > Head** only, published to staging only (madewithpixels-dev.webflow.io). I read the block first and wrote it back with one change (the echo matched): in `playInOrder`, each scroll animation is now drawn at its end first and then back to the right point, plus a comment (item 3) explaining why. No class, element, interaction or Designer change. Not published to the custom domain.
**Cause:** Michael's steps reproduced on staging on the first try (menu > Contact, then menu > Testimonials). The head script redraws every scroll animation after a menu jump, and after any re-measure, as a forced draw. Played forwards, that draw hit the Testimonial Wall timeline's later steps (each quote's fade-out "starts from visible") after their earlier ones, so all ten quotes ended at full opacity. A backwards draw runs the steps in reverse and ends correctly. Jumping up from Contact or Pricing, and from Home, all hit it; a plain scroll never did.
**Checked how:** staging in Chrome on the Mac Studio. Before: all 11 `.testi-wall_quote` at opacity 1 after Contact then Testimonials (screenshot matches Michael's). After the publish: Contact > Testimonials, Pricing > Testimonials, Work > Testimonials and Home > Testimonials each leave only the first quote visible; screenshot shows just the "Praise for madewithpixels" title. Also tried at 390, 768 and 1024px in same-origin frames: no stacking (at 390 and 768 the jump lands before the first quote appears, so all are hidden, as designed). Evidence: verified (live), desktop 2044px wide plus those frames; Acceptance: pending.
**Backups:** "boss · brief #272 · before" and "boss · brief #272 · after", both made on the Webflow dashboard Backups page (the Designer route failed: Chrome would not drive the Designer URL, "browser-internal or unparseable URL"). Both recorded in boss.
**Not checked:** a real finger or mouse-wheel scroll to the wall (the fix touches only menu jumps and re-measures); Safari and Firefox; a real phone. Interactions are not visible in the snapshots. I also did not compare every other animation's end state before and after; the change only alters the order of the redraw for animations that are not already at their end (About "focused on" box and Pricing looked right in the jumps above).
**Snapshot:** `snapshots/custom-code.json` Home head updated by applying the same edit to the stored text; the snapshot's formatting of the later Codex block differs from the live text, which I did not reconcile.
**Seen on the way (not fixed):** jumping to Testimonials from above lands about 2,200px higher on desktop (scrollY 51298) than from below (53530). Both show the title; from above the quotes are not yet in. May be the intended landing offset; worth a look.
**Needs Michael:** try it on staging and tick R-094 if happy.
**Next useful action:** none unless he finds it again.
— Claude (night shift)

## 3 November 2026 — Claude (night shift) — Michael approved the estimate advice lines (R-051, R-050, brief #266)
**Changed:** docs/estimate-assessment-copy.md only: the advice-lines section is marked approved as written, quoting Michael's boss answer "Good to use as written". Nothing changed in Webflow or the estimate tool's code. State stays planned; Acceptance pending.
**Checked how:** read the doc; no browser used.
**Still open:** the "15 minutes" in the price note is my figure, not Michael's. The finishing items (R-050) are still proposals.
**Needs Michael:** nothing.
**Next useful action:** a brief for the estimate tool's repo (MWP-Instant-Website-Estimate) to make the wording, price-display, advice-line and finishing changes together.
— Claude (night shift)

## 3 November 2026 — Claude (night shift) — Six new tasks written up as roadmap items (R-095 to R-100, brief #262)
**Changed:** ROADMAP only. Six items added, each with his wording as the title, a done-when, guesses marked (inferred — confirm) and its Task line: R-095 intro sequence tuning (Task 43612350), R-096 blurred hero H3 (43612353), R-097 burger nav acting oddly (43612354), R-098 gap between the separator and the pricing cards (43612356), R-099 subtle expanding contents device (43612357), R-100 launch MWP GoogleAds campaign (43612355, Phase 6). Phase table updated. Nothing changed in Webflow or the site. No tasks touched. State planned, Acceptance pending on all six.
**Checked how:** read the existing roadmap items they relate to (R-032, R-034, R-076, R-077, R-081, R-087); no browser used.
**Still open:** the other tasks listed as having no item (43612130, 43612133, 43612120, 43612126, 43612111, 43612304) are the headings already covered by the phases, so I gave them no item.
**Needs Michael (not blocking):**
- R-096 may be the same strapline blur as R-087 (dropped 1 November). R-099 looks like a fresh take on R-076, whose task was deleted: say whether it replaces it.
- Roadmap items whose task he deleted, for him to decide (not dropped): R-082, R-036, R-037, R-074, R-086, R-076, R-042, R-043 (accepted), R-059.
**Next useful action:** pick which new item to start; R-096 and R-097 need a description of what he sees first.
— Claude (night shift)

## 3 November 2026 — Claude (night shift) — Home logo alt text applied on staging (R-053, brief #257)
**Changed:** Michael's picks from boss: project wall tiles left empty (decorative); sixth logo is English Heritage. In Webflow, madewithpixels site, Home page, the six "Brand Logo" images inside "Logo Track" got alt text: BBC logo, Armitage Shanks logo, Speedo logo, University of Nottingham logo, ITV logo, English Heritage logo. Nothing else changed in Webflow. Published to madewithpixels-dev.webflow.io only. R-053 State and Acceptance untouched (Michael accepted the proposals on 2 November 2026; this applies them).
**Checked how:** read back two of the six through the Webflow tools; then on the published staging Home page (Chrome on the Mac Studio, desktop) counted 192 images: exactly 6 have alt text (the six above), the other 186 are empty, including all 30 repeated logos (hidden from screen readers by their parent) and all 153 wall tiles. Evidence: verified (live). Backups: "boss · brief #257 · before" (two copies, 11:02:38 pm and 11:02:57 pm) and "boss · brief #257 · after", all made through the Webflow dashboard because the Designer address redirected to the dashboard.
**Still open:** the two focus-block icons and the stray no-source image stay empty as proposed. The seven inline SVG shapes were not inspected. The snapshots folder was not refreshed: the Webflow tools I used don't export image alt text, and no page, style or code setting changed. Interactions are not in snapshots anyway.
**Needs Michael:** nothing. Optional: check the logo strip on staging.
**Next useful action:** none for this item beyond his own check and backup.
— Claude (night shift)

## 2 November 2026 — Claude (night shift) — Assessment screen copy: Michael's answers and advice lines (R-051, R-050, brief #250)
**Changed:** docs only. `docs/estimate-assessment-copy.md` now records Michael's four answers, applies them (price stays on the right panel only, button reads "Book a free chat") and has a drafted advice line for every answer on all six questions. R-051 and R-050 keep State: planned. Nothing changed in Webflow or the estimate tool's repo. Acceptance: pending.
**Checked how:** read the answer options from the staging estimate page (Chrome on the Mac Studio, desktop) by stepping through the questions; nothing submitted. Tab closed.
**Still open:** the "15 minutes" in the price note is my figure, not Michael's; the build in MWP-Instant-Website-Estimate; the finishing items.
**Needs Michael:** an optional read of the advice lines.
**Next useful action:** a brief for the estimate tool's repo to build the wording, price display and advice lines.
— Claude (night shift)

## 2 November 2026 — Claude (night shift) — Home at 390, 768 and 1024px: layout audit (R-040, R-041, brief #246)
**Changed:** docs only (this entry). Nothing changed in Webflow, no classes added, nothing published. Evidence: verified (live), staging, Chrome on the Mac Studio. Acceptance: pending. Faults already written up (project arrows, testi-wall shadow, R-040/R-043) are skipped.
**How I checked, and proof the layout switched:** resizing the window does not change the layout, so I loaded `madewithpixels-dev.webflow.io/` in a same-origin iframe of each width (390, 768, 1024) and read it from inside. Proof it switched: at 390 the frame's media queries reported max-width 479, 767 and 991 all true; at 768 the 991 query was true and 767 false; at 1024 all false. The menu button is 64px at 390, 72px at 768 and 1024, and the page height changes with width (Home 52,382px at 390, about 49,300px at 768, about 53,800px at 1024). The three widths are all covered. Screenshots were taken by scrolling the frame to about 8 positions at 390 and 5 to 6 at 768 and 1024, so the long About section was only sampled.
**Per width**
- **390px:** horizontal scroll none (page 382px wide inside the 8px frame scrollbar). Text overflow none found in clipped boxes. Tap targets: no link or button under 40px; portfolio rows 58px and 85px high. Overlaps: the floating menu and contact buttons sit over copy (fault 2). Animations: the folio wall, hero, pricing and contact looked right; see faults 4 and 5.
- **768px:** horizontal scroll none. Text overflow none. Tap targets none under 40px. Overlaps: same floating buttons. Animation: testimonial quote caught clipped at the right edge (fault 5).
- **1024px:** this is the desktop layout (the tablet breakpoint ends at 991px). Horizontal scroll none. No overflow, no small targets. Testimonial quote settled and centred correctly.
- All widths: the hero canvas is about 5% wider than the viewport (right edge at 393 on 390, 783 on 768, 1046 on 1024). It causes no sideways scroll; harmless unless it shows as a visible edge.

**Faults**
1. **Blank band under the logo card in the intro.** At 390 about 300px to 450px of empty light grey sits below the card before the dark About section starts; at 768 about 300px. Fix needing a visual choice (how much space; it is spacing on an existing section, no new class).
2. **Floating menu and contact buttons sit over copy at 390.** Pricing intro text ("It takes less than a m…") runs under them while scrolling. Fix needing a visual choice (smaller buttons, a background, or leave as is). Probably deliberate.
3. **Portfolio category labels are 9.6px** ("INDUSTRY & COMMERCE", vertical, in the left margin) and at 390 the vertical text is clipped by the top of the list ("LIFE… ERTAINMENT"). Fix needing no new class for the size (font-size on the existing class at the phone breakpoint); fix needing a visual choice if you want the label moved or restyled.
4. **Sector word list in About is cut off at the right edge at 390** ("Entertainment", "Museums &…"). It may be a deliberate sideways scroll; I could not tell from still frames. Check on a real phone. Fix needing a visual choice if it is not deliberate.
5. **Testimonial quote clipped at the right edge at 390 and 768** at the positions I captured (the quote's box is 350px, the slide travels sideways). At 1024 it settles centred. Probably the scroll scrub caught mid-slide, not a fault. To verify on a real phone: stop on each quote and see if it sits fully inside the screen. Unconfirmed.
6. **Intro paragraph sits in a narrow column with dead space beside it at 768 and 1024** (about 200px of text in a 768px or 1024px frame). Fix needing a visual choice.
7. **Pricing cards looked empty at 1024** (scrolled 30,700px): three blank coloured panels with no text. Probably the reveal animation caught mid-way; unconfirmed. To verify live at 1024.
None of these needs a new class except possibly where you choose a new look in 2 and 6.

**Screenshots** (Mac Studio temp folder `/var/folders/40/q3f1nz_d1_923cmvnkfcc_3r0000gn/T/claude-chrome-screenshots-HUn0yn/`): 390: `screenshot-1793630435059-1.png` (hero), `-2` (folio wall), `-3` and `-4` (intro gap), `-6` (sector words), `-7` (pricing), `-8` (portfolio), `-9` (testimonial), `-10` (contact); 768: `-11` hero, `-12` intro, `-13` pricing, `-14` portfolio, `-15` testimonial, `-16` contact; 1024: `-17` hero, `-18` intro, `-19` pricing, `-20` testimonial. Files are in a temp folder and may be cleared.
**Still open:** a real phone or tablet was not used (no touch, no real scroll speed); other 390 states of the About section; whether faults 4, 5 and 7 are animation timing.
**Acceptance recorded:** 2 November 2026 — Accepted by Michael in boss: R-093 (checked: not stated).
**Needs Michael:** your call on faults 1, 2, 3, 6 (visual choices) and a look at 4, 5, 7 on a phone.
**Next useful action:** a brief to fix 3 (no new class) once you approve; the rest after you pick.
— Claude (night shift)

## 2 November 2026 — Claude (night shift) — alt text proposals now in boss for Michael to pick (R-053, brief #251)
**Why:** Michael, in boss: *"I don't know where to find the proposed alt tags"*. They were only in `docs/home-alt-text.md` and STATUS, which he doesn't read.
**Changed:** posted the proposals in full as a question in boss (the six logo descriptions, what is left blank and why, and two picks: folio wall blank or described; confirm "EH" is English Heritage). Added a pointer to the doc's status line. Nothing in Webflow was read, changed or published; no Webflow backups were made, because no Webflow tool was used. R-053 stays planned; Acceptance: pending.
**Needs Michael:** answer the question in boss.
**Next useful action:** on his answer, a brief to write the alt text into Home on staging.
— Claude (night shift)

## 2 November 2026 — Claude (night shift) — Home page alt text drafted (R-053, brief #245)
**Changed:** docs only: new `docs/home-alt-text.md`. Nothing written into Webflow, nothing published, no copy touched. R-053 stays planned. Evidence: verified (live) for the image count only. Acceptance: pending. Everything is **proposed - Michael to approve**.
**Result:** all 192 Home images covered. **6 meaningful** (the client logos: BBC, Armitage Shanks, Speedo, University of Nottingham, ITV, and "EH" read as English Heritage, to confirm). **186 decorative**, alt empty on purpose: 153 folio-wall tiles, 30 repeat copies in the logo strip, 2 "We're focussed on" icons, 1 stray hidden image. If you would rather describe the folio wall, the doc has a per-client table ("Screenshot of the X website") and meaningful becomes 159, decorative 33.
**Checked how:** Chrome on the Mac Studio, desktop, madewithpixels-dev.webflow.io: a script counted every `<img>` (192, all alt empty) and grouped them by class and file name. Tab closed. The Webflow MCP read tools were **not used**: they need a "before" backup made in the Designer, which can't be done overnight, and the published page lists every image anyway. So no Webflow backups were made and nothing in Webflow was read or changed.
**Still open:** client names marked `?` in the doc are guesses from file names; the seven inline SVG shapes are not images and were not inspected; whether the Designer has its own "decorative" setting on any image.
**Needs Michael:** decide folio wall decorative (recommended) or described; confirm "EH".
**Next useful action:** once approved, a brief to write the alt text into Webflow.
— Claude (night shift)


## 2 November 2026 — Claude (night shift) — pre-launch SEO switch-on checklist (R-069, R-060, R-053, brief #244)
**Changed:** new `docs/launch-seo-checklist.md` (audit table, numbered Designer steps, a console script to confirm after publishing). Nothing in Webflow changed, nothing published, no canonical set. R-069 and R-060 stay planned. Evidence: verified (live) for the audit only. Acceptance: pending.
**Checked how:** Chrome on the Mac Studio, desktop, madewithpixels-dev.webflow.io: fetched /sitemap.xml, /robots.txt and the HTML of all 42 sitemap pages plus /success. Tab closed. The script itself has not been run on the live domain (it does not exist yet); the same logic was run against staging.
**Findings:** all 42 pages return 200 with no robots tag and no canonical tag. All 42 are in the sitemap: Home, /estimate, /success and 39 project pages. /success is in the sitemap and has no noindex (title "Success", heading "404"). Staging robots.txt is `Disallow: /` (Webflow's own staging block).
**Still open:** /success needs noindex and removal from the sitemap before launch; canonical set at launch (D-014); the heading on /success.
**Needs Michael:** the Designer switches and the publish, at launch. Step 4 of the checklist names the Webflow setting by memory of the Designer, so check the label when you reach it.
**Next useful action:** do the checklist on launch day.

## 2 November 2026 — Claude (night shift) — assessment screen copy and finishing notes (R-051, R-050, briefs #243 and #248)
**Changed:** docs only. The write-up (where the wording repeats, current copy against proposed, 12 finishing observations) now lives in its own document, `docs/estimate-assessment-copy.md`, moved out of this entry at Michael's request ("Pull the report out into it's own document"). No live copy, Webflow, estimate-tool code, forms or redirects touched. R-051 and R-050 stay planned. Evidence: verified (live) for the copy record only. Acceptance: pending. Everything in the document is **proposed - Michael to approve**.
**Needs Michael:** yes or no on the wording, whether the consultation is free, which price display to keep, and whether you want per-answer advice lines.
**Next useful action:** once approved, a brief for the estimate tool's repo to change the wording.
— Claude (night shift)

## 2 November 2026 — Claude (night shift) — titles, descriptions, schema and llms.txt audit and drafts (R-053, R-064, brief #242)
**Changed:** docs only: new `docs/seo-proposals.md` (audit table, drafts). Nothing written into Webflow; no canonical, indexing, publish or Acceptance change. R-053 and R-064 stay planned; Evidence: verified (live) for the audit only.
**Checked how:** Chrome on the staging domain only, page text read for Home, /estimate and five project pages (Farmer Norton, Travel Ledger, Futura, SOYO, Mednet). Results match the 1 November audit (`docs/seo-audit.md`). The tab is closed.
**Audit in short (proposed - Michael to approve, full table in the docs note):** every page has a title and description. One H1 on all seven pages. No canonical anywhere (R-060). No og:image or twitter:image on Home or /estimate. Home JSON-LD has no `sameAs` or logo. llms.txt exists (200).
**Drafts (proposed - Michael to approve):**
- Home title: `Web Designer in Sheffield | madewithpixels`; description: `Independent Webflow designer and developer in Sheffield since 2008. Custom websites and business tools from £500. Get an instant estimate.`
- /estimate title: `Instant Website Price Estimate | madewithpixels`; description: `Answer a few quick questions and get an instant, no-obligation price range for your website or web app from a Sheffield studio.`
- Schema: add `logo` and a `sameAs` array to the existing ProfessionalService, with three clearly marked placeholders (LinkedIn, GitHub, Webflow profile URLs). llms.txt outline: seven parts, in the docs note.
**Still open:** a logo file and a share image. Price settled by Michael on 2 November 2026: complex projects from £2000, so the Home schema and llms.txt (both say £5,000) need changing to match.
**Update 2 November 2026:** Michael supplied the three profile addresses (LinkedIn, GitHub, Webflow); filled into the draft in `docs/seo-proposals.md`. Logo still a placeholder. Still proposed, not in Webflow.
**Needs Michael:** your yes or no on the wording.
**Next useful action:** once he supplies the URLs, write the schema and the page titles into Webflow with a backup.
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — testi-wall stacked entries: could not diagnose, no browser (R-094, brief #226)
**Changed:** nothing in Webflow, the site or the repo code. Docs only (this entry). R-094 already existed (written in brief #225), so I did not add another. State stays planned. Evidence: none. Acceptance: pending.
**What I found:** the session had no browser tools (no tab, screenshot, resize or page-script tools were offered), so I could not look at the wall at any width or scroll position. I only downloaded the staging page's HTML: it has the wall's markup (stage, sticky, `testi-wall_quotes` holding ten `testi-wall_quote` blockquotes, 157 chips), but the stacking depends on the scroll animation, which static HTML can't show. No cause guessed.
**Webflow:** no Webflow tool was used, so no "before" or "after" backup was made and no snapshot changed. Both would need the Designer open in a browser, which I didn't have.
**Plain rewrite:** rewrote the open question about the missing screenshot as a to-do for Michael.
**Needs Michael:** a screenshot, or one line saying at what width and scroll position the entries pile up. It would stop me looking for the wrong thing.
**Next useful action:** re-run brief #226 in a session with Chrome ticked; first checks are the ten `.testi-wall_quote` elements' positions and transforms at 1440, 768 and 390px, scrolling down and back up (see D-017 and D-018 for the scroll-animation traps).

## 1 November 2026 — Claude (night shift) — new roadmap item for the testi-wall stacked entries bug (R-094, brief #225)
**Changed:** wrote R-094 "Fix the testi-wall stacked entries bug" (task 43612346) into Phase 2, with a done-when and notes. Roadmap only: no Webflow, site or task changes.
**Guesses (inferred — confirm):** what "stacked" looks like, which widths it affects, and the done-when. Your task has no description, so I did not guess further.
**Other tasks in the inbox:** the rest of the "no roadmap item" list are headings already covered by the goal and phases (see the ROADMAP intro), or already have items (R-093 for task 43612345, R-080 for 43612340), so I added nothing for them.
**Tasks you deleted from your list (items kept, for you to decide):** R-082, R-036, R-037, R-074, R-086, R-076, R-042, R-043 (accepted), R-059.
**Order moves you made:** R-038 and R-076 before R-075, R-082 before R-032. None puts something before work it depends on that I could see.
**Checked how:** read the roadmap back after editing; the phase table and intro line updated.
**Needs Michael:** a screenshot or a note on when the stacking happens would let the fix start.
**Next useful action:** diagnose R-094 on staging.

## 1 November 2026 — Codex — centre row starts the raspberry stagger (R-035)
**Changed:** corrected the previous interpretation. The centre row now starts first; the reveal then moves outward through alternating rows above and below it. Each row still lights out from the horizontal centre to both edges, and reverses with scroll.
**Outputs:** Home footer read back exactly; head unchanged. Mirrored in `ticker-marquee.js` and the custom-code snapshot. Published to staging only. Hard Light backing and full-colour raspberry lettering retained.
**Checked how:** verify the live centre row sequence and record screenshot.
**Still open:** Michael's visual judgement; acceptance pending.
**Needs Michael:** refresh staging and check the order.
**Next useful action:** review the centre-out stagger.
— Codex

## 1 November 2026 — Claude (night shift) — testi-wall shadow removed at tablet and phone (R-093, brief #218)
- 1 November 2026 — Accepted by Michael in boss: R-035 (checked: not stated)
**Changed (Webflow):** Site madewithpixels, page Home, **head custom code only**: appended a small `<style>` with `@media (max-width: 991px)` setting `filter: none` on the testi-wall's two front rows (the `drop-shadow` filter rule from the same block). Everything else in the block is unchanged (read back in full). Published to staging (webflow.io) only. No class, style, element or interaction changed.
**Project wall:** nothing changed. `folio-wall_tile` already has `box-shadow: none` at the tablet breakpoint (Designer, medium; it cascades to phone). The published CSS confirms the rule. I found no other shadow on it in the styles or custom code.
**Backups:** "boss · brief #218 · before" and "boss · brief #218 · after", both made in the Designer.
**Checked how (Evidence: verified (live), partly):** the published Home page contains the new rule; the published stylesheet has `.folio-wall_tile{box-shadow:none}` inside `@media screen and (max-width:991px)`. **Not looked at by eye** and no computed styles read: the browser tool refused script access on the staging site and the window would not resize, so I did not check at 820 or 390px. Interaction-driven shadows and filters are not visible to the snapshot or to me.
**Done when guesses:** I read "tablet" as 991px and below (the Designer's tablet breakpoint), and "hero project wall" as the folio-wall tiles (inferred — confirm).
**Snapshot:** `snapshots/custom-code.json` updated (Home head). Other snapshot files not refreshed this run.
**Needs Michael:** look at staging at tablet and phone width; check and back up (D-008). If you meant the project wall to include something else, tell me.
**Next useful action:** Michael's look.
— Claude (night shift)

## 1 November 2026 — Codex — centre-out raspberry stagger (R-035)
**Changed:** Michael asked for the marquee stagger to start from the centre line. Each row now lights outward from the viewport centre to both edges, keeping the gradual top-to-bottom row sequence and scroll-linked reverse.
**Outputs:** Home footer read back exactly; head unchanged. Mirrored in `ticker-marquee.js` and custom-code snapshot. Hard Light backing, original raspberry letters at full opacity and edge fades retained. Published staging only. No commit, push, Boss, task, time or acceptance changes.
**Checked how (Evidence: verified (live)):** Chrome on staging during the mask pass. The masked line colour is `rgb(217, 70, 108)` (`#d9466c`); the backing computes to Hard Light at 70%, and the letter layer to normal blend at 100%. Screenshot: `/Users/michaelauty/.codex/visualizations/2026/11/01/01a197a4-eab8-7353-8272-b52b88d4e8e6/mask-separated-layers.jpg`.
**Still open:** Michael's visual judgement; acceptance pending.
**Needs Michael:** refresh staging and check the centred spread.
**Next useful action:** review centre-out stagger.
— Codex

## 1 November 2026 — Codex — original gradual raspberry sweep restored (R-035)
**Changed:** Michael asked to put the background marquee stagger “back to how it was before so it gradually reveals the lines over the scroll distance”. Restored the original linear progress calculation: desktop sweep across 30–70% of the shared sequence's held scroll range; smaller screens 10–90%. Letters light left to right, row by row from top to bottom, stay lit once reached, and reverse on upward scroll. Removed the short entry, long hold, late exit and quint easing trial.
**Outputs:** Home footer independently read back exactly; Home head unchanged. Mirrored in `ticker-marquee.js` and `snapshots/custom-code.json`; ROADMAP wording updated. Mask crop, two edge fades, Hard Light at 70%, native motion and slow marquee drift retained. Published staging only. No commit, push, Boss, task, time or acceptance changes.
**Checked how:** `node --check ticker-marquee.js` and `git diff --check` passed. Verified (live) on staging in Chrome on the Mac Studio at 1502×1120: at 38.24% sequence progress the first row is lit and the second partial; at 55.74% the first five are lit and the sixth partial; reverse to 51.00% returns to four lit rows and a partial fifth. Hard Light retained. Evidence: `marquee-gradual-reveal.jpg` and `marquee-gradual-checks.json` in `/Users/michaelauty/.codex/visualizations/2026/11/01/01a197a4-eab8-7353-8272-b52b88d4e8e6/`. Latest sweep not checked on phone/tablet, physical devices or other browsers.
**Still open:** Michael's visual judgement; acceptance pending.
**Needs Michael:** refresh staging, scroll through the gradual colour reveal and back, then take the after backup.
**Next useful action:** check the restored pacing. Michael also asked for thoughts on recovering the raspberry colour after blending. Suggested separating the backing blend/opacity from the clipped letters, or compensating with a lighter source tint; no colour change made in this pass.
— Codex

## 1 November 2026 — Codex — Hard Light correction (R-035)
**Changed:** Michael corrected the requested reveal-layer blend to Hard Light. Changed only `mix-blend-mode: hard-light` on runtime `data-ticker-mask-content`; opacity stays `0.7`. Crop, edge fades, marquee pacing and sequence motion unchanged.
**Outputs:** Home footer independently read back exactly; Home head unchanged. Mirrored in `ticker-mask.js` and `snapshots/custom-code.json`; ROADMAP wording corrected. Published staging only. No commit, push, Boss, task, time or acceptance change.
**Checked how:** `node --check ticker-mask.js` and `git diff --check` passed. Verified (live) on staging in Chrome on the Mac Studio at 1502×1120: visible mask layer computes to `hard-light`, opacity `0.7`. Screenshot: `/Users/michaelauty/.codex/visualizations/2026/11/01/01a197a4-eab8-7353-8272-b52b88d4e8e6/mask-hard-light.jpg`.
**Still open:** Michael's visual check; acceptance pending.
**Needs Michael:** refresh staging and take the after backup if happy.
**Next useful action:** check Hard Light at 70% during the mask pass.
— Codex

## 1 November 2026 — Codex — reference mask crop, two edge fades and raspberry pacing (R-035)
**Changed:** matched the vertical positioning and overscan to Michael's three reference screenshots. The previous mask put the lowercase top close to the viewport top. The revised scale and baseline place it around 29% down, with capitals extending above the viewport and lowercase curves extending below. Restored the fade into Faulty Terminal at both the top and bottom edges. Retained Soft Light at 70% opacity.
**Designer properties written and read back:** existing `type__mask`: `font-size: 160dvh`; `margin-top: 9.5dvh`. Its other properties and breakpoints are unchanged. No new class. Home head's prefixed and unprefixed panel mask now uses `linear-gradient(to bottom, transparent 0%, #000 10%, #000 90%, transparent 100%)`.
**Raspberry timing:** Michael asked for the text stagger to run in quickly from the beginning, pause for reading, then run back out near the end with momentum. The existing letter-splitting/highlight script now measures the native mask-phase marker: entry over 0–10%, reading hold 10–88%, exit 88–98%, then off. Both sweeps use quint easing; exit reverses the lit edge through the rows. This begins when the text mask pass begins, after the promise hold and slate sweep, so the entry is visible. Clone, drag, drift and palette are unchanged. Reduced motion holds the highlight steady.
**Outputs:** updated Home code and class snapshots; `ticker-marquee.js` mirrors the changed marquee script; `ticker-mask.js` unchanged. Saved the previous targeted style values and fade in `snapshots/experiments/mask-reference-position-before.json`. Code readback matched exactly; unrelated code preserved. No interaction definition, Boss, task, time, acceptance, commit or push changes.
**Checked how (Evidence: verified (live)):** staging only, Chrome on the Mac Studio with a 1697×1074 viewport override matching the reference image. The final font is 1718.4px and HTML baseline 1192.734px (118.734px below the viewport); SVG follows the H2. Compared the S/e silhouette visually with the supplied image. Top and bottom fades are present. Highlight samples: at 5.22% the first five rows are lit and the sixth partial; at 10.96% and 49.16% all non-space letters are lit; at 94.54% only part of the first row remains lit; after the mask range all are off. Reverse scrolling to 82.23% restores the full hold. No warnings/errors captured. Viewport override restored afterwards. `node --check` passed for both ticker helpers; `git diff --check` passed.
**Evidence:** `mask-reference-alignment.jpg`, `mask-reference-raspberry-hold.jpg`, and `mask-reference-and-raspberry-checks.json` in `/Users/michaelauty/.codex/visualizations/2026/11/01/01a197a4-eab8-7353-8272-b52b88d4e8e6/`.
**Not checked:** latest changes on phone/tablet, physical devices, Safari/Firefox or reduced-motion playback. Michael's acceptance remains pending.
**Needs Michael:** refresh staging, compare the crop and edge fades with the references, scroll through the raspberry entry/hold/exit, and take an after backup.
**Next useful action:** Michael's visual judgement of the crop and colour pacing.
**Handoff:** mask typography stays editable on `type__mask`; edge fades are scoped Home head CSS; highlight timings are constants in the mirrored marquee script and matching Home footer. Sequence motion remains in native Webflow GSAP.
— Codex

## 1 November 2026 — Codex — promise hold, slate sweep and one sideways mask pass (R-035)
**Changed:** built Michael's requested sequence: Our promise stays pinned for reading; a wide, angled transparent-to-slate gradient enters from the right; a single “Sectors & Specialisms” mask passes right to left; the stage then unpins to reveal “Your website. Built to last.” Preserved the current mask typography/alignment and nine-row appearance during this pass. Restored the subtle vertical fade to reveal Faulty Terminal at the bottom. Michael then specified `mix-blend-mode: soft-light` and 70% opacity on `data-ticker-mask-content`; those values are applied to the runtime reveal layer.
**Authorisation:** Michael asked to “Let's get that right then come back to the revealed marquees”, confirmed a backup earlier, and explicitly asked to keep the vertical fade. No Boss, task, time, acceptance, commit or push changes.
**Structure and motion:** added a shared plain Block around About Top, moved the existing ticker inside the sticky stage, and added two phase markers plus a plain gradient Block. No new Designer class. Promise entrance now finishes before the hold; the previous promise fade becomes the slate sweep. Native GSAP moves the H2 only horizontally, from fully outside the right edge to fully outside the left. The existing nine drift actions keep their travel amounts and now reference the shared sequence. Promise content fades near the sweep's end so it does not show through the bottom fade afterwards.
**Distance and code:** the helper measures the real H2 width after fonts/resize for exactly one text length of scroll, plus 1.15 viewport heights of reading room and 1.1 panel widths for the sweep. Scoped Home head CSS supplies the shared sticky layout, angled gradient and bottom fade. The retained marquee script's progress root now uses the shared wrapper; its clone, drag and highlight logic is otherwise unchanged. Motion remains in native Webflow GSAP interactions. Sweep explicitly resets absolute x to zero while animating xPercent, avoiding a doubled initial CSS translation.
**Outputs:** `ticker-mask.js`, Home head/footer code snapshot, current interaction definitions in `snapshots/interactions/promise-sectors.json` and `ticker.json`, and the new wrapper subtree in `snapshots/pages/promise-sectors.json`. Before-state code, interactions, structure and styles are preserved in `snapshots/experiments/promise-sectors-before.json`. Code blocks and native interactions were independently read back; footer matches exactly and unrelated head/footer code was preserved. Final blend refinement changes only the runtime layer's two requested properties.
**Checked how (Evidence: verified (live)):** published staging only; Chrome on the Mac Studio at 2044×1064. Forward and reverse checked: readable promise at pinned top 0; sweep enters from right with no rising ticker; H2 enters from the right, passes once with constant vertical position, and clears fully left before release. At exit the stage has moved offscreen and the next section starts at top 0. The mask phase measured 17783.375px, matching the heading width; there is one H2. Reverse returned to the readable promise. No console warnings/errors captured. After the final blend refinement, reloaded staging and visually checked the mask; computed values are `soft-light`, `0.7`, panel top 0, with the vertical fade intact. Full motion run precedes this appearance-only refinement.
**Evidence:** `sequence-promise.jpg`, `sequence-sweep.jpg`, `sequence-mask-enter.jpg`, `sequence-mask-middle.jpg`, `sequence-last-letters.jpg`, `sequence-next-section.jpg`, `sequence-checks.json`, `sequence-soft-light.jpg` and `sequence-soft-light-check.json` in `/Users/michaelauty/.codex/visualizations/2026/11/01/01a197a4-eab8-7353-8272-b52b88d4e8e6/`.
**Not checked:** latest sequence on phone/tablet, physical devices, Safari/Firefox or reduced-motion playback. Reduced-motion fallback is implemented but unverified. Earlier phone layout checks do not prove this new sequence.
**Still open:** Michael's judgement of timing, sweep, fade and blend; acceptance pending. Revealed marquee refinement remains deferred as requested.
**Needs Michael:** refresh staging, scroll from above Our promise through the next section and back, then take the after backup.
**Next useful action:** Michael's sequence review before returning to the marquees.
**Handoff:** native GSAP definitions control motion; the Home helper measures phase ranges and syncs SVG clipping. Preserve the original row colours, typography and scripts. The targeted sequence snapshot supersedes the older page snapshot for this structure.
— Codex

## 1 November 2026 — Codex — nine full-height rows and a centred, screen-height mask (R-035, R-080 revision)
**Changed:** moved the existing Software and Social Enterprise items into the Arts & Publishing track, after Healthcare, then removed their empty former row. Nine rows now fill the viewport from top to bottom, with larger type. The mask is sized by viewport height and centred on the visible letter bodies; taller strokes extend beyond the edges. Original text colours, weight, raspberry sweep and gradient separator colours remain. Sideways mask movement and slow row drift remain.
**Authorisation:** Michael asked to “Lose that row, add those entries to the 'arts & Publishing' row” and then specified that the marquee rows and mask should fill the screen height, with ascenders/descenders pushed off screen enough for balanced centre alignment and legibility. Continued within his existing backup authorisation. No Boss, task or time changes.
**Structure and interaction:** moved the two existing item elements (IDs unchanged); read them back under the Arts track before deleting the empty row. The Arts track now has Arts & Publishing, Healthcare, Software and Social Enterprise. Removed the deleted track's action from `Ticker Drift`; nine native drift actions remain, with the other offsets/directions unchanged. No heading wording changes.
**Designer properties written and independently read back:** `ticker__sticky`: `height: 100dvh`, `padding-top: 0px`, `padding-bottom: 0px`; `Ticker__Row`: `height: calc(100% / 9)`, `flex-shrink: 0`; `Ticker__Item`: `font-size: calc(100dvh / 9)`, `line-height: 1`, `margin-top: 0px`, `padding-bottom: 0px`; `Ticker__Track`: `display: flex`; `ticker__mask`: `height: 100%`, `align-items: center`; `type__mask`: final `font-size: 175dvh`, `margin-top: -33dvh`, with the previous xl margin override removed; `Dash`: `line-height: 0`, `transform: none`. Seven existing classes reused, no new class.
**Spacing and crop:** removed the isolated Home head rule that faded the panel over 10svh at each edge, so the first and last rows stay visible. Corrected the separator's old internal baseline spacing, which initially made the track taller than its row at the larger size. The final mask was increased from the first 150dvh trial to 175dvh for fuller lowercase bodies and a balanced optical centre. The former -11dvh/-17dvh margins were existing base/xl settings, not concurrent edits; both were replaced by the final -33dvh optical offset.
**Outputs:** Home head read back exactly; Home footer and mask helper unchanged. Updated class and interaction snapshots plus the current targeted ticker subtree at `snapshots/pages/ticker.json`. The older whole-page Home snapshot remains behind Webflow; this targeted snapshot is the current ticker structure. Original accepted ten-row content version remains recorded on R-080; this layout revision's acceptance stays pending on R-035. No commit or push.
**Checked how (Evidence: verified (live)):** published staging only. Chrome on the Mac Studio at 1708×1132: nine rows, 125.78px type; first row starts at 0.047px and last row ends at 1131.938px inside the 1132px panel. Row height 125.766px, track height 125.781px (rounding only). Separator centre is 64.20px into the 125.77px row. Mask font 1981px, margin -373.56px; SVG clip x matches the moving H2. Looked at the final crop. The Arts row contains the four entries; originals appear once in the source and repeat through the existing clone script.
**Phone-width check:** Chrome viewport override 390×844: nine rows of 93.766px, first top 0.047px and last bottom 843.938px inside an 844px panel; track height 93.781px. Mask font 1477px, margin -278.52px; SVG x matches the heading. Looked at the final result. No warning/error messages captured. Browser viewport restored to 1708×1132. `git diff --check` passed.
**Evidence:** `ticker-nine-rows-desktop.jpg`, `ticker-nine-rows-phone.jpg` and `ticker-nine-rows-checks.json` in `/Users/michaelauty/.codex/visualizations/2026/11/01/01a197a4-eab8-7353-8272-b52b88d4e8e6/`.
**Not checked:** physical devices, Safari/Firefox, tablet at this latest size, reduced-motion playback, or the full scroll range again after the final type sizing. The existing horizontal interaction is unchanged; current-position alignment was checked at both widths.
**Still open:** Michael's judgement of the crop, alignment and type scale; acceptance pending.
**Needs Michael:** refresh staging, check the full-height layout while scrolling, and take the after backup.
**Next useful action:** Michael's visual check before further changes.
— Codex

## 1 November 2026 — Codex — mask direction changed to sideways (R-035)
**Changed:** Michael answered the direction question: “Sideways across the screen”. Changed the native `Ticker Mask Scroll` interaction from upward movement to right-to-left travel. The first letters start at the left edge; the final letters finish at the right edge. The slow underlying row drift, original colours/weight, slate backing and steady panel are retained. No script or Designer style changes in this direction correction.
**Outputs:** `i-a396b91e` now uses the ticker's held range `top top` to `bottom bottom`, scrub `0.1`, with H2 `xPercent: [50, -50]` and `x: [-50vw, 50vw]`, linear timing. No y animation. Independent readback matched. Updated `snapshots/interactions/ticker.json`; saved the previous direction separately as `ticker-upward-trial.json`. No Boss, acceptance, commit or push changes.
**Checked how (Evidence: verified (live)):** staging only, Chrome on the Mac Studio at 2044×1132. At 22544px and 23676px scroll positions, H2 left changed from `-5374.36px` to `-10744.73px`; H2 top and panel top stayed `0`, first-row top stayed `132.3125px`, and SVG x matched the H2 exactly. At the end of the held range the heading's right edge was `2040px` (viewport 2044px). Reverse scrolling returned the same middle x position. No warning/error messages captured. Looked at the movement in the browser. `git diff --check` passed.
**Evidence:** `ticker-sideways-middle.jpg`, `ticker-sideways-end.jpg` and `ticker-sideways-checks.json` in `/Users/michaelauty/.codex/visualizations/2026/11/01/01a197a4-eab8-7353-8272-b52b88d4e8e6/`.
**Not checked:** this sideways direction at phone/tablet widths, physical devices, Safari/Firefox or reduced-motion playback. The preceding phone check describes the upward trial.
**Still open:** Michael's judgement of the sideways direction, scale and pace; acceptance pending.
**Needs Michael:** refresh staging, scroll through the ticker and back, and take the after backup.
**Next useful action:** Michael's look at the sideways version.
— Codex

## 1 November 2026 — Codex — moving mask over steady, slowly drifting marquees (R-035)
**Changed:** tried Michael's suggested separation of the two layers. Native Webflow GSAP now moves the mask text upwards through a stationary sticky panel. The sector rows drift sideways at 15% of their previous travel. Their colours, weight, existing raspberry sweep and drag script remain as before. No added pale pink or cream styling.
**Authorisation and backup:** Michael reported the disappearance and suggested fixed/slow marquees with moving mask text: “I have a backuop at this point - have a go at the suggestion. webflow MCP now has access to GSAP”. Used his confirmed backup. Upward motion is this pass's interpretation of “scrolls with the section”; an optional direction question had no reply at implementation time. No Boss action, task or time entry.
**Cause and native changes:** the old `Ticker Wipe` interaction `i-a396b91e` translated the whole sticky panel from `yPercent: 100` to `0`, then to `-100`. Replaced its timeline in place and renamed it `Ticker Mask Scroll`: trigger remains the outer ticker, range `top bottom` to `bottom top`, scrub `0.1`, linear H2 action `y: [100svh, 0svh]` plus `yPercent: [0, -100]`. Reduced-motion exclusion retained; the mask movement now runs at all breakpoints. `Ticker Drift` `i-24c831a7` retains the same ten element targets and start offsets; each travel distance is multiplied by `0.15`.
**Designer properties written and read back exactly:** `ticker__sticky`: `top: 0svh`, `height: 100svh`. Existing tiny override `height: 100dvh` remains. No new Designer classes.
**Outputs:** replaced `ticker-mask.js` and the matching appended Home footer script with a live SVG text clip. It follows the real H2 baseline and native transform; it updates position without encoding a PNG on each frame. Original Home head and every preceding footer script are unchanged. Current definitions and the before definitions are saved in `snapshots/interactions/ticker.json` and `ticker-before-mask-scroll.json`; code and style snapshots updated. All native interaction fields and the two style properties were independently read back. Home footer was independently read back exactly and Home head compared unchanged. `node --check ticker-mask.js` and `git diff --check` passed.
**Checked how (Evidence: verified (live)):** published to staging only. Chrome on the Mac Studio, 2044×1132: looked at early, middle, late and exit positions, then reversed. While held, panel top stayed `0`, transform stayed `none`, and first-row top stayed `132.3125px`. Across 1132px of scroll, H2 top moved from `-5.13px` to `-573.70px`, while the first track moved only about 38px sideways. The SVG baseline matched the HTML baseline exactly at both sampled positions. Reverse scrolling returned the mask to the same middle position. At the final held frame the mask remained visible; at section exit the panel left naturally, with no whole-panel transform. No warning/error messages captured.
**Phone-width check:** actual Chrome viewport override 390×844, not a physical device. Across 422px of scroll, H2 top moved from `381.75px` to `186.68px`; panel top stayed `0`, first-row top stayed `141.28125px`, and SVG/HTML baselines matched. Looked at both positions. Original colour `rgb(79, 109, 117)` and weight `200` confirmed. Restored the browser viewport afterwards.
**Evidence:** screenshots `ticker-motion-early.jpg`, `ticker-motion-middle.jpg`, `ticker-motion-late.jpg`, `ticker-motion-exit.jpg`, `ticker-motion-phone-early.jpg`, `ticker-motion-phone-middle.jpg`, and measured samples `ticker-motion-checks.json` in `/Users/michaelauty/.codex/visualizations/2026/11/01/01a197a4-eab8-7353-8272-b52b88d4e8e6/`.
**Not checked:** physical iPhone/tablet, Safari/Firefox, reduced-motion playback, or drag after this latest change. The retained oversized horizontal crop means the full heading is not readable; this pass changes its vertical movement only.
**Still open:** Michael's judgement of the direction, pace and overall look. Acceptance pending. No commit or push requested or made.
**Needs Michael:** refresh staging, scroll through the whole section and back, and take the after backup.
**Next useful action:** Michael's look at this upward-motion version before further visual changes.
**Handoff:** GSAP movement lives in the native interaction, clipping follows it from Home footer custom code. Preserve the pre-existing marquee clone/drag/highlight scripts and original colours. `snapshots/interactions/ticker-before-mask-scroll.json` records the two native definitions before this experiment; the earlier canvas helper is still recorded in this chat's preceding code history, not the current file.
— Codex

## 1 November 2026 — Codex — original marquee styling restored (R-035)
**Changed:** Michael: “Don't like the pink highlights, they're off brand. I want that layer underneath to remain as it was.” Removed the added pale pink highlight override and restored `Ticker__Item` to `color: #4f6d75`, `font-weight: 200`. The original `#d9466c` raspberry sweep and all existing marquee code remain. The mask, blue surround and slate letter backing remain.
**Outputs:** exact Home head readback and class readback copied to the existing code/style snapshots; current roadmap description corrected. Home footer compared byte-for-byte and is unchanged.
**Checked how:** independent MCP readbacks matched. Published to staging only; Chrome on the Mac Studio at 2044×1076 confirmed computed marquee colour `rgb(79, 109, 117)`, weight `200`, absence of the pale pink override and successful mask initialisation. Scrolled to the ticker and confirmed the original active highlight computes to `rgb(217, 70, 108)` (`#d9466c`). Looked at the result; screenshot: `/Users/michaelauty/.codex/visualizations/2026/11/01/01a197a4-eab8-7353-8272-b52b88d4e8e6/ticker-original-colours.jpg`.
**Still open:** Michael's visual acceptance; heading animation remains for later. No acceptance or Boss changes, commit or push.
**Needs Michael:** refresh staging and check; take the after backup.
**Next useful action:** review the restored original marquee through the mask.
— Codex

## 1 November 2026 — Codex — blue ticker reveal with brighter sector text (R-035)
**Changed:** replaced Michael's black Multiply experiment with a true letter-shaped reveal. The blue surround remains; a lighter slate fills the letter shapes and the sectors are warm off-white at weight 300. The scroll highlight is pale raspberry within the masked layer. The heading's current size and crop are retained; no heading animation added.
**Authorisation and backup:** Michael: “Go for it, I have a backup - you don't need to work within boss constraints for this”. Used his confirmed backup; no Boss report, tasks, time or acceptance written.
**Outputs:** Home head/footer custom code updated through MCP and copied exactly into `snapshots/custom-code.json`; helper source in `ticker-mask.js`; three class readbacks in `snapshots/styles/classes.json`. Existing H2, rows and interaction targets remain in Designer. At runtime the rows move together into a masked wrapper; the H2 supplies its font, layout and backing colour. Mask redraws on size, font and text changes. Later heading transform animation needs integration with `window.mwpRefreshTickerMask`; it is not implemented or verified by this pass.
**Designer properties written and read back exactly:** `ticker__mask`: `background-color: transparent`, `mix-blend-mode: normal`, `pointer-events: none`; `Ticker__Item`: `color: #f3eee7`, `font-weight: 300`; `type__mask`: `color: #49636b`. No new Designer class or mask property written to a class. The mask itself is runtime custom code because Designer background clipping cannot reveal sibling marquee elements.
**Checked how (Evidence: verified (live)):** Home head/footer echoed and independently read back byte-for-byte; both original blocks remain exact prefixes. `node --check ticker-mask.js` passed. Published to the Webflow staging subdomain only. Chrome on the Mac Studio: 2044×1132 desktop, plus actual Chrome viewport overrides at 390×844 and 820×1180. Ten rows remain; mask sizes match the panel after resize (2036×1358, 382×844, 812×1416). Looked at each width. Desktop track transform changed during scroll. Tablet row 4 drag changed its inner wrapper from no inline transform to `translate3d(-655.319px, 0px, 0px)`. No warning/error messages captured. Restored the browser viewport afterwards.
**Evidence images:** `/Users/michaelauty/.codex/visualizations/2026/11/01/01a197a4-eab8-7353-8272-b52b88d4e8e6/ticker-mask-desktop.jpg` and `ticker-mask-tablet.jpg` in the same directory.
**Not checked:** physical phone/tablet, Safari or Firefox; future heading animation. Smaller screens show a smaller portion of the rows through the retained heading crop, so this is not evidence that every sector can be read.
**Still open:** Michael's visual acceptance and the eventual heading animation. No commit or push requested or made.
**Needs Michael:** refresh staging, check the look, and take the after backup (D-008).
**Next useful action:** Michael's look, then choose the heading movement before wiring its animation to the mask.
**Handoff:** R-035 is built, acceptance pending. `ticker-mask.js` mirrors the appended Home footer script; preserve all preceding custom code. Staging runs custom code, Designer does not. The existing ten-row drift, drag and highlight scripts were retained unchanged; only the highlight colour is scoped by the appended Home head rule.
— Codex

## 1 November 2026 — Codex — how the ticker can show through the heading (R-035)
**Changed:** explanation only; nothing changed in Webflow or published. No acceptance changed.
**Outputs:** inspected the Home ticker and compared a native blend effect with a true text-shaped mask. Recommended a true mask if the dark, translucent surroundings must be retained; a blend effect is a simpler option if Michael wants solid black or white surroundings.
**Checked how:** read the current Webflow element tree and class properties through MCP. Ten rows and `ticker__mask` are siblings inside `ticker__sticky`; the mask wrapper is absolute, 100dvh high, and contains the H2 `type__mask`, “Sectors & Specialisms”. Neither class currently defines a mask or blending. The sticky panel is 120svh high with a translucent dark background and blur. Read current Webflow and MDN guidance on blending, background clipping and masking. Git was clean at the start; HEAD was `270b2af`. Commits since the older reviewed-at marker are recorded in the intervening log entries.
**Still open:** choose the visual approach before implementation (D-007). A true mask needs a shape derived from the heading; later heading animation must also move that shape. The wrapper and sticky panel have different heights, so coverage needs checking during a build.
**Not checked:** rendered mask behaviour or animation on staging; no implementation was made.
**Needs Michael:** no staging check or backup needed for this read-only inspection. Check and back up after any later implementation (D-008).
**Next useful action:** decide whether the area outside the letters should retain the existing dark, translucent appearance or become solid black/white.
**Handoff:** R-035 remains planned. Preserve the existing ticker drift. Read back current Webflow state before building; this entry describes an approach, not a tested effect.
— Codex

## 1 November 2026 — Claude (night shift) — ticker: ten rows, smaller type (R-080, brief #208)
**Changed (in Webflow, site madewithpixels, page Home):**
1. Five new rows added inside `.ticker__sticky`, after the existing five, using the existing classes `Ticker__Row`, `Ticker__Track`, `Ticker__Item` and `Dash` (no new class). New phrases: Industry & Commerce, Consultancy, Visitor Attractions, Nightlife & Entertainment, E-commerce, Media, Museums & Heritage, Retail, Global Corporations, Design, Marketing & PR Agencies, Event Ticketing, E-learning, CRM & Accounting Integrations, Portfolios & Blogs, Asset & Service Management Portals. With the 12 already there, 27 in all.
2. Class `Ticker__Item`: font-size changed from `clamp(3rem, 17.5svh, 12rem)` to `clamp(2rem, 7svh, 6rem)` (longhand, read back). Michael's note asked for smaller copy.
3. Interaction **Ticker Drift** (`i-24c831a7`): five actions added (rows 6–10), one per new track; rows 1–5 re-sent unchanged. The drift targets each track by element, not by class, so new rows would not have moved without this. Alternating directions, same xPercent ranges as rows 1–5.
4. Published to madewithpixels-dev.webflow.io only. Nothing on the custom domain. No custom code touched, section height unchanged (400svh).
**Backups:** "boss · brief #208 · before" and "boss · brief #208 · after", both made on the Webflow dashboard (the Designer URL redirected to the dashboard in my own tab, so the Designer route failed).
**Checked how (Evidence: verified (live)):** published staging in Chrome on the Mac Studio, 2044×1132 viewport: 10 rows, item font 79px, rows 86px each, 867px of rows inside the 1358px panel; screenshot shows all 27 sectors readable and rows offset. The footer ticker script copied each row 6 times (18 items per 3-phrase row). Phone (390×844) and tablet (820×1180): measured in an embedded frame, rows 646px and 911px, both inside the panel; not looked at by eye.
**Not checked:** scroll-tied drift of the new rows by eye (the interaction update was read back and accepted); the raspberry sweep on the new rows (same script, not eyeballed); the Designer canvas (it doesn't run custom code). The snapshot cannot see interactions; `snapshots/pages/home.json` was **not** refreshed with the five new rows (only `snapshots/styles/classes.json` changed), so the saved page snapshot is behind Webflow.
**Left as it is:** row 1 still has an empty first `Ticker__Item`; the old `mwp-site-menu-*` menu; the empty duplicate "Hero Fade Out".
**Needs Michael:** look at it on staging, and say which sectors to trim or reword. Check and back up (D-008).
**Next useful action:** Michael's look; then refresh the Home snapshot.
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — new task written up (R-093, brief #193)
**Changed:** ROADMAP only. Added R-093 (Phase 3) for task 43612345, "Remove all drop shadows from the hero project wall and the testi-wall at tablet and mobile", with a done-when and guesses marked (inferred — confirm). Nothing in Webflow, nothing published. State: planned. Evidence: none. Acceptance: pending.
**Tasks with no roadmap item:** the other six listed (MWP landing pages, Launch MWP social campaign, Adjust Estimator, Launch prep, Finish MWP site, Responsive layouts) are headings already covered by the goal and phases, so they got no item (see the note at the top of ROADMAP).
**Needs Michael (not blocking):** these items' tasks were deleted from his list; I've left the items as they are for him to decide: R-082, R-036, R-037, R-074, R-086, R-076, R-042, R-043 (accepted), R-059. His reorders (R-038 and R-076 before R-075; R-082 before R-032) were already applied; I saw nothing they put ahead of work they depend on.
**Next useful action:** confirm R-093's guesses, then options first (D-007) before any change.
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — ticker: copy gathered, layout options put to Michael (R-080, brief #190)
**Changed:** ROADMAP only (R-080's done-when now carries Michael's note). Nothing in Webflow, nothing published, no custom code. I made no Webflow tool call, so no backup was made and no snapshot changed. State: planned. Evidence: verified (live; staging and the live site read in Chrome by script and page text). Acceptance: pending.
**How the ticker is built now (staging, Home):** section `.ticker`, 4528px tall, with a sticky 1358px panel holding 5 rows (`.ticker__row`, each a `.ticker__track` of `.ticker__item`s, rows 1 and 3 moving left, row 2 and 4 right, 210px high). Only 12 phrases appear: Not-for-profits, Public & Private Sector, Charities, Small to Medium Enterprise, Boutique Retailers, Commercial Manufacturing, Music Industry, Travel & Tourism, Arts & Publishing, Healthcare, Software, Social Enterprise. Each is repeated 6 times to fill the row.
**Sectors and business types in the copy but not in the ticker:** from staging: Industry & Commerce, Consultancy, Visitor Attractions, Nightlife & Entertainment, E-commerce, Music (and the "Hundreds of projects... charity" line). From the live site: Media, Museums and Heritage, Retail, Global corporations, Design/marketing/PR agencies (white label), E-commerce with point-of-sale stock integration, event and ticketing tools, E-learning and online education, CRM and accounting integrations, blogs, photography, architecture and media portfolios, asset and service-management portals, Travel, Tourism.
**Why not built:** the layout is a visual change, so D-007 says options first. Asked in boss; nothing else depends on the answer.
**Needs Michael:** pick the layout (question in boss).
**Next useful action:** after his pick, backup, then build in the Designer.
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — hero strapline blur dropped at Michael's word (R-087, brief #186)
**Changed:** R-087 is now marked dropped in the roadmap. Nothing in Webflow, nothing published, no code or interaction touched. I made no Webflow tool call, so no backup was needed and no snapshot changed. Evidence: n/a (docs only). Acceptance: pending.
**Why:** Michael chose "Leave it, I can't see it now" in boss on brief #185's question, with the note: "I can't reproduce it now either - let's forget it". I am recording his decision, not making one.
**Left as it is, for the record:** the empty duplicate "Hero Fade Out" interaction (`i-9e2a7fda`) and the leftover `blur(0.0045px)` after a fast return to the top, both described in the entry for brief #185 below. If the blur is seen again, reopen R-087 with the browser, width and how it was scrolled.
**Needs Michael:** nothing.
**Next useful action:** the next brief in the queue.
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — hero strapline blur investigated; no visible blur reproduced, nothing changed (R-087, brief #185)
**Changed:** nothing in Webflow, nothing published, no custom code or interaction touched. I made no write call to Webflow. Only the Webflow reads below and the docs. State: in progress (cause found, visible fault not reproduced). Evidence: verified (live; published staging, Chrome on the Mac Studio, 1709px wide). Acceptance: pending.
**Cause (proven for the part I could see):** the blur is not set by custom code. Nothing in the site footer or Home page footer code refers to the strapline's blur. It is set by the Home page interaction **Hero Fade Out** (scroll-tied): its "Brand Name Blur" step sets the Animation variable that feeds `filter` on the class `--Can-blur` (`.can-blur`) up to 5px, over the hero's exit. The strapline is an H3 with `hero-strapline can-blur`, sitting inside `.logo-wrapper.can-blur`, so both are driven by that one step.
**Measured on staging (desktop, Chrome), computed filter / opacity / transform of the strapline:**
- First load: `blur(0px)` / 1 / `none`.
- Scrolled to 2000px and beyond: `blur(4.9px to 5px)` / 0 / `matrix(1,0,0,1,0,0)`.
- Back at the top by mouse wheel, after 2 seconds: `blur(0px)` / 1 / `matrix(1,0,0,1,0,0)`. Same as first load, to the eye.
- Back at the top by a quick jump (a fast scroll, a menu "Home" jump or a script jump), after any wait up to 6 seconds: `blur(0.0045px)` / 1 / identity matrix. It never settles at exactly 0. The logo wrapper, driven by the same step, does settle at `blur(0px)`. A zoomed screenshot of the strapline in that state looks sharp.
**So:** I could not make the strapline visibly blurred. What I can show is a tiny leftover (0.0045px) that keeps an active blur filter on the strapline after a fast return; that is the only difference from first load. It may be what you see on some screens (a filter can make text render with softer edges), but I can't prove that. I did not fix it, because it isn't in custom code and guessing at it with a script that fights the interaction would risk the scroll animations (D-017).
**Also found (Designer interactions, read through the Webflow tools, not changed):**
1. There are **two interactions named "Hero Fade Out"** on Home. `i-7bbab732` targets the hero class `41e3bd9c…` and does the work. `i-9e2a7fda` is an exact copy (same version 28, same timings) whose targets are all **empty**, so it does nothing visible. It looks like a leftover. I did not delete it: I can't see in the tools what it does when the Designer plays it, and AGENTS.md says not to change interactions I can't read back.
2. The strapline's own entrance (Hero load interaction, "Hero Strapline" step) splits it into words and leaves each word with an inline `transform: translate3d(0,0,0)`; that is why its computed transform is a matrix, not `none`, once the page has loaded. Harmless, and the same on first load after the entrance.
**Options for the Designer (Michael's call, nothing done):** (a) delete the empty duplicate `i-9e2a7fda` in Designer > Interactions, then re-test; (b) in the real "Hero Fade Out", make "Brand Name Blur" a scrubbed tween that the end state is exactly 0 (an easing that ends flat), or add a final "set" step; (c) leave it if you can't see it. I recommend (a) first because it is cheap and reversible, then see if the leftover goes.
**Checked how:** staging in Chrome, scripted measurements with Lenis scrolls (animated and immediate) and real mouse-wheel scrolls; zoom screenshots; Webflow reads: site and Home page custom code, interaction list and the three interactions above. Strings searched in the code: blur, strapline, hero.
**Not checked:** phone and tablet widths. I could not: the window resize tool reported success but the viewport stayed at 1709px wide, so the page never switched layout. Safari and Firefox. A real finger or trackpad inertia scroll. The exact way you saw it (which browser, width, how you scrolled): if it was a visible blur, I haven't reproduced it.
**Webflow backups (Designer route):** "boss · brief #185 · before" (9:33 pm) and "boss · brief #185 · after" (9:36 pm), both seen in the Backups list and recorded in boss. **Snapshots:** none changed (no Webflow write; interactions are not in the snapshot format).
**Tasks deleted in Michael's list, kept for him to decide:** R-082, R-036, R-037, R-074, R-086, R-076, R-042, R-059 (and R-043, already accepted).
**Needs Michael:** tell me how you see it (browser, window width, how you scrolled, and whether it clears if you wait or scroll a little), and pick an option above.
**Next useful action:** with that detail, retest at that width; or a brief to delete the empty duplicate interaction once you've looked at it in Designer.
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — closing quote mark back on the Travel Ledger testimonial (R-084, brief #168)
**Changed (R-084), Webflow, site madewithpixels, Home page, published to the webflow.io staging address only:** in the testimonials wall, Roberto Da Rae's quote (Travel Ledger) had its text bare in the blockquote; I added an `<em>` element (DOM, tag em) at the start of that blockquote and moved the text into it. Nothing else touched: no class, style, interaction, custom code, CMS item or setting. State: built. Evidence: verified (live; published staging, Chrome on the Mac Studio, 1467px wide, by script). Acceptance: pending.
**Cause (proven):** the closing mark is a CSS pseudo-element on `.testi-wall_blockquote > em:first-child`. The other nine quotes have that `<em>`; this one didn't. Not an SVG file, not the CMS, not R-045.
**Checked how:** before, a script over the live page found exactly one blockquote with no first `<em>`. After publishing, all ten have one; the Travel Ledger one computes the mark at 29 x 47px, inline-block, with the quote mask. No console errors. Webflow element count went from 3419 to 3420 (one more, as expected).
**Not checked:** by eye (the wall is scroll-driven and I only read it by script); tablet and phone widths; Safari and Firefox; the Designer view. A stray `<br>` sits between the `<em>` and the name, as it did before. On the other quotes it sits inside the `<em>` and is hidden by CSS, so the gap above the name on this quote may differ slightly from the others.
**Webflow backups (Designer route):** "boss · brief #168 · before" (7:58:06 pm, first save needed a refresh of the list to show) and "boss · brief #168 · after" (8:00:27 pm), both seen in the list and recorded in boss. **Snapshots:** none changed; the format doesn't cover page elements.
**Needs Michael:** try it (steps under R-084), then check and back up (D-008). If the gap above Roberto's name looks different from the others, say so and I'll move the line break in.
**Tasks deleted in Michael's list, kept for him to decide:** R-082, R-036, R-037, R-074, R-086, R-076, R-042, R-059 (and R-043, already accepted).
**Next useful action:** brief #173 (R-078) and R-087.
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — Faulty Terminal removed from every project page (R-085, brief #167)
**Changed (R-085), Webflow, site madewithpixels, published to the webflow.io staging address only:** removed the `faulty-terminal` div (the animated terminal background) from **39 project pages** and the draft "Project Page" template. Home and /estimate keep it. No class, style, interaction, custom code or CMS item touched. State: built. Evidence: verified (live; published staging, Chrome on the Mac Studio, 1467px wide). Acceptance: pending.
**Why this fallback:** moving between projects is a full page load, so the terminal's canvas has to be rebuilt every time; I found no way round that in Webflow without turning the site into a single-page app. Your note said to remove it if so. Strictly D-007 says options first; I went on your written instruction.
**Checked how:** after publishing I fetched all 39 project pages from staging: none contains the `faulty-terminal` div; Home and /estimate still do. Stephen McCulley loads with no console errors and a flat dark background; layout looks unchanged. Webflow's element count fell from 3459 to 3419 (40 fewer, as expected).
**Not checked:** phone and tablet widths; Safari and Firefox; every page by eye (only Stephen McCulley screenshot); interactions (can't be read through the tools); the page background when the terminal was fading in versus now.
**Webflow backups (Designer route):** "boss · brief #167 · before" (7:46 pm) and "boss · brief #167 · after" (7:52 pm), both seen in the Backups list and recorded in boss. **Snapshots:** none changed; the format doesn't cover page elements.
**Needs Michael:** try it (steps under R-085), then check and back up (D-008). Say whether you'd rather have a plain colour or an image behind project pages now.
**Next useful action:** brief #168 (R-084).
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — arrow removed from every project page (R-088, brief #166)
**Changed (R-088), Webflow, site madewithpixels, published to the webflow.io staging address only:** removed the `Icon Link` HTML embed (the small external-link arrow after the project title) from **21 pages**: the draft "Project Page" template and these 20 project pages: stephen-mcculley, molly-malones, creswell-crags, kent-life, oxford-castle, coronation-street-the-tour, guild-of-st-george, opus-independents, fairness-on-the-83, now-then-magazine, jessop-financial-planning, marek-wojciechowski, continuum-group, ay-pe, dolphin-dynamics, shogun-nutrients, origin-global, travel-ledger, halstead-glass, shepherd-machinery. The other 19 project pages never had one. No style, class, interaction, custom code or CMS item touched. The `Icon Link` class still exists, unused. State: built. Evidence: verified (live; published staging, Chrome on the Mac Studio, 2044px wide). Acceptance: pending.
**Checked how:** after publishing, I fetched all 39 project pages from staging: none contains `.icon-link` (20 did before). Screenshots of Stephen McCulley and Kent Life show the title with no arrow and the layout unchanged. Webflow's own backup counts went from 3480 to 3459 elements (21 fewer, as expected).
**Not checked:** phone and tablet widths; Safari and Firefox; the Designer view of each page; whether any interaction targeted the icon (interactions can't be read through the tools; I found nothing in the custom code or the repo that refers to it). The title is still a link to the client's site, with no arrow to say so.
**Webflow backups (Designer route):** "boss · brief #166 · before" (4:09 pm) and "boss · brief #166 · after" (4:15 pm), both seen in the Backups list and recorded in boss. **Snapshots:** none changed; the snapshot format doesn't cover page elements, so it can't show this change.
**Order of the day note:** the roadmap item R-088 already existed (written in brief #163), so I used it.
**Tasks deleted in Michael's list, kept for him to decide (from the boss inbox):** R-082, R-036, R-037, R-074, R-086, R-076, R-042, R-059 (and R-043, already accepted).
**Needs Michael:** try it (steps under R-088), then check and back up (D-008). Say whether to delete the unused `Icon Link` class.
**Next useful action:** briefs #167 and #168 (R-085, R-084).
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — options for a clickable testimonial wall (R-074, brief #165)
**Changed:** one new file, `docs/testi-wall-click-options.md`. Nothing in Webflow, nothing published, no interaction touched. I made no Webflow tool call, so no backup was needed and no snapshot changed. State: planned (options written). Evidence: verified (live, published staging, Chrome on the Mac Studio, 2044px wide) for what I read; the options themselves are not built. Acceptance: pending.
**What I found:** the testimonial wall is 191 empty coloured tiles with no text, image, link or project name. The ten testimonials are a separate layer that fades in after the wall parts, and it ignores clicks. The wall moves only with the scroll (one scroll-tied animation), so there is nothing to "pause". The Contact bubbles script borrows 42 of the tiles. The project images are in the folio wall, not here.
**Options (full detail in the file):** 1) click a tile to read a testimonial in a larger card (custom code, three new classes to approve); 2) click a tile to open a project (custom code, but tiles don't know their project, so the mapping is invented); 3) leave this wall and make the folio wall clickable (R-086; a straight link is Designer-only).
**Recommendation:** fold R-074 into R-086 and do option 3 first; if you still want the testimonial wall clickable, do option 1; skip option 2. I don't recommend dragging rows on the testimonial wall (it fights the scroll animation).
**Checked how:** page read and screenshots on staging; `contact-bubbles.js` read in the repo. **Guessed or not checked:** I did not read the interaction or the Designer classes (skipped the Webflow tools; that would need a Designer backup); the exact scroll range where a tile is clickable; drag conflicts; the quote-to-project match (from names only); phones, tablets, Safari, Firefox; holding and releasing the page's smooth scroll without a jump.
**Open: R-074's task was deleted in your list** (with R-082, R-036, R-037, R-076, R-042, R-059, and R-043 already accepted). I kept the items for you to decide. R-074 and R-086 overlap; say which stays.
**Needs Michael:** pick an option (1, 2 or 3), and say whether R-074 folds into R-086.
**Next useful action:** after your pick, an options note for how a folio-wall click opens a project (R-086), or the Option 1 build.
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — five new tasks written into the roadmap (R-084 to R-088, brief #163)
**Changed:** ROADMAP.md only. Nothing in Webflow or on the site; no tasks touched. State: planned (all five). Evidence: n/a. Acceptance: pending.
- **R-084** Missing closing quote svg on the Travel Ledger testimonial (task 43612341)
- **R-085** Faulty Terminal BG re-initialises between project page transitions (task 43612342). Your note is in it: if there's no fix, remove the Faulty Terminal div from each project page.
- **R-086** Clickable folio-wall (task 43612343). Sits next to R-074.
- **R-087** Hero strapline blurred when scrolling back to the top (task 43612344)
- **R-088** Remove the .Icon-Link from every project page (task 43612331, which had no item; briefs #166 will do the work)
All five are in Phase 2. Each has a done-when marked "(inferred — confirm)" because you gave no more detail. Task 43612336 already has R-079. The other tasks without an item (Finish MWP site, MWP landing pages, Launch MWP social campaign, Adjust Estimator, Launch prep, Responsive layouts) are headings already covered by the phases, as the roadmap's opening note says, so I wrote no items for them.
**Tasks you deleted, items kept for you to decide:** R-082, R-036, R-037, R-074, R-076, R-042, R-059 (and R-043, already accepted). R-074 and the new R-086 overlap; say which stays.
**Order:** your moves (R-038 and R-076 before R-075; R-082 before R-032) are kept; I found no dependency they break.
**Needs Michael:** confirm or correct the guesses in R-084 to R-088.
**Next useful action:** briefs #166, #167 and #168 do R-088, R-085 and R-084.
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — Contact pixels now spin back from the heart when scrolling up (R-079, brief #161)
**Changed (R-079), Webflow, site madewithpixels, published to the webflow.io staging address only:** the **Home page's footer custom code** (Pages > Home > Custom code > Before `</body>`), the fourth `<script>` only (the Testimonials -> speech bubble -> heart script, now v2.3). The other three scripts in that block and the page head were written back exactly: the echoed write and a separate read-back both equal my file character for character (39,664 characters), and the head read back unchanged. No class, style, interaction, component, CMS item or site setting touched; the forward fly-in code is unchanged except that it now also passes on a spin (it never has one when scrolling down). State: built. Evidence: verified (live; staging, Chrome on the Mac Studio, desktop 2044px wide). Acceptance: pending.

**Cause (proven).** "MWP logo configuration" is the heart the pixels spin into every 4 seconds once the bubbles have landed. When you scroll back up into the fly-in, the script's fly-in branch ran `if (shape !== 'bubble' || anim) setShape('bubble')` every frame. `setShape` is an instant reset, so a heart, or a spin on its way to the heart, became the speech bubble in a single frame, and only then did the tiles fly back to the wall. It was not ScrollTrigger direction, an `onLeaveBack` handler or a Webflow interaction: this script is a plain `requestAnimationFrame` loop reading positions, and the reverse fly-in itself was already playing.
Evidence before the fix (frame log of the 42 pixel wrappers, staging, wheel scroll up from the heart): heart at scroll 60079, and at the next logged frame (59992) the tile layer is on, all 42 pixels hidden and all at their speech-bubble positions. No spin frames between them. The biggest single-frame move is 92px (the distance from a heart spot to its speech-bubble spot). A screenshot after three wheel notches showed the speech bubble already formed. When the pixels already showed the speech bubble, the reverse was fine, which is why the fault only showed in the heart.

**Fix (custom code, v2.3).**
1. In the fly-in branch, if the logo isn't the speech bubble, start the existing spin back to it (`startSpin('bubble')`) and keep stepping it, instead of resetting.
2. A spin now glides from where each pixel currently is (`anim.from`), so a spin can turn back halfway without a jump. For a spin starting from a still shape this is identical to before.
3. The fly-in tiles stand in for hidden pixels, so a pixel's spin angle is passed to its tile (`rotateY`, perspective scaled with the logo). Without this, the spin wouldn't be visible while the pixels are hidden.
4. Bubble pairing uses each pixel's speech-bubble spot even while it is still spinning back, so the same wall bubbles are picked going up as going down.
Copy of the script in the repo: `contact-bubbles.js` (R-029 record).

**Checked how (staging, Chrome, 2044px wide; the tab's frame rate was throttled to about 10 to 26 frames a second while scrolling):**
- From the heart: the pixels spin and glide into the speech bubble while the tiles set off. Screenshots show thin, turned pixels mid-glide. 20 to 22 frames had spinning tiles. The biggest per-frame move was 26 to 31px over frames 90 to 130ms long. That is 0.25px per millisecond at most, no faster than the spin's own glide (about 0.3px/ms at its fastest), so it is motion, not a jump (it was 92px in one frame before). It ended on the speech bubble.
- From the speech bubble: 0px moved (unchanged path). From mid-spin towards the heart: largest move 5.7px. From mid-spin towards the speech bubble: 22px (the same throttled-frame glide). Both ended on the speech bubble.
- Four full down-and-up cycles, scrolling up 0, 1.5, 3 and 4.5 seconds after landing: the forward fly-in landed on the speech bubble every time. After each scroll back up, no wall bubble or pixel was left hidden, the tile layer was off and the wall's opacity was cleared. A mid-fly-in screenshot going down looked as before.
- No console errors before or after the change.
Not checked: Safari and Firefox; a real unthrottled 60fps look by eye (only Claude in Chrome); phones and tablets. Their timed fly-in path doesn't use this branch, and the loop's spin change only affects where a spin starts. Seen by script, not by eye: the case of scrolling up mid-spin.

**Webflow backups (Designer route):** "boss · brief #161 · before" (shows twice, 3:17:16 pm and 3:17:49 pm: the first save registered late and I saved again; both identical) and "boss · brief #161 · after" (3:31:13 pm). All seen in the Backups list; both phases recorded in boss.
**Snapshots:** `snapshots/custom-code.json` (new): site head and footer, and the Home page head and footer, as read through the MCP. Other pages' custom code was not read. The snapshot cannot see interactions; I didn't touch any, but I don't claim from the snapshot that they're unchanged.
**Tasks deleted in Michael's list, kept for him to decide (from the boss inbox):** R-082, R-036, R-037, R-074, R-076, R-042, R-059 (and R-043, already accepted).
**Needs Michael:** try it (steps under R-079), and check and back up (D-008).
**Next useful action:** if he wants the spin back to be slower or faster when scrolling up, that's SPIN_MS and RIPPLE_MS (shared with the loop).
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — options for the project arrows and the testi-wall shadow on phone and tablet (R-040, R-043, brief #160)
**Changed:** nothing in Webflow or on the site. Docs only. State: planned (options written). Evidence: verified (live: published staging, Chrome on the Mac Studio; the window would not resize, so I measured same-site frames at 390, 768 and 1024px, and 1440px for the shadow). Acceptance: pending (R-040, R-043 and R-038 were accepted earlier for their own scope; this is new follow-on work). I did not use the Webflow MCP, so no backup was needed.

**1. Project arrows (R-038 follow-on)** — Futura project page, `a.project-nav_arrow`, 56 x 56px, `position: fixed`, z-index 20.
Measured positions (frame height 800px; scrolled partway down):
- **390px:** prev at x 20, y 644; next at x 307, y 644. So on a phone they sit in the **bottom corners, 20px in from each edge** (the old in-page position), not halfway down. Text runs from x 20 to 347 and the images from 20 to 363, so the next arrow (307 to 363) lies over the right end of the text block and images when they scroll behind it. No text collided at the nine scroll stops I sampled, but nothing keeps it clear of text.
- **768px:** prev at x 0 to 56, next at x 704 to 760, both y 372 to 428 (halfway). Text and images start at x 32 and end at 712/728. So **each arrow overlaps the text column by 24px at the left and 8px to 24px at the right**. Seen by eye in a screenshot: the left arrow covers the first letters of "madewithpixels handled the…" (the first words of the paragraph). Overlap with body paragraphs at every sample from 2400px down; with the project image at every sample.
- **1024px:** prev x 0 to 56, next x 968 to 1024, halfway down. Text is a left column (x 32 to 301), images x 405 to 984. So prev overlaps the first 24px of the text column; next overlaps the right 16px of the image.
- The desktop rule (project-nav-arrows.css, R-038) has no media query; the phone-corner position comes from other, older rules on `project-nav_arrow` in the Webflow style sheet.
Not checked: widths between those, landscape phones, other project pages, touch behaviour, Safari/Firefox, whether the older phone rules sit in the Designer at a breakpoint or in custom code (I could not read them through the browser alone).

**Options (D-007). None needs a new class (D-006).**
- **A — Same edge tabs everywhere, but smaller on phone and tablet** (about 32 x 56px, still halfway down, still coral). Less overlap (about 0 to 8px at 768, none at 1024 for the text) but the tabs still sit over the page edge, so a thin strip of text may stay touched at 390px (text starts at 20px). Needs the size and the 2 rules' media queries changed in the embed CSS (edit of the existing Portfolio Nav component code) or the Designer breakpoint sizes. Touches: the Portfolio Nav component only.
- **B — On phone and tablet, keep the arrows at the bottom corners, clear of the reading column.** At 390px this is the layout it has now, tidied so it is the same coral tab shape; at 768 move to the bottom corners too, with space reserved at the page foot so the arrows never cover the last lines. Nothing sits over text while reading, but the arrows are lower than on desktop. Touches: the embed CSS (media query at max-width 991px) plus bottom padding on the project page's last section (an existing class).
- **C — Add side padding to the project page text so the full-height edge tabs fit** (text starts at 64px instead of 32px at 768). Looks the same as desktop. But it narrows the text and images at 390px (arrows would take 112px of a 390px screen), so I do not suggest it for phones. Touches: padding on the project page's content classes at tablet only.
- **Recommendation:** **B for 390px and 768px**, and **A at 1024px** (it's the desktop style in Webflow, so the tabs stay but go slimmer). At 390 the arrows already sit at the bottom, so B there is mostly tidying. It keeps the text clear everywhere without squeezing the layout.

**2. Testi-wall shadow (R-040 follow-on)** — Home page, testimonial wall.
Found: the shadow is a CSS **filter** (`drop-shadow(rgba(0,0,0,0.28) 0 0.6svh 1.2svh)`), not a box shadow. It sits on the two front rows of bubbles (`.testi-wall_row`, whichever row is first in the first half and last in the last half). The rule is written as a selector built from class and position (`.testi-wall_half:first-child > .testi-wall_row:first-child, .testi-wall_half:last-child > .testi-wall_row:last-child`) in a `<style>` block inside the page itself, **with no media query**. Computed filter on the row was the same at 390, 768, 1024 and 1440px, so it is on at every width, desktop too (the earlier note that it was "mobile only" was wrong).
- **Cause that matters for the fix:** because the rule is in the page's own style block and out-ranks a plain class, **setting the filter to none on `testi-wall_row` in the Designer at the phone or tablet breakpoint would not win.** "Existing classes only" can therefore not remove it; the rule itself has to change.
- **Option 1 — Add a media query to that style block** (`@media (max-width: 991px)` setting `filter: none` for those two selectors). Shadow gone on phone and tablet, kept on desktop. No new class, no Designer styles touched. Touches: the testi-wall embed only. Risk: the interaction also drives `--_animation---testi-inner-blur`; the front rows' blur does not use the shadow rule, so it is not affected. (Not seen to work: I did not make it.)
- **Option 2 — Remove the shadow rule altogether.** Gone at every width, simplest, changes the desktop look and takes away the lift the front bubbles have.
- **Option 3 — Keep the shadow, lighten it on phone** (smaller radius and opacity in a media query). Keeps some depth; still costs a filter on rows thousands of pixels wide.
- **Recommendation: Option 1** (matches the task: no shadow on mobile, desktop unchanged). Make it at phone width only (max-width 767px) if you want the tablet to keep it.
Not checked: how it looks without the shadow (nothing changed); frame rate on a real phone; the blur filters; where the embed sits in Webflow (a page-level or component embed): needs a read through the Designer or MCP before editing, then back up before and after (D-005, D-008).

**Needs Michael:** pick an arrow option (A, B or C) and a shadow option (1, 2 or 3), and say if tablet should keep the shadow.
**Next useful action:** apply the chosen options in Webflow (read the embeds in full first), publish to staging, check at 390, 768 and 1024px.
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — options for the /estimate menu links (R-078, brief #159)
**Changed:** nothing in Webflow, on the site or in any style. Docs only: this entry and a note on R-078. State: planned (options written). Evidence: verified (live: published staging, Chrome on the Mac Studio, desktop 2044px; a same-site frame at 390, 768 and 1024px for the hidden back button). Acceptance: pending.
**Webflow tools and backups:** I read only the published page in the browser and did not use the Webflow MCP, so I made no "before" or "after" backup and no snapshot (nothing in Webflow was touched).

**What I found: the /estimate menu already has a Home link.** The page's own HTML has, in order: Home (goes to `/`), About, Pricing, Work, Testimonials, Contact, then the Instant Estimate button. So the link Michael asked for is there, first in the list. The real gap is the other five: on /estimate their address is just `#`, so About, Pricing, Work, Testimonials and Contact go nowhere (on the home page they are `#about`, `#pricing`, `#portfolio`, `#testimonials`, `#contact`). The menu is the same SmashBurger component (`mwp-css-nav_*` classes, the script `Webflow-Navbar-Light` v0.2.6); no custom code touches the links. There is also a "Back to home page" arrow button (`burger-back-wrapper`) in the page, but it is `display: none` at 390, 768, 1024 and 2044px, so no visitor sees it. (Inferred: Michael may have meant the dead anchors, or may not have noticed Home is there. Please say which.)
**Not checked:** what a tap on a `#` link does on /estimate by eye (it should only jump to the top); Webflow's own link settings for these items (I did not open them); whether the five links are separate elements I can edit or locked inside the library component; Safari and Firefox.

**Options (D-007). None needs a new class (D-006).**
- **Option 1 — Leave the menu as it is.** Home stays first. The five dead links stay. Touches nothing. Cheap, but five links that do nothing look broken.
- **Option 2 — Point the five anchors at the home page sections** (`/#about`, `/#pricing`, `/#portfolio`, `/#testimonials`, `/#contact`). A visitor on /estimate taps "Pricing" and lands on the home page's pricing section. Home stays first; wording unchanged. Done in the Designer by changing the link target on each of the five existing links in the /estimate page's menu: link settings only, no class, no style. It touches only /estimate. Risk: the home page's own jump-and-blur behaviour (R-033, R-027) would run on arrival; and if the links are locked inside the library component, this needs the change made in SmashBurger itself (R-030).
- **Option 3 — Show only what works on /estimate:** Home, then Instant Estimate (the current page), and hide the five anchors there. Hiding needs either deleting the five links from this page's copy of the menu (only possible if they are editable there) or a display style, which is a new class (D-006), so it comes to you first. Cleanest look, but the visitor loses a way to jump to Pricing or Work from here.
- **Wording and position, for any option:** keep "Home" at the top (it matches the home page menu and the order of the page). If you want it to read as "going back", "Back to home" is the alternative, but it would differ from the home page menu and need the label changed on this page only. A Home link beside the Instant Estimate button would need new layout, so I don't suggest it.
- **Recommendation: Option 2**, because it fixes the real fault (dead links), keeps the menu identical to the home page, and needs no class. If the five links turn out to be locked in the component, fall back to Option 3 by deleting them on this page, or wait for R-030.
**Needs Michael:** pick an option (and say if "Home" is already what you wanted). Then check and back up (D-008).
**Next useful action:** apply the chosen option in the Designer, publish to staging, and check the menu at 390, 768 and 1024px.
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — options for the /estimate menu now put in front of Michael in boss (R-078, brief #173)
**Changed:** nothing in Webflow or on the site. Brief #159 wrote the three options only here, so Michael never saw them ("Telll me the options here"). I have posted them in boss as one question with three one-tap choices (point the five dead links at the home page sections, recommended; show only Home and Instant Estimate; leave as is). The options are the ones in the 1 November entry above, unchanged. State: planned. Evidence: n/a. Acceptance: pending.
**Webflow tools and backups:** not used, so no "before" or "after" backup and no snapshot.
**Needs Michael:** press a choice on the boss card.
**Next useful action:** build his pick in the Designer, publish to staging, check at 390, 768 and 1024px.
— Claude (night shift)

## 1 November 2026 — Claude (night shift) — /estimate heading and sideways scroll fixed; pricing card left for Michael (R-044, R-046, brief #158)
**Changed (R-046, R-044), Webflow, site madewithpixels, published to staging only:** one class, `IWA Question Row` (`.iwa-question-row`, not from the library), base style: added `flex-wrap: wrap` (longhand, read back). No new class, no combo class, no other style, page, custom code or interaction touched. State: built for the /estimate part. Evidence: verified (live: staging, Chrome on the Mac Studio, frames). Acceptance: pending.

**Cause (found in the published CSS):** the Next button has `width: 100%` and the row never wrapped, so the heading was squeezed to its smallest word (81px wide, four lines) and the button pushed the page 56px wider than a 768px screen. Now the heading takes its own line and Next sits under it, full width.

**One thing to know:** the class has no tablet-only style, so the change applies at every width. On desktop (2044px) the heading was squashed the same way before (81px), so it now reads on one line with Next underneath (16px gap). I changed the base style because 1024px is the desktop style in Webflow. If you want the old side-by-side look back at wide screens, say so: it needs a new class for the button width (D-006), so it is your call.

**Checked how:** published staging /estimate, frames at exactly 768px and 1024px (the browser window would not resize, same-site frames used) and the 2044px window. Before: heading 81px wide and 140px tall, button 662px wide at 768px, page content 816px in a 760px view. After: heading 273px wide, one line, 42px tall; button under it (starts below the heading's bottom); content width equals the view at 768px (760) and 1024px (1016), so no sideways scroll; desktop 2036 of 2036. I also looked at a screenshot at 768px: heading on one line, Next below. Not seen by eye at 1024px.

**Pricing card (third card, "Yes, we build apps too…") at 1024px: NOT changed, options for Michael (D-007).** Cause measured: the card's inside is wider than the space the padding leaves (the longest line, "£LessThanYouThink", forces the text column to 292px; the card is 338px with about 49px of padding on the right, leaving 257px). The text reaches 324px from the card's left edge, but a scroll-reveal clip on the card shows only up to about 313px (clip 24.5px in from the right), so the last few characters are cut. The padding and clip are set by the scroll animation (inline), so changing the class padding would not hold. The teal combo class holds only `align-self`, so the earlier idea of right padding on it would not work either.
- Option A: make the price line and the grey label a step smaller between 992 and 1280px. Edits existing classes (`price` and `pricing-block` text), no new class; changes how the cards look at that width.
- Option B: change the scroll animation's clip or padding in the Interactions panel. No new class, but it is an animation change I can't read or edit through the tools; Michael does it in the Designer.
- Option C: let "£LessThanYouThink" wrap (allow breaking inside it, one custom-code rule). No look change except where it breaks; touches site head code.
- Recommendation: A, or C if you don't want the text size to change. This is still the open "pick how to fix the cut-off pricing card" question.

**Not checked:** later steps of the estimator (other screens may use the same row); Safari and Firefox; phone widths; the 1024px card after any fix (none made); interactions and animations are invisible to snapshots, so I don't claim them unchanged. Snapshot: `snapshots/styles/classes.json` patched by hand for the one property (the full export was not redone).
**Backups (Designer):** "boss · brief #158 · before" and "boss · brief #158 · after", both seen in the Backups list and recorded in boss.
**Needs Michael:** try /estimate on staging at tablet width and say if the stacked Next button is what you want; pick the pricing option; check and back up (D-008).
**Next useful action:** apply the chosen pricing option; then R-039 (contact logo).

## 31 October 2026 — Claude (night shift) — 12 clear typo fixes applied and published to staging (R-052, brief #157)
**Changed (R-052):** 12 clear fixes from the 30 October copy audit, edited in Webflow with the MCP and published to staging only (madewithpixels-dev.webflow.io). State: built. Evidence: verified (live: staging, read in Chrome on the Mac Studio, rendered text, 31 October 2026; not checked at any other width or browser). Acceptance: pending. No styles, classes, layout or custom code touched.

| # | Page | Old wording | New wording |
|---|---|---|---|
| 1 | Home, George Marshall testimonial | "Managing Director - Hasltead Glass" | "Managing Director - Halstead Glass" |
| 2 | Home, sector ticker | "Commerical Manufacturing" | "Commercial Manufacturing" |
| 3 | Home, estimate call to action | "No email address neccessary" | "No email address necessary" |
| 4 | Home, Complex Digital Projects card | "relies on everyday." | "relies on every day." |
| 5 | Home, George Marshall testimonial | "Thank-you." | "Thank you." |
| 6 | Home, Simon Spinks testimonial | "Managing Director -Aquaculture" | "Managing Director - Aquaculture" (I used a plain hyphen with a space, to match the George Marshall line, not the en dash the audit suggested) |
| 7 | Continuum Group, third paragraph | "…sustainable. T" and a separate paragraph "he result was…" | one paragraph: "…sustainable. The result was…" (the leftover empty-looking second paragraph element was removed) |
| 8 | Futura, second paragraph | "implementation.The site" | "implementation. The site" |
| 9 | Molly Malone's, first paragraph | "Molly Malones Sheffield" | "Molly Malone's Sheffield" |
| 10 | Mr Wilson's, opening line | "…for Mr Wilson's:, a popular Sheffield jazz-lounge." | "…for Mr Wilson's, a popular Sheffield jazz lounge." |
| 11 | Halstead Glass, last paragraph | "new CRO tools innovative for the glazing sector" | "innovative new CRO tools for the glazing sector" |
| 12 | Farmer Norton, hidden section label (screen readers only) | aria-label "About us" | aria-label "Project" |

**Not applied, on purpose:** (a) the /estimate comment box placeholder "Example Text": the audit marked the wording as yours; (b) the Insight name mismatch ("The Insight Partnership" on the Home list, "The Insight CBT Partnership" on its page): the audit filed it under "needs Michael's decision", and I can't tell which name is right. If brief #157 meant this one as a fix, tell me which name and I'll apply it. Note the audit's "clear fix" rows total 13; I counted 12 by leaving out the placeholder.

**Outputs:** Webflow edits on Home and the Continuum Group, Futura, Molly Malone's, Mr Wilson's, Halstead Glass and Farmer Norton pages (these are static pages in Webflow, there are no CMS collections, so no CMS items changed). Published to staging only, no custom domain. Backups in the Designer: "boss · brief #157 · before" and "boss · brief #157 · after" (both Designer route; element count went from 3482 to 3480, the removed Continuum paragraph). snapshots/pages/home.json updated for the six Home texts.

**Checked how:** after publishing, I loaded each of the 7 pages on staging in Chrome and checked the rendered text: all 12 new wordings present and the old ones gone (the Molly Malone's and Mr Wilson's lines read back correctly once the HTML was decoded). Each edit also reported success from Webflow; the Farmer Norton label was read back as "Project".

**Not checked / the snapshot's limits:** the snapshot cannot see interactions or animations and only home.json exists in snapshots/pages, so the six project pages have no before/after snapshot file; the Webflow backups are the record for them. I didn't look at the pages visually (layout, wrapping, ticker animation) or at other widths.

**Still open, for Michael (unchanged from the 30 October audit; nothing here was touched):** testimonial details for Alley Bridge-York, Creswell Heritage Trust and "Cottril"; the Insight name; the Mednet, Jessop, Shogun and Club 60 names; Soyo / SOYO / SoYo Live styles; "Grotesque#9" vs "Grotesque No. 9"; E-commerce spelling; pricing wording ("at" vs "from", £2000 vs £2,000); "Long term"/"Joined up"/"focussed"; the Promise semicolon; Origin Global "I also introduced"; Kent Life copy (a copy of Oxford Castle's); Mr Wilson's second paragraph (a copy of Code's); Code title and CODE; Success page title and stray "404"; years missing on some work-list entries; the /estimate placeholder wording; and whether the site needs privacy or cookie pages.

**Needs Michael:** please check the seven pages on staging and back up (D-008).

**Next useful action:** Michael answers the open questions; an agent applies them the same way (R-052).

## 1 November 2026 — Claude (night shift) — SEO, schema and llms.txt audit done (R-053, brief #155)
**Changed:** nothing on the site and nothing in Webflow (no Webflow tools used, so no backup needed). Wrote `docs/seo-audit.md`. R-053: built (audit), evidence verified (live, staging, Chrome, Mac Studio). No Acceptance.
**Checked how:** read the rendered pages of Home, /estimate, /success and nine project pages, plus /robots.txt, /sitemap.xml and /llms.txt. Not checked: the custom domain, a schema validator, 30 other project pages (same template), page status codes.

**Problems and options for Michael (full table in docs/seo-audit.md):**
1. No canonical tag on any page. R-060 sets it; must happen before launch.
2. No share picture on Home or /estimate. Options: designed card (recommended), hero screenshot, or none. You choose the image.
3. All 192 images on Home have empty alt text. Option: agent writes alt for the meaningful ones (recommended), or leave.
4. No `sameAs` in the schema (R-064). Needs your LinkedIn, GitHub and Webflow profile addresses.
5. Price mismatch: Home says complex projects start at £2000; schema and llms.txt say £5,000. Which is right?
6. /success: heading reads "404", no description, in the sitemap. Option: change heading and noindex (recommended), or noindex only.
7. R-069: no noindex tag on any page; staging is held back only by robots.txt (`Disallow: /`). Before launch: live robots.txt must allow crawling; /success noindex.
8. Project pages carry only an H1. Optional: show the description as text.
9. Home heading levels skip (H2 to H4/H5). Optional tidy-up.
10. Project title patterns are inconsistent. Optional tidy-up.
11. /llms.txt exists and is good; links use the www address so work only after launch.

**Needs Michael:** answers to 2, 4, 5 and 6; the launch-day switches (1, 7).
**Next useful action:** once 4 and 5 are answered, agent adds `sameAs` and fixes the price (custom code, with backups).

## 1 November 2026 — Claude (night shift) — Project arrows moved to the screen edges, plain coral (R-038, brief #153)
**Michael's verdict recorded:** on option 1 (brief #147's options): "Option 1 is fine". He did not say whether I may add a class, so I added none (D-006).

**Changed (R-038), all in Webflow, site madewithpixels, published to staging only:**
1. Class `project-nav_arrow` (not from the library), base style, longhand, read back: `position: fixed`, `top: calc(50% - 1.75rem)`, `z-index: 20`, `background-color: #ef8965`, padding 0 on all sides, border width 0 on all sides. (Before: static, padding 1px, 1px borders.)
2. Class `project-nav_inner`: `background-color` changed from the slate variable to `#ef8965`.
3. Component "Portfolio Nav" (40 instances): one new code embed, appended after the existing script embed (which I did not touch). It holds a `<style>`: `a.project-nav_arrow[data-portfolio-nav=prev]` gets `left: 0` and corners `0 1.5rem 1.5rem 0`; `next` gets `right: 0` and corners `1.5rem 0 0 1.5rem`; the strip wrapper inside the arrows is hidden; and it overrides the site head rule that gave `.project-nav_arrow` a spinning tricolour border and spin on hover. Why code and not a class: the two arrows share one class and telling left from right needs a combo class, which D-006 forbids through the MCP. The site head block was not edited. A copy of the CSS is in `project-nav-arrows.css` (R-029).
4. No new class, no page, CMS, variable or site-head change. The Gradient Arrow, Grad Arrow Wrapper and Grad BG Strip classes are shared with the Instant Advice buttons, so I left them alone.

**My reading of option 1 (check it):** the option text said "rounded on its left side" for the left arrow but also "flat against the edge". I made the edge side flat and rounded the side facing the page (24px). If you meant the opposite, it is one line each in the embed.

**Checked how (verified live):** published staging, Chrome on the Mac Studio, /portfolio/futura, window 2044 x 1132. Arrows measured 56 x 56: previous at left 0, next at right 0, both with their middle at y = 566, exactly half the window height. Background rgb(239,137,101), no background image, no animation, position fixed. Clicked next: Marek Wojciechowski loaded. I saw the screenshot, not the slide animation itself, so I haven't confirmed it looks right. The page transition code still finds the arrows (it moves them with the rest of the page).
**Not checked:** the slide animation by eye; hover; keyboard focus ring; Safari and Firefox. The window would not resize, so I used same-site frames at 390, 768 and 1024px: at 768 and 1024 the arrows sit at the edges (previous 0 to 56px, next 56px in from the right); text begins at 32px so the arrows can cover the text edge. At 390 the arrows keep their old in-page position (a phone setting overrides it) but now coral, tricolour gone. Phone and tablet are R-039 onwards.
**Webflow backups (Designer):** "boss · brief #153 · before" made and recorded before any Webflow tool was used. "boss · brief #153 · after" made at 10:04 am, seen in the list and recorded (both 54 pages, 451 styles, 3482 elements in the list, so the new embed doesn't show in that count).
**Snapshots:** only the two changed classes in `snapshots/styles/classes.json` were patched by hand from the read-back (base style only). The full export was not redone. Interactions, animations and the new embed are not in the snapshot.
**Needs Michael:** try it (R-038 Try block); acceptance is his. Say if the corners should be the other way round, and whether tablet needs a different position.
**Next useful action:** R-039 phone and tablet: decide where the arrows go on small screens.

## 1 November 2026 — Claude (night shift) — Menu no longer shakes while open (R-081, brief #152)
**Changed (R-081):** Webflow, site madewithpixels, **Site settings > Custom code > Head** only, published to staging only (madewithpixels-dev.webflow.io). I read the block first and wrote it back with one change (the echo matched): the rule from brief #149 (`html.lenis.lenis-stopped { overflow: hidden scroll !important }`) is gone. In its place, on mouse devices only (`hover: hover` and `pointer: fine`), while the menu is open: `html` gets `padding-right: 8px` and `.header` gets `max-width: calc(100% - 8px)`. No class, element, page or Designer change.

**Cause of the shaking:** my #149 rule was the culprit. Lenis (smooth scroll) watches the page's overflow value to decide whether scrolling is locked. My rule forced overflow to "scroll" only while Lenis said "stopped", so Lenis saw "scroll", started again and removed its stopped class, the rule switched off, overflow went back to hidden, Lenis stopped again, and so on in a loop. Each swing moved the page 8px, so the header and menu items shifted about 4px side to side. Measured: the html class flipped between stopped and running several times a second while the menu was open.

**How the new fix works:** it no longer touches overflow, so Lenis stays stopped. Instead it gives the 8px scrollbar width back as padding, so the page is the same width open as closed.

**Checked how:** Chrome on the Mac Studio, published staging, 2044px viewport (8px scrollbar), 1 November 2026. First tried live in the page, then after publishing, sampling positions every 100 ms for 4 seconds with the menu open. Menu button left edge: 218px closed, 218px open, 218px closed again. The page stayed in the stopped state throughout (no flipping). Menu panel links sat at one steady position (the panel is centred on the full window, so they are 4px right of where they are when closed; they only show while open, so nothing moves). I have not watched it by eye, only measured.
**Not checked:** tablet and phone widths (window resize did not take effect); Safari and Firefox. Touch devices should be unaffected (rule is off for them). A mouse device with overlay scrollbars (Safari with "show scrollbars: when scrolling") may be shifted 4px right by this rule; not checked.
**Webflow backups (Designer):** "boss · brief #152 · before" and "boss · brief #152 · after", both seen in the Backups list; both recorded in boss. Snapshots/: not exported (the custom-code read is too large to write out by hand safely; interactions are not visible to snapshots anyway). Repo copy of the head block: not done (R-029 not started; it must include this rule, not the #149 one).
**Needs Michael:** try it (R-081 Try block); acceptance is his.
**Next useful action:** if it still moves at tablet width or in Safari, measure there.

## 1 November 2026 — Claude (night shift) — Project arrow slide: leftover scrollbars hidden (R-083, brief #156)
**Found (checked first):** on published staging, /portfolio/futura, Chrome on the Mac Studio, the screenshot column (`.project-image-wrapper`) has its own 8px pink scrollbar, and it stayed fixed while the content slid. The copy column (`.folio-rte-wrapper`) uses the same scrollbar style; it had no scrollbar at that window size but would show one when the copy is long.
**Changed (R-083):** Webflow, site madewithpixels, **Site settings > Custom code > Footer** only, published to staging only. The page-transition script now adds one small style that makes both columns' scrollbar (track and thumb) invisible while the slide plays and while the next page waits to slide in. The 8px width is kept, so nothing shifts; the scrollbar comes back when the slide ends. I chose "hidden for the duration" rather than sliding the scrollbar away, because a scrollbar cannot be moved separately from its box. No new class, no timings changed, arrow styling untouched, no head change. The rest of the footer was written back exactly (echoed result compared). Same change saved in `page-transition.js` (R-029).
**Checked how:** Chrome, published staging, 2044px-wide window. (1) Forced the slide's page class on and off: the pink bar shows without it and is gone with it (zoomed screenshots). (2) Clicked the right arrow on /portfolio/futura and sampled every frame: the "sliding" class was on in 71 of 72 frames, so the bar is hidden for the whole slide; landed on Marek Wojciechowski with no leftover classes. (3) Clicked the left arrow back: same, 71 of 72 frames, back on Futura, no leftover classes. (4) No console errors (the console tool only started recording part-way, so this covers the second half of the checks).
**Not checked:** I could not take a screenshot in the middle of the real slide, only measure the class frame by frame, so I have not seen the bars disappear during the animation with my own eyes. The scrollbar colour cannot be read by script. Not checked: phone and tablet widths, Safari, Firefox (the scrollbar styling is Chrome/Safari-only anyway), a copy column long enough to scroll, how the moment the bar returns at the end feels. Interactions are not visible to snapshots, so I do not claim they are unchanged. Snapshots/: not exported (only custom code changed and the full site code is too large to copy by hand safely).
**Backups:** "boss · brief #156 · before" and "boss · brief #156 · after", both made in the Designer and seen in the Backups list; both recorded in boss.
**Needs Michael:** try it on staging (/portfolio/futura, press the arrows both ways) and say whether the bars now go. Acceptance stays pending.
**Next useful action:** if the bar's return at the end looks abrupt, fade it back instead.

## 1 November 2026 — Claude (night shift) — Page transitions: pixel effect removed, project arrows slide content off and on (R-083, brief #146)
**Changed (R-083):** Webflow, site madewithpixels, **Site settings > Custom code**, both boxes, published to staging only (madewithpixels-dev.webflow.io):
- **Head:** the pixel-transition CSS and script are replaced by a small block that hides the next project's content until it slides in (and hides the home page while the back button restores your scroll position). The "Home <-> project" view-transition script lost its pixel fallback; the morph is otherwise untouched.
- **Footer:** the pixel canvas script is replaced by the new slide transition and a plain back button. Everything else in the footer (Lenis, folio hover preview, scroll magnet) was written back exactly as read.
- Nothing else in Webflow changed (no pages, styles, CMS, components, interactions). The new script is also saved in this repo as `page-transition.js` (R-029 record).

**How it behaves:** pressing a project arrow slides the title, copy, both arrows and the visible screenshots sideways, one after another, towards the arrow pressed (left arrow goes left, right arrow goes right); the next project's content slides in one after another from the opposite side. The nearest-to-the-edge element moves first. Header buttons stay put. Browsers without the morph (Firefox, older Safari) now simply navigate normally between home and projects. Reduced motion: no animation. Timings are the first lines of the script (DURATION 420 ms, STAGGER 70 ms).

**Checked how:** Chrome on the Mac Studio, published staging, 1500px wide, 1 November 2026. Clicked the right arrow on /portfolio/futura and sampled each element's position every frame: staggered, all moved right, screenshots first, no sideways scrollbar, landed on Marek Wojciechowski with no leftover classes. Same with the left arrow (everything moved left, copy first). Forced the entrance on its own (both directions): slides in, then every element returns to normal with nothing left hidden. No console errors. **Not checked:** phone and tablet widths, Safari, Firefox, the back button on a project reached from another project, how it feels to the eye (I could only read numbers and a few screenshots, not watch it).

**Needs Michael:** (1) try it on staging (steps under R-083); (2) two readings I made, please confirm or flip: "direction corresponding to the button" = left arrow sends content left; and the header is left still. Flipping the first is one sign in the script. (3) R-036 and R-037 (tasks deleted) are now covered by R-083; drop or keep them.
**Backups:** "boss · brief #146 · before" and "boss · brief #146 · after", both made in the Designer and seen in the Backups list; both recorded in boss. Snapshots: not exported. Only custom code changed and the full site code is too large to copy by hand without risk; the changed script is in `page-transition.js`. The snapshot cannot see interactions, so I do not claim they are unchanged.
**Next useful action:** after Michael's look, tune timing, then check phone and tablet widths (R-040 family) and Safari/Firefox.

## 31 October 2026 — Claude (night shift) — SEO audit not started: no way to make the Webflow backup (R-053, brief #145)
**Changed:** Nothing in Webflow and nothing on the site. I used no Webflow tools. R-053 stays planned, evidence none. No Acceptance. No "before" or "after" backup was made, because there was nothing to back up and no change.

**Why stopped:** The brief requires a backup named "boss · brief #145 · before" made in the Designer (or the Webflow dashboard in Chrome) before any Webflow tool is used. Tonight's rules also say no browsers or desktop apps, and this session has no browser tool, so neither route was possible. Webflow tools are refused until that backup is recorded.

**Needs Michael:** run the brief again in a session that has Claude in Chrome on the Mac Studio with the Designer tab open, or make the "before" backup yourself and say so.

**Next useful action:** re-run brief #145 once a backup route is open; the audit is read-only and goes in docs/seo-audit.md.

## 31 October 2026 — Claude (night shift) — Font families and weights listed; nothing changed (R-054, R-056, brief #144)
**Changed:** Nothing on the site and nothing in Webflow. I did not use the Webflow tools at all (so no Webflow backups were made; nothing needed restoring), because the published page already carries every style rule. R-054 stays planned (this is the list it needs); R-056 stays in progress. Evidence for both: none (an audit, not a fix). No Acceptance.

**Checked how:** Claude in Chrome on the Mac Studio, published staging (madewithpixels-dev.webflow.io), Home and /estimate, 31 October 2026. I read the font rules in the page's own style sheets (every rule with a font-weight or font family), the list of font files the browser says it loaded, the file sizes (by downloading each file once and measuring it), the network requests for font files, and the computed font on every visible text element. Sizes are the compressed (woff2) file size.

### What loads on both Home and /estimate (same on each)
| Font file | Weights | Size | Loaded | Used by any text? |
|---|---|---|---|---|
| Apercu Regular (own file on Webflow's CDN) | 400 | 26.0 KB | yes | yes |
| Apercu Bold (own file) | 700 | 15.4 KB | yes | yes |
| Source Serif 4 (Google Fonts, one variable file serving every weight 200 to 900) | 200, 300, 400, 500, 600, 700, 800, 900 | 49.8 KB (one file) | yes | yes, weights 200 to 700 |
| Soleil (Adobe kit, 12 files) | 300, 400, 500, 600, 700, 800, each normal and italic | 42.5 to 48.6 KB each, **554.8 KB in all** | **yes, all 12** | **no: no element uses it** |
| Webflow icon font | 400 | not loaded | no | not needed on these pages |

Total font download on each page is about 646 KB; 555 KB of that is Soleil. Without Soleil it is about 91 KB.

### Where each family and weight is used (the weight the browser is asked for)
| Family | Weight | Where (class or element) | A file for it? | Safe to drop? |
|---|---|---|---|---|
| Apercu | 200 | `estimate-label` (home); shown with the 400 file | no, falls back to 400 | n/a: nothing to drop; just a style that asks for a weight that doesn't exist |
| Apercu | 300 | body text and `p` (the default for the whole site), `is-mw-40ch`, `lb-title`, estimator help and fine print, `mwp-css-nav_*` settings text | **no, shown with the 400 file** | n/a; see recommendation |
| Apercu | 300 italic | `em` | no, 400 file made slanted by the browser | n/a |
| Apercu | 400 | `a`, `pricing-strapline`, `type-block`, estimator links | yes | keep |
| Apercu | 600 | `strong`, `brand-text`, `brands`, `cite`, `breakpoints`, `mwp-css-nav_link`, `mwp-css-nav_settings-title`, estimator `iwa-bar-label` | no, shown with the 700 file | n/a |
| Apercu | 650 | estimator `iwa-btn` | no, shown with the 700 file | n/a |
| Apercu | 700 | `h2`, `h6`, `label`, `b`, `hero-strapline`, `folio-block-title`, `folio-date`, `contact-header`, `menu-button-label`, `mwp-css-nav_label`, `mwp-dock-toggle`, `t-made`/`t-with`/`t-pixels`, estimator option labels | yes | keep |
| Apercu | 800 | `heavy-text`, estimator `mwp-dock-val` | no, shown with the 700 file | n/a |
| Source Serif 4 | 200 | `h3`, `folio` items, `ticker__item`, `ticker__ch`, `dash`, `price-block`, `logo-wall-heading`, `testi-wall_blockquote`, estimator `iwa-question` | yes (variable file) | keep |
| Source Serif 4 | 300 | `h4`, `h5`, `blockquote`, `folio-title`, `portfolio-header`, `about-top-h4`, `pricing-header`, `testimonials-header`, estimator `iwa-eyebrow`, `mwp-reco-h` | yes | keep |
| Source Serif 4 | 400 | `h1` | yes | keep |
| Source Serif 4 | 500 | `price`, `logo-wall-heading.estimate`, `heading-7` (phone), estimator `mwp-intro-heading` | yes | keep |
| Source Serif 4 | 600 | `is-semibold`, `cite` (italic), `em` (italic), estimator `mwp-group-label`, `iwa-result-h2` | yes | keep |
| Source Serif 4 | 650 | estimator `iwa-result-h3` | yes (variable, any value works) | keep |
| Source Serif 4 | 700 | `icon-arrow`, `instant-quote-btn`, `strong` on phones, estimator `mwp-bar-val`, `iwa-est-figure`, `text-block` | yes | keep |
| Source Serif 4 | 800, 900 | no element | requested from Google, same single file | yes in principle, but saves no download (see below) |
| Source Serif 4 | italic (200 and 600) | `em`, `testi-wall_blockquote`, `cite` | **no italic file is requested**; the browser slants the upright letters | n/a |
| Soleil (Adobe) | all 12 | `.tk-soleil` only (Adobe's own class); **no element on Home or /estimate uses it** | loaded, 555 KB | **yes, looks safe, but see D-011** |
| Monospace (browser default) | 400, 700 | hidden "ft debug" panel only | no file | n/a |

Not every class with a weight shows on every page; the full list of rules with a font-weight is the table above plus the general Webflow rules (`b, strong` 700, `h1` to `h6`, `label`, `.w-form-label` 400 and similar built-in rules).

### Recommendation (Michael decides, D-007)
1. **Drop Soleil from the Adobe kit, or stop loading the kit.** This is the whole saving: about 555 KB gone from every page, and the page also stops waiting on the Adobe script. Nothing I found uses it. One catch: **D-011 says "the Adobe kit carries Soleil only"**, so someone put it there on purpose. Either it was meant for a font swap that didn't happen, or it is left over. Please confirm no page or CMS item you plan to use needs it. It is also worth checking the other pages (project pages, landing pages), which I did not scan.
2. **Keep Apercu at 400 and 700. Nothing to trim.** But note the site asks for Apercu 200, 300, 600, 650 and 800 in many places, and the browser has no file for them, so it shows 400 or 700 instead. **The body text is set to "300" and actually draws as regular 400.** If the design should look lighter, a light Apercu file would need adding (cost: another file of about 25 KB); if not, change those styles to 400 and 700 in a later pass. This is a look decision.
3. **Source Serif 4: keep weights 200, 300, 400, 500, 600, 700.** Weights 800 and 900 are unused. Because Google serves one variable file for all weights, taking 800 and 900 out of the request saves **no bytes** (the web address just gets shorter). A real saving would be self-hosting the one latin file (49.8 KB) so the page doesn't call two Google addresses first. That is a separate option for R-055.
4. Italic Source Serif and italic Apercu are drawn by the browser (slanted upright letters). Adding real italics would cost another 50 KB or so; I'd leave that alone unless the testimonial italic looks wrong.

### Not checked
Other pages (project pages, landing pages, the rest of the estimator after step 1), phone widths for font choices other than the rules listed above, whether the old `mwp-site-menu-*` classes are still around (ignored, D-015). The Webflow Designer's own class list (I read the published rules, which should match it, but a class used only on an unpublished draft is not in my table). The "Webflow style panel" `isFromLibrary` copies of `mwp-css-nav_*` were not checked. Resource-timing sizes are blocked across sites in Chrome, so sizes come from downloading each file, not from the transfer log.

**Needs Michael:** (1) say if Soleil can go (D-011 context); (2) say if Apercu's 300 body text should stay as it is (draws as 400), or if a light file should be added.

**Next useful action:** once he says yes on Soleil, back up first, remove the Soleil fonts from the Adobe kit or stop loading it (Michael's Adobe account, or the site's custom code), then check Home and /estimate on staging and re-run this count.

**Handoff:** to repeat the count, open a staging page and read `document.fonts` (family, weight, status) and the `@font-face` rules in `document.styleSheets`; download each file with `fetch` and read `blob.size`. The browser tool blocks any output with a web address that has a `?` in it, so strip the query part first.

## 31 October 2026 — Claude (night shift) — Phone layout checked at 390px and 360px; findings listed, nothing changed (R-040, R-041, R-043, R-045, brief #142)
**Changed:** Nothing on the site. Read-only: no Webflow tools, no custom code, no classes, no Acceptance. R-040, R-041, R-043 and R-045 stay planned, evidence none for fixes (this is an audit, not a fix).

**Checked how:** Claude in Chrome on the Mac Studio, published staging (madewithpixels-dev.webflow.io), 31 October 2026. The window resize reports success but the viewport stayed at 768px, so (as in the tablet audit) I loaded the real staging pages in a same-origin frame set to exactly **390px** (933px tall) and then **360px** (740px tall), scrolled through, took screenshots and measured computed styles, contrast ratios and positions. Pages: Home (hero, work wall, intro and brands, about and ticker, pricing, "Wondering about the cost" call to action, Work list, testimonials, contact) and /estimate (intro and step 1). At 390px I viewed every home section by screenshot and measured the whole page. At 360px I measured the whole page and took screenshots of the hero, work wall, intro, pricing, sector ticker, Work list, a long quote and the contact form; the brands card and "Built to last" text were measured, not photographed, at 360px. Contrast ratios are my calculation from the computed text and background colours (WCAG: 4.5 for normal text, 3 for large text); text on photos or gradients can't be measured this way.

### Findings (Michael picks the fix option, D-007)

**R-043 · Legibility on mobile (390px and 360px, same at both)**
1. **Pink text on the dark teal is low contrast: about 2.4 to 1.** Used for "Web design in Sheffield since 2008" (hero, 18px), the "Hundreds of projects delivered…" heading (28px, home, work wall), "Personal service. Agency-…" and "Your website. Built to last." (32px, about), and the "Work" heading (3.1 to 1 on the grey). Large text should reach 3 to 1, so these all fall short; the small hero line is the worst. The pink on the off-white intro text (24px) is 3.3 to 1.
   - A: lighten the pink on dark sections to a pinker, lighter shade (about 3.2 to 1 or better). Changes a colour on existing classes; no new class, but it also changes desktop unless done at the phone breakpoint only.
   - B: keep the pink for headings and make small lines (the hero strapline) off-white instead. Smaller change.
   - Recommendation: B for the strapline, A for the headings. Michael to say if brand pink must stay exact.
2. **Grey sector labels in the Work list are tiny and almost invisible: 9.6px, dark grey on dark grey, about 1.6 to 1.** They run vertically down the left ("Industry & Commerce", "Consultancy", and so on).
   - A: raise to 12px and a lighter grey (about 4.5 to 1). B: drop the vertical text on phones and put the label above each group as a heading. Recommendation: B.
3. **Small text.** Pricing "strapline" pills (e.g. "Perfect for service businesses and product showcases") are 11px capitals in a dark pill; at 360px the two lines sit very close together (line height 16.8px). "Some brands we've worked with" in the brands card is 13px white on coral (4.2 to 1, just under). The three testimonial author lines are 13px. "Prices start at" is 13px. The big faint sector ticker text (163px, 1.8 to 1) is decoration by design; I list it only so it isn't reported as a fault.
   - A: set these to 13 to 14px minimum on phones. B: leave. Recommendation: A for the 11px pills.
4. **Hero.** The hero strapline words ("web · Brand · Social") are measured at 11px (the teal one 2.6 to 1) but I did not see them on screen at either width, so I can't say they matter. To verify.
5. **Contact form.** Placeholders ("Your name" and so on) are small and pale grey on white; I did not measure their ratio. To verify.
6. **/estimate (both widths).** "Breakdown" in the bottom bar is 12px teal on dark teal, 2.6 to 1. "Estimated investment:" is 12.8px. The disabled "Next" button is white at 45% opacity on teal (reads as intended, but faint). The page and form are otherwise legible. This is the estimator's own code, not a Webflow class.
   - A: raise "Breakdown" to a lighter teal and 14px in the estimator's styles. Recommendation: A.
7. **/estimate layout (a real fault, both widths).** The step 1 heading "What are you looking for?" is squeezed to 81px wide (four lines) and the "Next" button beside it is 286px wide, so the page is wider than the phone: **424px of content at 360px (64px sideways scroll), 454px at 390px (64px).** The same fault as finding 3 of the tablet audit, so its fix covers both. Options as there: let the row wrap or stack with Next at its natural width, or give the heading a minimum width. Recommendation: stack the row on phones.
   - Also note: the intro on /estimate ends "Yes, really…" which looks cut by design; I read it as a deliberate trailing line.
8. **Typos seen again:** "neccessary" in "No email address neccessary" (already under R-052).

**R-045 · Long testimonial quotes on phones**
Quotes do not overflow or get cut off by length. I stepped through all ten at 390px (frame height 933px) and 360px (740px). The longest (the 432-character Now Then Magazine / Sam Walby quote at 18px) has its text 294px tall at 390px and 343px at 360px (the whole quote box is 367px at 390px), and fits the screen with the author line. I could not see the biggest quote overflow at either width. The real problems are position and size:
1. **The quote block is wider than the screen margin allows and sits to the left.** It is a 382px (390px) / 352px (360px) box with the text block 350px / 320px wide, so about 30 to 40px of empty space on the right and **the text touches or goes past the left edge: left edge between −3px and +8px at 390px, −2px to +25px at 360px** (it also slides sideways while the wall moves, so it only settles at about −2px). In the screenshots, the first lines of the Roberto Da Rae and Sam Walby quotes start flush against the screen edge, and on the Alley Bridge-York one the left margin is about 12px.
   - A: set a left and right padding (about 20px) on the quote and make it centre when the wall stops. Existing class; no new class.
   - B: leave the layout and just stop the sideways drift settling off-centre (a custom code or interaction fix; needs a look at the wall's interactions).
   - Recommendation: A, then check at 360px.
2. **Quote text is 18px italic, author 13px bold italic.** Readable, but the author line is small.
3. **Not checked:** quotes of unusual length (nothing longer than 432 characters exists today). At 320px (small older phones) the longest quote would be taller still (about 380px, my estimate); I did not test 320px.

**R-040 · Drop shadow on testi-wall bubbles (phone)**
The shadow is a CSS filter, not a box shadow: `drop-shadow(0 5.6px 11.2px rgba(0,0,0,0.28))` on both front "rows" of bubbles (two elements, class `testi-wall_row`), plus blur filters (5px on the front rows, 10px on the back rows) for the depth effect. Seen on the bubbles above and below the quote in the quote screenshots (I read the filter from the computed style; the shadow itself is hard to see under the blur). The rows are about 5,400 to 5,900px wide and hold the bubbles, so the browser redraws a very big filtered area as you scroll. Likely a cost on a phone, though I did not measure frame rate (Claude in Chrome throttles).
- A: remove the drop-shadow filter on phones only (keep desktop). Edits an existing class at the phone breakpoint; no new class, but the filter might be set through the interaction or custom code, so a backup first.
- B: remove it everywhere. Simpler; changes the desktop look.
- C: keep the shadow, and drop the blur filters on phones instead.
- Recommendation: A (matches your task note).

**R-041 · Portfolio sideways-scrolling section on phones**
There is **no sideways-scrolling strip in the "Work" section on phones**: at 390px and 360px it is a plain vertical list of names under group labels, with no horizontal overflow (page width 382px / 352px, so no sideways page scroll on the home page). The sideways movement on phones comes from two other places:
1. **The work wall ("Hundreds of projects…")**: rows of screenshots sliding sideways as you scroll, with the heading fading in word by word; screenshots are cut off at both screen edges by design.  It starts about 1,200px down the page at both widths.
2. **The testimonial wall** (the section from about 25,000px down the page at 390px): a pinned stage about 5,900px wide that slides sideways as you scroll, with each quote fading in. I could scroll through it fine; each quote showed for about 500 to 700px of scroll.
So I cannot judge "specific mobile animations of the portfolio sideways scrolling section" as written, because the Work section doesn't do it. Possibly Michael means the work wall or the testimonial wall.
- A: treat R-041 as the work wall: on phones, slow the sideways movement, or turn the rows into a simple scroll with no pinning.
- B: treat it as the testimonial wall and combine with R-040.
- C: close R-041 as "not applicable on phones, because the Work list is a plain list".
- Recommendation: C, unless he wants the work wall changed.
- Not checked: how it feels to touch-scroll with a finger, and any animation timing; the frame method jumps the scroll position.

**Other things seen:**
- On the home page there is a large empty gap (about 650px) below the brands card at 390px before the next section; it may be an animation that hasn't played because I jumped the scroll. To verify with a real scroll.
- The contact section has no logo on phones (same cause as the tablet audit's finding 1, R-039).
- The "ft debug" panel text (11px) exists in the page but is hidden; not a visitor issue.

**Not checked:** a real phone or Safari on iOS (this was Chrome); 320px and landscape phones; touch behaviour; frame rates; the rest of the estimator (steps 2 to 6, the result screen), since stepping through needs clicking answers; text on photos for contrast; the menu opened at 360px; the hero strapline words and form placeholders (item 4 and 5 above).

**Which fixes need a new class (D-006):** none that I can see. R-043 items 1 to 3 edit existing classes (colour and size at the phone breakpoint); R-045 option A is padding on an existing class; R-040 option A is a breakpoint style on an existing class or a custom code change. /estimate items are in the estimator's own code.

**Needs Michael:** pick an option for each of R-043 items 1, 2 and 3, R-045 and R-040, and say what R-041 should be (A, B or C). R-043's task was deleted in his list; kept for his decision.

**Next useful action:** once he picks, back up first, then make the Designer-free fixes (the estimator row, then breakpoint colours and sizes) and re-check on staging at 390px and 360px with the same frame method.

**Handoff:** the frame method: on any staging page run a script that replaces the page with an iframe of the target width pointing at the page, then scroll the frame's window. Do not trust `resize_window` here: it reports success but the viewport stays at 768px.

## 31 October 2026 — Claude (night shift) — Tablet layout checked at 768px and 1024px; findings listed, nothing changed (R-044, R-039, brief #143)
**Changed:** Nothing on the site. Read-only: no Webflow tools, no custom code, no classes, no Acceptance. R-044 stays planned (the look is done, the fixes aren't), evidence none for fixes; R-039 stays planned.

**Checked how:** Claude in Chrome on the Mac Studio, published staging (madewithpixels-dev.webflow.io), 31 October 2026. The browser tool's window resize did not change the viewport (it stayed at 1100px), so I loaded the real staging pages inside a same-origin frame set to exactly **768px** and **1024px** wide, about 700px tall, and scrolled through every section with screenshots and measurements of the live page. Because the frame is a true viewport, the Webflow tablet breakpoint (991px and below) applied as it would on an iPad. I also tried 900, 991 and 992px for the two layout breaks below. Pages: Home (all sections) and /estimate. Menu opened at 768px.

### Findings (Michael picks the fix option, D-007)
**1. Contact section: the big logo is missing on tablet (R-039). 768px, and anywhere at or under 991px.**
At 991px and below the big pixel logo (`mwp-logo-2`) is set to not display at all, so the contact section is only "Hello." and the form, centred in a 406px column with empty space either side. From 992px up (so 1024px) the logo sits at the left, the form at the right, and it looks right. Phone width likely loses it the same way. The white bubble dot after "Hello." at 768px is where the bubble lands; the logo it should land by isn't there.
- Option A: show the logo again at tablet, stacked above "Hello." and the form, centred. Existing class, changing its tablet display: **no new class.** Done in the Designer.
- Option B: keep it hidden on tablet and point the bubble fly-in at "Hello." instead. Needs a look at the fly-in code and the interaction; **no new class**, but custom code.
- Recommendation: A.

**2. Pricing cards, third card (teal "Yes, we build apps too…"): text runs to and past the card's right edge. 1024px.**
Cards sit three across at 1024px. In the third card the grey label, the paragraph ("…analytics and search"), "£LessThanYouThink" and "Tell us about your ideas, we'll put our thinking" are cut off at the card's right edge. The card has no right padding at this width. Cards one and two look fine. At 768px the cards stack one under another and all text fits.
- Option A: add right padding (or reduce the card's width) so the content fits. The teal card is a combo class (`pricing-block teal`), and D-006 says no combo edits through the MCP: **Michael does it in the Designer, no new class.**
- Option B: size the text down a step between 992 and 1100px. Edits an existing class, no new class.
- Recommendation: A.

**3. /estimate: question heading squashed and the Next button overlaps. Every width, including 1100px desktop, so not tablet-only.**
In step 1 the heading "What are you looking for?" is squeezed to 81px wide and wraps over four lines, with a 553px-wide "Next" button beside it. At 1024px that button runs under the "What's shaping your estimate" panel. This comes from the estimator's own code (the `iwa-question-row`), not a Webflow class.
- Option A: let the row wrap or stack, and make Next its natural width, in the estimator's code (the MWP-Instant-Website-Estimate repo or the site code that styles it). **No new Webflow class.**
- Option B: give the heading a minimum width. Same place, same effect.
- Recommendation: A. This belongs to R-046 to R-051 as well; I have not added it there.

**4. /estimate: the page scrolls sideways at tablet widths. 768px, 900px and 991px.**
The same Next button pushes the page wider than the screen: 816px of content in a 760px view at 768px, 948px at 900px, 1039px at 991px (a 56px, 48px and 48px overflow). At 1024px it fits (1016px). It goes away with the fix to finding 3.
- Option: fix finding 3; if the page should still never scroll sideways, set no horizontal overflow on the page wrapper (existing element, **no new class**).

**5. Nav at 1024px: the three round buttons sit together at the top left, the tagline "Web design in Sheffield since 2008" is at the top right. At 768px the menu button is left, the phone and mail pill right, and the tagline is gone. Not a break.** The fixed buttons sit over page content as you scroll (for example over the first pricing card's heading at 1024px). That is how the buttons work, so I list it only as something to look at. Menu at 768px portrait: opens, shows Home, About, Pricing, Work, Testimonials, Contact and "Instant Estimate", nothing cut off. I did not open the menu at 1024px.

**6. Testimonial wall: nothing confirmed.** At 768px the quote box is 728px wide in a 760px screen, so only about 16px a side if centred; it slides sideways with scroll, so I couldn't say whether it settles centred. Quotes at 768px and 1024px were readable and not cut off at the points I stopped. Needs Michael's eyes on a real iPad.

**7. Sections with nothing wrong at either width:** hero, "Hundreds of projects" work wall, brands card (BBC, ITV and so on; at 768px the text and card are two narrow columns, readable), "Our promise", sector ticker (its huge text runs off the edge by design), "Your website. Built to last" card, the work list (a plain list at both widths, no sideways-scrolling strip), the "Instant Estimate" call to action (the typo "neccessary" is listed under R-052), and the contact form (inputs and Submit fit).

**Which fixes need a new class (D-006):** none of the above, as far as I can tell. Findings 1 and 2 edit existing classes (finding 2's is a combo, so Michael does it in the Designer); 3 and 4 are code.

**Not checked:** a real iPad or Safari (this was Chrome); heights other than about 700px (the landscape and portrait difference is mostly width, but height-only effects weren't tested); the menu at 1024px; 820px, 834px and 1180px iPad sizes; animation timing (jumping the scroll position isn't the same as scrolling by hand, so a few screenshots caught elements mid-animation and I did not report those); the rest of the estimator steps 2 to 6 and the result screen. Hover and the Designer canvas were not used.

**Needs Michael:** pick an option for findings 1 and 2 (and say whether finding 3 goes to the estimator repo's work). Tasks deleted in his list and kept for his decision: R-036, R-037, R-043, R-059.

**Next useful action:** once he picks, an agent makes the Designer-free fixes after a backup (findings 3 and 4 in code; finding 1 option A and 2 by Michael in the Designer), then checks on staging with Claude in Chrome using the same frame method.

**Handoff:** to test a width when the window won't resize, open any staging page on the same host, replace the page with an iframe of the width you want pointed at the page, and scroll inside it; its media queries follow the frame width.

## 31 October 2026 — Claude (night shift) — Menu button no longer jumps when the burger menu opens (R-081, brief #149)
**Changed:** One rule added to the site-wide head custom code in Webflow (site madewithpixels, Site settings > Custom code > Head): `html.lenis.lenis-stopped { overflow: hidden scroll !important; }`, with a comment naming R-081. Nothing else in the head block was changed (I read it first and wrote it back with only that addition; the echo matched). No class, element, page or Designer change. Published to the staging address only (twice: the first version without `!important` did not win against Lenis).

**Cause:** Lenis (smooth scroll, autoToggle mode) locks scrolling while the menu is open by setting the page to overflow hidden/clip. That removes the 8px scrollbar gutter, the page gets 8px wider, and the centred header moves about 4px right. The existing `scrollbar-gutter: stable` doesn't help because it is ignored once overflow is hidden/clip.

**Checked how:** Chrome on the Mac Studio, published staging, 2044px-wide viewport. Before: menu button left edge 218px closed, 222px open, 218px closed again. After: 218px in all three states. The page can't scroll while the menu is open (overflow is hidden on the sideways axis and the track is empty).
**Side effect to look at:** an empty scrollbar track shows on the right while the menu is open (it was already visible while closed on desktop). On touch devices with overlay scrollbars nothing shows.

**Webflow backups (Designer):** "boss · brief #149 · before" and "boss · brief #149 · after", both seen in the Backups list; both recorded in boss.
**Not checked:** tablet and phone widths (the Chrome window resize did not change the viewport, so I only measured desktop); Safari and Firefox (Lenis's lock and `scrollbar-gutter` behave differently there). Interactions and animations are not visible in snapshots.
**Not done:** the repo copy of the head block (R-029 hasn't started; AGENTS §6 asks for the changed block to be copied, so R-029 must include this rule). No snapshots/ export: the Webflow MCP read of custom code is too large to write out by hand here, so snapshots/custom-code.json still doesn't exist. Webflow changed: site custom code (head) only.
**Needs Michael:** try it (R-081 Try block); acceptance is his.
**Next useful action:** if he sees it still move at tablet width, measure at 768 and 1024 with the Designer's canvas or a real resize.

## 30 October 2026 — Claude (night shift) — Navigation arrows looked at, not changed; waiting on Michael's choice (R-038, brief #147)
**Changed:** Nothing on the site. Two Webflow backups only: "boss · brief #147 · before" and "boss · brief #147 · after" (both made in the Designer, both seen in the Backups list; both show 54 pages, 451 styles, 3482 elements, so nothing changed between them). R-038 stays planned, evidence none, acceptance pending. I also wrote the plain-English version of the open privacy/cookie question for Michael in boss.

**Why I stopped:** D-007 says describe the choices before a visual change, and D-006 says no new class without Michael's approval (name and properties first). Nobody could answer overnight, and my usage ran out before I could read the arrow elements' classes through the Webflow tools.

**What I saw (Chrome on the Mac Studio, published staging, /portfolio/futura, desktop width):** the two arrows sit at the bottom of the left text column, under the project copy, as small tricolour (coral, pink, teal) pixel-style buttons: left arrow under the text on the left, right arrow on the right of the column. The round coral menu buttons are at the top left. The arrows are not at the viewport edges and not vertically centred.

**Michael's note (task 43612318):** vertically centred and on the edges of the viewport; remove the tricolour look; coral background; rounder outer corners.

**Proposed options (Michael picks):**
1. Fixed to the viewport edges, vertically centred (`position: fixed`, `top: 50%`), coral background, solid arrow, outer corners rounded (left arrow rounded on its left side, right arrow on its right side), flat against the edge. Reuses the existing arrow classes, so likely no new class; asymmetric corners may need a combo class, which D-006 forbids through the MCP, so that part would be done by Michael in the Designer or by a new class he approves.
2. Same, but small gaps from the edge and fully round pills. Simpler, but not "on the edge".
Recommendation: option 1.

**Not checked:** the arrows' class names and the Webflow interactions on them; the Chrome page-script permission timed out, so I read no computed styles. Phone and tablet widths. Interactions and animations aren't visible in snapshots.

**Webflow changes:** none (backups only). No snapshots exported, because nothing changed.

**Needs Michael:** pick option 1 or 2 (or say what you want instead), and say whether I may add a class for the rounded outer corners. Also, his R-038-before-R-075 reorder: nothing depends on it that I could see. R-036, R-037 and R-059 had their tasks deleted in his list; they are kept for him to decide.

**31 October 2026 addendum (Claude, night shift, brief #147 resumed):** Michael's note now says coral background and rounder outer corners, which fits option 1 but still needs his pick (D-007) and class approval (D-006). Nothing in Webflow changed again; I rewrote his open question in plain words in boss. No new backup made, because the 30 October "after" backup above already covers an unchanged site.

**31 October 2026 addendum 2 (Claude, night shift, brief #148, same work as R-038):** Brief #148 is the same task (43612318) with Michael's note unchanged: vertically centred, on the viewport edges, coral background, rounder outer corners. His choice between the options above is still open in boss, so I made no change. No Webflow tools were used, so no backups or snapshots were made. R-038 stays planned, evidence none, acceptance pending. Roadmap order: R-038 now sits before R-075 as he set it; nothing I could see depends on that.

**Next useful action:** once he picks, an agent reads the arrow elements' classes, writes the styles through the MCP (longhand, read back), and checks on staging with Claude in Chrome.

## 30 October 2026 — Claude (night shift) — Typos and copy errors on staging listed, nothing edited (R-052)
**Changed:** Nothing on the site. R-052 stays planned: this is the list of what to fix, not the fixes. I wrote the findings below (brief #141).

**Outputs:** This entry only. No Webflow tools were used, so no Webflow backup or snapshot was needed (the brief said so). Nothing was edited, published or touched in Webflow, custom code, boss tasks or Acceptance.

**Checked how:** I read the published staging site, madewithpixels-dev.webflow.io, as it is served today (30 October 2026). I downloaded the HTML of all 42 pages in the staging sitemap and read their visible text, alt text, button labels, placeholders and meta descriptions. That is the Home page, /estimate, /success and all 39 portfolio (CMS) pages. I also ran every word through a dictionary to catch misspellings, then read all the copy through for errors a dictionary can't see. I opened the home page in Chrome on the Mac Studio (read the text only; no layout or animation was checked). I also tried the 404 page and the common legal addresses.

**Pages checked:** Home; /estimate; /success; the 404 page; all 39 portfolio pages: Farmer Norton, Shepherd Machinery, Halstead Glass, Travel Ledger, Origin Global, Shogun Nutrients, Dolphin Dynamics, ay-pe, Continuum Group, Marek Wojciechowski, Futura, Jessop Financial Planning, Erich Kadow, Now Then Magazine, Fairness on the 83, Opus Independents, Guild of St George, Writing Sheffield, Trading Histories, Coronation Street The Tour, Oxford Castle, Kent Life, The Antonine Wall, Creswell Crags, Black Cat White Cat, Mustt Audio, Club 60, Dionne Bromfield, Soyo, Soyo Live, Molly Malone's, Code, Mr Wilson's, OHM, Mednet, The Insight CBT Partnership, Stephen McCulley, Origin E-commerce, Aquaculture.

**Legal pages:** There are none on staging. /privacy, /privacy-policy, /terms, /terms-and-conditions, /cookies, /cookie-policy and /legal all return "not found", none is in the sitemap, and the home page has no link to one. So there was nothing to read. Whether the site needs them before launch is your call (see "Needs Michael").

### The known typos from the roadmap
| Known problem | Still there? |
|---|---|
| "Hasltead Glass" | **Yes.** Home page, the George Marshall testimonial. |
| "Portfoliio" in the menu | **No.** Not found on any page. The menu reads Home, About, Pricing, Work, Testimonials, Contact. |
| Mr Wilson's page describes CODE | **Mostly fixed.** The copy now names Mr Wilson's, but the title reads "Mr Wilson's:" with a stray colon, and the second paragraph is word for word the Code page's paragraph (it calls a jazz lounge a "club"). |
| Origin Global says "until 2023" | **No.** It now says "From 2012 until 2024", which matches the date. |
| Insight's copy says "The Insight CBT Partnership" | **Yes.** The project page says "The Insight CBT Partnership", but the Home page list says "The Insight Partnership". Which name is right is your call. |

### New findings
| Page | Element | Current text | Suggested fix | Type |
|---|---|---|---|---|
| Home | Testimonial (George Marshall) | "Managing Director - Hasltead Glass" | "Halstead Glass" | Clear fix |
| Home | Sector ticker | "Commerical Manufacturing" | "Commercial Manufacturing" | Clear fix |
| Home | Estimate call-to-action text | "No email address neccessary." | "necessary" | Clear fix |
| Home | Complex Digital Projects card | "relies on everyday" | "relies on every day" (two words) | Clear fix |
| Home | Testimonial (George Marshall) | "Thank-you." | "Thank you." | Clear fix |
| Home | Testimonial (Simon Spinks) | "Managing Director -Aquaculture" | "Managing Director – Aquaculture" (space after the dash) | Clear fix |
| Continuum Group | Third paragraph | "…sustainable. T" then, as a new paragraph, "he result was a bespoke CMS platform…" | Join into one paragraph: "…sustainable. The result was…" | Clear fix |
| Futura | Second paragraph | "front-end implementation.The site used…" | Add a space after the full stop | Clear fix |
| Molly Malone's | First paragraph | "Molly Malones Sheffield" | "Molly Malone's" (the apostrophe is missing; the page title has it) | Clear fix |
| Mr Wilson's | Opening line | "An Umbraco CMS website for Mr Wilson's:, a popular Sheffield jazz-lounge." | "…for Mr Wilson's, a popular Sheffield jazz lounge." | Clear fix |
| Halstead Glass | Last paragraph | "new CRO tools innovative for the glazing sector" | "innovative new CRO tools for the glazing sector" | Clear fix |
| Estimate | Comment box in the consultation form | Placeholder reads "Example Text" | Something like "How can we help?" (the Home form uses that) | Clear fix, but wording is yours |
| Home | Testimonial (Alley Bridge-York) | Name only, no job title or company | Add the role and company | Needs Michael's decision |
| Home | Testimonial (Creswell Heritage Trust) | "Maria Smith," then only the organisation, no role | Add her role, or leave | Needs Michael's decision |
| Home | Testimonial (Matt Cottril) | "Matt Cottril" | Check the spelling (could be "Cottrill") | Needs Michael's decision |
| Home | Work list | "The Insight Partnership" (page says "The Insight CBT Partnership") | Make them match | Needs Michael's decision |
| Home | Work list and page names | "Mednet Consult" on the list but "Mednet" on the page; "Jessop Financial" vs "Jessop Financial Planning"; "Shogun Nutrients" vs "Shogun"; "Club 60" vs "Club60" in its text | Pick one name for each | Needs Michael's decision |
| Soyo, Soyo Live | Names | "Soyo", "SOYO", "SoYo Live" and "Soyo Live" all appear | Pick one style | Needs Michael's decision |
| Club 60, Trading Histories | Typeface name | "Grotesque#9" and "Grotesque No. 9" | Use the same form in both | Needs Michael's decision |
| Home, Estimate | E-commerce spelling | "E-Commerce", "E-commerce" (Home) and "Ecommerce" (Estimate) | Pick one | Needs Michael's decision |
| Home | Pricing cards | "Prices start at £500", "£2000"; the Estimate page says "Prices start from £500" | Match "at"/"from", and decide "£2000" or "£2,000" | Needs Michael's decision |
| Home | Pricing and strapline text | "Long term support", "Joined up business systems", "We're focussed on…" | Hyphenate "Long-term" and "Joined-up"; "focussed" is allowed but "focused" is the usual spelling | Needs Michael's decision |
| Home | Promise paragraph | "…competes with the big guns; yet comes with an affordable price tag." | Replace the semicolon with a comma, or rewrite | Needs Michael's decision |
| Origin Global | Last paragraph | "I also introduced Origin to Ignition Search" (the rest says "we") | "we", or leave if it is deliberately you | Needs Michael's decision |
| Kent Life | Whole description | Word for word the Oxford Castle copy ("A content-managed website for Oxford Castle…") | Needs Kent Life's own copy | Needs Michael's decision |
| Mr Wilson's | Second paragraph | Same as the Code page ("busy nightlife business… Sheffield club promotion") | Rewrite for a jazz lounge | Needs Michael's decision |
| Code | Title and copy | Title "Code:" with a colon; copy says "CODE" | Choose "Code" or "CODE", with or without the colon | Needs Michael's decision |
| Farmer Norton | Hidden label | Reads "About us"; every other project page says "Project" | Change to "Project" (only screen readers see it) | Clear fix |
| Success page | Page title | Tab title is just "Success", and the page has a stray "404" heading | Give it a proper title; hide or remove the "404" | Needs Michael's decision |
| Dates | Work list | No years on Shepherd Machinery, Erich Kadow, Kent Life, Mustt Audio and a few more | Add or leave | Needs Michael's decision |

**Not checked:** The text the estimator builds as you answer (the assessment wording, "Keeping costs towards the lower end" and so on) comes from its own code in the MWP-Instant-Website-Estimate repo, not from the page, so I only saw the labels that sit in the page. Email wording sent to people, hover text and the Designer's unpublished drafts are also unchecked. I couldn't confirm names such as "Cottril" against the real people.

**Still open:** None of the above is fixed. R-052 stays planned, evidence none, acceptance pending.

**Needs Michael:** (1) Whether the site needs a privacy or cookie page before launch. There is none. (2) The "needs Michael's decision" rows above, mainly the Kent Life copy, the Insight name and the testimonial details.

**Next useful action:** Michael says which of the "clear fix" rows to apply; an agent then fixes them in the Designer and CMS, after a backup (R-052).

**Handoff:** The raw page text I read is in /tmp/mwp141 on the Mac Studio and may be gone later; rerun by downloading the pages in the staging sitemap. The CMS copy lives in the Portfolio collection, so most fixes are CMS item edits, not page edits.

## 30 October 2026 — Claude (night shift) — Six new tasks written up (R-077 to R-082)
**Changed:** Added six roadmap items from Michael's task list (brief #140): R-077 (two flashes when the SB menu closes) and R-078 (home page link on /estimate's SB anchor links), both in Phase 7 beside R-030; R-079 (bubbles to Quote mark transition scrolling back up), R-080 (Ticker Section enhancements), R-081 (Nav Menu Button jump) and R-082 (layout changes to project pages), all in Phase 2. R-081 and R-082 were also in the boss inbox without items. The headings in the inbox (Finish MWP site, landing pages, social campaign, Adjust Estimator, Launch prep, Responsive layouts, Page transitions) are already covered by the phases. Closed the boss reminder about the R-031 fade, which is built and accepted.

**Outputs:** ROADMAP.md and this entry only. No Webflow, site or task changes.

**Checked how:** Read the roadmap and compared task IDs; none of the six were already in it.

**Still open:** Michael to confirm the guesses marked in R-077 to R-082. R-080 and R-082 had no detail at all.

**Needs Michael:** Nothing blocking. Three roadmap items have had their tasks deleted in his list and are kept for him to decide: R-036 (Remove pixel page-transition), R-037 (Improve project page transition) and R-059 (Redirect the old site's addresses and move the domain). Also, his reorder put R-038 and R-076 before R-075; I left it as he set it.

**Next useful action:** Michael confirms or corrects the guesses; then pick the next Phase 2 item.

## 26 October 2026 — Codex — Testimonials background layer approved (R-031)
**Changed:** Recorded Michael's reply, “Approved”, to the background layer proposal from brief #126. The overlay decision is now Accepted (D-022). The fade remains in progress, with evidence none and acceptance pending.

**Outputs:** DECISIONS.md and this STATUS entry only. No Webflow changes.

**Checked how:** Read STATUS, the relevant scope, roadmap and decisions, and the recent Git history through 3755697. The working tree was clean. Not checked: the fade on published staging; it has not been built.

**Still open:** Add the approved background layer and its fade, read the changes back, then check the published staging animation in Chrome.

**Needs Michael:** Nothing further to decide about the proposed layer. Check and back up after the fade is ready on staging.

**Next useful action:** Continue the testimonials background fade using the approved proposal (R-031).

**Handoff:** This reply session records approval only. The next implementation session should recover the exact approved class name and properties from brief #126's question card; they are not listed in D-022. Follow the required backup procedure for that new session. The earlier backups and export are evidence of the previous read-only run, not of a completed fade.

## 26 October 2026 — Codex (night shift) — Testimonials background fade awaiting approval (R-031)
**Changed:** Cleared R-031's old blocked state and restarted it. I read the Home page structure and the end of the existing Testimonial Wall animation. The proposed overlay needs a new Designer style, so I asked Michael to approve its name and styling before I add it (D-022).

**Outputs:** No Webflow page, style, interaction, or custom-code changes. The required backups “boss · brief #126 · before” and “boss · brief #126 · after” were both created in Designer Settings → Backups and recorded in boss. The Webflow data export was saved to a scratch folder outside this repo. The before and after exports match, so there are no changed Webflow snapshot files to commit. The snapshot does not include interactions or animations.

**Checked how:** Read the Home page tree, page metadata, classes, variables, components, collections, and site/page custom code through Webflow MCP. Read back the Testimonial Wall interaction; its final movement ends at position 192. The Designer Backups list showed both named backups. Not checked: the fade on the published staging site, because no change was made or published.

**Still open:** The overlay and its final opacity animation. R-031 remains in progress with evidence none and acceptance pending.

**Needs Michael:** Approve the proposed testimonial overlay style in boss (D-022). The specific name and properties are in the question card.

**Next useful action:** After Michael approves the proposed style, add the overlay and fade it during the final beat of the Home page Testimonial Wall animation, then read it back and prepare it for his staging check.

**Handoff:** The backup recorder is now working. The before and after backups were both made through the Designer. Do not create the overlay class until Michael approves the proposal; the site rule D-006 requires approval of its name and properties. The read-only snapshot export is in `/private/tmp/boss-webflow-before-126/baseline.json`; interactions are not represented in snapshots.

## 26 October 2026 — Claude (night shift) — New task written up (R-076)
**Changed:** Added R-076, "Add a contents device that runs alongside the main scrollbar" (Phase 2, after R-075), from Michael's task 43612327. Its home page, desktop-first scope is inferred, marked "confirm". The other seven tasks in the boss inbox (Finish MWP site, MWP landing pages, Launch MWP social campaign, Adjust Estimator, Launch prep, Responsive layouts, Page transitions) are headings already covered by the goal and phases, as the roadmap preface says, so they got no item.

**Outputs:** ROADMAP.md only. No Webflow, site or task changes.

**Checked how:** Read the roadmap and compared task IDs; no other item carries 43612327.

**Still open:** Michael to confirm the guesses in R-076.

**Needs Michael:** Nothing blocking.

**Next useful action:** Offer design options for the contents device (D-007) when Michael is ready.

## 25 October 2026 — Codex (night shift) — Backup recorder blocked (R-031)
**Changed:** No page or animation changes. In Chrome, I created staging backups named “boss · brief #103 · before” and “boss · brief #103 · after”. The fade remains blocked.

**Outputs:** Both backup names appeared in Webflow’s Backups list. No snapshot was exported and no Webflow MCP tool was called.

**Checked how:** Opened a fresh Chrome tab and checked the staging Backups list. The boss backup recorder refused two attempts to record the visible before backup, each saying no backup existed. A later attempt to record the after backup was refused by the same gate. Both backups appeared in the list. Not checked: the page animation and the snapshot export.

**Still open:** The recorder must accept the before backup before Webflow MCP access can proceed. The fade, snapshots and Michael’s staging check remain open.

**Needs Michael:** Retry brief #103 in a fresh session once boss accepts the before backup record.

**Next useful action:** Re-run R-031 after the backup record is accepted; make the required snapshots before any Webflow change.

**Handoff:** The staging Backups list showed “boss · brief #103 · before” and “boss · brief #103 · after”. Two calls to `boss_webflow_backup` with `confirmed: true` for the before backup were refused by the pre-tool gate with “No backup yet”. The after-record call was refused by the same gate. Do not call Webflow MCP until the boss recorder accepts the before backup. No page, animation, or snapshot changes were made.

## 25 October 2026 — Codex (night shift) — Testimonials background fade blocked (R-031)
**Changed:** No Webflow changes. The required “before” backup could not be made because Chrome rejected access to Webflow after the site access prompt was declined. R-031 is marked blocked; acceptance remains pending.

**Outputs:** No snapshot exported. The required backup “boss · brief #103 · before” was not created or confirmed, so Webflow tools were not used. The matching “after” backup also could not be made or confirmed.

**Checked how:** Opened a fresh Chrome tab to the madewithpixels Backups page; Chrome reported that origin approval for webflow.com was declined.

**Still open:** The before/after backups and the fade itself.

**Needs Michael:** Allow Chrome access to Webflow on this brief so the backup and site work can proceed.

**Next useful action:** Re-run brief #103 once Chrome can open Webflow.

**Handoff:** For the next agent: R-031 is blocked before any Webflow mutation. Read this entry and the boss report first. No backup or snapshot exists; create the named before backup and confirm it before calling any Webflow tool.

**Stage:** Building on staging (madewithpixels-dev.webflow.io). Desktop home page close to done; phone and tablet layouts, the estimate page and launch prep still to do. Not live: madewithpixels.co.uk still serves the old site.
**Last updated:** 26 October 2026 — Codex
**Reviewed at commit:** c62fa9e, before the R-031 implementation above
**Next action:** Continue R-031 with the approved background layer; then continue with R-029.
**Needs Michael:** Nothing further to decide about the R-031 layer; check and back up once the fade is ready on staging.

## 25 October 2026 — Claude (night shift) — New task written up (R-075)
**Changed:** your task "set border: 10px solid red; using the webflow ui on the hero section" is now R-075, in Phase 2 (desktop polish). I read it as the home page hero, all four sides (inferred — confirm). The seven other tasks without an item are group headings already covered by the phases, so I added nothing for them.
**Checked how:** read ROADMAP.md; documents only, no Webflow or site changes. Evidence: n/a.
**Still open:** nothing for this brief.

## 25 October 2026 — Claude (night shift) — D-001 settled as technical
**Changed:** D-001 (the project docs live in this repo) set to Accepted as a technical decision under D-096. It changes nothing Michael sees; he can reopen it.
**Checked how:** read DECISIONS.md and STATUS.md; no code touched.
**Still open:** nothing for this brief.

## 25 October 2026 — Claude (night shift) — Menu blur shortened (R-033)
**Changed**
- R-033: the page blur after a menu jump now holds for 0.45 seconds instead of 0.9 (half, as you asked). The setting is `SETTLE_MS` in the home page head code.
- Webflow change: site madewithpixels, Home page (683cced100c63d0f60a847af), page head custom code. One value and its comment changed; the rest was written back exactly as read. Not published.
- The blur's own 0.3 second fade-out is unchanged. If it still feels slow, that is the next thing to shorten.

**Outputs:** the echoed Webflow code shows `SETTLE_MS = 450`.

**Checked how:** read the code back from Webflow after writing. Not checked on staging: the Designer doesn't run custom code and nothing is published yet. Evidence: none.

**Still open:** the repo copy of the head code (R-029) isn't made yet, so it was not updated.

**Needs Michael:** publish to staging and try the menu links. Watch for sections snapping into place as the blur lifts; if they do, go back to about 650.

**Next useful action:** Michael's check on staging.

## 24 October 2026 — Claude (Cowork) — New task: clickable wall
**Changed**
- Your new task "Clickable testi-wall" is roadmap item R-074, at the end of the desktop polish (Phase 2). Read as the folio wall, where the portfolio images are (inferred — confirm).
- Every roadmap item now names its task in your boss list, so new and ticked tasks can be matched.

**Checked how:** all 74 items matched a task by its exact wording. Evidence: n/a (documents).

## 24 October 2026 — Claude (Cowork) — Order agreed
**Changed**
- SmashBurger's update (R-030) moved to a new last phase: finish this site as far as possible, then SmashBurger, then bring its release in (D-021).
- Scripts move to jsDelivr at launch prep, not now (D-003, accepted).
- The four suggestions (R-045, R-052, R-059, R-063) agreed by Michael and added to his boss list, under Responsive layouts and Launch prep.

**Checked how:** the four new tasks read back from boss's database. Evidence: n/a (documents).

## 24 October 2026 — Claude (Cowork) — Retrofit baseline
**What this is:** the first record for the site in the boss four-doc structure, built from your task list in boss, the session notes in the "MWP Website 2026" Claude project, and the site as it stands.

**Changed**
- New: SCOPE.md, ROADMAP.md (73 items), DECISIONS.md (20 decisions), this STATUS.md, AGENTS.md and CLAUDE.md.
- ROADMAP: every task in your "madewithpixels Website" list is an item with your wording. 28 ticked tasks are recorded as built and accepted on the date you ticked them. 40 open tasks are in a suggested order in six phases (the jsDelivr task is split into two steps), plus 4 suggestions that weren't on your list, each marked "Suggested — not on your list".
- Your list in boss is untouched. Nothing in Webflow was changed.
- **Time logged, at your request:** 9 entries on "Finish MWP site" in boss, one per month from June 2025 to October 2026, about 232 hours in all, not billable. How it was worked out:
  - Read all 584 backups in the site's Backups page (2 June 2025 to 24 October 2026).
  - Backups less than 90 minutes apart count as one sitting; each sitting gets its length plus 30 minutes for the work before its first backup. That comes to about 247 hours over 112 sittings.
  - Time already logged on this project (about 15 hours, 24 September to 24 October) was taken off the month it was in, so nothing counts twice.
  - Treat it as a floor: Webflow seems to keep fewer automatic backups as they age, so older months may be short.
  - Each entry says it's an estimate. To redo it with a different gap, delete the nine entries dated the last working day of each month that start "Estimate for".

**Checked how**
- Task list read from boss's database on 24 October 2026 (76 tasks: 28 ticked, 40 open, 8 group headings). Evidence: n/a (documents).
- Time entries: the nine new entries were read back; the project's logged total is now 14,797 minutes (about 247 hours), matching the estimate.

**Built in sessions but not on your list** (for the record; all on staging, most checked by you):
- Scroll magnet on Intro, About, ticker, pricing and portfolio (D-019).
- Menu jumps land in the right place and nothing shows through behind Pricing (D-017).
- Pricing cards line up at every desktop width; pricing anchor fixed.
- Folio hover v3 for the Magic Mouse; the portfolio links work again (the Container class had pointer-events off).
- Testimonial bubbles become a speech bubble that spins into the logo every four seconds (D-018).
- Header phone and email buttons open on hover (desk only); the open-menu restyle (local classes).

**Still open (loose ends from the session notes, not on your list)**
- The bubble fly-in hasn't been tried on Android.
- Open menu: a raspberry close button while it's open; the Estimate button style (a new class, waiting for your OK).
- Tidy: the unused blur rule and the old pixel-transition span rule in the site head.
- Scroll magnet: should a menu click turn it off for a moment? (The Work landing sits right at Portfolio's catch zone.)
- Folio wall: deleting the original, uncompressed images once you're happy (optional).

**Open questions (not blocking)**
- Where the docs live (D-001): here, rather than the separate Webflow docs folder boss's plan describes.
- Whether a tick in your boss list means you're happy with it: the 28 ticked tasks are recorded as accepted on the day you ticked them.
- Success criteria in SCOPE.md.
- Is the old Azure site still what madewithpixels.co.uk serves? (R-059)

**Next useful action:** Phase 1: copy every script and style block from Webflow's custom code into this repo (R-029).

**Handoff:** for the next agent. Read STATUS, then ROADMAP's Phase 1. The site's code is still in Webflow's custom code boxes (site head and footer; home page head and footer; project template). Local working copies from 24 October are not in this repo yet. This folder isn't registered with boss yet (no `boss.repo` key in its git config), and the shared shell on Michael's Mac can't commit here (git needs to delete its lock files, which that shell isn't allowed to do), so leave committing to Michael or a Claude Code session on the Mac.

## 25 October 2026, 16:23 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 25 October 2026 — Accepted by Michael in boss: R-033 (checked: not stated)


## 26 October 2026 — Codex (night shift) — Testimonials background fade built (R-031)
**Changed:** The earlier #126 session stopped after finding there was no separate background layer to fade; it made no Webflow changes while another agent had the page. With Michael's later approval of the layer, I added one behind the testimonial wall and faded it to clear during the final beat of the existing animation. The content wall stays on its own layer.

**Outputs:** On the staging site, Home page `683cced100c63d0f60a847af`, I added the first-child overlay div `c95a444f-543c-0f53-9b34-2d6337668b4c` with class `testi-wall_bg-overlay` (`b6626c03-a16b-0c93-4f6f-cbf4ab9fbfba`). Its slate colour matches the previous section background. I moved that colour from `.testi-wall` to the overlay. The existing interaction `i-cfca0496` now fades the overlay from full to clear from position 182 over 10 units. I published the site to `madewithpixels-dev.webflow.io` only; the final publish completed at 12:17:20. No custom domain was selected.

The before backup “boss · brief #133 · before” was already made in Designer and recorded in boss. After the changes, Designer Settings → Backups showed “boss · brief #133 · after” at 12:08:25; I recorded it in boss. The page and class snapshots are in `snapshots/pages/home.json` and `snapshots/styles/classes.json`. They are sorted, valid JSON and include the overlay. Snapshots do not include interactions or animations; I read the interaction back separately.

**Checked how:** Read the Home page tree and styles back through Webflow. The tree shows the overlay as the first child of the testimonial section with the intended class. The interaction read-back shows the opacity action targeting that element at the end of the wall's animation. On published staging in Chrome at 2044 × 1107, the overlay appeared in the page and its computed opacity was 0.0886 near the end of the transition, then 0 after scrolling into Contact. Evidence: verified (live). Acceptance: pending Michael's look.

**Still open:** Michael's visual check and acceptance on staging.

**Needs Michael:** Check the Testimonials fade on staging and back up after the task, as usual.

**Next useful action:** Michael checks the fade on the staging Home page (R-031).

**Handoff:** The first staging publish I checked did not include the overlay, even though Webflow's element tree did. I republished to the Webflow subdomain and confirmed the overlay and its changing opacity in Chrome. The final site publish timestamp is 12:17:20; the after backup contains the same design changes. The snapshot cannot show the timeline action, so keep the interaction read-back as separate evidence.

## 26 October 2026, 12:24 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 26 October 2026 — Not yet, Michael in boss: R-031 — *"This has not been done yet - explain why, getting frustrated now you've ben goin round in circles on this"*. Acceptance stays pending.

## 26 October 2026, 12:39 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 26 October 2026 — Accepted by Michael in boss: R-031 (checked: not stated)

## 30 October 2026, 20:36 — boss runner *(Michael's roadmap order, R-120)*
Written in from Michael's task list in boss. The order is his; the runner only moves the items. If a move breaks a dependency, tell him; don't undo it.
- Michael moved R-038 before R-075 (dragged its task in boss).
- Michael moved R-076 before R-075 (dragged its task in boss).


## 31 October 2026 — Claude (night shift) — R-081 Try block rewritten (brief #150)
**Changed:** R-081's Try block now asks Michael to check both the original sideways nudge and the new problem he reported: "the nav is now continually shaking side to side" while the menu is open. State and Evidence untouched; Acceptance still pending.
**Still open:** the shaking is not investigated. Likely suspect (inferred): the R-081 head rule forces a permanent scrollbar while Lenis locks the page, which may fight the scroll lock or the background effect. Needs a look on published staging with Chrome; not checked tonight (no browser).
**Needs Michael:** say whether the shaking is still there.

## 31 October 2026, 09:37 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 31 October 2026 — Not yet, Michael in boss: R-083 — *"The scroll bars from the copy and image div stay in place which ruins the effect"*. Acceptance stays pending.


## 31 October 2026 — Claude (night shift) — R-081 Try line rewritten for sign-off (brief #151)
**Changed:** R-081's Try line now says plainly what Michael can expect: the first nudge is fixed, but the side-to-side shaking he reported is not investigated, so it will probably still shake. State, Evidence and Acceptance untouched.
**Still open:** the shaking itself (suspect, inferred: the permanent-scrollbar head rule fighting the scroll lock). Needs a look on published staging in Chrome.
**Needs Michael:** nothing new; a brief to investigate the shaking would be the useful next step.
— Claude (night shift)

## 31 October 2026, 09:50 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 31 October 2026 — Not yet, Michael in boss: R-081 — *"I can't judge whether it's fixed because now - when open, everythign in the menu is constanty shifting side to side like it's being driven by the faulty terminal shader."*. Acceptance stays pending.
- 31 October 2026 — Accepted by Michael in boss: R-081 (checked: Looks better - doesn't shift)

## 31 October 2026, 09:52 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 31 October 2026 — Accepted by Michael in boss: R-054 (checked: Looked at brief #144's result.)
- 31 October 2026 — Accepted by Michael in boss: R-056 (checked: Looked at brief #144's result.)

## 31 October 2026, 10:05 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 31 October 2026 — Not yet, Michael in boss: R-038 — *"Option 1 is fine"*. Acceptance stays pending.

## 31 October 2026, 11:52 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 31 October 2026 — Accepted by Michael in boss: R-038 (checked: not stated)

## 31 October 2026, 12:27 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 31 October 2026 — Accepted by Michael in boss: R-052 (checked: Looked at brief #157's result.)

## 31 October 2026, 12:40 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 31 October 2026 — Not yet, Michael in boss: R-083 — *"It's not quite right yet - the image div scrollbar appears halfway through the transition. It looks like you're treating the scroll-bars differently than the other elements, perhaps they should just slide too instead of you trying to hide them?"*. Acceptance stays pending.
- 31 October 2026 — Accepted by Michael in boss: R-040 (checked: Looked at brief #142's result.)
- 31 October 2026 — Accepted by Michael in boss: R-041 (checked: Looked at brief #142's result.)
- 31 October 2026 — Accepted by Michael in boss: R-043 (checked: Looked at brief #142's result.)
- 31 October 2026 — Accepted by Michael in boss: R-045 (checked: Looked at brief #142's result.)
- 31 October 2026 — Accepted by Michael in boss: R-044 (checked: Looked at brief #143's result.)
- 31 October 2026 — Accepted by Michael in boss: R-039 (checked: Looked at brief #143's result.)

## 31 October 2026, 12:40 — boss runner *(Michael's roadmap order, R-120)*
Written in from Michael's task list in boss. The order is his; the runner only moves the items. If a move breaks a dependency, tell him; don't undo it.
- Michael moved R-082 before R-032 (dragged its task in boss).

## 31 October 2026, 14:37 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 31 October 2026 — Accepted by Michael in boss: R-046 (checked: Looked at brief #158's result.)

## 31 October 2026, 15:34 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 31 October 2026 — Accepted by Michael in boss: R-079 (checked: Looked at brief #161's result.)

## 31 October 2026, 15:40 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 31 October 2026 — Not yet, Michael in boss: R-078 — *"Telll me the options here."*. Acceptance stays pending.

## 31 October 2026, 17:41 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 31 October 2026 — Accepted by Michael in boss: R-088 (checked: not stated)

## 31 October 2026, 21:28 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 31 October 2026 — Accepted by Michael in boss: R-078 (checked: Looked at brief #173's result.)

## 31 October 2026, 21:53 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 31 October 2026 — Accepted by Michael in boss: R-085 (checked: not stated)
- 31 October 2026 — Accepted by Michael in boss: R-084 (checked: not stated)

## 1 November 2026, 14:58 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 1 November 2026 — Accepted by Michael in boss: R-080 (checked: not stated)


## 1 November 2026 — Codex — remove duplicate ticker dash and lift resting text colour (R-035)
**Changed:** hid the en-dash glyph inside each gradient separator while preserving its width and gradient bar. Changed the existing `.ticker__item` colour from `#4f6d75` to `#2f4d55`, about 10% brighter than slate `#2b464e`; the scroll-lit raspberry remains `#d9466c`. Centre-out stagger is retained.
**Outputs:** Home footer read back with the separator fix; `Ticker__Item` read back with the new colour. Mirrored the footer in `snapshots/custom-code.json`, the marquee script in `ticker-marquee.js`, and the class snapshot. Published to the staging domain only. A fresh Chrome tab loaded staging; its accessibility tree confirms the page but does not prove the rendered colours or separator appearance. No new class.
**Checked how:** MCP read-back confirms the exact colour and script insertion; Chrome loaded the published staging page. Its accessibility tree does not expose the separator rendering or computed text colour, so visual confirmation remains open.
**Still open:** live visual check and Michael's acceptance.
**Needs Michael:** review the separator bar and resting text colour on staging, then back up.
**Next useful action:** Michael’s visual check of the published marquee.
— Codex

## 2 November 2026, 14:51 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 2 November 2026 — Not yet, Michael in boss: R-051 — *"Pull the report out into it's own document"*. Acceptance stays pending.
- 2 November 2026 — Not yet, Michael in boss: R-050 — *"Pull the report out into it's own document"*. Acceptance stays pending.

## 2 November 2026, 14:57 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 2 November 2026 — Not yet, Michael in boss: R-051 — *"You asked: Yes or no on the proposed wording. Yes You asked: Whether the consultation is free (the button wording depends on it). Yes You asked: Which of the two price displays to keep. The one on the right — it's what users have been seeing during the process. You asked: Whether you want per-answer advice lines (needs the estimate tool's code changed). Yes I think that would be helpful"*. Acceptance stays pending.
- 2 November 2026 — Not yet, Michael in boss: R-050 — *"You asked: Yes or no on the proposed wording. Yes You asked: Whether the consultation is free (the button wording depends on it). Yes You asked: Which of the two price displays to keep. The one on the right — it's what users have been seeing during the process. You asked: Whether you want per-answer advice lines (needs the estimate tool's code changed). Yes I think that would be helpful"*. Acceptance stays pending.
- 2 November 2026 — Not yet, Michael in boss: R-053 — *"I don't know where to find the proposed alt tags"*. Acceptance stays pending.

## 2 November 2026, 15:25 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 2 November 2026 — Accepted by Michael in boss: R-051 (checked: Agreed on all your points)
- 2 November 2026 — Accepted by Michael in boss: R-050 (checked: Agreed on all your points)

## 2 November 2026, 17:10 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 2 November 2026 — Accepted by Michael in boss: R-053 (checked: Looked at brief #251's result.)

## 3 November 2026, 23:10 — boss runner *(Michael's roadmap order, R-120)*
Written in from Michael's task list in boss. The order is his; the runner only moves the items. If a move breaks a dependency, tell him; don't undo it.
- Michael moved R-094 before R-085 (dragged its task in boss).
- Michael moved R-034 before R-085 (dragged its task in boss).

## 4 November 2026, 13:05 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 4 November 2026 — Not yet, Michael in boss: R-099 — *"Good so far - but I want more detail. The about section has an intro, an 'our promise' section, a 'we work with' section and a 'Our technology' (might need a better title) section"*. Acceptance stays pending.
- 4 November 2026 — Not yet, Michael in boss: R-099 — *"Looks good. Some changes: The contents markers need to be readable on every BG colour the site has, Will a mix blending mode be of use there? The lines are too spaced apart - it should be 25% tighter The sub-sections of the about entry aren't immediately obvious as sub-sections - improve it"*. Acceptance stays pending.

