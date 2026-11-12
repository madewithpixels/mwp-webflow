# madewithpixels website — Roadmap

*Retrofitted 24 October 2026 by Claude (Cowork) from Michael's task list for the project in boss ("madewithpixels Website": the Webflow '26 and Phase 2 lists). Titles keep your wording. Where several tasks sat under one heading in your list (Launch prep, Responsive layouts, Adjust Estimator, Page transitions, MWP landing pages, Launch MWP social campaign), the heading has become a phase below. "Finish MWP site" is the goal of the whole roadmap (see SCOPE.md) and carries the time log in boss.*

*Six tasks added on 30 October 2026 (R-077 to R-082) are written up from your list and still need your confirmation of the guesses marked in them.*

*Seven tasks in your list ("Finish MWP site", "MWP landing pages", "Launch MWP social campaign", "Adjust Estimator", "Launch prep", "Responsive layouts", "Page transitions") are headings, already covered by the goal and phases above, so they have no item of their own.*

*Five tasks added on 31 October 2026 (R-084 to R-088) are written up from your list and still need your confirmation of the guesses marked in them.*

*Two tasks added on 1 November 2026 (R-093, R-094) are written up from your list and still needs your confirmation of the guesses marked in it.*

*Six tasks added on 3 November 2026 (R-095 to R-100) are written up from your list and still need your confirmation of the guesses marked in them.*

