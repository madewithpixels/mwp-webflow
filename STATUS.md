# madewithpixels website — Status

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

