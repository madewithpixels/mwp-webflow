# madewithpixels website — Status

## 1 November 2026 — Claude (night shift) — Menu no longer shakes while open (R-081, brief #152)
**Changed (R-081):** Webflow, site madewithpixels, **Site settings > Custom code > Head** only, published to staging only (madewithpixels-dev.webflow.io). I read the block first and wrote it back with one change (the echo matched): the rule from brief #149 (`html.lenis.lenis-stopped { overflow: hidden scroll !important }`) is gone. In its place, on mouse devices only (`hover: hover` and `pointer: fine`), while the menu is open: `html` gets `padding-right: 8px` and `.header` gets `max-width: calc(100% - 8px)`. No class, element, page or Designer change.

**Cause of the shaking:** my #149 rule was the culprit. Lenis (smooth scroll) watches the page's overflow value to decide whether scrolling is locked. My rule forced overflow to "scroll" only while Lenis said "stopped", so Lenis saw "scroll", started again and removed its stopped class, the rule switched off, overflow went back to hidden, Lenis stopped again, and so on in a loop. Each swing moved the page 8px, so the header and menu items shifted about 4px side to side. Measured: the html class flipped between stopped and running several times a second while the menu was open.

**How the new fix works:** it no longer touches overflow, so Lenis stays stopped. Instead it gives the 8px scrollbar width back as padding, so the page is the same width open as closed.

**Checked how:** Chrome on the Mac Studio, published staging, 2044px viewport (8px scrollbar), 1 November 2026. First tried live in the page, then after publishing, sampling positions every 100 ms for 4 seconds with the menu open. Menu button left edge: 218px closed, 218px open, 218px closed again. The page stayed in the stopped state throughout (no flipping). Menu panel links sat at one steady position (the panel is centred on the full window, so they are 4px right of where they are when closed; they only show while open, so nothing moves). I have not watched it by eye, only measured.
**Not checked:** tablet and phone widths (window resize did not take effect); Safari and Firefox. Touch devices should be unaffected (rule is off for them). A mouse device with overlay scrollbars (Safari with "show scrollbars: when scrolling") may be shifted 4px right by this rule; not checked.
**Webflow backups (Designer):** "boss · brief #152 · before" and "boss · brief #152 · after", both seen in the Backups list; both recorded in boss. Snapshots/: not exported (the custom-code read is too large to write out by hand safely; interactions are not visible to snapshots anyway). Repo copy of the head block: not done (R-029 not started; it must include this rule, not the #149 one).
**Needs Michael:** try it (R-081 Try block); acceptance is his.
**Next useful action:** if it still moves at tablet width or in Safari, measure there.

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

