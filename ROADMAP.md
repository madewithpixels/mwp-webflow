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

**Next up (your order of 5 November 2026; 6 November: R-121 done and accepted, R-122 folded into the watcher; the watcher is built and tested on devices, and its "low" is now a lite site, D-025, in progress):** the perf watcher (the first part of R-102) with R-123 (smaller images swapped in), then R-117 (the rest of the code consolidation, switching each script to jsDelivr as it is ported).

*The order is a suggestion: why each phase sits where it does is under its heading. Move things freely; the numbers stay with the items.*

*Four items (R-045, R-052, R-059, R-063) were suggested by Claude and agreed by Michael on 24 October 2026; they're now in his boss list too.*

**Goal:** the new site live on madewithpixels.co.uk, then working to win enquiries.

| Phase | What | Items |
|---|---|---|
| 1 | Groundwork | R-029, R-117 |
| 2 | Desktop polish | R-031–R-038, R-074–R-076, R-079–R-088, R-094–R-099, R-112, R-132, R-133, R-134 |
| 3 | Phone and tablet | R-039–R-045, R-093, R-113, R-114, R-121, R-122, R-125–R-131 |
| 4 | Estimate page | R-046–R-051, R-106–R-111, R-115, R-116, R-124 |
| 5 | Launch prep and launch | R-052–R-063, R-102, R-123 |
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

### R-112 · Rounded corners on Left and right buttons in project pages *(accepted by Michael in boss, 10 Nov 2026)*
**State:** built (5 November 2026, published to staging); part 2, moving the corner styles into the Designer, is half done: the two classes exist but are not applied · **Evidence:** verified (live), staging /portfolio/futura, Chrome on the Mac Studio at 2044px wide only; phone width not checked · **Acceptance:** accepted (10 November 2026)
**Blocked:** the two new classes (`project-nav_arrow-prev`, `project-nav_arrow-next`, approved by Michael in boss on 5 November 2026) are made and read back, but the Webflow tool cannot put two classes on one element (it reads a pair as a combo class, which D-006 forbids). **Unblock:** Michael adds each class to its arrow in the Designer (Portfolio Nav component); then an agent removes the radius and edge rules from the component's code. **Unblocker:** Michael.
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

### R-083 · Page transitions
**State:** built (1 November 2026) · **Evidence:** verified (live; published staging, Chrome on the Mac Studio, 1500px wide, project to project both arrows) · **Acceptance:** pending
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

### R-132 · Remove separators from all project pages
**State:** built (10 November 2026, published to staging) · **Evidence:** verified (live) by fetching all 39 project pages from staging: none has a separator, each still has its content and title; no look at it in a browser yet, so spacing at each width is unchecked · **Acceptance:** pending
**Built:** the `Seperator` component instance was removed (not hidden) from the 38 project pages that had one and from the draft "Project Page" template. Farmer Norton already had none. No class, style, interaction or custom code touched; the Home page separators are unchanged. The unused `Seperator` placement can be put back by re-adding the component at the top of Project Wrapper.
**Task:** 43612394 in your boss list
**From:** your task list, added 9 November 2026.
**Done when:** no project page shows a separator, at any width, on published staging; the Home page separators are unchanged and nothing else on the project pages moves. (inferred — confirm)
**Note:** This replaces the R-114 plan to apply `mwp-bleed` to the project-page separator (that part is no longer needed; the Home page one still is) (inferred — confirm). Removing the element, or hiding it, are the two options; I'd hide it first so it can be undone, and removing the spacing it leaves (inferred — confirm). Related: R-082 (layout changes to project pages), R-088 (Icon-Link removed from project pages). D-006 and D-007 apply.

