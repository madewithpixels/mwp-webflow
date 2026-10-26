# madewithpixels website — Roadmap

*Retrofitted 24 October 2026 by Claude (Cowork) from Michael's task list for the project in boss ("madewithpixels Website": the Webflow '26 and Phase 2 lists). Titles keep your wording. Where several tasks sat under one heading in your list (Launch prep, Responsive layouts, Adjust Estimator, Page transitions, MWP landing pages, Launch MWP social campaign), the heading has become a phase below. "Finish MWP site" is the goal of the whole roadmap (see SCOPE.md) and carries the time log in boss.*

*Seven tasks in your list ("Finish MWP site", "MWP landing pages", "Launch MWP social campaign", "Adjust Estimator", "Launch prep", "Responsive layouts", "Page transitions") are headings, already covered by the goal and phases above, so they have no item of their own.*

*The order is a suggestion: why each phase sits where it does is under its heading. Move things freely; the numbers stay with the items.*

*Four items (R-045, R-052, R-059, R-063) were suggested by Claude and agreed by Michael on 24 October 2026; they're now in his boss list too.*

**Goal:** the new site live on madewithpixels.co.uk, then working to win enquiries.

| Phase | What | Items |
|---|---|---|
| 1 | Groundwork | R-029 |
| 2 | Desktop polish | R-031–R-038, R-074–R-076 |
| 3 | Phone and tablet | R-039–R-045 |
| 4 | Estimate page | R-046–R-051 |
| 5 | Launch prep and launch | R-052–R-063 |
| 6 | After launch (your Phase 2) | R-064–R-073 |
| 7 | SmashBurger, once it's finished | R-030 |
| — | Already built | R-001–R-028 |

---

## Phase 1 · Groundwork
*First, so every script change from here on lands in this repo as well as Webflow. The site keeps loading its scripts from Webflow until launch prep (D-003).*

### R-029 · Put all the site's custom code in this repo (the record), still loaded from Webflow for now
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612128 in your boss list
**From:** the first half of "ALL custom code served via jsDelivr" (Launch prep), split as D-003 suggests.
**Exit criteria:** every script and style block now in the site head and footer, and in each page's head and footer, has a file here; a short README line says which Webflow box each file came from. `custom.js` (the back-layer parallax) is checked against what the site runs now.


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

### R-032 · Pricing CTA text stagger should be quicker
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612314 in your boss list
**From:** your task list. 'Wondering about the cost of your site?'
**Note:** part of the native "Pricing Section Desktop" interaction, so a Designer change.

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

### R-034 · make better use of the separator during the scroll anims
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612308 in your boss list
**From:** your task list.

### R-035 · More interesting typography in the marquee section
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612313 in your boss list
**From:** your task list.
**Note:** if "marquee" means the sector ticker, the angled bands (R-025) were parked as "needs work"; this may pick that up. (inferred — confirm)

### R-036 · Remove pixel page-transition
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612316 in your boss list
**From:** your task list (Page transitions).
**Note:** the pixel cover also runs project to project and in browsers without the morph (Firefox, older Safari); decide what they get instead. Unused CSS (`.mwp-pt span`) can go at the same time.

### R-037 · Improve project page transition
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612317 in your boss list
**From:** your task list (Page transitions). "Do something with the copy and navigation buttons."

### R-038 · Move and re-style the navigation arrows
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612318 in your boss list
**From:** your task list (Page transitions). "Place them vertically centred and on the edges of the screen - remove the tricolour aesthetic, something simpler instead."

### R-074 · Clickable testi-wall
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612325 in your boss list
**From:** your task list, added 24 October 2026: "During the phase just before the parting in the testi-wall - make portfolio images clickable with a view transition to the project page. Lines should be scrollable and up and down grabbing and scrolling would be glorious."
**Exit criteria:** while the wall is built and before it parts, clicking a portfolio image opens its project page with the image morphing into place; each row can be dragged sideways; dragging up and down moves the page; a drag never opens a project by accident. Desktop first.
**Note:** the portfolio images are in the folio wall (under the hero), which also has a parting; the testimonial wall's tiles are plain colour. Taken to mean the folio wall. (inferred — confirm)

### R-075 · set border: 10px solid red; using the webflow ui on the hero section
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612326 in your boss list
**From:** your task list, added 25 October 2026.
**Exit criteria:** the hero section on the home page has a 10 pixel solid red border, set in the Designer's Style panel (not in custom code), and it shows on published staging at desktop width.
**Note:** looks like a test of the Designer style route, but taken at face value. (inferred — confirm) It needs a style change on the hero section's class, so per D-006 the class name and properties go to you for approval first; if the hero class is shared, say so before it changes. Which hero (home page) and all four sides are assumed. (inferred — confirm)