*One task added on 5 November 2026 (R-104, from brief #313) is written up from your list and still needs your confirmation of the guesses marked in it.*

*One task added on 5 November 2026 (R-102) is written up from your messages and still needs your confirmation of the guesses marked in it.*

*Five tasks added on 5 November 2026 (R-107 to R-111, brief #311) are written up from your list and still need your confirmation of the guesses marked in them. R-102 and R-103 to R-106 now carry their task numbers.*

*Five tasks added on 5 November 2026 (R-112 to R-116, brief #350) are written up from your list and still need your confirmation of the guesses marked in them. R-115 looks like a duplicate of R-109.*

*One task added on 5 November 2026 (R-117, from your messages) is written up from them and still needs your confirmation of the guesses marked in it.*

*Three tasks (R-121 to R-123) added on 5 November 2026 are written up from your messages and still need your confirmation of the guesses marked in them.*

*Nine tasks added on 9 November 2026 (R-124 to R-132, brief #360) are written up from your list and still need your confirmation of the guesses marked in them.*

*Seven tasks added on 10 November 2026 (R-135 to R-141, brief #369) are written up from your list and still need your confirmation of the guesses marked in them. R-135 overlaps the queued note under R-134.*

*One task added on 10 November 2026 (R-142, brief #418) is written up from your list and still needs your confirmation of the guesses marked in it.*

*Seven tasks added on 12 November 2026 (R-147 to R-153, brief #557) are written up from your list and still need your confirmation of the guesses marked in them. R-150 carries on the pacing work of R-042.*

**Next up (your order of 5 November 2026, refreshed 10 November 2026):** the swipe direction fix, the open part of R-134 (it now also covers R-135, and R-118 and R-120 are folded into R-134 and R-133); then the phone and tablet fixes written up from your list on 9 and 10 November (R-124 to R-131, R-136 to R-141), starting with where the menu links land (R-136, R-138, R-139); then the perf watcher with R-123 (smaller images swapped in), whose "low" is the lite site (D-025, in progress), and R-117 (the rest of the code consolidation, switching each script to jsDelivr). Landed and accepted since 6 November: R-119, R-129, R-132 and R-133. R-131 (reload with an anchor) is waiting on a phone result from you.

*Six tasks added on 12 November 2026 (R-155 to R-160, brief #574) are written up from your list and still need your confirmation of the guesses marked in them. R-154 and R-145 already cover two other new tasks (#43612427, #43612416). R-156 takes over from R-082.*

*The order is a suggestion: why each phase sits where it does is under its heading. Move things freely; the numbers stay with the items.*

*Four items (R-045, R-052, R-059, R-063) were suggested by Claude and agreed by Michael on 24 October 2026; they're now in his boss list too.*

**Goal:** the new site live on madewithpixels.co.uk, then working to win enquiries.

| Phase | What | Items |
|---|---|---|
| 1 | Groundwork | R-029, R-117 |
| 2 | Desktop polish | R-031–R-038, R-074–R-076, R-079–R-088, R-094–R-099, R-112, R-132, R-133, R-134, R-135 (R-135 folded into R-134), R-147, R-150–R-153, R-155 |
| 3 | Phone and tablet | R-039–R-045, R-093, R-113, R-114, R-121, R-122, R-125–R-131, R-136–R-141, R-148, R-149, R-154, R-156–R-160 |
| 4 | Estimate page | R-046–R-051, R-106–R-111, R-115, R-116, R-124, R-142 |
| 5 | Launch prep and launch | R-052–R-063, R-102, R-123, R-143, R-144 |
| 6 | After launch (your Phase 2) | R-064–R-073, R-100 |
| 7 | SmashBurger, once it's finished | R-030, R-077, R-078 |
| — | Already built | R-001–R-028 |

---

## Phase 1 · Groundwork
*First, so every script change from here on lands in this repo as well as Webflow. The site keeps loading its scripts from Webflow until launch prep (D-003).*

### R-029 · Put all the site's custom code in this repo (the record), still loaded from Webflow for now
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612128 in your boss list
**From:** the first half of "ALL custom code served via jsDelivr" (Launch prep), split as D-003 suggests.
**Exit criteria:** every script and style block now in the site head and footer, and in each page's head and footer, has a file here; a short README line says which Webflow box each file came from. `custom.js` (the back-layer parallax) is checked against what the site runs now.
**Progress (5 November 2026):** 15 files are in `src/` and build into `dist/` (R-117; `README.md` says which Webflow box each came from). Still missing: the larger Home head and footer blocks and the Site head and footer blocks (in `snapshots/custom-code.json`), and the check of `custom.js`.


### R-117 · Restructure the custom code: one built set of files, a shared core, then port the scripts onto it
**State:** in progress (5 November 2026: the build is set up; the shared core and the porting are not started) · **Evidence:** verified (local) for the build only · **Acceptance:** pending
**Task:** none in your boss list yet
**From:** your messages of 5 November 2026: "agreed - i meant re-structure not re-write. Add this to the roadmap, it seems fundamental", and your request for a local folder with a compiler that minifies and packages the .JS and .CSS for jsDelivr, so the restructure can happen early.
**Done when:** (1) the code is edited as source files in this repo and one command builds minified bundles for jsDelivr; (2) a small shared core exists: `MWPPerf` (the tier script from R-102), one scroll/rAF dispatcher that reads layout once per frame, and one visibility registry; (3) the busiest scripts (heart morph, ticker highlight, pricing, scroll magnet, folio hover, nav jump) are ported onto it one at a time, each checked on staging before the next, behaving exactly as before; (4) the Webflow code boxes shrink to loader lines as each bundle switches (R-055). (inferred — confirm)
**Built so far (5 November 2026):** step 1 for the 15 files already in the repo. Source is in `src/` (site, home, estimate, portfolio), `npm run build` writes `dist/`, `npm run dev` serves it locally for testing on staging. See `README.md`. Not loaded by any page yet.
**Note:** restructure, not rewrite: the fixes tuned over weeks (sticky re-measure, `mwpPlayInOrder`, iOS compositor-thread scroll, Lenis timing) must survive. Merging and minifying the files helps load time (R-056); the runtime gains come from the shared core (fewer layout reads per frame, scripts that stay off on weak devices). Needs R-029 finished first for the big Home and Site head/footer blocks, which are not in the repo yet. Build the shared core together with the tier script (R-102). D-023 (accepted 5 November 2026): each script switches to jsDelivr as it is ported. **Order (your message of 5 November 2026):** this comes after R-121, R-122 and the perf watcher with R-123; the watcher is the first script built and switched here.

## Phase 2 · Desktop polish
*Your list puts these first. Quick ones lead, so you see progress while the bigger design questions (the separator, the marquee type, the project page transition) get thought through. Desktop before phones, because the phone work (pacing especially) depends on how these end up.*

### R-031 · Testimonials section BG fade *(accepted by Michael in boss, 26 Oct 2026)*
**State:** built (26 October 2026) · **Evidence:** verified (live; staging, Chrome, 2044px viewport) · **Acceptance:** accepted (26 October 2026)
**Michael, in boss, 26 October 2026:** not yet — *"This has not been done yet - explain why, getting frustrated now you've ben goin round in circles on this"*
**Try:** The slate background behind the testimonial wall now fades away during the final beat before Contact.
**Why:** The wall can remain visible while its separate background clears as you scroll into Contact.
**Steps:**
1. Open the [staging home page](https://madewithpixels-dev.webflow.io/).
2. Scroll through Testimonials to Contact and watch the slate background behind the wall fade away.
**Done when:** The background is clear by the time Contact begins.
**Time:** about 1 minute
**Task:** 43612309 in your boss list
**From:** your task list. "Section has a slightly transparent slate BG that's obvious when scrolling out of it into the contact block - find a way to fade that out as the end of the testi-wall anim plays."
**Note:** the bubble fly-in already fades the wall itself; this is the section background behind it.

### R-082 · layout changes to project pages
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612333 in your boss list
**From:** your task list, added 30 October 2026.
**Done when:** the project pages have the layout changes you want, on published staging. Michael gave no detail, so what to change comes first, with options before any visual change (D-007). (inferred — confirm)
**Note:** Check it against R-037 (project page transition) and R-038 (navigation arrows), which touch the same pages. (inferred — confirm)

### R-145 · The project page navigation items point nowhere *(accepted by Michael in boss, 12 Nov 2026)*
**State:** built (12 November 2026, in Webflow, not yet published) · **Evidence:** verified (local): the script run by hand on staging /portfolio/futura in Chrome on the Mac Studio at 2044px wide; not yet checked as published, nor at tablet or phone width · **Acceptance:** accepted (12 November 2026)
**Built:** read as the burger menu links (the previous/next arrows were not the fault). On project pages About, Pricing, Work, Testimonials and Contact had `href="#"`, so they went nowhere. New site script "ProjectMenuAnchors" 1.0.0 (footer, only acts on /portfolio/ pages) points them at /#about, /#pricing, /#portfolio, /#testimonials, /#contact, the same way /estimate does (R-106). Source: `src/portfolio/project-menu-anchors.js`. Home link, Instant Estimate and the arrows were already right.
**Try:** publish staging, open a project page, open the burger menu and press Testimonials: you should land on the Home page at the Testimonials section. Repeat for the other four.
**Task:** 43612416 in your boss list
**From:** your task list, added 11 November 2026 (brief #530).
**Done when:** on published staging, on each project page, every navigation item (the primary nav and burger menu links) goes to the right place: the Home page sections and the Estimate page, at desktop, tablet and phone width. (inferred — confirm)
**Note:** Michael gave no detail. Read as the primary navigation and burger menu links on the project pages having dead or wrong links, probably because they use in-page anchors (#work and so on) that only resolve on the Home page (inferred — confirm). It could instead mean the previous and next project arrows (R-038), which I think less likely (inferred — confirm). First step: list each nav item on a project page, where it should go and where it lands. Related: R-082 (project page layout), R-106 (Estimate page anchor links, accepted), R-124 and R-139 (anchor landings from the Estimate page). Check `isFromLibrary` before changing any `mwp-css-nav_*` class (D-006). Ignore the old `mwp-site-menu-*` menu (D-015). Check on published staging; Michael publishes.

### R-112 · Rounded corners on Left and right buttons in project pages *(accepted by Michael in boss, 10 Nov 2026)*
**State:** built (5 November 2026, published to staging); part 2 done in the Designer on 12 November 2026 (not yet published or checked on staging) · **Evidence:** verified (live), staging /portfolio/futura, Chrome on the Mac Studio at 2044px wide only; phone width not checked · **Acceptance:** accepted (10 November 2026)
**Part 2 (12 November 2026):** the Webflow tool cannot put two ordinary classes on one element (a second class is always a combo class), so the standalone `project-nav_arrow-prev` / `-next` classes could not be used. With Michael's approval (D-006) two combo classes were made on `project-nav_arrow`: `is-prev` (left 0; corners 0 / 25% / 25% / 0) and `is-next` (right 0; corners 25% / 0 / 0 / 25%), and applied to the two arrows in the Portfolio Nav component. The component's code lost the edge and corner rules and the hidden-strip rule, and the dead BG Strip Wrappers (six strips) were deleted. Left in the code for now: the override that cancels the site-head spinning border on `.project-nav_arrow`, `border-radius: inherit` on the inner parts, and the site-wide image drag rule; all three go in R-146. The standalone `-prev` / `-next` classes are now unused and can be deleted in R-146. **Try:** publish staging, open a project page: the arrows should look exactly as before (coral tabs on each edge, rounded inner corners).
**Task:** 43612375 in your boss list
**From:** your task list, added 5 November 2026.
**Done when:** the left and right buttons on the project pages have rounded corners, on published staging, at desktop, tablet and phone widths. (inferred — confirm)
**Note:** Read as the previous and next project arrow buttons (R-038). How round (a small radius or a full circle) is not stated, so I'll offer options first (D-007). No new class without approval (D-006). Same buttons as R-113; check against R-082 and R-103.

### R-032 · Pricing CTA text stagger should be quicker
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612314 in your boss list
**From:** your task list. 'Wondering about the cost of your site?'
**Note:** part of the native "Pricing Section Desktop" interaction, so a Designer change.

### R-098 · Remove the gap between the separator and the three pricing cards that animate down from the top of the viewport *(accepted by Michael in boss, 3 Nov 2026)*
**State:** built (3 November 2026, published to staging) · **Evidence:** verified (live), staging, Chrome on the Mac Studio at 1440, 1700 and 1024 · **Acceptance:** accepted (3 November 2026)
**Try:** On the Home page the three pricing cards now start right under the coloured bar on wide screens, with no dark strip.
**Why:** The thin strip of dark background above the cards is gone.
**Steps:**
1. Open the [staging Home page](https://madewithpixels-dev.webflow.io/) in Chrome with the window at least 1440px wide.
2. Scroll down to the pricing section and watch the three cards drop in.
3. Look at the line between the coloured bar at the top and the top of the cards.
**Done when:** No dark strip shows between the bar and the cards at any point of the drop-down.
**Time:** about 2 minutes
**Task:** 43612356 in your boss list
**From:** your task list, added 3 November 2026. Placed beside R-032 and R-034, which touch the same section.
**Done when:** on the Home page, the three pricing cards that drop in from the top of the viewport sit directly against the separator with no visible gap, through the whole animation, on published staging in Chrome at desktop width. (inferred — confirm)
**Findings (3 November 2026, brief #267):** the gap is the cards' own 1rem top margin in the 1440px-and-up setting (about 7.8px visible at 1440 and 1700, none at 1024, n/a at 768 and 390). Options are in `docs/pricing-gap-options.md`. Michael picked option A in boss (brief #291, 3 November 2026): `.pricing-block` margin-top at the 1440px-and-up setting is now 0px (was 1rem). Measured on staging after publishing: the card top is 0.2px against the separator's 8.4px bottom at 1440 and 1700, so the separator covers the card's first 8px and no gap shows; 1024 is unchanged.
**Note:** The separator is read as the gradient bar used between sections (see R-034), and the cards are part of the native "Pricing Section Desktop" interaction, so this is likely a Designer or interaction change. (inferred — confirm) Whether the gap shows at the start, the end or throughout, and at which widths, is not known. (inferred — confirm) Look at R-032 (pricing text stagger) and R-034 first: they may change the same animation. D-017 applies. D-006 and D-007 apply if a style change is needed: options first, and no new class without your approval.

### R-033 · Reduce the 'is-blurred' time on the primary nav *(accepted by Michael in boss, 25 Oct 2026)*
**State:** built (25 October 2026, not yet published) · **Evidence:** none (the Designer doesn't run custom code; needs checking on published staging) · **Acceptance:** accepted (25 October 2026)
**Task:** 43612303 in your boss list
**From:** your task list: "After a link in the primary nav is used, there's a delay - i want to reduce it by 50%".
**Try:** The page blur after a menu jump now lifts in about half the time.
**Why:** Less waiting after you click a menu link.
**Steps:**
1. Publish the site to staging only (madewithpixels-dev.webflow.io).
2. Open the home page on desktop width and open the menu.
3. Click each link in turn (About, Pricing, Work and so on) and watch the page after the jump.
**Done when:** The dim and blur clears quicker than before, and no section visibly snaps into place as it clears.
**Time:** about 3 minutes
**Note:** the blur holds for 0.9 seconds after a menu jump (`SETTLE_MS` in the home page head) so the scroll animations can settle out of sight. Shorter is easy; too short and you may see sections snap into place.

### R-035 · More interesting typography in the marquee section *(accepted by Michael in boss, 1 Nov 2026)*
**State:** built (1 November 2026) · **Evidence:** verified (live; latest reference crop, two edge fades, Hard Light backing and centre-out raspberry stagger on staging in Chrome on the Mac Studio) · **Acceptance:** accepted (1 November 2026)
**Try:** Our promise holds for reading, then an angled transparent-to-slate sweep enters from the right. One “Sectors & Specialisms” mask travels right to left, then the stage releases to “Your website. Built to last.” The mask crop follows Michael's screenshots, with fades into Faulty Terminal at both viewport edges. Its reveal layer uses Hard Light at 70% opacity. Raspberry starts on the centre row, spreads outwards across each line and then works through neighbouring rows towards the edges. It reverses when scrolling back.
**Steps:**
1. Refresh [Home on staging](https://madewithpixels-dev.webflow.io/) and scroll down from above Our promise.
2. Check the reading hold, right-hand sweep, single sideways text pass and release into the next section. Scroll back to check the reverse.
**Done when:** this sequence feels continuous, with no ticker entrance from below or abrupt disappearance, and the vertical fade still reveals Faulty Terminal. Michael will review the revealed marquees afterwards.
**Implementation:** a shared sticky stage contains the existing promise and ticker. Native Webflow GSAP controls the sweep and H2; a runtime SVG text clip follows the H2. The helper measures one heading width for the mask phase's scroll distance, with separate reading and sweep ranges. Existing nine-row typography and slow drift retained; no new Designer class. Resting marquee text is `#2f4d55` (about 10% brighter than slate); the gradient separator bar remains while its overlaid en-dash glyph is made transparent. See latest STATUS entry, 1 November 2026, Codex.
**Task:** 43612313 in your boss list
**From:** your task list.
**Note:** if "marquee" means the sector ticker, the angled bands (R-025) were parked as "needs work"; this may pick that up. (inferred — confirm)

### R-083 · Page transitions *(accepted by Michael in boss, 11 Nov 2026)*
**State:** built (1 November 2026) · **Evidence:** verified (live; published staging, Chrome on the Mac Studio, 1500px wide, project to project both arrows) · **Acceptance:** accepted (11 November 2026)
**Michael, in boss, 31 October 2026:** not yet — *"It's not quite right yet - the image div scrollbar appears halfway through the transition. It looks like you're treating the scroll-bars differently than the other elements, perhaps they should just slide too instead of you trying to hide them?"*
**Michael, in boss, 31 October 2026:** not yet — *"The scroll bars from the copy and image div stay in place which ruins the effect"*
**Try:** On a project page, the left and right arrows now slide the whole project off sideways, bit by bit, and the next project slides in from the other side. The pixel effect is gone.
**Why:** Moving between projects feels like flicking through a set, in the direction you pressed.
**Steps:**
1. Open the [Futura project](https://madewithpixels-dev.webflow.io/portfolio/futura) on staging in Chrome on a wide window.
2. Press the right-hand arrow under the copy, and watch the content leave to the right, then the next project arrive from the left.
3. Press the left-hand arrow and check it goes the other way.
**Done when:** the movement follows the arrow you pressed and no pixel squares appear anywhere.
**Time:** about 3 minutes
**Task:** 43612315 in your boss list
**From:** your task list: "Remove the pixel effect. Instead - the project page elements, copy, nav, screenshots should stagger off horizintally in the direction corresponding the left or right button they clicked with the next project content staggering in from the opposite side".
**Done when:** the pixel cover is gone from the whole site. On a project page, pressing the left or right arrow makes the title, copy, arrows and screenshots slide off sideways one after another, towards the arrow you pressed; the next project's content then slides in one after another from the opposite side. Other links, and the Home to project title-and-image morph (D-016), are untouched.
**Note:** takes over R-036 and R-037, whose tasks you deleted; they stay below for you to drop or keep. "Direction corresponding to the button" is read as: the left arrow sends the content off to the left, the right arrow off to the right (inferred — confirm). The site header (menu and contact buttons) stays put (inferred — confirm).

### R-103 · Remove the left and right nav buttons from the project page transitions - they should be stable *(accepted by Michael in boss, 5 November 2026)*
**State:** built (5 November 2026, brief #312) · **Evidence:** verified (live; published staging, Chrome on the Mac Studio, 2044px wide, Futura to the next project) · **Acceptance:** accepted (5 November 2026)
**Task:** 43612362 in your boss list
**Try:** On a project page, press the right-hand arrow: the title, copy and screenshots slide away, but the two arrow tabs on the screen edges stay exactly where they are, and stay there on the next project.
**Why:** The arrows are controls, not content; moving them made them hard to press again quickly.
**Steps:**
1. Open [Futura on staging](https://madewithpixels-dev.webflow.io/portfolio/futura) in a wide window.
2. Press the right arrow and watch the two coral tabs while the content slides.
3. On the next project, press the left arrow and watch again.
**Done when:** the arrow tabs never move, fade or flicker during the slide, and the content still slides as before (R-083).
**Time:** about 2 minutes
**From:** your task list: "Remove the left and right nav buttons from the project page transitions - they should be stable".
**Note:** "nav buttons" is read as the two coral arrow tabs on the left and right edges (R-038), the only left and right buttons on a project page (inferred — confirm). The site header (menu, phone, email) already stayed put. Built as two small edits in Webflow: the arrows are out of the slide's list (site footer) and out of the "hidden until arriving" rule (site head). Copy of the footer part in `page-transition.js` (R-029). Not checked: phone and tablet, Safari, the first frames of the arrival (the arrows were not hidden by any rule, but I could not sample them frame by frame).

### R-104 · Contents device should be much smaller, slightly more transparent and grow/become opaque on hover *(accepted by Michael in boss, 5 November 2026)*
**State:** built (5 November 2026, brief #313) · **Evidence:** verified (live; published staging, Chrome on the Mac Studio, 2044px viewport) · **Acceptance:** accepted (5 November 2026)
**Task:** 43612363 in your boss list
**Try:** On the Home page at desktop width, look at the right edge: the contents device is now a small, faint set of dashes. Move the mouse over it: it grows to full size and turns fully opaque, with the section names.
**Why:** At rest it was too big and too bright for something meant to stay out of the way.
**Steps:**
1. Open [the Home page on staging](https://madewithpixels-dev.webflow.io/) in a wide window and wait for the heart animation to finish.
2. Look at the right edge, half way down: a small, faint set of dashes.
3. Move the mouse over it: it grows to full size, turns opaque and shows the names.
4. Move the mouse away: it shrinks and fades back.
**Done when:** the resting device is about 60% of its old size and slightly see-through; hover or keyboard focus brings it to full size and fully opaque, and clicking an entry still jumps to its section.
**Time:** about 2 minutes
**From:** your task list: "Contents device should be much smaller, slightly more transparent and grow/become opaque on hover".
**Note:** "much smaller" is read as 60% of the old size and "slightly more transparent" as 65% strength on the main dashes and 40% on the About part dashes and rail (inferred — confirm; both are one number each in the head code). Built on R-099 in the Home head code (copy: `contents-device.html`, R-029); no new class (D-006). Not checked: Safari, a phone or tablet (the device is hidden below 992px), keyboard focus, the hover area being smaller when it is small.

### R-105 · Telephone and email buttons in the open burger menu *(accepted by Michael in boss, 5 Nov 2026)*
**State:** built (5 November 2026, brief #314) · **Evidence:** verified (live) · **Acceptance:** accepted (5 November 2026)
**Task:** 43612365 in your boss list
**Done when:** with the burger menu open, the telephone number and the email address show as plain text, right-aligned and in off-white, not inside buttons, so they can be selected and copied; they still appear with the menu's animation (inferred — confirm).
**From:** your task list: "Telephone and email buttons in the open burger menu". Your note: "They should be open so that they can be copy/pasted. They can be removed from their buttons (animated if poss) aligned right and var(off-white) in colour".
**Note:** "removed from their buttons" is read as: the text sits outside any button shape (inferred — confirm). Numbered R-105 here; if brief #315 also took R-105, renumber one.
**Follow-up (5 November 2026, brief #343):** Michael looked at it and said: "On desktop they should be right aligned, have their icons and be a lighter font-weight". Now 1.0.3: both lines end on the same right edge (each button had its own centring, which left the phone short of the email), the icons are back in off-white, and the text is weight 300 (was 700). State: built · Evidence: verified (live, staging, desktop width) · Acceptance: pending, Michael's.
**Built as:** inline script "MenuContactText" 1.0.3 on the site header (copy: `menu-contact-text.js`, R-029). Only while the menu is open (`data-state=open`): the phone and email lose the coral pill, show as light off-white text with their icons, stacked and right-aligned at the right of the header row, and slide in (email 0.08s after phone). The closed pills are unchanged. Still links (tap to call or email); the text is selectable. Not checked: Safari, a real phone, whether dragging to select starts a link drag, tablet widths other than desktop.
**Try:**
1. Open [staging](https://madewithpixels-dev.webflow.io/) at desktop width and press the burger button, top left.
2. Look top right: the number and email slide in as plain off-white text, right-aligned.
3. Select the email with the mouse and copy it; press the burger again and the coral pills return.
**Done when:** as above.
**Time:** about 2 minutes

### R-036 · Remove pixel page-transition
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612316 in your boss list
**From:** your task list (Page transitions).
**Note:** the pixel cover also runs project to project and in browsers without the morph (Firefox, older Safari); decide what they get instead. Unused CSS (`.mwp-pt span`) can go at the same time.

### R-037 · Improve project page transition
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612317 in your boss list
**From:** your task list (Page transitions). "Do something with the copy and navigation buttons."

### R-094 · Fix the testi-wall stacked entries bug *(accepted by Michael in boss, 3 Nov 2026)*
**State:** built · **Evidence:** verified (live) — staging, Chrome desktop plus 390/768/1024 frames, 3 November 2026 · **Acceptance:** accepted (3 November 2026)
**Try:** On staging the testimonial quotes no longer pile on top of each other after a menu jump.
**Why:** The wall reads properly however a visitor reaches it.
**Steps:**
1. Open [the staging site](https://madewithpixels-dev.webflow.io/) in Chrome at desktop width.
2. Open the burger menu and choose Contact, then wait for it to land.
3. Open the burger menu again and choose Testimonials.
**Done when:** only the "Praise for madewithpixels" title shows at first, and quotes appear one at a time as you scroll on.
**Time:** about 2 minutes
**Cause and fix:** see the 3 November 2026 STATUS entry (forced forwards redraw in the Home head script; now drawn end-first).
**Task:** 43612346 in your boss list
**From:** your task list, added 1 November 2026. Your wording is all there is: no screenshot, width or description of what "stacked" looks like came with it.
**Done when:** on the published staging site, the testimonial wall's entries no longer pile on top of each other: each sits in its own place at every width, through the whole scroll, and scrolling back up too. Checked on staging in Chrome at desktop, tablet and phone widths. (inferred — confirm)
**Note:** "Stacked entries" is read as testimonial bubbles or rows landing on top of each other, or collapsing into one spot, instead of spreading out as designed (inferred — confirm). Unknown whether it happens at all widths or only some, on load or only after scrolling back up (inferred — confirm). Start by finding when it happens. Likely places: the testi-wall layout and interactions, and the testi-wall code in the Home page head code. See D-017 for the scroll-animation notes before touching them. R-045 (long quotes on phones) and R-093 (shadows) touched the same wall, so check they are not the cause. D-006 and D-007 apply if a style change is needed.

### R-095 · New tuning for the intro sequence
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612350 in your boss list
**From:** your task list, added 3 November 2026. Your wording is all there is.
**Done when:** the home page's intro sequence (the opening animation on load) has the timing and feel you want, on the published staging site, checked in Chrome at desktop width. (inferred — confirm)
**Note:** Michael gave no detail, so which part to tune (speed, order, easing, the logo pixels) is open. (inferred — confirm) Start by asking what feels wrong, with options before any change (D-007). Earlier intro work: R-001, R-003, R-012. Intro timing is animation, so check it in Chrome on the Mac Studio, not the built-in pane. Phone and tablet are assumed to follow later. (inferred — confirm)

### R-034 · make better use of the separator during the scroll anims
**State:** planned (options written, waiting for Michael's pick) · **Evidence:** verified (live) for the description of what the separator does now; nothing built · **Acceptance:** pending
**Task:** 43612308 in your boss list
**From:** your task list.
**Options (4 November 2026, brief #270):** three options and a recommendation are written in STATUS, entry "Separator in the scroll animations: three options (R-034, brief #270)". Nothing built. Waiting for Michael to pick (D-007). R-035 (ticker sequence) is a dependency for options 2 and 3: see that entry.

### R-085 · Faulty Terminal BG re-initialises between project page transitions *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (fallback: element removed) · **Evidence:** verified (live; published staging, Chrome on the Mac Studio, 1467px wide) · **Acceptance:** accepted (31 October 2026)
**Task:** 43612342 in your boss list
**From:** your task list, added 31 October 2026. Your note on it: "Unlikely there's a fix for this, if so - let's remove the FT div on each project page."
**Done when:** moving from one project page to the next no longer shows the Faulty Terminal background restarting; either it carries on smoothly, or (if that can't be done) the Faulty Terminal element is gone from every project page and nothing else on them has moved. Checked on published staging, project to project with both arrows. (inferred — confirm)
**Result (1 November 2026, brief #167):** no fix is possible in Webflow's normal page-to-page navigation: each arrow press is a full page load, so the terminal's canvas is always rebuilt (it would need the site turned into a single-page app, which is far out of scope). So I took Michael's fallback and removed the `faulty-terminal` div from all 39 project pages and the draft Project Page template. Home and /estimate keep theirs. Not checked: phone/tablet, Safari/Firefox, a back-to-back arrow click-through by eye. To undo: restore "boss · brief #167 · before" or re-add the div (class `faulty-terminal` + `--is-100%-height`) as the first child of the project wrapper.
**Note:** Try for a fix first, but only briefly; your note says a fix is unlikely, so the fallback is to remove the element from each project page. Removing it is a visible change, so options come first (D-007). It touches the same transition as R-083, so check it again after any change there. Home and /estimate keep their Faulty Terminal (R-016). (inferred — confirm)

### R-074 · Clickable testi-wall
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612325 in your boss list
**From:** your task list, added 24 October 2026: "During the phase just before the parting in the testi-wall - make portfolio images clickable with a view transition to the project page. Lines should be scrollable and up and down grabbing and scrolling would be glorious."
**Exit criteria:** while the wall is built and before it parts, clicking a portfolio image opens its project page with the image morphing into place; each row can be dragged sideways; dragging up and down moves the page; a drag never opens a project by accident. Desktop first.
**Note:** the portfolio images are in the folio wall (under the hero), which also has a parting; the testimonial wall's tiles are plain colour. Taken to mean the folio wall. (inferred — confirm)

### R-086 · Clickable folio-wall
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612343 in your boss list
**From:** your task list, added 31 October 2026.
**Done when:** clicking a project image in the folio wall (under the hero) opens that project page. Checked on published staging, desktop first. What a click does exactly (straight link, or the image morphing into place as R-074 describes) is for you to pick from options (D-007). (inferred — confirm)
**Note:** Closely related to R-074, whose task you deleted: R-074 was taken to mean the folio wall too, and also asked for dragging rows. Decide whether this item replaces R-074 or sits beside it. Scroll animations run on GSAP ScrollTrigger, so read the notes behind D-017 first. (inferred — confirm)

### R-038 · Move and re-style the navigation arrows *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (1 November 2026, option 1; desktop only) · **Evidence:** verified (live), published staging, Chrome on the Mac Studio, 2044px wide · **Acceptance:** accepted (31 October 2026)
**Michael, in boss, 31 October 2026:** not yet — *"Option 1 is fine"*
**Task:** 43612318 in your boss list
**Try:** The previous and next arrows on a project page now sit on the left and right edges of the screen, halfway down, as plain coral tabs.
**Why:** They are easier to find and no longer sit under the text.
**Steps:**
1. Open [Futura on staging](https://madewithpixels-dev.webflow.io/portfolio/futura) in a wide window.
2. Look at the left and right edges of the screen, halfway down.
3. Click the right arrow, then the left one.
**Done when:** Each arrow is a plain coral tab against its edge (rounded on the side facing the page, flat against the edge), the project slides away and the next or previous project opens.
**Time:** about 2 minutes
**Open:** phone and tablet widths are not done (R-039 onwards); at tablet width the arrows may touch the text.
**From:** your task list (Page transitions). "Place them vertically centred and on the edges of the screen - remove the tricolour aesthetic, something simpler instead."

### R-076 · Add a contents device that runs alongside the main scrollbar
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612327 in your boss list
**From:** your task list, added 26 October 2026.
**Exit criteria:** on the home page at desktop width, a contents device sits beside the page's own scrollbar. It lists the main sections, marks the one you are in as you scroll, and clicking an entry scrolls to that section. It works on published staging and does not fight the sticky-section scroll animations (D-017).
**Note:** Michael gave no detail, so these are guesses. (inferred — confirm) Home page only. Desktop first, phone and tablet to follow in Phase 3. Entries are the home page's main sections. The look is open, so options come to you first (D-007), and any new class needs your approval first (D-006).

### R-099 · Add a subtle and expanding 'contents' device *(accepted by Michael in boss, 4 November 2026)*
**State:** built · **Evidence:** verified (live) — published staging, Chrome on the Mac Studio, 1440 wide window (2044px viewport); phone and tablet widths not checked · **Acceptance:** accepted (4 November 2026)
**Michael, in boss, 4 November 2026:** not yet — *"/Users/michaelauty/Desktop/Screenshot 2026-11-04 at 13.45.13.png Make sense?"*
**Michael, in boss, 4 November 2026:** not yet — *"Looks good. Some changes: The contents markers need to be readable on every BG colour the site has, Will a mix blending mode be of use there? The lines are too spaced apart - it should be 25% tighter The sub-sections of the about entry aren't immediately obvious as sub-sections - improve it"*
**Michael, in boss, 4 November 2026:** not yet — *"Good so far - but I want more detail. The about section has an intro, an 'our promise' section, a 'we work with' section and a 'Our technology' (might need a better title) section"*
**Built:** 4 November 2026 (brief #273). A first version, as Michael asked ("just build something, we'll tweak it after"). Six dashes at the right edge, vertically centred, one per section (Home, About, Pricing, Work, Testimonials, Contact); the current one is longer and white. Hover or keyboard focus opens a small dark panel with the names; clicking one jumps there through the menu's own jump (so D-017 holds). Desktop only (992px and up). It is a block at the end of the Home page head code (copy: `contents-device.html`); it adds no Webflow classes (D-006) and only reads the scroll position.
**Try:** Open the staging Home page at desktop width. Look for six small dashes at the right edge. Hover them, click Pricing, and scroll back up.
**Updated 4 November 2026 (brief #292):** Michael asked for more detail in About. The device now also lists its four parts under About: Intro, Our promise, We work with, Built to last (the last title is mine, "Our technology" is the alternative). Same checks as above; verified (live) on staging at 1512 wide.
**Updated 4 November 2026 (brief #295), from Michael's three notes:** (1) readable on every background: each dash now shows what is behind it turned to pure black or white, whichever contrasts, using a backdrop filter rather than a plain mix blend mode (see STATUS); (2) rows 25% closer (the whole stack went from 240px to 180px tall); (3) the four About parts are inset from the main dashes and hang off a thin vertical rail joined to About. Verified (live) on staging at 1512 wide; Acceptance still pending.
**Updated 4 November 2026 (brief #298), from Michael's screenshot (no words, my reading, inferred — confirm):** the rail the About parts hang from is now solid (2px) and runs unbroken from About's dash to the last part's dash; the part dashes are as bright as the main ones. Verified (live) on staging. Michael accepted R-099 in boss on 4 November 2026 before this brief; this change is new and not yet looked at.
**Updated 4 November 2026 (Michael's spec, nightshift brief "Add a subtle and expanding 'contents' device"), after he sent two screenshots and then the sizes in chat:** main lines 2px and full white (they were at 60%); About-part lines 1px and slightly greyed (60%); the rail is now 1px dotted, flush with the right edge of the main lines, and hangs under About with a small gap instead of joining it, as in his target screenshot; the current part's line is raspberry, longer, and reaches the rail so the dot beside it is raspberry too. Row spacing is unchanged (still 25% tighter). Verified (live) on staging, Chrome on the Mac Studio, 2044px viewport. Acceptance: pending (Michael accepted R-099 earlier; this change is new and he has not seen it).
**Open:** look and feel is for Michael to tweak. Click-to-open (it opens on hover and keyboard focus only), the colour of the dashes over light sections, and whether it should fade in only after the hero were not decided. Phone and tablet: hidden (Phase 3).
**Task:** 43612357 in your boss list
**From:** your task list, added 3 November 2026. This looks like a fresh take on R-076, whose task you deleted on your list. I have not merged them.
**Done when:** on the home page at desktop width, a small, quiet contents device sits at the edge of the screen. It lists the main sections, marks the current one as you scroll, expands (on hover or click) to show the full list, and clicking an entry scrolls to that section. It works on published staging and does not fight the sticky-section scroll animations. (inferred — confirm)
**Note:** Guesses: "subtle" means small and low-contrast until used, and "expanding" means it grows when you hover or click. (inferred — confirm) Please say whether this replaces R-076 (my suggestion, since R-076's task is gone) so that one can be dropped. The look is open, so options come first (D-007), and any new class needs your approval (D-006). See D-017 for scroll animation notes. Phone and tablet to follow in Phase 3. (inferred — confirm)

### R-075 · set border: 10px solid red; using the webflow ui on the hero section
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612326 in your boss list
**From:** your task list, added 25 October 2026.
**Exit criteria:** the hero section on the home page has a 10 pixel solid red border, set in the Designer's Style panel (not in custom code), and it shows on published staging at desktop width.
**Note:** looks like a test of the Designer style route, but taken at face value. (inferred — confirm) It needs a style change on the hero section's class, so per D-006 the class name and properties go to you for approval first; if the hero class is shared, say so before it changes. Which hero (home page) and all four sides are assumed. (inferred — confirm)

### R-079 · The bubbles to Quote mark animation transition the contact section doesn't work scrolling back up when the grid is in MWP logo configuration *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (1 November 2026) · **Evidence:** verified (live; staging, Chrome on the Mac Studio, desktop 2044px wide) · **Acceptance:** accepted (31 October 2026)
**Accepted by Michael in boss, 31 October 2026** — checked: Looked at brief #161's result.
**Try:** Scrolling back up from Contact while the pixels show the heart now spins them back into the speech bubble as the bubbles fly back to the wall, instead of jumping.
**Why:** The heart used to snap to the speech bubble in one frame the moment you scrolled up.
**Steps:**
1. Open the [staging home page](https://madewithpixels-dev.webflow.io/) on a desktop-sized window.
2. Scroll all the way down to Contact ("Hello.") and wait until the pixels have spun into the heart (about 5 seconds).
3. Scroll up slowly with the mouse wheel.
4. Do it again, scrolling up while the pixels are halfway through a spin, and once while they show the speech bubble.
**Done when:** Each time the pixels turn and glide back into the speech bubble while the bubbles fly back out, with no jump.
**Time:** about 3 minutes
**Cause (found 1 November 2026):** the Contact script's fly-in step forced the speech bubble with an instant reset every frame (`setShape('bubble')`), so a heart (or a spin towards it) jumped to the speech bubble in one frame. Fixed in custom code (v2.3; no class, interaction or Designer change); see STATUS, 1 November 2026, brief #161.
**Task:** 43612336 in your boss list
**From:** your task list, added 30 October 2026.
**Done when:** on published staging at desktop width, scrolling back up from Contact while the grid is showing the MWP logo plays the transition from the logo back to the bubbles and then the Quote mark properly, with no jump or missing step. (inferred — confirm)
**Note:** Michael's wording is taken to mean the reverse of the Testimonials-to-Contact bubble fly-in. Scroll animations run on GSAP ScrollTrigger, so read the sticky-section and redraw notes behind D-017 first. (inferred — confirm)

### R-080 · Ticker Section enhancements *(accepted by Michael in boss, 1 Nov 2026)*
**State:** built (1 November 2026) · **Evidence:** verified (live; published staging, Chrome on the Mac Studio, 2044px wide; phone 390px and tablet 820px checked in an embedded frame only, not by eye) · **Acceptance:** accepted (1 November 2026)
**Michael, in boss, 1 November 2026 (brief #208):** chose *More rows* — note: *"trimmed, thinking we should reduce the size of the copy so that addding more rows is fine, but easier to read"*.
**Try:** The sector ticker now lists 27 sectors across 10 moving rows, in smaller type, so you can read most of it while scrolling through the section.
**Why:** Every sector from the site copy appears, and it is easier to read.
**Steps:**
1. Open [the staging home page](https://madewithpixels-dev.webflow.io/) in Chrome on a desktop-width window.
2. Scroll slowly down through the dark blue sector section.
3. Check that every row drifts sideways and nothing is cut off top or bottom.
**Done when:** All 10 rows move and read cleanly; tell me if you want any sector removed or reworded.
**Time:** about 2 minutes
**Task:** 43612340 in your boss list
**From:** your task list, added 30 October 2026.
**Done when:** the ticker lists every sector and business type named in the staging and live site copy, laid out so most of it can be read by scrolling through a couple of screens' height, checked on published staging. Michael's note (1 November 2026, brief #190): "Take all sectors and business types from staging body copy (and current live madewithpixels.co.uk site copy) and structure the typographic ticker section as such that it's possible to read most of the content by scrolling through a couple of screens worth of height". The layout choice is put to him first (D-007); asked in boss on 1 November 2026. **Michael, in boss, 1 November 2026:** *"list them all out there maybe opp to reduce them"* — taken to mean: put every sector in the ticker, and trim the list where it is too long. Full and trimmed lists sent back to him to confirm before building.
**Note:** Taken to mean the sector ticker. It may overlap R-035 (more interesting typography in the marquee section) and the parked angled bands (R-025); decide whether they merge. (inferred — confirm)
**Later layout revision (1 November 2026, Codex):** Michael asked to merge Software and Social Enterprise into the Arts & Publishing row and fill the viewport with nine larger rows. This later mask/layout revision is tracked under R-035 with acceptance pending; the acceptance above records the earlier ten-row version.

### R-081 · Nav Menu Button jumps to the right a few pixels when burger menu open *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (31 October 2026) · **Evidence:** verified (live; staging, Chrome on the Mac Studio, 2044px viewport; tablet width not checked) · **Acceptance:** accepted (31 October 2026)
**Accepted by Michael in boss, 31 October 2026** — checked: Looks better - doesn't shift
**Michael, in boss, 31 October 2026:** not yet — *"I can't judge whether it's fixed because now - when open, everythign in the menu is constanty shifting side to side like it's being driven by the faulty terminal shader."*
**Try:** The menu button should stay perfectly still when you open the menu, and nothing in the menu should shake. The shaking you saw was caused by my first fix fighting the page's smooth scrolling; I replaced it with a different one (31 October and 1 November 2026) and measured the button at the same spot open and closed. Please watch it on the staging home page.
**Why:** The header stays exactly where it was.
**Steps:**
1. Open [the staging home page](https://madewithpixels-dev.webflow.io/) in Chrome on a desktop-width window.
2. Click the round burger button at the top left and watch the button and the menu for a few seconds.
3. Close the menu again.
**Done when:** The button does not move sideways when the menu opens or closes, and nothing shakes while it is open.
**Time:** about 1 minute
**Task:** 43612332 in your boss list
**From:** your task list, added 30 October 2026.
**Done when:** opening and closing the burger menu leaves the menu button exactly where it was, with no sideways shift, at desktop and tablet widths on published staging. (inferred — confirm widths)
**Note:** Cause confirmed on 31 October 2026: Lenis (smooth scroll) locks the page with overflow hidden/clip while the menu is open, which removes the 8px scrollbar gutter, so the centred header moved about 4px (measured 218 to 222px). First fix (`overflow: hidden scroll !important`, brief #149) caused a start/stop loop in Lenis and the menu shook; replaced on 1 November 2026 (brief #152) with `padding-right: 8px` on html and `max-width: calc(100% - 8px)` on `.header` while `lenis-stopped`, mouse devices only. No class or Designer change. Original guess: If the button is part of the SmashBurger menu, check `isFromLibrary` before changing any `mwp-css-nav_*` class (D-006), and it may wait for R-030. (inferred — confirm)

### R-097 · Burger nav is acting oddly
**State:** blocked (found; fix to be made in SmashBurger) · **Evidence:** verified (live; staging, Chrome on the Mac Studio, same-origin frames at 1440, 1024, 768, 390) · **Acceptance:** pending
**Blocked:** Michael chose option C (4 November 2026, brief #293): the menu library should stop closing on a resize that doesn't change the breakpoint. Brief written for the SmashBurger thread and sent to him in boss.
**Unblock:** the SmashBurger thread releases a fixed Webflow-Navbar-Light and the site is pointed at it (R-030). **Blocked since:** 4 November 2026. **Unblocker:** Michael (carries the brief to SmashBurger). Option A (stop the fake resize in our ticker code) stays available if the wait is long.
**Found 4 November 2026 (brief #269):** at 1440 and 1024 (desktop layout) the burger menu opens and closes itself within about 100ms, every time, at the top, middle and bottom of the page. Tablet and phone are fine. Cause: our ticker script in the Home head code fires a fake window resize when the menu's scroll lock changes the page width; the menu library treats any resize as a breakpoint change and closes. Details and options in STATUS, 4 November 2026. Fix is a Michael call (asked in boss).
**Task:** 43612354 in your boss list
**From:** your task list, added 3 November 2026. Your wording is all there is.
**Done when:** the burger menu opens, closes and jumps to its links without anything odd (no shifting, flashing, shaking or sticking) on published staging, at desktop, tablet and phone widths. (inferred — confirm)
**Note:** "Oddly" is not described, so the first step is to find what it does and when. (inferred — confirm) Related, already dealt with: R-081 (button jumping sideways, accepted) and R-077 (double flash when it closes after a link click, waiting on SmashBurger). Check `isFromLibrary` before changing any `mwp-css-nav_*` class (D-006); the fix may belong in SmashBurger and wait for R-030. Ignore the old `mwp-site-menu-*` menu (D-015).

### R-087 · When scrolling back to the top of the page, the H3.Hero-Strapline is blurred and does not resolve back to a readable state
**State:** dropped (1 November 2026, Michael's decision in boss on brief #186: "I can't reproduce it now either - let's forget it") · **Evidence:** verified (live) for the measurements; fault not reproduced · **Acceptance:** pending
**Task:** 43612344 in your boss list
**From:** your task list, added 31 October 2026.
**Done when:** after scrolling down and then back up to the top of the Home page, the hero strapline (the H3 with the class Hero-Strapline) is sharp and readable, as it is on first load. Checked on published staging at desktop width, with Chrome on the Mac Studio. (inferred — confirm)
**Note:** Looked into 1 November 2026 (brief #185): not custom code. The blur is the scroll-tied Home interaction "Hero Fade Out" (Brand Name Blur step, 5px) on `--Can-blur`. On staging after a quick return to the top the strapline keeps `blur(0.0045px)` (first load: `blur(0px)`); it looks sharp, so I did not reproduce a visible blur. A second, empty copy of "Hero Fade Out" exists (`i-9e2a7fda`). Phone and tablet not checked (viewport would not resize). Options and detail in STATUS. **Update 4 November 2026:** reproduced after all, and the cause is found: see R-096 and STATUS (brief #268). Original guess: The blur is probably set by the scroll animation that blurs the hero as you leave it and is not undone on the way back (guess; D-017 notes apply). Check phone and tablet widths too. (inferred — confirm)

### R-096 · Fix the blurred hero H3 *(accepted by Michael in boss, 4 Nov 2026)*
**State:** built (4 November 2026, brief #294; Michael chose option A) · **Evidence:** verified (live; staging, Chrome on the Mac Studio, 1512px window only, by script; not looked at by eye, other widths not re-run) · **Acceptance:** accepted (4 November 2026)
**Accepted by Michael in boss, 4 November 2026** — checked: Looked at brief #294's result.
**Task:** 43612353 in your boss list
**From:** your task list, added 3 November 2026. Your wording is all there is.
**Done when:** the hero's H3 (the strapline, class Hero-Strapline) is sharp and readable at every point it should be, including on first load and after scrolling back to the top, on published staging in Chrome. (inferred — confirm)
**Note:** Probably the same strapline as R-087, which you dropped on 1 November 2026 because it could not be reproduced (brief #186). This task suggests you are seeing it again, or a different case, so ask when and at what width it happens before digging in. (inferred — confirm) R-087's notes: the blur comes from the scroll-tied Home interaction "Hero Fade Out", and a second, empty copy of it exists. D-017 applies to scroll animation changes.
**Re-test (4 November 2026, brief #268):** reproduced at every width, including on first load (`blur(5px)` stuck). Cause and fix options in STATUS, 4 November 2026 entry. R-087 is the same fault.

### R-084 · Missing closing quote svg on the Travel Ledger testimonial *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (1 November 2026, brief #168) · **Evidence:** verified (live: published staging, Chrome on the Mac Studio, 1467px wide, by script; not by eye) · **Acceptance:** accepted (31 October 2026)
**Task:** 43612341 in your boss list
**From:** your task list, added 31 October 2026.
**Done when:** the Travel Ledger testimonial shows its closing quote mark, matching the other testimonials, on desktop, tablet and phone on published staging. (inferred — confirm)
**Cause:** the closing mark is drawn by CSS on the first `<em>` inside each testimonial (`.testi-wall_blockquote > em:first-child::after`). Roberto Da Rae's quote (Travel Ledger) was the only one with its text sitting bare in the blockquote, so there was no `<em>` to carry the mark. Not a missing SVG file, not the CMS, not R-045.
**Fix:** on the Home page, an `<em>` element now wraps that quote's text (inside `testi-wall_blockquote`). No class, style, interaction or code touched. The quote is italic already, so its look is unchanged apart from the new mark.
**Try:** The Travel Ledger testimonial now ends with the closing quote mark like the others.
**Why:** The wall of testimonials looked unfinished with one quote missing its mark.
**Steps:**
1. Open the [home page on staging](https://madewithpixels-dev.webflow.io/) and scroll to the testimonials.
2. Wait for Roberto Da Rae's quote ("I've had the pleasure of working with Michael...").
3. Look at the end of the last line.
**Done when:** A closing quote mark sits after "Highly recommended!", like the other quotes.
**Time:** about 2 minutes

### R-088 · Remove the .Icon-Link from every project page *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (1 November 2026, brief #166) · **Evidence:** verified (live: published staging, Chrome on the Mac Studio, 2044px wide) · **Acceptance:** accepted (31 October 2026)
**Try:** The small arrow beside the project title is gone from every project page.
**Why:** It was the "opens the client's site" icon; you asked for it removed.
**Steps:**
1. Open [Stephen McCulley on staging](https://madewithpixels-dev.webflow.io/portfolio/stephen-mcculley).
2. Look at the title on the left, "Stephen McCulley". Do the same on Kent Life and Shepherd Machinery.
**Done when:** No arrow sits after the title, and the title and text look as they did.
**Time:** about 2 minutes
**Task:** 43612331 in your boss list
**From:** your task list, added 31 October 2026.
**Done when:** no project page has the Icon-Link element any more, and the page layout around where it was looks right. Checked on published staging on at least two project pages. (inferred — confirm)
**Note:** Taken to mean the Webflow class `Icon-Link` on the project page template (and any CMS-driven copies). Check what it links to and that nothing else relies on it before deleting. (inferred — confirm)
**Built:** the class is `Icon Link` (`.icon-link`): a 24px external-link arrow (an HTML embed) after the title inside the title link. Project pages are separate static pages, not CMS items, so 20 of the 39 had one (those that link to the client's site), plus the draft "Project Page" template. All 21 removed and published to staging. Nothing else referenced it (no custom code, no interaction found). The title is still a link to the client's site; only the arrow is gone. The unused `Icon Link` class is left in the style list for Michael to delete or keep.

### R-132 · Remove separators from all project pages *(accepted by Michael in boss, 10 Nov 2026)*
**State:** built (10 November 2026, published to staging) · **Evidence:** verified (live) by fetching all 39 project pages from staging: none has a separator, each still has its content and title; no look at it in a browser yet, so spacing at each width is unchecked · **Acceptance:** accepted (10 November 2026)
**Built:** the `Seperator` component instance was removed (not hidden) from the 38 project pages that had one and from the draft "Project Page" template. Farmer Norton already had none. No class, style, interaction or custom code touched; the Home page separators are unchanged. The unused `Seperator` placement can be put back by re-adding the component at the top of Project Wrapper.
**Task:** 43612394 in your boss list
**From:** your task list, added 9 November 2026.
**Done when:** no project page shows a separator, at any width, on published staging; the Home page separators are unchanged and nothing else on the project pages moves. (inferred — confirm)
**Note:** This replaces the R-114 plan to apply `mwp-bleed` to the project-page separator (that part is no longer needed; the Home page one still is) (inferred — confirm). Removing the element, or hiding it, are the two options; I'd hide it first so it can be undone, and removing the spacing it leaves (inferred — confirm). Related: R-082 (layout changes to project pages), R-088 (Icon-Link removed from project pages). D-006 and D-007 apply.

### R-133 · Add the CSS that stops images being dragged to the project pages *(accepted by Michael in boss, 10 Nov 2026)*
**State:** built (10 November 2026, published to staging) · **Evidence:** verified (live): on staging the computed `-webkit-user-drag` of every image is `none` on Aquaculture and Farmer Norton (Chrome, Mac, 2044px wide); an actual drag by hand not tried · **Acceptance:** accepted (10 November 2026)
**Task:** 43612386 in your boss list (also carried by R-120, folded into this item)
**Folded in:** R-120 (same task), 10 November 2026.
**From:** your task list, added 10 November 2026 (brief #359).
**Done when:** on published staging, an image on a project page can't be dragged out of the page (the computed `-webkit-user-drag` on project-page images is `none`), on at least two project pages; nothing else on the pages changes. (inferred — confirm)
**Note:** Your snippet is `-webkit-user-drag: none; user-drag: none;`. I'd put it in the "Portfolio Nav" component's style embed, which already sits on every project page (so no new class, D-006), aimed at images on those pages (inferred — confirm). Links are still draggable; the task says images only.
**Built:** one rule, `img { -webkit-user-drag: none; user-drag: none; }`, added to the end of the style embed in the Portfolio Nav component (40 instances, all project pages and the template). No class, style, page or site code touched. Safari wasn't tested.

### R-134 · Enable swipe on the project pages for left and right nav
**State:** built (swipe and slide direction published to staging 10 November 2026) · **Evidence:** verified (live): on staging, simulated one-finger swipes on Futura went to the next project (swipe left) and the previous one (swipe right); the exit slide now follows the finger: swipe left slid the content out to the left (translateX -643px), swipe right out to the right (+643px) and went to the previous project; short and mostly-vertical swipes did nothing (Chrome, Mac Studio, desktop width; a real touch screen not tried; the slide-in on the new page was not sampled, it uses the same stored direction); then tried by Michael with a real finger on his phone, 11 November 2026: "Works" (brief #463) · **Acceptance:** accepted (11 November 2026, Michael's verdict in boss on the slide direction, recorded by Claude; swipe left/right navigation itself he had already reported working on 10 November)
**Task:** 43612384 in your boss list (also carried by R-118, folded into this item)
**Folded in:** R-118 (same task) and R-135 (the slide-direction fault, task 43612399), 10 November 2026.
**From:** your task list, added 10 November 2026 (brief #357).
**Done when:** on a phone or tablet, on a project page, swiping left goes to the next project and swiping right to the previous one, the same as pressing the arrows; scrolling up and down still works normally. (inferred — confirm)
**Note:** Swipe left = next, swipe right = previous, the usual way round (inferred — confirm). A swipe taps the matching arrow, so the slide transition (R-083) plays. It needs a clear sideways drag of 60px or more, quick, and mostly horizontal; swipes that begin in something that scrolls sideways are ignored.
**Michael, 10 November 2026:** *"It works - but: the navigation arrows on the project page fire a page transition that moves the page elements off-screen in the direction of the clicked arrow, this swipe feature moves the page elements off-screen in the opposite direction to the swipe"*; then *"Queue it and do the work"*.
**Done 10 November 2026 (brief #371):** page-transition code in the site footer now reads an optional direction from the arrow (`data-mwp-swipe`); MWPSwipeNav 1.0.1 sets it from the swipe (left = -1, right = 1) for the click. Arrow clicks have no tag, so they use the old arrow-position rule, unchanged.
**Was queued:** make a swipe slide the content off in the direction of the swipe (swipe left: content out to the left, next project in from the right; swipe right: the reverse). A swipe currently taps the opposite arrow, so the slide runs against the finger. Plan: give the page-transition script (site footer) a way to be told the direction for a swipe, set by swipe-nav.js; arrow clicks unchanged. Needs the Webflow tools (they dropped mid-session). State is back to in progress until it is applied and checked on staging.
**Built:** a small separate script "MWPSwipeNav" 1.0.0 (footer, project pages only), added alongside the others; the big footer block was not touched. Copy in `src/site/swipe-nav.js` (R-029).

### R-135 · Transition from project page swipe action plays in wrong direction
**State:** folded into R-134, 10 November 2026; the work is built (brief #371, see R-134) · **Evidence:** see R-134; Michael tried a real swipe on his phone on 11 November 2026: "Works" (brief #463) · **Acceptance:** accepted (11 November 2026, Michael's verdict in boss, recorded by Claude; same work as R-134)
**Folded into:** R-134. The slide-direction fix is done and checked there; when R-134's Next (queued) work is built, this task (43612399) is covered by it.
**Task:** 43612399 in your boss list
**From:** your task list, added 10 November 2026 (brief #369).
**Done when:** on a phone or tablet, swiping on a project page slides the content out in the direction of the swipe and the next or previous project in from the other side, on published staging. (inferred — confirm)
**Note:** This is the same fault as the "Next (queued)" note under R-134, which already holds Michael's words and the plan; this item is the separate task he added for it, so the two should be done together and one closed by the other (inferred — confirm). Arrow clicks must stay as they are (R-083). Related: R-103.

### R-147 · it's not obvious that the user can scroll from the hero
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612418 in your boss list
**From:** your task list, added 12 November 2026 (brief #557).
**Done when:** someone arriving on the home page can tell at a glance that the hero scrolls on: a visible cue (for example a small "scroll" prompt or an arrow) shows on the hero at desktop, tablet and phone, and goes away or fades once they start scrolling, on published staging. (inferred — confirm)
**Note:** The kind of cue is not decided. D-007 applies: options first (for example a gentle bouncing arrow, a "Scroll" label, or a nudge of the next section into view), then Michael picks. The hero is pinned with the terminal background and the intro sequence (R-095), so the cue must not fight them. No new class without approval (D-006).

### R-150 · Scroll pacing - all versions. Still needs work. I think it's still too quick in the intro and about section
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612421 in your boss list
**From:** your task list, added 12 November 2026 (brief #557).
**Done when:** in the full and lite versions, at desktop, tablet and phone, the intro and about sections take longer to scroll through, so each beat can be read before the next arrives; Michael agrees the pace on published staging. (inferred — confirm)
**Note:** "All versions" is read as full and lite, at every width (inferred — confirm). How much slower is for Michael to say: the section-by-section scroll lengths and five pacing options already measured are in STATUS (R-042, brief #271), which is the starting point. R-042's own task has been deleted from your list, so this item carries on that work; R-042 stays as the record until you decide to drop it. The scroll magnet is desktop only (D-019). Sticky and redraw notes behind D-017 apply before changing scroll animations. Related: R-151, R-152, R-149.

### R-151 · transition from typography marquee section into the pricing cards needs work
**State:** built · **Evidence:** verified (live, partly: staging, Chrome on the Mac Studio, 2044 wide, scrolled by script; not watched by eye while scrolling) · **Acceptance:** pending
**Built 12 November 2026 (brief #581, Michael's pick: mirror the entry):** a second angled slate band sweeps right to left over the last 2,000px or so of the marquee, and the "Built to last" list slides in from the right instead of rising. Desktop only (off at tablet and phone, as the entry band is). Details in STATUS.
**Task:** 43612422 in your boss list
**From:** your task list, added 12 November 2026 (brief #557).
**Done when:** scrolling from the typography marquee into the pricing cards feels deliberate: no jump, gap or abrupt cut, and the cards arrive smoothly, on published staging at desktop. (inferred — confirm)
**Note:** What is wrong is not said (inferred — confirm: a jump, an empty gap or a hard cut). First step is to watch it in Chrome on the Mac Studio and describe what happens, then offer options (D-007). **Michael's note (12 November 2026):** the angled fade that precedes the marquee section should follow it out too; then 'Built to last' comes in from the right, not from beneath. Looked at in brief #581: nothing built yet; plan and the choice asked are in STATUS (12 November 2026, R-151).
Related: R-035 (marquee typography), R-098 (gap above the pricing cards), R-032, R-150, R-148.

### R-152 · Slow down the sideways scrolling in the testi-wall build and tilt section - it's nausea inducing.
**State:** built · **Evidence:** none (written in Webflow, not yet published or watched) · **Acceptance:** pending
**Built 12 November 2026 (brief #582, Michael's pick: slow the rows' sideways slide by 25% before stretching the opening):** build sweeps now 75% of the original (outer 10.5 to -10.5, inner -9.75 to 9.75) in the "Testimonial Wall" interaction; the drift end points moved so the drift keeps its old pace. An earlier pass in the same brief halved the slide (misquoting his pick as 50%); corrected. Details in STATUS. If it still feels too fast, the next step is to stretch the opening (his option 1 or 2).
**Task:** 43612423 in your boss list
**From:** your task list, added 12 November 2026 (brief #557).
**Done when:** the sideways movement of the testi-wall as it builds and tilts is clearly slower and no longer uncomfortable to watch; Michael agrees on published staging. (inferred — confirm)
**Note:** Read as slowing the horizontal travel (more scroll distance or a longer duration) in the testi-wall's build and tilt stage, in every version and at every width unless Michael says otherwise (inferred — confirm). Check timing in Claude in Chrome, not the built-in pane (AGENTS.md section 6). Webflow interactions run on GSAP ScrollTrigger: see D-017 before changing them. Related: R-094, R-150, R-074. **Looked at in brief #579 (12 November 2026):** the fast part is the first 10 of 192 timeline units (rows slide about 28% while the stage tilts and scales); nothing built, choice asked in boss. Details in STATUS.

### R-153 · telephone and email link in open navigation need work
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612424 in your boss list
**From:** your task list, added 12 November 2026 (brief #557).
**Done when:** with the burger menu open, the telephone and email links look and behave as Michael wants, on published staging. (inferred — confirm)
**Note:** What is wrong is not said, so this needs a first look (inferred — confirm). R-105 already made them plain text, right-aligned, with icons and weight 300 on desktop (script MenuContactText), and was accepted. Likely candidates: how they look at tablet and phone, text selection or link dragging, or the animation. Ask Michael only if the first look finds nothing. Related: R-105, R-140.

### R-154 · The folio-wall parting isn't centred at mobile (s)
**State:** built (12 November 2026, not yet published) · **Evidence:** none (the lift rule checked in a desktop page; not seen on a phone) · **Acceptance:** pending
**Decided:** Michael picked, in boss (brief #586): keep the full-height wall and add a small script that lifts the parting by half the address bar's height, phones only. Built as the registered Home header script `foliowalllift` 1.0.0 (source in `src/home/folio-wall-lift.js`): sets `--mwp-fw-lift` to half of (100lvh minus the visible height) and a rule at 479px and under moves `.folio-wall .folio-wall_sticky` `top` by that amount. No class, interaction or head-code block changed.
**Task:** 43612427 in your boss list
**From:** your task list (brief #577, 12 November 2026).
**Done when:** on a phone (small breakpoint, 479px and under), when the folio wall parts, the gap opens centred on the screen, top and bottom equally, on published staging. (inferred — confirm)
**Note:** "Mobile (s)" read as the small breakpoint (inferred — confirm); "the parting" read as the gap that opens in the middle of the folio wall under the hero. D-006, D-007 and D-017 apply: look first, offer options before changing a scroll animation. Related: R-125, R-121 (lvh heights on folio-wall_sticky), R-130.

### R-155 · Is the slate BG too bright? Is it making the tricolour palette muddy?
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612426 in your boss list
**From:** your task list, added 12 November 2026 (brief #574).
**Done when:** you have seen the slate background and the tricolour (raspberry, and the other two palette colours) side by side, with a few slate options, and picked one (or kept it); the chosen slate is applied and the tricolour reads clean against it, on published staging. (inferred — confirm)
**Note:** A question, not a fix: the first step is options, not a change (D-007). Suggested: show the current slate next to two or three slightly darker or less bright slates, with the tricolour on each, at desktop and phone. Slate is a Webflow variable or class colour used on the site background, the separators and the bands, so a change spreads everywhere; the marquee text colour (`#2f4d55`) and the bands (R-035, R-151) were set against the current slate and would need a check. No new class (D-006). Related: R-049 (bring through tricolour and button motifs, task deleted).

## Phase 3 · Phone and tablet
*From your "Responsive layouts" group. After the desktop polish, before launch prep, because the font-weight trim and the speed fixes depend on the final mobile type.*

### R-039 · Contact section is broken *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (by Michael, 31 October 2026) · **Evidence:** none · **Acceptance:** accepted (31 October 2026)
**Accepted by Michael in boss, 31 October 2026** — checked: Looked at brief #143's result.
**Task:** 43612310 in your boss list
**From:** your task list (Responsive layouts).
**Note:** at phone width the big logo sits mostly off-screen to the left, so the bubble fly-in lands there too. Placing the logo fixes both.

### R-040 · Remove drop shadow from testi-wall bubbles on mobile *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (by Michael, 31 October 2026) · **Evidence:** none · **Acceptance:** accepted (31 October 2026)
**Accepted by Michael in boss, 31 October 2026** — checked: Looked at brief #142's result.
**Task:** 43612312 in your boss list
**From:** your task list (Responsive layouts). Also lightens the wall on phones.

### R-041 · Specific mobile animations of portfolio sideways scrolling section? *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (by Michael, 31 October 2026) · **Evidence:** none · **Acceptance:** accepted (31 October 2026)
**Accepted by Michael in boss, 31 October 2026** — checked: Looked at brief #142's result.
**Task:** 43612233 in your boss list
**From:** your task list (Responsive layouts).

### R-042 · pacing pass
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612311 in your boss list
**From:** your task list (Responsive layouts).
**Measured (4 November 2026, brief #271):** section-by-section scroll lengths at 1440px and 390px, in-flux sections marked, and five pacing options (no implementation) are in STATUS, entry "Home page scroll length and pacing, section by section (R-042, brief #271)". Evidence: verified (live, measured). Waiting for Michael's pick.
**Note:** the scroll magnet is desktop only (D-019).

### R-043 · check legibility on mobile *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (by Michael, 31 October 2026) · **Evidence:** none · **Acceptance:** accepted (31 October 2026)
**Accepted by Michael in boss, 31 October 2026** — checked: Looked at brief #142's result.
**Task:** 43612253 in your boss list
**From:** your task list (Responsive layouts). Feeds the font-weight trim (R-054).

### R-044 · Tablet hasn't even been looked at yet *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (by Michael, 31 October 2026) · **Evidence:** none · **Acceptance:** accepted (31 October 2026)
**Accepted by Michael in boss, 31 October 2026** — checked: Looked at brief #143's result.
**Task:** 43612305 in your boss list
**From:** your task list (Responsive layouts).

### R-045 · Long testimonial quotes on phones *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (by Michael, 31 October 2026) · **Evidence:** none · **Acceptance:** accepted (31 October 2026)
**Accepted by Michael in boss, 31 October 2026** — checked: Looked at brief #142's result.
**Task:** 43612320 in your boss list
**From:** Suggested by Claude; you agreed it on 24 October 2026 and it's now in your boss list. Raised in an earlier session as an open item. 

### R-093 · Remove all drop shadows from the hero project wall and the testi-wall at tablet and mobile *(accepted by Michael in boss, 2 November 2026)*
**State:** built (1 November 2026, brief #218) · **Evidence:** verified (live, partly: published staging CSS and page code read; not yet looked at by eye at tablet or phone width) · **Acceptance:** accepted (2 November 2026)
**Try:** On the Home page, the testimonial wall's front rows lose their soft shadow at tablet and phone widths. The project wall tiles already had none at those widths.
**Why:** a flatter, lighter look on smaller screens.
**Steps:**
1. Open [the staging Home page](https://madewithpixels-dev.webflow.io/) on a phone or an iPad, or narrow a desktop window below 992px.
2. Scroll to the project wall behind the hero, then to the testimonial wall.
3. Look for any shadow under the tiles or bubbles.
**Done when:** no shadow under either wall at tablet or phone width; at desktop width the testimonial wall bubbles still have their soft shadow.
**Time:** about 3 minutes
**Built:** testi-wall: a new rule at the end of the Home page head code sets the front rows' `filter` to none at 991px and below (it was a drop-shadow filter in that same code, so a Designer style could not override it). Project wall: `folio-wall_tile` already has `box-shadow: none` at the tablet breakpoint in the Designer (published CSS confirms it applies at max-width 991px, so it covers phone too); no change needed.
**Task:** 43612345 in your boss list
**From:** your task list (Responsive layouts), added 1 November 2026.
**Done when:** at tablet and mobile widths, neither the hero project wall nor the testi-wall shows any drop shadow, on the published staging site; desktop looks exactly as it does now. (inferred — confirm)
**Note:** R-040 already removed the testi-wall bubble shadow on mobile (accepted). This item widens it to tablet, and adds the hero project wall at both widths. "Hero project wall" is read as the project-image wall behind the hero (inferred — confirm). "Tablet" is read as the tablet breakpoint and below, as set in the Designer (inferred — confirm). Shadows may sit on the wall's items, their images or wrappers, so all of them need checking, and there may be glow-style filter shadows as well as box shadows (inferred — confirm). This is a style change, so D-006 and D-007 apply: no new class without Michael's approval.

### R-101 · in the pricing CTA section @mobile I've added a button for the estimate page - it's missing it's tricolour arrow. Add it *(accepted by Michael in boss, 5 November 2026)*
**State:** built (5 November 2026, brief #308) · **Evidence:** verified (live, staging; Chrome on the Mac Studio, same-site frames at 390, 800 and 1400px) · **Acceptance:** accepted (5 November 2026)
**Task:** 43612359 in your boss list
**From:** your task list, added 4 November 2026.
**Done when:** on the published staging site at phone width, the new estimate-page button in the Pricing CTA section on the Home page shows the same tricolour arrow as the other buttons; the arrow looks right, and desktop and tablet are unchanged. (inferred — confirm)
**Note:** Guesses: "the pricing CTA section" is the Pricing CTA section of the Home page (inferred — confirm); "the tricolour arrow" is the coral, pink and teal pixel-style arrow used on the site's other buttons, so I would copy that treatment rather than design a new one (inferred — confirm); the arrow should show at phone width only, since the button was added for mobile (inferred — confirm). Related: R-049 (tricolour and button motifs, Estimate page) and R-032 (Pricing CTA text stagger). This is a visual change, so D-006 and D-007 apply: I describe the options first, and no new class without Michael's approval.

### R-113 · Left and right nav buttons in the project pages should be centered at the view port edges @mobile as they are @desktop *(accepted by Michael in boss, 5 Nov 2026)*
**State:** built · **Evidence:** verified (live, staging, Chrome on the Mac Studio, frames at 390, 700 and 1440px) · **Acceptance:** accepted (5 November 2026)
**Cause and fix (5 November 2026):** the class `.iwa-nav` (the arrows' wrapper) had `transform: translate(0px, 0px)` at the phone breakpoint (up to 767px). A transform makes a fixed child position against the wrapper, not the screen, so the arrows sat inset by the page padding and off the screen's vertical centre. I removed that one property from the existing class in the Designer (no new class). Published to staging only.
**Try:** On a phone-width window of a project page, the left and right buttons touch the screen edges, halfway down.
**Why:** Same placement as desktop.
**Steps:**
1. Open [Futura on staging](https://madewithpixels-dev.webflow.io/portfolio/futura) on your phone or a narrow window.
2. Look at the two coral arrow buttons.
**Done when:** The left one touches the left edge and the right one the right edge, both halfway down the screen.
**Time:** about 1 minute
**Task:** 43612376 in your boss list
**From:** your task list, added 5 November 2026.
**Done when:** on a phone, the left and right buttons on a project page sit vertically centred against the left and right edges of the screen, just as they do on desktop, on published staging. (inferred — confirm)
**Note:** "Left and right nav buttons" is read as the previous and next project arrows (R-038; R-103 made them stable). Desktop is the reference and stays unchanged (inferred — confirm). Related: R-112 (their rounded corners) and R-082; same pages and elements, so do them together. Check at phone width with Claude in Chrome. D-006 and D-007 apply: no new class without approval, options first.

### R-114 · Separators don't always span the full viewport width @tablet and below. They should *(accepted by Michael in boss, 9 Nov 2026)*
**State:** built (by Michael, 9 November 2026) · **Evidence:** verified (live) for the diagnosis; fix not yet applied · **Acceptance:** accepted (9 November 2026)
**Accepted by Michael in boss, 9 November 2026** — checked: Looked at brief #355's result.
**Michael's pick (boss, brief #355, 5 November 2026):** "Add one new class that pulls a separator out to the screen edges, used on both".
**Built:** class `mwp-bleed` in Webflow (tablet breakpoint and below: width 100vw, max-width 100vw, margin-left calc(50% - 50vw)). Not applied yet: applying it to an element that already has a class needs a combo class, which the MCP cannot do (as in R-112).
**Needs Michael:** add `mwp-bleed` to the Home top separator and to the project-page separator in the Designer, publish to staging, then check at tablet and phone width.
**Task:** 43612377 in your boss list
**From:** your task list, added 5 November 2026.
**Done when:** every separator (the coloured bars between sections) runs edge to edge across the screen at tablet and phone widths, on every page that has one, on published staging. (inferred — confirm)
**Note:** "Don't always" means some separators or some widths fall short, so the first step is to find which (inferred — confirm). "Tablet and below" is read as 991px and under, as set in the Designer (inferred — confirm). Related: R-098 (gap under the separator, accepted). D-006 and D-007 apply.

### R-118 · Enable swipe on the project pages for left and right nav
**State:** folded into R-134, 10 November 2026 (the work is there; this item is kept for its history) · **Evidence:** see R-134 · **Acceptance:** n/a (see R-134)
**Folded into:** R-134, the same task (43612384). R-134 holds the plan, the build (MWPSwipeNav 1.0.0, published to staging 10 November 2026) and Michael's notes. Nothing below is dropped; it is the original write-up.
**Task:** 43612384 in your boss list
**From:** your task list, added 5 November 2026.
**Done when:** on a phone, swiping left or right on a project page goes to the next or previous project, the same as the arrow buttons, without breaking vertical scrolling, on published staging. (inferred — confirm)
**Note:** Read as touch swipe on phones and tablets (inferred — confirm). Which direction means next (swipe left, as in most galleries) is my guess (inferred — confirm). The arrows stay. This needs custom code, since Webflow has no swipe trigger (D-004, D-005); it would go on the project page and reuse the arrows' own links. Related: R-038 and R-103 (the arrows), R-112, R-113. Check on a real phone if Claude in Chrome can't simulate touch.

### R-121 · Swap `dvh` for `svh` on pinned, sticky and full-height elements (phones and tablets)
**State:** done · **Evidence:** staging test on iPhone 15 (6 November 2026) · **Acceptance:** accepted by Michael, 6 November 2026 ("R-121 accepted and backed up")
**Task:** none in your boss list yet
**From:** your messages of 5 November 2026: "the structural stability of the mobile versions is poor and it's blocking finishing the anims and responsive layouts"; "yes - we'll do that first". This is the mobile-stability part of R-102 pulled forward.
**Done when:** at tablet and phone widths no pinned, sticky or full-height element on the Home page (and any other page the sweep finds) is sized in `dvh`; they use `svh`, so the browser's address bar showing and hiding no longer resizes them in the middle of a scroll. Fast scrolling on the iPad Air 2 and the iPhone 15 no longer breaks animations or layout, or the cause that is left is named. Desktop looks and behaves as it does now. Checked on published staging. (inferred — confirm)
**Plan:** (1) A read-only sweep through the MCP of every class at every breakpoint, the Home and Site head and footer code, and the interactions, listing each `dvh` with where it is. Known already: the Folio Wall sticky is `100dvh` at the medium breakpoint, Contact is `min-height: 100dvh`, and the Ticker mask wrapper and its pass length use `dvh` (R-035). (2) The list comes to you; nothing changes until you approve it (D-006: existing classes only, longhand, read back; D-007). (3) Change, publish to staging when you ask, then test on the iPad Air 2 (both orientations), the iPhone 15 and the basic Samsung. You check and back up between steps.
**Also in the sweep (read-only):** you asked whether Lenis is off on mobile. The notes don't say. Read the Lenis setup in the site footer and every `lenis` reference. If touch isn't set explicitly, `syncTouch: false` should be, so touch is guaranteed native. Lenis stays on touch for now: the nav jump, back-button restore, menu scroll lock and scroll magnet all call it.
**Sweep done (6 November 2026):** 22 `dvh` settings on 13 classes (11 at the phone breakpoint, 3 at tablet and phone landscape, 8 at base) plus 2 rules in the Home head code. The phone Intro and Pricing sections are the GSAP-pinned ones and are still `dvh`. List, current values and what is left alone: `docs/r121-dvh-sweep.md`. Awaiting Michael's approval before any change. Lenis: no `syncTouch` set, so touch is native.
**Step 1 applied (6 November 2026, unpublished):** at the phone breakpoint only, `dvh` to `svh` on Intro (height, min-height), intro_sticky (height), Pricing (height, margin-bottom), Pricing Wrapper (height, min-height), Pricing CTA (height, min-height), Section Clipping Mask (height) and ticker__sticky (height): 11 settings on 7 existing classes, longhand, no new classes. Read back from the live styles: all are `svh`. Not published; nothing tested on a device yet. Old values are in `docs/r121-dvh-sweep.md`. Steps 2 (tablet/small), 3 (base values) and 4 (Home head code) wait for Michael.
**Step 2 applied (6 November 2026, unpublished):** tablet and small breakpoints: folio-wall_sticky (medium) height, Pricing Wrapper (medium) min-height, testi-wall_sticky (small) height, all `100dvh` to `100svh`; echoed back. Old values in `docs/r121-dvh-sweep.md`. Steps 3 (base values) and 4 (Home head code) wait for Michael.
**Step 3 applied (6 November 2026, unpublished):** base values `dvh` to `svh`: ticker__sticky height, Contact min-height, Contact Grid (top, margin-top, margin-bottom), Ticker__Item font-size (`calc(100svh / 7)`), type__mask (margin-top, font-size). Base and desktop breakpoint both echoed `svh`. Michael noted the ticker is not shown on mobile. Steps 1-2 were published, checked and backed up by Michael first. Step 4 (two Home head code rules) waits for him.
**Step 4 applied (6 November 2026, unpublished):** Home page head code: `[data-mwp-sequence-ready] > .about-section.top { height }` and the reduced-motion `[data-mwp-sequence-ready] .ticker { height }` changed from `100dvh` to `100svh`; nothing else in the box touched. Read back: no `dvh` left in the box. **R-121 is now done in the Designer for every setting in `docs/r121-dvh-sweep.md` except section E (menu, left alone) and F (`window.innerHeight` in script, R-102).** Awaiting Michael's staging test on the iPad Air 2, iPhone 15 and Samsung before acceptance.
**Follow-up after the staging test (6 November 2026, unpublished):** Michael found `svh` stable but too short once the phone's toolbar collapses: slate showing under the Intro, each Pricing card, the Testimonial Wall bubbles and a gap above the Folio Wall separator, and the Pricing title under the burger. Changed the phone/tablet pinned and full-height boxes from `svh` to `lvh` (the height with the toolbar collapsed; also fixed, so still stable): Intro (height, min-height), intro_sticky, Pricing (height only; its margin-bottom stays `50svh`, it is scroll distance), Pricing Wrapper (tiny height, min-height), Pricing CTA (height, min-height), Section Clipping Mask, folio-wall_sticky (medium), testi-wall_sticky (small), and the Home head About-top height rule. Desktop-only values, Contact, the tablet Pricing Wrapper min-height and the ticker stay `svh`. Trade-off: with the toolbar showing, the bottom edge of a pinned box sits under it. If `lvh` leaves edge cases, the fallback is a script that sets a measured height variable (R-102).
**Hero (6 November 2026, unpublished):** the hero is sticky at phone width and its Faulty Terminal background only filled the `hero-height` (`svh`) box, leaving a plain slate strip once the toolbar collapsed. `hero-height` stays `svh` (so the button and strapline keep their place); added `min-height: 100lvh` to `.hero` at the phone breakpoint (new setting, nothing was there before; undo = remove it). If the terminal still stops short, size the FT Wrapper at `100lvh` too. Check the heart intro still plays.
**Hero confirmed (6 November 2026):** Michael also set the FT Wrapper to `100lvh` by hand; with `.hero` `min-height: 100lvh` the terminal now fills the screen on his phone. R-121 hero done. Not yet done, awaiting his go-ahead: the other full-height boxes listed in the 6 November follow-up (About section, Contact, tablet Pricing Wrapper, then project pages, Estimate intro, lightbox, utility page).
**lvh sweep completed (6 November 2026, unpublished):** at Michael's request ("stick with the LVH stuff until it's complete"). Home: About-Section (height, base), About Top (phone height), About Bottom (height; phone height 200lvh, was 200svh), Contact (min-height), Pricing Wrapper (tablet min-height) all to `lvh`. Other pages: Lightbox, FT Wrapper.fixed, Utility Page Wrap (height, max-height), Estimate Intro (min-height) to `lvh`. Desktop is unchanged: `lvh` equals `svh` where there is no collapsing toolbar. Left on `svh` on purpose: scroll-distance lengths and small offsets (margins, gaps, `.folio-wall`, `.testi-wall`, `.ticker`, `.intro` min-height, `.pricing` base), Contact Grid offsets, Project Wrapper and Project Image Wrapper (auto height at tablet and phone), the ticker (hidden on phones), and `window.innerHeight` in scripts (R-102). Menu panel stays `dvh`. Awaiting Michael's staging check before R-121 is accepted.
**Note:** `svh` fixes the resizing, not the touch-device problems that need script (a resize guard, a settle pass, the iPad counted as desktop at 1024px): those are in R-102. Related: R-042 and R-040/R-093.

### R-122 · Lazy-load the Folio Wall images
**State:** folded into the perf watcher (R-102/R-123), 6 November 2026 · **Evidence:** staging check (tiles already `loading="lazy"`) · **Acceptance:** n/a
**Task:** none in your boss list yet
**From:** your messages of 5 November 2026 (item 3 of the quick wins, "ok"; second in your order after R-121).
**Done when:** the Folio Wall's `img.folio-wall_img` tiles are set to load lazily, so the page doesn't download and decode every one up front. On desktop the wall still builds with no blank tiles when its build animation starts. On the iPad Air 2 (2GB RAM) the Home page loads and the wall scrolls without the tab being killed (to confirm on the device). Checked on published staging. (inferred — confirm)
**Plan:** (1) Count the wall's tiles first: the notes give 119 at one point and 9 rows of 17 at another. (2) Set the images' loading to Lazy in the Designer or through the MCP, paced a row at a time (bulk image calls hit Webflow's 429 rate limits in September; the row element IDs are in the folio-wall notes). (3) Check the tiles hidden at small sizes: a hidden image only skips loading if it is lazy. (4) Test the build animation for blank tiles. If any show, leave the first rows eager and lazy the rest (options first, D-007).
**Decision (Michael, 6 November 2026):** "We'll deal with this as part of the perf-watcher. There's image work to do as part of that job". No separate change for R-122; the Folio Wall image work (how many tiles load up front on the iPad, small image set) is done with R-102 and R-123.
**Check done (6 November 2026, nothing changed):** 153 tiles (9 rows of 17, as the notes say). On published staging (desktop Chrome, 2044px wide, page at the top) every tile already has `loading="lazy"` and a `srcset` (500px at most), and only 53 of the 153 had finished loading: rows 0-2 full, row 3 16, row 4 11, row 5 6, row 6 2, rows 7-8 none. So Webflow's default is already lazy; there is nothing to switch on. The Designer tools expose no loading setting. Michael chose to look at this himself ("maybe better for me to do this manually"). Still to check on the iPad Air 2: how many load up front there, since the browser's lazy distance is in screen heights and the wall sits near the hero; if it is too many, options are in R-123 (small set) or a small script that holds the `src` until the wall is near.
**Note:** the decoded 500x500 images are the likely cause of the iPad memory problem. Lazy loading also helps R-123: the swap to a small set can happen before any image is requested. Related: R-102, R-056.

### R-125 · Ensure folio and test wall elements do not have drop shadows @tablet and below
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612388 in your boss list
**From:** your task list, added 9 November 2026.
**Done when:** at tablet and phone widths, no element of the folio wall or the testi-wall ("test wall" read as testi-wall) has a drop shadow, box shadow or glow-style filter, on published staging; desktop is unchanged. (inferred — confirm)
**Note:** R-093 (accepted 2 November 2026) and R-040 were meant to do this. Either something was missed (a child element, a wrapper, a filter set by script) or a later change brought a shadow back, so the first step is to find which element still shows one at those widths (inferred — confirm). "Tablet and below" is read as 991px and under (inferred — confirm). Related: R-102 (lite site strips shadows on weak devices). D-006 and D-007 apply.

### R-126 · Post R-121 work - where DVH has been replaced with SVH we now have once full-height sections that appear short @mobile Explore a fix
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612389 in your boss list
**From:** your task list, added 9 November 2026. "once" is read as "some" or "once-full-height" (inferred — confirm).
**Done when:** at phone width, every section that was full height before R-121 fills the screen again, with no slate or gap showing below it, and the pinned animations still don't jump when the toolbar shows or hides, on published staging. Options for the fix are written up for you before any change. (inferred — confirm)
**Note:** R-121 changed `dvh` to `svh`, then many to `lvh` (6 November 2026); the ones still on `svh` (listed in R-121 and `docs/r121-dvh-sweep.md`) are the likely short ones. Options I would describe: switch the remaining ones to `lvh`; or a small script that sets a measured height variable (the fallback noted in R-121). Overlaps R-127 and R-102; do them together. D-006 and D-007 apply: options first.

### R-127 · Tidy up and layout issues post making all 100svh sections 100lvh @mobile
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612391 in your boss list
**From:** your task list, added 9 November 2026.
**Done when:** at phone width, the layout problems caused by the `svh` to `lvh` change (content hidden under the toolbar at the bottom of a pinned box, offsets or spacing now wrong) are found, listed for you, and fixed, on published staging on an iPhone. (inferred — confirm)
**Note:** R-121 noted the trade-off: with the toolbar showing, the bottom of an `lvh` box sits under it. Which elements are affected is not yet known; I would start by listing them (inferred — confirm). Related: R-126, R-128, R-130. D-006 and D-007 apply.

### R-128 · Tidy up that bubbles to quote mark anim @tablet > mobile.
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612390 in your boss list
**From:** your task list, added 9 November 2026.
**Done when:** at tablet and phone widths, the Contact section's bubbles-to-quote-mark animation plays cleanly forwards and back, with nothing out of place, on published staging. (inferred — confirm)
**Note:** Read as the Contact section's bubbles-to-heart/quote-mark morph (R-079, accepted; R-039). What needs tidying is not stated, so the first step is to watch it at those widths and list what looks off (inferred — confirm). The morph is switched off in the lite site (R-102), so test on a device that isn't lite. Related: R-127.

### R-129 · Ipad mini's in portrait mode report as the same breakpoint as webflow's mobile landscape breakpoint *(accepted by Michael in boss, 10 Nov 2026)*
**State:** built · **Evidence:** verified (live), by frame width on staging in Chrome on the Mac Studio, 10 November 2026; not on a real iPad mini · **Acceptance:** accepted (10 November 2026)
**Task:** 43612393 in your boss list
**From:** your task list, added 9 November 2026. Your note: "Which results in the hero section being set to height: 200lvh. We need a fix for that."
**Done when:** an iPad mini held in portrait gets a one-screen hero, not the doubled phone-landscape hero, on published staging.
**Built (10 November 2026, brief #361):** the Home page's hero height comes from the variable `--_structure---hero-height`, which Webflow sets to 200svh from 767px down (phone landscape; it was `svh` on staging, not `lvh`). An iPad mini upright is 744 to 768px wide, so it got that. New inline script "HeroTabletPortrait" 1.0.0 (Home page header) adds one rule: from 480 to 767px wide AND portrait, the variable is 100svh, the value the tablet band already uses. Phones in landscape keep 200svh; phones in portrait (479px and under) are untouched. Repo copy: `src/site/hero-tablet-portrait.js`.
**Not covered:** the rest of the page still uses the phone-landscape layout at 744px (other sections' sizes); that is R-126, R-127 and R-130. The Designer's breakpoints are not changed.

### R-130 · Fix the separator positions @mobile
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612392 in your boss list
**From:** your task list, added 9 November 2026.
**Done when:** at phone width, each separator sits exactly where it should between its sections, with no gap or overlap and nothing cut off, on published staging. (inferred — confirm)
**Note:** Which separators are wrong, and how, is not stated, so the first step is to check each one at phone width and list them (inferred — confirm). This may be a knock-on from the `lvh` change (R-127). R-114 (full width, accepted) and R-098 (gap under the separator, accepted) are related. R-034 (using the separator during scroll animations) touches the same elements. D-006 and D-007 apply.

### R-131 · @mobile refreshing the page when an anchor link is in the URL bar results in layout instability
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612395 in your boss list
**From:** your task list, added 9 November 2026.
**Done when:** on a phone, reloading a page with an anchor in the address (for example `/#pricing`) lands on the right section with the layout stable (no jumping, wrong heights or broken pinned sections), on published staging on an iPhone. (inferred — confirm)
**Note:** Read as a reload on the Home page (inferred — confirm). Likely causes are the browser restoring the scroll position before the pinned sections are measured, and the toolbar height changing (R-121). The site already has a back-button restore and a nav jump through Lenis, so the fix probably belongs in those (custom code, D-005). Related: R-116 and the burger anchor item R-124, R-097, R-102 (resize guard and settle pass). Needs a real phone to test.

### R-136 · Anchor link destination to 'work' @mobile landscape is incorrect
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612400 in your boss list
**From:** your task list, added 10 November 2026 (brief #369).
**Done when:** on a phone held sideways, the Work link (burger menu and any other anchor) lands on the top of the portfolio section, on published staging. (inferred — confirm)
**Note:** Read as the burger menu's Work link on the Home page, in the phone-landscape band (767px and under, wide) (inferred — confirm). First step: measure where it lands against where it should (inferred — confirm). Likely related to the doubled landscape heights and pinned sections (R-121, R-126, R-127, R-129) and to R-131. Do with R-137 and R-138.
**Measured 10 November 2026 (brief #372, staging, Chrome on the Mac Studio, 667px wide but 722px tall — the window would not go short, so this is not a true phone-landscape frame):** after each burger link, section top against the viewport top: About 0, Pricing 0, Work (`#portfolio`) −100 (lands 100px past the top), Testimonials −867 (its position moves while the page settles), Contact 0. The links are plain `#id` anchors (`#portfolio`); no repo script handles them, so Webflow and Lenis do the jump. Hypothesis (inferred — confirm): the pinned and doubled-height sections above Work change height after the jump starts, so the target moves. Needs a real short frame (or a phone) before any fix; the brief #377 measurement covers this.
**Measured again 10 November 2026 (brief #372, second session), true short frame:** staging Home loaded in a same-origin frame 667px wide by 375px tall inside the Chrome tab (media queries and Lenis see 667x375), each burger link clicked after a fresh load, read after 3 seconds. Section top against the viewport top: About 0, Pricing 0, Work (`#portfolio`) −100, Testimonials −450, Contact 0. The Work heading sits at 292–369px of the 375px frame, so after the jump the word "Work" is squeezed against the bottom edge: the page has gone 100px past the section top, and the heading sits low inside the section. Reading of Michael's note: the landing should leave "Work" comfortably in view, so the section top should land at 0 (100px less scrolling) and the heading then sits lower still, which suggests the section's own top padding or the pinned layout needs a look too (inferred — confirm; a phone screenshot would settle it). The link is a plain `#portfolio` anchor; no fix written yet.

**Measured 11 November 2026 (brief #377, staging, same-origin frames; full table in `docs/menu-link-landings-2026-11-11.md`):** Home, offset past the section top at 667x375: About 0, Pricing 0, **Work +100**, **Testimonials +450**, Contact 0 (the same at 768 and 820: Work +115 / +123). Hypothesis (inferred — confirm): Work lands about 0.15 of the frame past its top because the jump script's landing share is applied below 992px, which the desktop rule says it should not; the Work heading then sits low inside the section. Fix options A to C in the docs note (recommended A: per-size numbers in the existing script, D-005; C for the heading spacing only). The window would not resize, so frames, not a phone.

### R-137 · @mobile landscape separator isn't stuck to the top of the portfolio section *(accepted by Michael in boss, 11 Nov 2026)*
**State:** built (not yet published) · **Evidence:** verified (local, injected into live staging frames; not yet checked on a published copy) · **Acceptance:** accepted (11 November 2026)
**Try:** After you publish staging, open madewithpixels-dev.webflow.io on your phone held sideways and scroll to the Work section: the coloured bar should sit right at the top of it, not floating about 100 pixels below. Tapping Work in the menu should also leave the word "Work" comfortably in view (R-137, with R-136).
**Task:** 43612401 in your boss list
**From:** your task list, added 10 November 2026 (brief #369).
**Done when:** on a phone held sideways, the separator stays attached to the top edge of the portfolio section as you scroll into and through it, on published staging. (inferred — confirm)
**Note:** Read as the separator above the sideways-scrolling portfolio section on the Home page (inferred — confirm). Phone landscape only; portrait and desktop are fine as far as I know (inferred — confirm). Related: R-130 (separator positions @mobile), R-034, R-114, R-098 (accepted). D-006 and D-007 apply: no new class without approval.
**Cause found (10 November 2026, brief #373, verified live in a 667×375 frame on staging):** the separator rests 100px below the top of the Work section (112px at 744×400, 149px at 991×600; 0 in portrait and on desktop) because the wrapper's padding-top (150px) is bigger than the separator's negative margin-top (−50px) at the medium breakpoint; in portrait the two are equal. It sticks to the top of the screen only once the section has scrolled 100px. Details in the STATUS entry of that date.
**Exact cause, read from the Designer and the published CSS (11 November 2026, brief #378; read only, nothing changed):** variable `Section Padding` (`--_structure---section-padding`) is 7.5vw. At 991px and under, the published rule `.portfolio { padding-top: calc(var(--_structure---section-padding)*3) }` gives 3 x 7.5vw, while `.seperator.has-bg-slate.is-position-sticky-top.is-in-portfolio` has `margin-top: calc(-1*var(--_structure---section-padding))`, so the bar rests 2 x 7.5vw = 15vw below the section top. At 480px and under, `.portfolio` is reset to 1 x (its Tiny rule), so the two cancel and the bar is flush. Measured in a same-origin frame: gap 100px at 667x375, 115px at 768x1024, 0 at 390x844. So **it is not only phone landscape: it is every width from 480 to 991px, including iPad portrait.** (The Designer's style read-out shows these as the plain variable, hiding the x3 and x-1 multipliers, so they are easy to miss in the Style panel.)
**Proposed fix (needs Michael's approval; no new class; longhand; D-006, D-007):** two options.
- **A (recommended, bar only; layout below unchanged):** class `.seperator.has-bg-slate.is-position-sticky-top.is-in-portfolio`, Tablet breakpoint (991px and under): `margin-top` = `calc(-3 * Section Padding)` (a calc, so type it in the Style panel, not through the MCP, or ask me to do it through custom code), and `margin-bottom` unchanged. Then, same class at the Mobile portrait breakpoint (479px and under): `margin-top` = `calc(-1 * Section Padding)` to keep today's phone-portrait result. The bar then sits at the top of Work at 480 to 991px.
- **B (moves the whole Work section up):** class `.portfolio`, Tablet breakpoint: `padding-top` = `Section Padding` (x1, matching what Mobile portrait already uses) in place of x3. The bar becomes flush with no change to the bar's class, but the Work heading and everything under it move up by 15vw (100px at 667, 115px at 768); it would also change where the Work link lands (R-136, R-138).
Check before applying: the same `.portfolio` rule also sets `margin-top: 0px` at Tablet; it stays as is. The class is not from the library (`isFromLibrary` false).
**Built 11 November 2026 (brief #466, Michael chose option A, "Move only the bar up"):** a small inline script "PortfolioBarUp" 1.0.0, applied in the Home page header (`src/home/portfolio-bar-up.js`). The MCP cannot write a calc() on a combo class (D-006), so the rule is CSS in the script. At 991px and under: bar `margin-top` calc(-3 x Section Padding); and, because the bar is in the flow and moving it alone pulled the whole Work section up by the same amount (heading 392 to 292px at 667 wide, found when testing), `margin-bottom` calc(3 x Section Padding - bar height - 2px) gives it back. At 479px and under the old values are kept. Tested by injecting the same CSS into frames of staging Home: gap bar to section top 100 to 0 at 667x375, 115 to 0 at 768x1024, 149 to 0 at 991x600; section height and Work heading position unchanged; 390x844 unchanged. Needs publishing to staging, then a look. Note for R-138: the landing script reads the bar's margin, so Work should now land on the section top.

### R-138 · @tablet (portrait and landscape) anchor link destinations are wrong
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Night note 11 November 2026 (brief #467, Michael chose per-size numbers):** the unexplained extra is the hosted script "mobilenavlanding" 1.0.0 (below 992px; landings are by design: Work with the separator at the top, Testimonials at the Praise heading). Estimate-to-Home at 1024 wide fixed in the repo as 1.1.0 (`src/home/mobile-nav-landing.js`), not yet in Webflow. See STATUS 11 November 2026.
**Task:** 43612402 in your boss list
**From:** your task list, added 10 November 2026 (brief #369).
**Done when:** on a tablet, in portrait and in landscape, each primary navigation anchor link lands on the top of its section on the Home page, on published staging. (inferred — confirm)
**Note:** Read as the burger menu's links (About, Pricing, Work, Testimonials, Contact) on the Home page at tablet widths, 768 to 991px, both orientations (inferred — confirm). First step: list each link, where it should land and where it does, in each orientation (inferred — confirm). Related: R-136 (same fault at phone landscape), R-131, R-124. Check `isFromLibrary` before changing any `mwp-css-nav_*` class (D-006). Ignore the old `mwp-site-menu-*` menu (D-015).
**Measured 10 November 2026 (brief #374, staging Home, Chrome on the Mac Studio, same-origin frames, fresh load per link, read after 3 to 5 seconds):** how far past the section's top the page lands, in px, and what is on screen.
| Link | 768x1024 portrait | 820x1180 portrait | 1024x768 landscape | 1440x900 (reference) |
|---|---|---|---|---|
| About | 0; intro text half faded in, blank above | 0; same | 1.3 screens in (999px); intro and ticker mid-wipe | 1.3 screens in; intro text clear |
| Pricing | 0 (section top) | 0 | 0.45 through the lock (1210px); cards' top edge 92px down, under the menu buttons | cards' top 190px down, clear |
| Work | 115 past | 123 past | 154 past (0.2 screen); "Work" heading 230px down | 0.2 screen; heading 208px down |
| Testimonials | 1229 past (1.2 screens) | 1416 past (1.2 screens); only "Praise for" and edge bubbles | 960 past (1.25 screens) | 1.25 screens; heading 346px down |
| Contact | 0 | 0 | 0 | not measured |
Everything stayed put for 5 seconds, so the page isn't moving after the jump.
**Cause (verified in part):** the jump script's landing rule (Home head, "Primary nav" block) uses per-section offsets stored on the sections (`data-nav-offset` About 1.3, Work 0.2, Testimonials 1.25; `data-nav-progress` 0.45 on Pricing), and its comment says they are desktop only. At 992px and up (so 1024 landscape) it applies the desktop numbers, which were tuned on a 1440x900 screen and put About and Pricing in the wrong state at 1024x768. Below 992 the script returns the section's raw top, so About lands before its text has revealed. Testimonials and Work land further in than that rule says (1.2 screens, and 0.15 of the width) and I could not find where that extra comes from: the script's own calculation, run in the page, gives the raw top, but the jump is asked for 1416px more. Unexplained; needs a closer look before any fix.
**Not checked:** a real iPad; Safari; the real burger tap (menu opened by script, which gave the same numbers); the frames are an approximation. The window would not resize, so screenshots were of scaled frames.
**Fix options (for Michael; none applied):**
1. Per-size landing numbers, in the existing jump script (custom code, D-005): add tablet and landscape values (new custom attributes on each section, or a small table in the script) and apply them below 992 and for short landscape frames. Fixes About, Pricing, Testimonials the same way desktop was tuned. Risk: each number needs a look on a real iPad; the script is shared with desktop, so a slip could move desktop jumps.
2. Make the desktop numbers size-proof (screens-in becomes a share of the section's own length). One rule for every size, less to tune. Risk: bigger change to a script Michael accepted; re-test desktop.
3. Designer side: change the sections' own spacing at tablet (the pricing cards' top edge, the About reveal) so the raw top is a good landing. No script change. Risk: touches layout and animations at tablet (R-126, R-127), and new classes need approval (D-006).
Recommended: 1, after the unexplained extra offset is understood.

**Measured again 11 November 2026 (brief #377), offsets past the section top, Home:**
| Link | 768x1024 | 820x1180 | 1024x768 | 667x375 |
|---|---|---|---|---|
| About | 0 | 0 | +999 | 0 |
| Pricing | 0 | 0 | +1,210 | 0 |
| Work | +115 | +123 | +154 | +100 |
| Testimonials | +1,229 | +1,416 | +960 | +450 |
| Contact | 0 | 0 | 0 | 0 |
Hypothesis (inferred — confirm): at 1024 the desktop numbers apply and are wrong for a 1024x768 screen; below 992 the raw top is used but Work and Testimonials still land late (unexplained). Options A to C, with risks, in `docs/menu-link-landings-2026-11-11.md`.

### R-139 · @tablet (portrait and landscape) anchor link destinations from /estimate page are wrong
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612403 in your boss list
**From:** your task list, added 10 November 2026 (brief #369).
**Done when:** on a tablet, in portrait and landscape, each burger menu link on the Estimate page lands on the right section of the Home page, on published staging. (inferred — confirm)
**Note:** The tablet case of R-124 (phone and desktop on the Estimate page) and a follow-on to R-106 (accepted, script "EstimateMenuAnchors") (inferred — confirm). Best done after R-138, since the Home page landing itself is wrong at tablet. Same cautions as R-138.

**Measured 11 November 2026 (brief #377), from the Estimate page, offset past the section top on Home:**
| Link | 768x1024 | 820x1180 | 1024x768 | 667x375 |
|---|---|---|---|---|
| About | 0 | 0 | 0 | 0 |
| Pricing | 0 | 0 | 0 | 0 |
| Work | +115 (settles; first read −3,991) | +123 | **−2,688** | +100 |
| Testimonials | +1,229 | +1,416 | **−2,688** | +450 |
| Contact | 0 | 0 | **−2,688** | 0 |
It matches the Home result except at 1024 landscape, where Work, Testimonials and Contact land 2,688px short and stay there for 14 seconds. Hypothesis (inferred — confirm): the Estimate path jumps before the pinned spacers are built (D-017) and never re-aims; at 768 it re-settles and corrects. About and Pricing there land on the raw top (they lack the desktop numbers Home uses). Fix: make the Estimate path wait for or re-aim after the settle pass (option A in the docs note). Full table and options: `docs/menu-link-landings-2026-11-11.md`.

### R-140 · @tablet Burger menu shows an arrow and the burger bar geometry - remove the arrow *(accepted by Michael in boss, 11 Nov 2026)*
**State:** built · **Evidence:** none · **Acceptance:** accepted (11 November 2026)
**Try:** After you publish staging, open madewithpixels-dev.webflow.io on your iPad in Safari: the menu button should show only the three bars, centred in the orange circle, with no small triangle beside them. If a triangle still shows, send me a photo of the whole top bar.
**Task:** 43612404 in your boss list
**From:** your task list, added 10 November 2026 (brief #369).
**Done when:** on a tablet, the burger button shows only the burger bars, with no arrow, and the bars keep their normal shape, on published staging. (inferred — confirm)
**Note:** Read as: at tablet widths the menu button shows an arrow alongside or instead of the burger bars, and Michael wants the arrow gone. "Burger bar geometry" may mean the bars' shape is also off (inferred — confirm). Which arrow, and at what widths, is for the first look to find. The button comes from the SmashBurger navbar library: check `isFromLibrary` before editing any `mwp-css-nav_*` class (D-006); the fix may belong to SmashBurger (R-030, R-097). D-007 applies: options first.

**Cause (inferred, not seen in Safari):** the photo (iPad, Safari) shows a small solid triangle to the left of the three bars, inside the orange circle, pushing the bars right. That is the browser's own disclosure triangle: the burger is a `<details>` with a `<summary>` (`.mwp-css-nav_summary`, SmashBurger library), and its only rule is `list-style: none`, which Chrome honours but Safari does not always (it wants `::-webkit-details-marker`). The triangle takes inline space, which is the "bar geometry shifted to the right". Chrome on the Mac Studio shows no marker, so I could not reproduce it here. The old `.menu-button.back` arrow button is `display: none` on Home and is not the one in the photo.
**Built 10 November 2026 (brief #375), not yet published:** one small `<style>` block appended to the end of the Site head custom code (D-005): `.mwp-css-nav_summary::-webkit-details-marker { display: none; }` and `.mwp-css-nav_summary::marker { content: ''; }`. No class was edited (pseudo-element rules can't be set through the MCP, D-006), so the SmashBurger library copy is untouched (R-097, R-030). Echo read back intact. Repo copy: `snapshots/custom-code.json` (site head). State: built · Evidence: none (needs Safari on an iPad, after Michael publishes staging).
**Library check (11 November 2026, brief #378, read only):** the site has two classes with this name: `mwp-css-nav_summary` with `isFromLibrary` false (the one the page uses: `list-style: none`, no border) and a SmashBurger library copy (`isFromLibrary` true, selector `.mwp-component-library--mwp-css-nav_summary`, with a 1px solid border). The pseudo-element rules can't be written through the MCP (D-006), so the style block in the site head is the smallest fix; if Michael prefers it in the Designer, set `::-webkit-details-marker` display none on the local class only. R-097 and R-030 cover the library copy, which stays untouched. Cause still inferred (needs Safari on the iPad).

### R-141 · @tablet separator underneath the folio-wall is not full-width despite the .mwp-bleed class being applied (portrait and landscape) *(accepted by Michael in boss, 11 Nov 2026)*
**State:** built (by Michael, 11 November 2026) · **Evidence:** none · **Acceptance:** accepted (11 November 2026)
**Accepted by Michael in boss, 11 November 2026** — checked: Looked at brief #376's result.
**Task:** 43612405 in your boss list
**From:** your task list, added 10 November 2026 (brief #369).
**Done when:** on a tablet, in portrait and landscape, the separator under the folio wall runs edge to edge, on published staging. (inferred — confirm)
**Note:** R-114 built the `mwp-bleed` class (100vw, tablet and below) and Michael applied it; this separator still falls short. Likely a parent with overflow or padding, a transform on the wrapper, or the class not applying at the 768 to 991px band (inferred — confirm). First step: read the separator's computed width and its parents at 768, 820 and 991px. No new class without approval (D-006). Related: R-114, R-130, R-125.

**Cause found, 10 November 2026 (brief #376; verified live: published staging Home, Chrome on the Mac Studio, same-origin frames; the browser window itself would not resize):** the only element with `mwp-bleed` is `.seperator.has-bg-slate.is-on-intro-top`, the bar at the top of the intro, straight under the folio wall. It is `position: absolute; left: 0; right: 0` inside `.intro_sticky`, which sits inside `.intro`'s side padding (`--_structure---section-padding`). The published rule is `.mwp-bleed { width: 100vw; max-width: 100vw; margin-left: calc(50% - 50vw) }` and it exists **only inside the 991px-and-under media query**. Measured (bar left edge / width):
| Frame | Bar | intro_sticky | Full width? |
|---|---|---|---|
| 667 | 0 / 667 | 58 / 567 | yes |
| 768 | 0 / 768 | 58 / 653 | yes |
| 820 | 0 / 820 | 62 / 697 | yes |
| 991 | 0 / 991 (rule applies) | | yes |
| **992** | **74 / 843** | 74 / 843 | **no** |
| **1024 (iPad landscape)** | **77 / 870** | 77 / 870 | **no** |
| 1180 | 89 / 1003 | | no |
| 1440 | 72 / 1296 | | no (as desktop) |
So at tablet **landscape** (1024 and up is Webflow's Desktop band) the class does nothing and the bar stops at the padding, 77px short on each side. I could **not** reproduce the portrait fault: at 768 and 820 the bar is edge to edge, in the frame, at every scroll position I stepped through. A real iPad in Safari may differ (inferred: `100vw` and the sticky parent); a photo of the portrait case would settle it.
**Exact rule (read from the Designer, 11 November 2026, brief #378):** class `mwp-bleed` (`isFromLibrary` false) has nothing at the base (Desktop) breakpoint; at Tablet it has `width: 100vw`, `max-width: 100vw`, `margin-left: calc(50% - 50vw)`. Portrait is still not reproduced (frames at 768 and 820 are edge to edge), so the only proven fault is 992px and up.
**Proposed fix (needs Michael's approval, D-006/D-007; no new class):** make `.mwp-bleed` apply at every width: move its three longhand properties (`width: 100vw`, `max-width: 100vw`, `margin-left: calc(50% - 50vw)`) from the Tablet breakpoint to the base (Desktop) breakpoint, and remove them from Tablet. Side effect: on desktop (1440) the bar would also go edge to edge, where today it is inset like the other content, and `100vw` includes the scrollbar width on Windows desktops (a few px of sideways scroll). Alternative if desktop should stay inset: keep the class as is and add the same three properties at a new "iPad landscape" band only through custom code (a media query for 992 to 1180px, D-005), which avoids touching the desktop look.

### R-148 · Pricing cards at tablet landscape are clipped by the navigation - let's run them vertically as the easy fix
**State:** built (12 November 2026, not published) · **Evidence:** none · **Acceptance:** pending
**Task:** 43612419 in your boss list
**From:** your task list, added 12 November 2026 (brief #557).
**Found (12 November 2026, brief #576, staging at 1024 wide, Chrome on the Mac Studio):** the three cards are 730px tall inside `.section-clipping-mask`, which is `overflow: hidden` and only as tall as the viewport (625px at 1024 x 768). So the cards are cut by the window, not only by the nav. The section is pinned (`.pricing`, 1250px, inside a pin-spacer) and the cards are revealed by a clip-path interaction. Stacking them (about 2,200px tall) means the mask, the pin length and the reveal all change. Grid styles can't be written through the MCP (D-006), so this is a Designer job. Not changed; options asked of Michael.
**Decision (12 November 2026, from Michael in boss, brief #580):** "Use the phone and portrait tablet layout up to 1180px wide" (his pick of three options).
**Built (12 November 2026, brief #580):** registered script PricingTabletLandscape 1.0.0, applied to the Home page footer (repo copy `src/home/pricing-tablet-landscape.js`). From 992 to 1180px it copies the pricing rules out of Webflow's tablet (991px and under) styles and switches off the pricing pin, so the cards stack as they do on a tablet. Webflow's own breakpoints can't be moved to 1180, which is why it is a script. Not published. Evidence: verified (local) only. Acceptance pending.
**Done when:** at tablet landscape (1024px wide and the nearby widths), the three pricing cards are no longer cut off by the navigation: they run one above the other, each whole and readable, on published staging. (inferred — confirm)
**Note:** "Run them vertically" is read as stacking the three cards in a column instead of side by side, and "tablet landscape" as iPad landscape (1024 to about 1180px), which is Webflow's Desktop band (see R-141) (inferred — confirm). Stacking makes the section taller, so scroll length and the pricing pinned sections may need a look (R-042, R-121). D-006 and D-007 apply: no new class without approval, and options first for the visual change. Related: R-098, R-149.

### R-149 · Lite version @tablet has issues with the about section content being stacked atop each other
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612420 in your boss list
**From:** your task list, added 12 November 2026 (brief #557).
**Done when:** in the lite version at tablet (portrait and landscape), the about section's content blocks sit one after another with no overlap, and all of it can be read, on published staging. (inferred — confirm)
**Note:** "Lite" is the lighter build for weaker devices (D-025, D-026); "stacked atop each other" is read as overlapping, not as neatly stacked (inferred — confirm). First step: reproduce with the lite switch at 768, 820 and 1024px and say which blocks overlap. Related: R-125, R-121, R-150.

### R-156 · Project pages need more modern layout, they’re especially poor at mobile
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612428 in your boss list
**From:** your task list, added 12 November 2026 (brief #574).
**Done when:** the project pages have a more modern layout at desktop, tablet and phone, with phone the biggest improvement; Michael has picked the direction from options and it is built, on published staging. (inferred — confirm)
**Note:** Michael gave no detail, so the first step is to look at a project page at 390, 768 and 1440px wide, list what feels dated (inferred — confirm), and offer two or three layout directions before changing anything (D-007). Nothing is rebuilt without his pick. This is the same ground as R-082 (layout changes to project pages), whose task he deleted; this new task replaces it in his list, so R-082 should be closed by this item once he agrees (inferred — confirm). Project pages share a CMS template, so one change covers all of them; no new class without approval (D-006). Keep R-103 (stable nav buttons), R-134 (swipe), R-113 and R-132. Related: R-145.

### R-157 · We'll need some tweaks to the 'Perf-Lite' stylesheet now that the hero H1 has moved on Tablet and below
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612429 in your boss list
**From:** your task list, added 12 November 2026 (brief #574).
**Done when:** in the lite version at tablet, phone landscape and phone portrait, the hero (logo block, H1, strapline, estimate button) sits correctly and nothing overlaps or is clipped; the lite stylesheet no longer fights the H1's new position, on published staging. (inferred — confirm)
**Note:** Read as: the hero H1 was moved in the Designer for tablet and below, and the lite stylesheet (the static-layout CSS that perf.js loads when `data-lite` is set, pinned to its commit with SRI) still has rules written for the old position (inferred — confirm). First step: switch to lite (`?perf=low`) at 768, 820 and 390px and say what is off. Lite code lives in `src/perf/perf.js`; the lite stylesheet is a separate file loaded from jsDelivr, so a change there needs a new commit and a new pinned hash (D-005, R-055). Related: R-102, R-149, D-025.

### R-158 · Remove the mask anims on the pricing cards at tablet
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612430 in your boss list
**From:** your task list, added 12 November 2026 (brief #574).
**Done when:** at tablet (portrait and landscape), the pricing cards no longer reveal through a clip-path mask as you scroll; they simply appear in place, and nothing else on the section breaks, on published staging. (inferred — confirm)
**Note:** Read as the clip-path reveal on the pricing cards (the interaction behind `.section-clipping-mask`) being turned off at the Tablet breakpoint only; desktop keeps it (inferred — confirm). Interactions can be switched off per breakpoint in the Designer. Closely tied to R-159 (vertical layout) and R-148 (cards stacked up to 1180px by script, which also switches off the pricing pin): do the three together. D-017 applies before changing scroll animations.

### R-159 · Fix the vertical layout of the pricing cards at tablet
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612431 in your boss list
**From:** your task list, added 12 November 2026 (brief #574).
**Done when:** at tablet (portrait and landscape), the three pricing cards run one above the other with even spacing, each whole and readable, with no overlap, clipping or odd gaps above or below, on published staging. (inferred — confirm)
**Note:** What is wrong is not said (inferred — confirm: likely spacing, height or overlap now that the cards are stacked by R-148 and the section is pinned). First step: look at 768, 820 and 1024px and list what is off; offer options before any visual change (D-007). Grid styles can't be written through the MCP (D-006), so part of it may be a Designer job for Michael. Related: R-148, R-158, R-098, R-101.

### R-160 · The bubble to quote mark transition into the contact section needs slowing down with more padding-top in the contact section to give the animation more time to play out
**State:** built, published to staging only (option B, Michael's pick 12 November 2026, brief #589) · **Evidence:** verified (live, Chrome 1440 wide and one tablet width; not a real phone or Safari) · **Acceptance:** pending
**Task:** 43612432 in your boss list
**From:** your task list, added 12 November 2026 (brief #574).
**Done when:** scrolling from the testimonials into Contact, the bubbles-to-quote-mark transition plays over a longer scroll distance, so each stage can be seen, because Contact has more padding at the top; it still plays cleanly in reverse, on published staging. (inferred — confirm)
**Note:** Read as the morph (R-079, R-128) at desktop first, and at tablet and phone unless Michael says otherwise (inferred — confirm). The fix is a taller Contact padding-top (a class value change, so D-006 approval first) and possibly a longer timeline in the interaction (D-017). Check the cause before building: whether the animation runs out of scroll or just runs fast. Padding-top changes the page height, so check the anchor landing for Contact (R-131, R-136, R-138). Check the timing in Claude in Chrome (AGENTS.md section 6). **Cause found (12 November 2026, from the script, not yet watched in a browser):** on desktop the move ends when Contact's top reaches the top of the screen, so extra padding-top alone does not give it more scroll; the end point or the interaction must change too. On tablet and phone it is a timed move of 1.2 seconds. Options A/B/C asked in boss (recommended B); Michael picked B. **Built 12 November 2026:** Contact padding-top 50svh; desktop END_AT 0 to -0.5 (move 1.0 to 1.5 screens); timed move FLY_MS 1200 to 2000 and TRIGGER_AT 0.5 to 0.1; Contact section data-nav-offset 0.5 so the desktop menu jump lands after the move. Still open: on tablet and phone the menu Contact link lands on the section top, so the new empty padding is what shows first (R-136, R-138). Related: R-128, R-039, R-152.

## Phase 4 · Estimate page
*From your "Adjust Estimator" group. Before launch prep, because "Test forms" and the GA4 form event need the final forms. Copy last, once the screens have settled (you planned the copy pass for after the UI).*

### R-120 · Add the CSS that stops images being dragged to the project pages
**State:** folded into R-133, 10 November 2026 (the work is there; this item is kept for its history) · **Evidence:** see R-133 · **Acceptance:** n/a (see R-133)
**Folded into:** R-133, the same task (43612386). R-133 holds the build (one rule in the Portfolio Nav component, published to staging) and its evidence. Nothing below is dropped; it is the original write-up.
**Task:** 43612386 in your boss list
**From:** your task list, added 5 November 2026.
**Done when:** on a project page, pressing and dragging an image no longer picks up a ghost copy of it, on desktop and phone, on published staging, and nothing else on the page changes. (inferred — confirm)
**Note:** "The CSS" is read as `-webkit-user-drag: none` and `user-select: none` on the project pages' images, probably wanted so dragging doesn't fight the swipe in R-118 (inferred — confirm). It may already exist on other pages (inferred — confirm: I haven't looked); if so I'd copy that. It would go in the project page's custom code, not a new class (D-006). Doesn't stop right-click save.

### R-119 · next button in the estimator often needs two clicks to register @mobile *(accepted by Michael in boss, 10 Nov 2026)*
**State:** built (10 November 2026, brief #358) — Michael tried it on his phone and answered "One tap works everywhere" (boss, brief #367, 10 November 2026) · **Evidence:** verified (live): simulated touch in Chrome at 386px, then a real finger on Michael's phone, his words "One tap works everywhere" · **Acceptance:** accepted (10 November 2026)
**Task:** 43612385 in your boss list
**From:** your task list, added 5 November 2026.
**Done when:** on a phone, one tap on Next in the estimator always moves to the next step, on every step, on published staging. (inferred — confirm)
**Note:** Read as the bottom Next button on phone-width screens (the top one is hidden there, R-107) (inferred — confirm). First step is to find the cause (inferred — confirm). Things to look at: my small scripts on the Estimate page footer (R-107, R-108, R-111, R-110, R-109) changing the buttons as steps change, a first tap only dismissing something, or the tool disabling Next until an answer registers. The estimate tool's code is in its own repo (MWP-Instant-Website-Estimate), so the fix may land there (inferred — confirm). Check on published staging at phone width with Claude in Chrome; touch behaviour may need a real phone, which I'd ask you to try.
**Built (10 November 2026):** inline script "EstimateNextTap" 1.0.0 on the Estimate page footer (copy: `src/estimate/estimate-next-tap.js`, R-029). I could not reproduce the fault without a real finger. The tool's Next button is a link with a `:hover` lift, the classic cause of iPhone Safari spending the first tap on "hover"; the script switches the lift off on touch screens, turns off double-tap zoom on the buttons, and acts on the finger lifting (one tap, one step; a scroll does nothing; a disabled Next does nothing). Simulated taps on staging: one tap advanced one step, a dragged tap did nothing. If a real phone still needs two taps, the next suspects are Next sitting near the bottom edge after the page scrolls up on a step change, and the tool's smooth scroll after an answer tap.

### R-106 · Wire up the primary navigation anchor links on the estimate page *(accepted by Michael in boss, 5 Nov 2026)*
**State:** built (5 November 2026, brief #315) · **Evidence:** verified (live, partly: the links and the jump to the home page; the landing is blank, see Note) · **Acceptance:** accepted (5 November 2026)
**Task:** 43612364 in your boss list
**From:** your task list: "Wire up the primary navigation anchor links on the estimate page". Takes up R-078's recommended Option 2.
**Done when:** on published staging, the burger menu on /estimate has About, Pricing, Work, Testimonials and Contact that each open the matching section of the home page; Home and the Instant Estimate button are unchanged. (inferred — confirm)
**Note:** "Wire up" is read as pointing the five dead `#` links at the home page's sections (inferred — confirm). The links sit inside the shared SB Header component with no link settings on the /estimate instance, so changing them in the Designer would change the home page's own menu too. Built instead as inline script "EstimateMenuAnchors" 1.0.0 on the Estimate page footer only (copy: `estimate-menu-anchors.js`, R-029); no class, no component edited (D-006). **Open problem found:** loading the home page with `#pricing` on the end, with or without my script, shows only the dark background on staging in Chrome at 2044px for 20 seconds, with the scroll bar part-way down. So the links arrive at the right address but the landing looks empty; this is the home page's own scroll animations and is not caused by this change. Needs looking at before launch (R-102 is the nearest item).
**Try:**
1. Open [the Estimate page on staging](https://madewithpixels-dev.webflow.io/estimate) and press the burger button, top left.
2. Press Pricing.
3. You should arrive on the home page at the Pricing address; check what the page shows.
**Done when:** as above.
**Time:** about 2 minutes

### R-107 · remove the top 'Next' button from the estimator layout @mobile *(accepted by Michael in boss, 5 Nov 2026)*
**State:** built · **Evidence:** verified (live, staging, frame at phone width) · **Acceptance:** accepted (5 November 2026)
**Task:** 43612366 in your boss list
**From:** your task list: "remove the top 'Next' button from the estimator layout @mobile", added 5 November 2026.
**Done when:** on a phone-width screen, the estimator no longer shows the 'Next' button at the top of a step; only the Back and Next buttons at the bottom remain, and the steps still move on. (inferred — confirm)
**Note:** "Top Next" is read as the extra Next button near the top of the step layout at phone width (inferred — confirm). The desktop layout is assumed unchanged unless you say otherwise. The estimate tool's code is in its own repo (MWP-Instant-Website-Estimate), so the change probably lands there, not here (inferred — confirm). Check on published staging, with Claude in Chrome at phone width where it says @mobile.

**Built 5 November 2026 (brief #332):** the extra Next button sat beside each question title (it has the tool's marker `next-top`). A small inline script "EstimateNoTopNext" 1.0.0 on the Estimate page footer hides it up to 767px wide (copy: `estimate-no-top-next.js`, R-029). No class or element changed (D-006). Desktop still shows it. The Back and Next buttons at the bottom stay and still move the steps on. Better long-term: build it into the tool and drop the script.

### R-108 · Pus some space between the back and next buttons in the estimator *(accepted by Michael in boss, 5 Nov 2026)*
**State:** built · **Evidence:** verified (live, phone-width and desktop-width frames) · **Acceptance:** accepted (5 November 2026)
**Task:** 43612367 in your boss list
**From:** your task list: "Pus some space between the back and next buttons in the estimator", added 5 November 2026.
**Done when:** the Back and Next buttons at the bottom of an estimator step have a clear gap between them, at desktop and phone widths, and neither is easy to press by mistake. (inferred — confirm)
**Note:** Applies to all steps unless you mean one screen only; no width is given, so both are covered (inferred — confirm). Related: R-111 removes Back from the last step. The estimate tool's code is in its own repo (MWP-Instant-Website-Estimate), so the change probably lands there, not here (inferred — confirm). Check on published staging, with Claude in Chrome at phone width where it says @mobile.

**Built 5 November 2026 (brief #331):** on staging the Back and Next buttons sat edge to edge (no gap). A small inline script "EstimateNavGap" 1.0.0 on the Estimate page footer puts a 24px gap between them, 16px on screens up to 479px wide (copy: `estimate-nav-gap.js`, R-029). No class or element changed (D-006). The buttons stay equal width. The last step is unaffected (Back is hidden there, R-111). Better long-term: build it into the tool and drop the script.
**Try:**
1. Open [the Estimate page on staging](https://madewithpixels-dev.webflow.io/estimate) and press Start.
2. Pick an answer and look at the Back and Next buttons at the bottom; do the same on your phone.
**Done when:** there is a clear gap between the two buttons at both widths.

### R-109 · Stronger Step titles for the estimator @mobile *(accepted by Michael in boss, 5 Nov 2026)*
**State:** built · **Evidence:** verified (live) · **Acceptance:** accepted (5 November 2026)
**Task:** 43612368 in your boss list
**From:** your task list: "Stronger Step titles for the estimator @mobile", added 5 November 2026.
**Done when:** on a phone, each estimator step title is clearly stronger than the text under it (bolder and/or larger), and still fits on the screen without awkward wrapping. (inferred — confirm)
**Note:** "Stronger" is read as heavier weight and/or bigger size, with higher contrast if needed; I will offer options before changing anything (D-007). No new class without your approval (D-006). The estimate tool's code is in its own repo (MWP-Instant-Website-Estimate), so the change probably lands there, not here (inferred — confirm). Check on published staging, with Claude in Chrome at phone width where it says @mobile.

**Looked at 5 November 2026 (brief #330):** on staging each step's title (the question, e.g. "What are you looking for?") is 24px, weight 200, light grey (230), in Source Serif 4, from the tool's own styles. The option labels under it are 18px, weight 700, so the title reads *weaker* than the options. "Step titles" is read as these questions (inferred — confirm). Waiting for Michael to pick a look (D-007) before any change; options asked in boss.

**Built 5 November 2026 (brief #344):** Michael picked "Bolder and bigger". Inline script EstimateQuestionStronger 1.0.0 on the Estimate page footer: up to 767px, `.iwa-question` is weight 500, 28px, white. Checked on published staging in 390px and 1000px frames; desktop unchanged. Longer later-step questions not checked for wrapping.
**Try:**
1. Open [the estimate page on staging](https://madewithpixels-dev.webflow.io/estimate) on your phone.
2. Look at the question at the top of each step.
**Done when:** the question is clearly bolder, bigger and white, stronger than the answer boxes, and no step wraps awkwardly.
**Time:** about 3 minutes

### R-115 · Stronger Step titles for the estimator @mobile
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612379 in your boss list
**From:** your task list, added 5 November 2026. Same wording as R-109 (task 43612368).
**Done when:** the same as R-109: on a phone, each estimator step title is clearly stronger than the text under it, on published staging. (inferred — confirm)
**Note:** This looks like a second copy of R-109 (inferred — confirm). I'd treat the work as R-109 and tick or delete one of the two tasks yourself; I haven't touched either. On 5 November 2026 you picked "Bolder and bigger" for R-109 (weight 500, 28px, pure white, phone only), so that is the plan for both.

### R-110 · Centralised headings a paras in the final 'editable content sections' estimator step box @mobile *(accepted by Michael in boss, 5 Nov 2026)*
**State:** built · **Evidence:** verified (live, phone-width frame; see below) · **Acceptance:** accepted (5 November 2026)
**Task:** 43612369 in your boss list
**From:** your task list: "Centralised headings a paras in the final 'editable content sections' estimator step box @mobile", added 5 November 2026.
**Done when:** on a phone, the headings and paragraphs inside the box on the final 'editable content sections' step are centred. (inferred — confirm)
**Note:** "Centralised" is read as centre-aligned text; "a paras" as "and paragraphs" (inferred — confirm). Desktop alignment is assumed unchanged. The estimate tool's code is in its own repo (MWP-Instant-Website-Estimate), so the change probably lands there, not here (inferred — confirm). Check on published staging, with Claude in Chrome at phone width where it says @mobile.

**Built 5 November 2026 (brief #329):** read as the sixth step, "What would you like the website to include?", whose box holds the "Editable content sections" group (inferred — confirm). On screens up to 767px wide the question, the two group headings ("Editable content sections", "Functionality") and the note paragraph are centred; wider screens are unchanged. Done by a small inline script "EstimateLastStepCentred" 1.0.0 on the Estimate page footer (copy: `estimate-last-step-centred.js`, R-029); no class or element changed (D-006). The option boxes and their labels are not centred (inferred — confirm). Better long-term: build it into the tool and drop the script.
**Try:**
1. On your phone, open [the Estimate page on staging](https://madewithpixels-dev.webflow.io/estimate) and press Start.
2. Answer the first five questions, pressing Next each time.
3. On the sixth, look at the question, the group headings and the paragraph.
**Done when:** they are centred on the phone; on a wide screen they stay left-aligned.

### R-111 · Remove the back button from the final  'editable content sections' estimator step *(accepted by Michael in boss, 5 Nov 2026)*
**State:** built · **Evidence:** verified (live, desktop width) · **Acceptance:** accepted (5 November 2026)
**Task:** 43612370 in your boss list
**From:** your task list: "Remove the back button from the final  'editable content sections' estimator step", added 5 November 2026.
**Done when:** the final 'editable content sections' step of the estimator has no Back button, at every width; the other steps keep theirs. (inferred — confirm)
**Note:** Read as the last step only (inferred — confirm); whoever is on it can no longer step back, which you should be happy with. Related: R-108. The estimate tool's code is in its own repo (MWP-Instant-Website-Estimate), so the change probably lands there, not here (inferred — confirm). Check on published staging, with Claude in Chrome at phone width where it says @mobile.
**Built 5 November 2026 (brief #328):** read as the last step, "What would you like the website to include?" (it holds the "Editable content sections" option) (inferred — confirm). The tool's own code is in another repo and loads from jsDelivr, so I did not touch it; instead a small inline script "EstimateNoBackOnLastStep" 1.0.0 on the Estimate page footer hides Back while that step is showing (copy: `estimate-no-back-last.js`, R-029). No class or element changed (D-006). Better long-term: build it into the tool and drop the script.
**Try:**
1. Open [the Estimate page on staging](https://madewithpixels-dev.webflow.io/estimate) and press Start.
2. Answer the first five questions, pressing Next each time; Back is there on each.
3. On the sixth, "What would you like the website to include?", look at the bottom row.
**Done when:** only Next is there (no Back) on that step; Back is back on earlier steps.

### R-116 · Something else is wrong — Try the burger menu on the Estimate page and say what the home page shows when you…
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612380 in your boss list
**From:** your task list, added 5 November 2026. The title is cut off in the list ("…when you"), so the rest of your sentence is missing.
**Done when:** the burger menu on the Estimate page does what you expect, and when you use it (the part of your sentence I can't see) the Home page shows what it should, on published staging, at desktop, tablet and phone widths. (inferred — confirm)
**Note:** I read this as a bug report: opening the burger menu on the Estimate page and choosing something sends you to the Home page, and the Home page then shows something wrong (inferred — confirm). The first step is to find out what, which is the part cut off. Related: R-106 (Estimate page anchor links, accepted), R-097 (burger nav acting oddly, waiting on SmashBurger) and R-077. Check `isFromLibrary` before changing any `mwp-css-nav_*` class (D-006). Ignore the old `mwp-site-menu-*` menu (D-015).

### R-124 · Burger menu anchor destinations on estimate page are hosed
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612387 in your boss list
**From:** your task list, added 9 November 2026. Your list now words it "Home page burger menu anchor destinations from estimate page are broken - especially on mobile".
**Done when:** from the Estimate page, each burger menu link that points at a section of the Home page lands on that section, on desktop, tablet and phone, on published staging. (inferred — confirm)
**Note:** R-106 wired the Estimate page anchor links (accepted) and R-116 reported a related oddity (its text is cut off). This looks like a regression or the phone case R-106 didn't cover, probably the page loading with an anchor in the address and the layout not being ready (R-131) (inferred — confirm). First step: list each menu link, where it should go and where it lands, at phone width. Check `isFromLibrary` before changing any `mwp-css-nav_*` class (D-006). Ignore the old `mwp-site-menu-*` menu (D-015). Do with R-116 and R-131.

### R-142 · The /estimate page step 6 testimonials button links to the home page testimonials section *(accepted by Michael in boss, 12 Nov 2026)*
**State:** built (not published) · **Evidence:** verified (local) · **Acceptance:** accepted (12 November 2026)
**Accepted by Michael in boss, 12 November 2026** — checked: Looked at brief #575's result.
**Task:** 43612409 in your boss list
**From:** your task list, added 10 November 2026 (brief #418).
**Done when:** on published staging, on the Estimate page at step 6, the Testimonials button is no longer a link to the Home page: it is just an answer you can tick, and the menu's Testimonials link still goes to the Home page section. (Michael, 12 November 2026: "madness! remove the link".)
**Built 12 November 2026 (brief #575):** the cause was R-106's script, which turned every Estimate page link reading "Testimonials" into a Home page link, including the step 6 answer option. EstimateMenuAnchors 1.0.1 now touches only the menu's own links. Repo copy updated. Not published; needs Michael to publish and try it.
**Note:** Read as: the button on step 6 currently goes somewhere else (probably the plain Home page) and should land on the Testimonials section (inferred — confirm). The estimate tool's code is in its own repo (MWP-Instant-Website-Estimate), so the change may land there, or be a link change in Webflow (inferred — confirm). It may reuse the Estimate page anchor script from R-106. Related: R-124 and R-139, which cover the burger menu's anchor landings from the Estimate page; do this after them if the landing offset is still wrong. Check on published staging with Claude in Chrome.

### R-143 · Content usage policy page *(accepted by Michael in boss, 11 Nov 2026)*
**State:** built (not published) · **Evidence:** none · **Acceptance:** accepted (11 November 2026)
**Try:** After you publish staging, open madewithpixels-dev.webflow.io/content-usage on a computer, a tablet and a phone: you should see the content usage policy wording from the old site, with its headings and a link back. It is plain on purpose, as the styling comes next (R-143).
**From:** brief #460, 11 November 2026: "Add content usage policy", pointing at https://madewithpixels.co.uk/content-usage/ (the old site's page).
**Done when:** on published staging, /content-usage shows the policy wording, its headings and the back link, and looks right at desktop, tablet and phone width.
**Note:** The Webflow page "Content use" (slug content-usage, ID 6af3bb4a6db27614a481ed89) was made as a copy of the 404 page, so it has the same header and the existing "Utility Page Wrap", "Utility Page Content" and "Utlity link" classes. The wording is the old page's, word for word. Headings and paragraphs carry no class (D-006: no new class without approval), so how they look depends on the site's base text styles; that is the part to check. No footer, as on the 404 page. Not published (Michael publishes; a publish would also send the unpublished burger style from R-140). Still to settle: whether the footer should link to this page, and whether the old site's address is redirected (R-059).

### R-144 · Style the content usage page
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612411 in your boss list
**From:** your task list, added 11 November 2026 (brief #465).
**Done when:** on published staging, /content-usage looks designed rather than plain: headings, paragraphs, links and spacing match the rest of the site, at desktop, tablet and phone width. (inferred — confirm)
**Note:** Follows R-143, which put the policy wording on the page with no classes, so it only has the site's base text styles. Styling will need new classes or edits to the three utility classes it shares with the 404 page, and editing those would also change the 404 page. Per D-006, name the classes and properties and get Michael's approval first, and per D-007 describe the options before any visual change (inferred — confirm). Michael publishes.

### R-046 · Better layout for /estimate header hero *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (by Michael, 31 October 2026) · **Evidence:** none · **Acceptance:** accepted (31 October 2026)
**Accepted by Michael in boss, 31 October 2026** — checked: Looked at brief #158's result.
**Task:** 43612319 in your boss list
**From:** your task list (Adjust Estimator), added 24 October 2026.

### R-047 · Better layout / behaviour for forms
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612123 in your boss list
**From:** your task list (Adjust Estimator).

### R-048 · Form success pages
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612124 in your boss list
**From:** your task list (Adjust Estimator).

### R-049 · Bring through tricolour and button motifs
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612125 in your boss list
**From:** your task list (Adjust Estimator).

### R-050 · Finalise assessment screen *(accepted by Michael in boss, 2 Nov 2026)*
**State:** built (by Michael, 2 November 2026) · **Evidence:** none · **Acceptance:** accepted (2 November 2026)
**Accepted by Michael in boss, 2 November 2026** — checked: Agreed on all your points
**Michael, in boss, 2 November 2026:** not yet — *"You asked: Yes or no on the proposed wording. Yes You asked: Whether the consultation is free (the button wording depends on it). Yes You asked: Which of the two price displays to keep. The one on the right — it's what users have been seeing during the process. You asked: Whether you want per-answer advice lines (needs the estimate tool's code changed). Yes I think that would be helpful"*
**Michael, in boss, 2 November 2026:** not yet — *"Pull the report out into it's own document"*
**Task:** 43612121 in your boss list
**Michael, in boss, 2 November 2026 (brief #250 follow-up):** wording approved ("Yes"); the consultation is free ("Yes"); keep the price display on the right ("The one on the right — it's what users have been seeing during the process"); wants per-answer advice lines ("Yes I think that would be helpful"). Advice lines drafted in the same document; the build is still to do in the estimate tool's repo.
**From:** your task list (Adjust Estimator).
**Evidence link:** finishing observations in `docs/estimate-assessment-copy.md` (proposed).

### R-051 · More focussed and less repetitive copy for assessment *(accepted by Michael in boss, 2 Nov 2026)*
**State:** built (by Michael, 2 November 2026) · **Evidence:** none · **Acceptance:** accepted (2 November 2026)
**Accepted by Michael in boss, 2 November 2026** — checked: Agreed on all your points
**Michael, in boss, 2 November 2026:** not yet — *"You asked: Yes or no on the proposed wording. Yes You asked: Whether the consultation is free (the button wording depends on it). Yes You asked: Which of the two price displays to keep. The one on the right — it's what users have been seeing during the process. You asked: Whether you want per-answer advice lines (needs the estimate tool's code changed). Yes I think that would be helpful"*
**Michael, in boss, 2 November 2026:** not yet — *"Pull the report out into it's own document"*
**Task:** 43612302 in your boss list
**Michael, in boss, 2 November 2026 (brief #250 follow-up):** wording approved ("Yes"); the consultation is free ("Yes"); keep the price display on the right ("The one on the right — it's what users have been seeing during the process"); wants per-answer advice lines ("Yes I think that would be helpful"). Advice lines drafted in the same document; the build is still to do in the estimate tool's repo.
**From:** your task list (Adjust Estimator).
**Evidence link:** proposed wording in `docs/estimate-assessment-copy.md`.
**Note:** the estimate tool's code is in its own repo (MWP-Instant-Website-Estimate).

## Phase 5 · Launch prep and launch
*From your "Launch prep" group, in the order they depend on each other: content and SEO first; fonts after the legibility check; scripts onto jsDelivr before the final speed pass (it changes how they load); then the switches that belong on launch day.*

### R-052 · Fix the known typos and copy errors *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (12 clear fixes, 31 October 2026; the questions for Michael are still open) · **Evidence:** verified (live: staging, Chrome on the Mac Studio, 31 October 2026) · **Acceptance:** accepted (31 October 2026)
**Accepted by Michael in boss, 31 October 2026** — checked: Looked at brief #157's result.
**Task:** 43612321 in your boss list
**From:** suggested by Claude, gathered from the session notes; you agreed it on 24 October 2026 and it's now in your boss list: "Hasltead Glass"; "Portfoliio" in the menu; the Mr Wilson's page describes CODE:; Origin Global's copy says "until 2023" (the date says 2024); Insight's copy says "The Insight CBT Partnership".

### R-053 · Meta data / schema / LLMs review *(accepted by Michael in boss, 2 Nov 2026)*
**State:** built (by Michael, 2 November 2026) · **Evidence:** none · **Acceptance:** accepted (2 November 2026)
**Accepted by Michael in boss, 2 November 2026** — checked: Looked at brief #251's result.
**Michael, in boss, 2 November 2026:** not yet — *"I don't know where to find the proposed alt tags"*
**Task:** 43612127 in your boss list
**From:** your task list (Launch prep).
**Note:** left over from the 29 September audit: share images for Home and Estimate, favicon and webclip (need design), the logo in the schema once there's a logo image, and uploading the new llms.txt in Site settings.

### R-054 · Finalise font-weight inclusions to complete PSI fixes *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (by Michael, 31 October 2026) · **Evidence:** none · **Acceptance:** accepted (31 October 2026)
**Accepted by Michael in boss, 31 October 2026** — checked: Looked at brief #144's result.
**Task:** 43612274 in your boss list
**From:** your task list (Launch prep › Pagespeed review). **Depends on:** R-043.

### R-055 · ALL custom code served via jsDelivr
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612128 in your boss list
**From:** your task list (Launch prep): the switch-over. **Depends on:** R-029.
**Note:** jsDelivr serves from the GitHub repo, so the code must be pushed and versioned (a tag per release) for stable addresses. **Michael, 12 November 2026:** this is a launch requirement and the very last job before launch; R-146 (the CSS audit clean-up) goes with it.

### R-146 · Final custom-code CSS audit: bring styles back into the Designer
**State:** planned (audit done 12 November 2026; the clean-up is the last job before launch, with R-055) · **Evidence:** none · **Acceptance:** pending
**From:** your message of 12 November 2026: "I want to audit all the CSS in custom code, if there are elements that can be brought back into webflow UI they should be"; and "put this into the roadmap alongside the jsdeliver deployment as a job to do right at the end before launch".
**Depends on:** R-055 and R-029 (do it as part of the final custom-code move, so each rule is moved or kept once, in its final home).
**Done when:** every rule in `docs/css-audit-2026-11-12.md` section 2 and 3 is either moved into the Designer (with your approval for any new class, D-006 and D-007) or deleted, and what stays in code is only section 4 (the rules the Designer cannot hold). (inferred — confirm)
**Note:** Report: `docs/css-audit-2026-11-12.md` (repo) and `claude/css-audit-2026-11-12.md` (project). Remaining jobs: take `.project-nav_arrow` out of the site-head spinning-border rule and delete the override in the Portfolio Nav code; move the image drag rule to the site head; delete the unused `-prev` / `-next` classes; delete `.--is-blurred`; fix the invalid `none` values in `.iwa-panel .mwp-result-panel`; then the simple site-head rules one at a time (folio list margin and background, the `transition: filter`, the `.icon-arrow` hover colours, the 1920px `align-self`). Not yet audited: the Home pricing hover colours against the Designer values, and component code other than Portfolio Nav (for example SB Header). Re-read the live custom code first, as it will have changed.

### R-056 · Fix pagespeed insights *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (by Michael, 31 October 2026) · **Evidence:** none · **Acceptance:** accepted (31 October 2026)
**Accepted by Michael in boss, 31 October 2026** — checked: Looked at brief #144's result.
**Task:** 43612268 in your boss list
**From:** your task list (Launch prep › Pagespeed review, marked in progress). **Depends on:** R-054, R-055.
**Note:** the first pass was done on 29 September 2026 (faulty-terminal 1.10, deferred scripts, accessibility fixes, folio wall images). Brand contrast is accepted as is (D-010).

### R-102 · Device-aware performance and mobile scroll stability (final pre-launch pass)
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612361 in your boss list
**From:** your messages of 3 to 5 November 2026 (animations flaky on mobile with fast scrolling; "so let's build something and test it" after trying the site on an iPad Air 2). Michael first wanted this last. On 5 November 2026 he said the poor mobile stability is blocking the animation and responsive work, so the order changed: R-121, R-122, then the perf watcher (the tier script below) with R-123, then R-117. The watcher is the first piece of this item to build.
**Done when:** on published staging, the iPad Air 2 (landscape and portrait), the iPhone 15 and the basic Samsung phone all scroll the Home page without animations or layout breaking, even when you scroll fast or before an animation has finished; weak devices run a lighter version of the heavy effects at a steady frame rate; desktop looks and feels exactly as it does now. (inferred — confirm)
**Scope:** (1) a tier script (`data-perf` high/mid/low at 60/30/25 fps, plus `data-input` touch/pointer, with `?perf=` forcing and a `?perf-debug` overlay); (2) mobile stability: svh instead of dvh, a resize guard, a settle pass on scroll end, lighter scrub smoothing on touch; (3) a throttled Faulty Terminal (quality API, pause when covered); (4) a small folio-wall image set swapped by script on the low tier; (5) a simplified Testimonial Wall timeline on the low tier; (6) the heart morph chosen by input and tier, not width, with more time in the air; (7) Pricing on CSS sticky on touch. Full plan, tier table and order of work: `docs/perf-and-stability-brief.md`.
**Note:** an iPad in landscape is 1024px wide, so it gets every desktop path today; that probably explains the jerky heart morph there (to confirm on the iPad). The testimonial section's faint Faulty Terminal bleed comes from the deliberate fade layer in R-031 / D-022, so making it opaque is a Designer style change that needs your approval first (D-006, D-007). Related: R-042 (pacing pass), R-040 and R-093 (shadows on small screens), R-056 (PageSpeed), R-057, R-079, R-029 and R-055 (custom code into the repo, then jsDelivr; the tier script is the first piece). When the work starts, record the three-switch model (layout, input, tier) as a decision. Build the shared core (`MWPPerf`, scroll dispatcher) with R-117, on the build set up there. **Michael, 5 November 2026:** switching heavy interactions off at tablet and phone widths, and lightening the Testimonial Wall there, are for this perf fix, not Designer quick wins.

**Progress (6 November 2026):** MWPPerf (`src/perf/`, `dist/perf.min.js`) is live on staging as hosted script 0.2.0: tier detection, forcing, measured step-down, `?perf-debug`, diagnostic `?perf-kill` switches, and lite step 1 (forced with `?perf=low`: all GSAP killed before the first scroll). Device findings in `docs/perf-findings-2026-11-06.md`; "low" decided in D-025. **Remaining:** static terminal image, low stylesheet (About, Pricing first), automatic trigger with remembered result, Faulty Terminal quality API (`docs/ft-quality-brief.md`; **on hold** by Michael, 6 November 2026, until lite is done and real mid devices have been watched), resize guard and settle pass, heart morph and Pricing sticky by input/tier.

**Progress (6 November 2026, evening):** lite steps 2 and 3 built, MWPPerf 0.4.4 (still image in place of the terminal with WebGL blocked; `perf-low.min.css` with static layouts for Folio wall (three drifting rows), Intro, About, Pricing (landscape and portrait), Pricing CTA, Work, Testimonials; only ScrollTriggers killed, time-based tweens kept; Contact bubbles-to-heart script off in lite via one line in the Home footer, unpublished). Page length at desktop about 70,000px down to 16,000 to 24,000px. **Rules from Michael:** no shadows/blurs blanket-removed on mid/touch until tested on very capable iPads and phones (lite itself strips them); make sure capable machines do not report as mid. **Idea:** a few simple hard-coded GSAP animations in lite. **Remaining:** iPad full-scroll retest of 0.4.4, automatic trigger (load-time calibration plus scroll measurement), resize guard and settle pass, R-123, FT quality API (on hold), heart morph and Pricing sticky by input/tier, remove `?perf-kill` switches, lite `filter` rules once Michael makes the logo SVGs white.

**Progress (12 November 2026):** automatic lite built (0.5.1, D-026): slow devices found by the load check or the step-down get lite on their next load, remembered 30 days; nothing swaps mid-visit (a fade-reload-jump was tried and rejected). Wall shadows now follow the tier (Folio tile shadow moved out of the Designer into MWPPerf). Lite measured 59fps on the older and newer iPad. **Not doing (Michael, 12 November 2026):** lite for slow desktops, anything for no-WebGL browsers (Parallels Edge) through lite, Safari 14. **Remaining:** register and publish 0.5.1; real-device checks of the automatic path; resize guard and settle pass; R-123 (smaller Folio images); remove `?perf-kill` diagnostics; the GSAP touches in lite; terminal poster when WebGL cannot start (terminal brief, on hold).

**Progress (12 November 2026, later):** MWPPerf 0.6.0 to 0.6.2 live on staging and working (Michael). A slow device is now offered lite by a small pill after the second slow reading ("Your machine seems to be struggling. Want a lighter, faster version of the site?", Switch or Not now); in lite a persistent "View the full version" pill returns the visitor to the full site and is remembered 30 days (D-026 amended). Lite also keeps the Testimonial bubble shadow and blur and fades the hero copy as the Folio wall comes up. **Remaining:** capable-device watch (no pill should ever show on a Mac or the iPhone); the other GSAP touches in lite if wanted; resize guard and settle pass; R-123 (smaller Folio images); remove `?perf-kill` diagnostics; terminal poster when WebGL cannot start (terminal brief, on hold).

### R-123 · Smaller Folio Wall images from jsDelivr, swapped in by the perf watcher on weak and touch devices
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** none in your boss list yet
**From:** your question of 5 November 2026: "Do we also serve up smaller versions from jsdeliver that get swapped in at runtime when the perf watcher script detects a slower machine/touch device?" Third in your order, after R-121 and R-122.
**Done when:** a small set of the wall's images (about 256px WebP) is in this repo and served through jsDelivr. On the low tier (and touch, if you want it) the perf watcher swaps each tile's address by filename before the full-size image is requested. High-tier and desktop show the same images as now. The iPad Air 2 loads and scrolls the wall with less memory in use. Checked on published staging. (inferred — confirm)
**Depends on:** the perf watcher (the tier script in R-102, which runs early in the head, before the images load); R-122; and the first script being served from jsDelivr (R-117, D-023). So the watcher is built in the new `src/` and is the first script to switch over.
**Note:** you chose a second small set swapped by script, rather than one smaller set for everyone, because a smaller set would look soft on a retina desktop at the wall's 1.6x exit scale. The existing mapping is in the compressed asset map in the project notes (`<name>-wall.webp`). The repo grows by about 100 small images (an estimate of roughly a megabyte or two in all). The workspace can't reach Webflow's CDN, so the source images come through the browser pane or from your own files. Full detail: `docs/perf-and-stability-brief.md`.

### R-057 · Set debugPanel: false in FaultyTerminalConfig
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612273 in your boss list
**From:** your task list (Launch prep).

### R-058 · Test forms
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612129 in your boss list
**From:** your task list (Launch prep). **Depends on:** R-047, R-048.

### R-059 · Redirect the old site's addresses and move the domain
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612322 in your boss list
**From:** Suggested by Claude; you agreed it on 24 October 2026 and it's now in your boss list. The current madewithpixels.co.uk is the static Azure site with its own redirect rules; its addresses (portfolio pages especially) need 301s to the new ones in Webflow, and the domain needs connecting to the Webflow site. (inferred — confirm)

### R-060 · set canonical link to https://www.madewithpixels.co.uk
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612261 in your boss list
**From:** your task list (Launch prep). On launch day (D-014).

### R-061 · Mark the new form's submit event as a key event in GA4
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612248 in your boss list
**From:** your task list (Launch prep). boss's lead tracking counts on it.

### R-062 · Set up GA4 internal-traffic filter so my own visits stop counting in boss search
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612249 in your boss list
**From:** your task list (Launch prep).

### R-063 · Tell boss the site has launched
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612323 in your boss list
**From:** Suggested by Claude; you agreed it on 24 October 2026 and it's now in your boss list. boss holds several things until the relaunch (its D-077): set the launch marker on the Search page, then boss's website-enquiry tracking, opportunity feed and relaunch brief can start (boss's own R-059, R-066 and R-064).

## Phase 6 · After launch
*Your "Phase 2" list. Quick wins first; the Google address check goes early because the postcard takes days; the landing pages can use boss's relaunch brief (searches, competitors and questions for each page).*

### R-064 · Add 'sameAs' to schema listing linkedIn, Git, Webflow profles
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612263 in your boss list
**From:** your task list (Phase 2).

### R-065 · Google Business Profile
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612136 in your boss list
**From:** your task list (Phase 2 › Launch MWP social campaign). boss's notes say not in the relaunch week.

### R-066 · Verify Google address for Maps
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612137 in your boss list
**From:** your task list (Phase 2 › Launch MWP social campaign). **Depends on:** R-065.

### R-067 · Sheffield
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612131 in your boss list
**From:** your task list (Phase 2 › MWP landing pages).

### R-068 · Doors and Windows
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612132 in your boss list
**From:** your task list (Phase 2 › MWP landing pages). boss plans this page shortly after launch (its D-051) for the windows and doors campaign.

### R-069 · Remember to set them to index in the sitemap before launch
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612262 in your boss list
**From:** your task list (Phase 2 › MWP landing pages). As each landing page goes live (D-013).

### R-070 · Extend the folio wall anim sequence to incorporate SEO friendly content like Sheffield & Business Types
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612277 in your boss list
**From:** your task list (Phase 2).

### R-071 · Facebook
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612134 in your boss list
**From:** your task list (Phase 2 › Launch MWP social campaign).

### R-072 · LinkedIn
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612135 in your boss list
**From:** your task list (Phase 2 › Launch MWP social campaign).

### R-073 · Promote Webflow scripts on the Webflow Forum
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612138 in your boss list
**From:** your task list (Phase 2 › Launch MWP social campaign). "Create a Webflow cloneable project, plus talk about it in the OSMO and Formburg channels' comment sections."

### R-100 · launch MWP GoogleAds campaign
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612355 in your boss list
**From:** your task list, added 3 November 2026. Placed in Phase 6 beside the social campaign items.
**Done when:** a Google Ads campaign for madewithpixels is live, with its budget, ad copy, keywords and landing page agreed by you, and conversions are counting in GA4. (inferred — confirm)
**Note:** This is mostly work outside the site, so an agent can only help with parts: keyword and ad copy proposals, landing page checks, conversion tracking (see R-061). Spending money and launching are yours. (inferred — confirm) It probably waits until after the site launches and the landing pages exist. (inferred — confirm) Budget, targeting, and whether it points at the home page or new landing pages are open questions.

## Phase 7 · SmashBurger, once it's finished
*Michael, 24 October 2026: complete the site as far as possible, then finish SmashBurger, then bring its release in.*

### R-030 · update smashburger to latest release
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612289 in your boss list
**From:** your task list (Webflow '26).
**Note:** SmashBurger isn't finished yet. Order (Michael, 24 October 2026): complete this site as far as possible, then finish SmashBurger, then update the site to its release. The open-menu loose ends in STATUS (the raspberry close button, the Estimate button style) wait for this. Check `isFromLibrary` before touching any `mwp-css-nav_*` class (D-006).

### R-077 · There's two flashes in quick succession when the SB menu closes after a link is clicked
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612334 in your boss list
**From:** your task list, added 30 October 2026.
**Done when:** on published staging, clicking a link in the SmashBurger menu closes it with at most one visual change, with no double flash, at desktop and phone widths. (inferred — confirm widths)
**Note:** May be linked to the blur that holds after a menu jump (R-033, R-027). SB is taken to mean SmashBurger, the menu in the library, so check `isFromLibrary` before changing any `mwp-css-nav_*` class (D-006); the fix may belong in SmashBurger itself and wait for R-030. (inferred — confirm)

### R-078 · The /estimate page needs the home page link adding to the SB anchor links *(accepted by Michael in boss, 31 Oct 2026)*
**State:** built (by Michael, 31 October 2026) · **Evidence:** none · **Acceptance:** accepted (31 October 2026)
**Accepted by Michael in boss, 31 October 2026** — checked: Looked at brief #173's result.
**Michael, in boss, 31 October 2026:** not yet — *"Telll me the options here."*
**Task:** 43612335 in your boss list
**From:** your task list, added 30 October 2026.
**Done when:** on published staging, the SmashBurger menu on /estimate has a link to the home page alongside its anchor links, and it opens the home page. (inferred — confirm)
**Options written 1 November 2026 (brief #159):** Michael picks. A Home link is already first in the /estimate menu; the five anchor links after it are dead (`#`). See STATUS, 1 November 2026, for three options and a recommendation (point the anchors at the home page sections). Nothing built. Re-posted in boss as a one-tap question on 1 November 2026 (brief #173).
**Note:** Taken to mean the menu shows only on-page anchor links there and has no way back to the home page. Wording of the link and its position are open, so options come to you first (D-007). (inferred — confirm)

---

## Already built
*Ticked complete in your task list in boss. Acceptance is taken from your tick and its date. (inferred — confirm that a tick means you're happy with it)*

### R-001 · Re-animate the navbar items on page load
**State:** built · **Evidence:** none · **Acceptance:** accepted (28 September 2026)
**Task:** 43612112 in your boss list
**From:** your task list (Webflow '26), ticked complete on 28 September 2026.

### R-002 · Slow down and animate the folio screenshot overlay on home page
**State:** built · **Evidence:** none · **Acceptance:** accepted (28 September 2026)
**Task:** 43612113 in your boss list
**From:** your task list (Webflow '26), ticked complete on 28 September 2026.

### R-003 · Home page animation to complete
**State:** built · **Evidence:** none · **Acceptance:** accepted (28 September 2026)
**Task:** 43612116 in your boss list
**From:** your task list (Webflow '26), ticked complete on 28 September 2026.

### R-004 · Add a scrolling portfolio section directly under the hero with a piece of GSAP text saying '100's of completed projects for organisations of all shapes & sizes'
**State:** built · **Evidence:** none · **Acceptance:** accepted (28 September 2026)
**Task:** 43612246 in your boss list
**From:** your task list (Webflow '26), ticked complete on 28 September 2026.

### R-005 · Implement the pixel page view transition in/out of the project pages
**State:** built · **Evidence:** none · **Acceptance:** accepted (29 September 2026)
**Task:** 43612115 in your boss list
**From:** your task list (Webflow '26), ticked complete on 29 September 2026.
**Note:** Later joined by the title-and-image morph (D-016); R-036 removes the pixel version.

### R-006 · Ticker needs to loop properly and be draggable
**State:** built · **Evidence:** none · **Acceptance:** accepted (29 September 2026)
**Task:** 43612117 in your boss list
**From:** your task list (Webflow '26), ticked complete on 29 September 2026.

### R-007 · Portfolio date labels need to be corrected
**State:** built · **Evidence:** none · **Acceptance:** accepted (29 September 2026)
**Task:** 43612118 in your boss list
**From:** your task list (Webflow '26), ticked complete on 29 September 2026.

### R-008 · Better animation for the portfolio item:hover state
**State:** built · **Evidence:** none · **Acceptance:** accepted (29 September 2026)
**Task:** 43612251 in your boss list
**From:** your task list (Webflow '26), ticked complete on 29 September 2026.
**Note:** Rebuilt on 24 October 2026 (folio hover v3) so it follows the pointer while scrolling on a Magic Mouse or trackpad.

### R-009 · Portfolio layout on mobile needs room for the nav items and the project left and right arrows
**State:** built · **Evidence:** none · **Acceptance:** accepted (29 September 2026)
**Task:** 43612252 in your boss list
**From:** your task list (Webflow '26), ticked complete on 29 September 2026.

### R-010 · Folio_wall animation doesn't cover the whole viewport on mobile - does it need 100dvh rather than svh?
**State:** built · **Evidence:** none · **Acceptance:** accepted (29 September 2026)
**Task:** 43612254 in your boss list
**From:** your task list (Webflow '26), ticked complete on 29 September 2026.

### R-011 · reduce size of estimate page 'start' button at desktop
**State:** built · **Evidence:** none · **Acceptance:** accepted (29 September 2026)
**Task:** 43612255 in your boss list
**From:** your task list (Webflow '26), ticked complete on 29 September 2026.

### R-012 · remove scaling from the intro anim for the logo pixels
**State:** built · **Evidence:** none · **Acceptance:** accepted (29 September 2026)
**Task:** 43612256 in your boss list
**From:** your task list (Webflow '26), ticked complete on 29 September 2026.

### R-013 · Check all portfolio page initial images as set to Eager loading
**State:** built · **Evidence:** none · **Acceptance:** accepted (29 September 2026)
**Task:** 43612257 in your boss list
**From:** your task list (Webflow '26), ticked complete on 29 September 2026.

### R-014 · Alt tags for all portfolio images - can be set at image level as 'use alt text from asset' is set
**State:** built · **Evidence:** none · **Acceptance:** accepted (29 September 2026)
**Task:** 43612260 in your boss list
**From:** your task list (Webflow '26), ticked complete on 29 September 2026.

### R-015 · Mobile collapsing/sticky estimate box doesn't open on first click
**State:** built · **Evidence:** none · **Acceptance:** accepted (26 September 2026)
**Task:** 43612122 in your boss list
**From:** your task list (Webflow '26), ticked complete on 26 September 2026.
**Note:** From the Adjust Estimator group.

### R-016 · need the instant initialising verion of faulty terminal on the estimate page
**State:** built · **Evidence:** none · **Acceptance:** accepted (30 September 2026)
**Task:** 43612267 in your boss list
**From:** your task list (Webflow '26), ticked complete on 30 September 2026.

### R-017 · remove the extra two text-carousel lines
**State:** built · **Evidence:** none · **Acceptance:** accepted (30 September 2026)
**Task:** 43612269 in your boss list
**From:** your task list (Webflow '26), ticked complete on 30 September 2026.

### R-018 · Remove title from project page buttons, they should be arrows instead
**State:** built · **Evidence:** none · **Acceptance:** accepted (30 September 2026)
**Task:** 43612270 in your boss list
**From:** your task list (Webflow '26), ticked complete on 30 September 2026.

### R-019 · Add back button pointing at last page position to project pages
**State:** built · **Evidence:** none · **Acceptance:** accepted (30 September 2026)
**Task:** 43612271 in your boss list
**From:** your task list (Webflow '26), ticked complete on 30 September 2026.

### R-020 · Folio hover should place the project image centred around the cursor where possible
**State:** built · **Evidence:** none · **Acceptance:** accepted (30 September 2026)
**Task:** 43612275 in your boss list
**From:** your task list (Webflow '26), ticked complete on 30 September 2026.

### R-021 · The second rotation > finish sequence at the end of the folio wall anim should be faster.
**State:** built · **Evidence:** none · **Acceptance:** accepted (30 September 2026)
**Task:** 43612276 in your boss list
**From:** your task list (Webflow '26), ticked complete on 30 September 2026.
**Note:** The session notes say this was skipped for now; ticked complete in your list. (inferred — confirm)

### R-022 · During the wall build, the images in each row should be staggered in too - experiment with interesting build orders
**State:** built · **Evidence:** none · **Acceptance:** accepted (30 September 2026)
**Task:** 43612278 in your boss list
**From:** your task list (Webflow '26), ticked complete on 30 September 2026.

### R-023 · Different page transition
**State:** built · **Evidence:** none · **Acceptance:** accepted (30 September 2026)
**Task:** 43612279 in your boss list
**From:** your task list (Webflow '26), ticked complete on 30 September 2026.
**Note:** The title-and-image morph, on trial (D-016).

### R-024 · Responsive Faulty-terminal where I can set the size
**State:** built · **Evidence:** none · **Acceptance:** accepted (30 September 2026)
**Task:** 43612280 in your boss list
**From:** your task list (Webflow '26), ticked complete on 30 September 2026.

### R-025 · Sector ticker typography should be sat in angled bands with BG's which animate in from opposite sides on scroll
**State:** built · **Evidence:** none · **Acceptance:** accepted (30 September 2026)
**Task:** 43612281 in your boss list
**From:** your task list (Webflow '26), ticked complete on 30 September 2026.
**Note:** The session notes say a first pass was built and parked ("needs work"); see R-035.

### R-026 · Set preload on the portfolio previous and next links so the transitions speed up
**State:** built · **Evidence:** none · **Acceptance:** accepted (30 September 2026)
**Task:** 43612282 in your boss list
**From:** your task list (Webflow '26), ticked complete on 30 September 2026.

### R-027 · need an instant jump or some kind of transition (motion blur?) for the primary nav.
**State:** built · **Evidence:** none · **Acceptance:** accepted (30 September 2026)
**Task:** 43612283 in your boss list
**From:** your task list (Webflow '26), ticked complete on 30 September 2026.
**Note:** The jump-behind-a-blur; R-033 shortens the blur.

### R-028 · Bubble to Logo flow broken on Iphone
**State:** built · **Evidence:** none · **Acceptance:** accepted (24 October 2026)
**Task:** 43612307 in your boss list
**From:** your task list (Webflow '26), ticked complete on 24 October 2026.
**Note:** Now a speech bubble that spins into the logo; timed fly-in on phones (D-018). Not yet tried on Android.