### R-133 · Add the CSS that stops images being dragged to the project pages
**State:** built (10 November 2026, published to staging) · **Evidence:** verified (live): on staging the computed `-webkit-user-drag` of every image is `none` on Aquaculture and Farmer Norton (Chrome, Mac, 2044px wide); an actual drag by hand not tried · **Acceptance:** pending
**Task:** 43612386 in your boss list
**From:** your task list, added 10 November 2026 (brief #359).
**Done when:** on published staging, an image on a project page can't be dragged out of the page (the computed `-webkit-user-drag` on project-page images is `none`), on at least two project pages; nothing else on the pages changes. (inferred — confirm)
**Note:** Your snippet is `-webkit-user-drag: none; user-drag: none;`. I'd put it in the "Portfolio Nav" component's style embed, which already sits on every project page (so no new class, D-006), aimed at images on those pages (inferred — confirm). Links are still draggable; the task says images only.
**Built:** one rule, `img { -webkit-user-drag: none; user-drag: none; }`, added to the end of the style embed in the Portfolio Nav component (40 instances, all project pages and the template). No class, style, page or site code touched. Safari wasn't tested.

### R-134 · Enable swipe on the project pages for left and right nav
**State:** built (10 November 2026, published to staging) · **Evidence:** verified (live): on staging, simulated one-finger swipes on Futura went to the next project (swipe left) and the previous one (swipe right) with the slide transition; short and mostly-vertical swipes did nothing (Chrome, Mac Studio; a real touch screen not tried) · **Acceptance:** pending
**Task:** 43612384 in your boss list
**From:** your task list, added 10 November 2026 (brief #357).
**Done when:** on a phone or tablet, on a project page, swiping left goes to the next project and swiping right to the previous one, the same as pressing the arrows; scrolling up and down still works normally. (inferred — confirm)
**Note:** Swipe left = next, swipe right = previous, the usual way round (inferred — confirm). A swipe taps the matching arrow, so the slide transition (R-083) plays. It needs a clear sideways drag of 60px or more, quick, and mostly horizontal; swipes that begin in something that scrolls sideways are ignored.
**Built:** a small separate script "MWPSwipeNav" 1.0.0 (footer, project pages only), added alongside the others; the big footer block was not touched. Copy in `src/site/swipe-nav.js` (R-029).

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
**State:** planned · **Evidence:** none · **Acceptance:** pending
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

### R-129 · Ipad mini's in portrait mode report as the same breakpoint as webflow's mobile landscape breakpoint
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612393 in your boss list
**From:** your task list, added 9 November 2026.
**Done when:** an iPad mini held in portrait gets the tablet layout, not the phone-landscape layout, on published staging. (inferred — confirm)
**Note:** The iPad mini in portrait is 744 to 768px wide, which falls in the Designer's phone-landscape band (479 to 767px at the Designer's breakpoints) and not in the tablet band (inferred — confirm: I haven't read the exact breakpoints). Webflow breakpoints are width-only, so options will be: accept it; adjust a breakpoint width (affects every page, so costly); or add a script or media-query tweak for that case. Options first (D-007), and a breakpoint change is yours to approve. Needs a real iPad mini (or one-to-one frame sizes). Related: R-102 (iPad counted as desktop at 1024px).

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

## Phase 4 · Estimate page
*From your "Adjust Estimator" group. Before launch prep, because "Test forms" and the GA4 form event need the final forms. Copy last, once the screens have settled (you planned the copy pass for after the UI).*

### R-120 · Add the CSS that stops images being dragged to the project pages
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612386 in your boss list
**From:** your task list, added 5 November 2026.
**Done when:** on a project page, pressing and dragging an image no longer picks up a ghost copy of it, on desktop and phone, on published staging, and nothing else on the page changes. (inferred — confirm)
**Note:** "The CSS" is read as `-webkit-user-drag: none` and `user-select: none` on the project pages' images, probably wanted so dragging doesn't fight the swipe in R-118 (inferred — confirm). It may already exist on other pages (inferred — confirm: I haven't looked); if so I'd copy that. It would go in the project page's custom code, not a new class (D-006). Doesn't stop right-click save.

### R-119 · next button in the estimator often needs two clicks to register @mobile
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612385 in your boss list
**From:** your task list, added 5 November 2026.
**Done when:** on a phone, one tap on Next in the estimator always moves to the next step, on every step, on published staging. (inferred — confirm)
**Note:** Read as the bottom Next button on phone-width screens (the top one is hidden there, R-107) (inferred — confirm). First step is to find the cause (inferred — confirm). Things to look at: my small scripts on the Estimate page footer (R-107, R-108, R-111, R-110, R-109) changing the buttons as steps change, a first tap only dismissing something, or the tool disabling Next until an answer registers. The estimate tool's code is in its own repo (MWP-Instant-Website-Estimate), so the fix may land there (inferred — confirm). Check on published staging at phone width with Claude in Chrome; touch behaviour may need a real phone, which I'd ask you to try.

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
**Note:** jsDelivr serves from the GitHub repo, so the code must be pushed and versioned (a tag per release) for stable addresses.

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