### R-076 · Add a contents device that runs alongside the main scrollbar
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612327 in your boss list
**From:** your task list, added 26 October 2026.
**Exit criteria:** on the home page at desktop width, a contents device sits beside the page's own scrollbar. It lists the main sections, marks the one you are in as you scroll, and clicking an entry scrolls to that section. It works on published staging and does not fight the sticky-section scroll animations (D-017).
**Note:** Michael gave no detail, so these are guesses. (inferred — confirm) Home page only. Desktop first, phone and tablet to follow in Phase 3. Entries are the home page's main sections. The look is open, so options come to you first (D-007), and any new class needs your approval first (D-006).

## Phase 3 · Phone and tablet
*From your "Responsive layouts" group. After the desktop polish, before launch prep, because the font-weight trim and the speed fixes depend on the final mobile type.*

### R-039 · Contact section is broken
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612310 in your boss list
**From:** your task list (Responsive layouts).
**Note:** at phone width the big logo sits mostly off-screen to the left, so the bubble fly-in lands there too. Placing the logo fixes both.

### R-040 · Remove drop shadow from testi-wall bubbles on mobile
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612312 in your boss list
**From:** your task list (Responsive layouts). Also lightens the wall on phones.

### R-041 · Specific mobile animations of portfolio sideways scrolling section?
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612233 in your boss list
**From:** your task list (Responsive layouts).

### R-042 · pacing pass
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612311 in your boss list
**From:** your task list (Responsive layouts).
**Note:** the scroll magnet is desktop only (D-019).

### R-043 · check legibility on mobile
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612253 in your boss list
**From:** your task list (Responsive layouts). Feeds the font-weight trim (R-054).

### R-044 · Tablet hasn't even been looked at yet
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612305 in your boss list
**From:** your task list (Responsive layouts).

### R-045 · Long testimonial quotes on phones
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612320 in your boss list
**From:** Suggested by Claude; you agreed it on 24 October 2026 and it's now in your boss list. Raised in an earlier session as an open item. 

## Phase 4 · Estimate page
*From your "Adjust Estimator" group. Before launch prep, because "Test forms" and the GA4 form event need the final forms. Copy last, once the screens have settled (you planned the copy pass for after the UI).*

### R-046 · Better layout for /estimate header hero
**State:** planned · **Evidence:** none · **Acceptance:** pending
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

### R-050 · Finalise assessment screen
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612121 in your boss list
**From:** your task list (Adjust Estimator).

### R-051 · More focussed and less repetitive copy for assessment
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612302 in your boss list
**From:** your task list (Adjust Estimator).
**Note:** the estimate tool's code is in its own repo (MWP-Instant-Website-Estimate).

## Phase 5 · Launch prep and launch
*From your "Launch prep" group, in the order they depend on each other: content and SEO first; fonts after the legibility check; scripts onto jsDelivr before the final speed pass (it changes how they load); then the switches that belong on launch day.*

### R-052 · Fix the known typos and copy errors
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612321 in your boss list
**From:** suggested by Claude, gathered from the session notes; you agreed it on 24 October 2026 and it's now in your boss list: "Hasltead Glass"; "Portfoliio" in the menu; the Mr Wilson's page describes CODE:; Origin Global's copy says "until 2023" (the date says 2024); Insight's copy says "The Insight CBT Partnership".

### R-053 · Meta data / schema / LLMs review
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612127 in your boss list
**From:** your task list (Launch prep).
**Note:** left over from the 29 September audit: share images for Home and Estimate, favicon and webclip (need design), the logo in the schema once there's a logo image, and uploading the new llms.txt in Site settings.

### R-054 · Finalise font-weight inclusions to complete PSI fixes
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612274 in your boss list
**From:** your task list (Launch prep › Pagespeed review). **Depends on:** R-043.

### R-055 · ALL custom code served via jsDelivr
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612128 in your boss list
**From:** your task list (Launch prep): the switch-over. **Depends on:** R-029.
**Note:** jsDelivr serves from the GitHub repo, so the code must be pushed and versioned (a tag per release) for stable addresses.

### R-056 · Fix pagespeed insights
**State:** in progress · **Evidence:** none · **Acceptance:** pending
**Task:** 43612268 in your boss list
**From:** your task list (Launch prep › Pagespeed review, marked in progress). **Depends on:** R-054, R-055.
**Note:** the first pass was done on 29 September 2026 (faulty-terminal 1.10, deferred scripts, accessibility fixes, folio wall images). Brand contrast is accepted as is (D-010).

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

## Phase 7 · SmashBurger, once it's finished
*Michael, 24 October 2026: complete the site as far as possible, then finish SmashBurger, then bring its release in.*

### R-030 · update smashburger to latest release
**State:** planned · **Evidence:** none · **Acceptance:** pending
**Task:** 43612289 in your boss list
**From:** your task list (Webflow '26).
**Note:** SmashBurger isn't finished yet. Order (Michael, 24 October 2026): complete this site as far as possible, then finish SmashBurger, then update the site to its release. The open-menu loose ends in STATUS (the raspberry close button, the Estimate button style) wait for this. Check `isFromLibrary` before touching any `mwp-css-nav_*` class (D-006).

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
