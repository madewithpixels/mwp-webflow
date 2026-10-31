# Clickable testi-wall: how it is built and what a click could do (R-074)

Written 1 November 2026 by Claude (night shift), brief #165. Options only (D-007): nothing in Webflow was changed, published or touched, and no interaction was touched. Michael picks.

## 1. What I found (checked on published staging, Chrome on the Mac Studio, 2044px wide)

**The wall is made of empty coloured tiles.**
- The wall is the section `.testi-wall` (id `testimonials`), about 20,600px tall on the page. It has a sticky layer, `.testi-wall_sticky` (1132px tall, overflow hidden), holding two things: the tiles (`.testi-wall_stage`) and the words (`.testi-wall_quotes`).
- The stage holds two halves (`.testi-wall_half`) and a middle row; in all there are five rows (`.testi-wall_row`) and 191 tiles (`.testi-wall_chip`, coloured raspberry, teal or coral through `is-raspberry` and `is-teal`). Some tiles sit two to a column (`.testi-wall_stack`). Each side also has a hidden extra row (`.testi-wall_backrow`) that only appears as the wall parts.
- **A tile is an empty `div`: no text, no image, no link, no project name.** Nothing on a tile says which testimonial or project it belongs to. The cursor over a tile is the plain arrow, and nothing happens on click.
- The whole stage is tilted by about 20 degrees, and the rows slide sideways in alternating directions (sideways offsets I read were from about -860px to +1000px).

**The words are a separate layer on top.**
- `.testi-wall_quotes` holds a heading ("Praise for madewithpixels") and ten testimonials (`.testi-wall_blockquote` with a `cite`). It has `pointer-events: none`, and each quote is at opacity 0 until the wall parts. So today clicks and hovers go straight through it to the tiles.
- The ten people are: Matt Cottril (SOYO Live), Roberto Da Rae (Travel Ledger), Matthew Williams and Darren Bristow (Quba New Media), George Marshall (Halstead Glass), Alley Bridge-York, Simon Spinks (Aquaculture), Sam Walby (Now Then Magazine), Maria Smith (Creswell Heritage Trust), Mark Welch (SOYO). Only some match a project page. At least Travel Ledger, Halstead Glass and Now Then Magazine have one on the Work list. Quba New Media, Creswell Heritage Trust, SOYO and Alley Bridge-York did not show a matching project in the Work list I read. (Quote-to-project matching is a guess from names; I did not check the CMS.)

**How it moves.**
- One scroll-tied interaction (GSAP ScrollTrigger, "scrub", start 38,338px, end 60,073px on the page) builds the wall, tilts and parts it, and reveals the quotes. Page scrolling is smoothed by Lenis. There are 22 ScrollTriggers on the page in all. I could read the one for this section but not what is in the interaction (Webflow's MCP interaction read was not used, see section 5).
- A `<style>` block in the page sets a reduced-motion fallback (the wall is hidden and the quotes stack as plain text) and the recede/blur look for the inner rows through animation variables ("Testi Inner Blur", "Testi Inner Mix", "Testi Back Show").
- **Custom code that touches the tiles:** the Contact bubbles script (`contact-bubbles.js`, the R-079 record). It looks up every `.testi-wall_chip` outside the back rows, picks 42 of them as it scrolls into Contact, and hides them while stand-in tiles fly to the logo. On phones and tablets (under 992px) that is a timed animation. So any click code must leave tiles alone while they are flying or hidden.
- Nothing links to a project from the wall. The project links live in the Work list above it (`.folio-list-link`, `/portfolio/<name>`), and the folio wall (153 image tiles, no links either) is in a different section.

**Why the "portfolio images" wording matters.** Michael's task said "make portfolio images clickable with a view transition to the project page". The testi-wall has no images, so R-074 was taken to mean the folio wall, which is now also R-086. Everything below is about the testi-wall as the brief asks. Option 3 is the folio-wall reading.

**What a click can and cannot do on this wall**
- It can only reach a tile while the wall is built, before it parts. After it parts, the quotes appear but are not clickable.
- "Pause the wall" has nothing to pause: the wall does not run on a clock, it moves only as you scroll. The closest honest version is "stop the page scrolling while a card is open".
- Dragging the rows sideways fights the scroll interaction, which owns each row's sideways position. (Not tried; reasoned from the transforms I read.)

## 2. Options

### Option 1 — Click a bubble to read a testimonial in a larger card
**What the visitor sees:** the cursor changes to a pointer over the tiles while the wall is built. Click a tile and a card fades in over the wall with one testimonial (quote, name, company) and a close button. Click outside, press Escape or the close button, and it fades out. Scrolling is held still while it is open.
**Designer alone?** No. The card's look can be built in the Designer, but picking which testimonial goes to which tile, the open and close, and holding scroll still need custom code (D-004: only where Webflow can't). A Webflow click interaction could fade the card, but it could not choose the quote or hold Lenis still.
**New classes (for Michael to approve, D-006).** I would reuse the existing `testi-wall_blockquote` and `cite` styling inside the card and add only:
- `testi-wall_card`: position fixed, inset 0, display flex, centre, z-index 30, opacity 0, pointer-events none (the open state is switched by code).
- `testi-wall_card-box`: max-width about 40rem, padding 2.5rem, a slate background, rounded corners (the same radius as the tiles).
- `testi-wall_card-close`: a corner button.
Longhand properties only, no combo classes, no grid, no pseudo-elements (D-006). The cursor and the open state would go in the page's own style block, as the reduced-motion rules already do, because the Designer can't set a cursor on 191 tiles through one existing class without changing `testi-wall_chip` itself.
**Risk to the scroll animations (D-017):** low to medium. The card is outside the sticky stage, so it does not change the wall's size or position, and the ScrollTrigger is not touched. Real risks: (a) stopping Lenis then starting it again can leave the scroll position off, so the wall and the Contact fly-in jump; I would test a click, close, then scroll on, and a menu jump while it is open; (b) clicks on tiles the Contact script has hidden or is flying; the code should ignore hidden tiles; (c) a click on the wall must not fire after a scroll flick on a phone (a quick tap guard).
**Which quote on which tile (guess):** the tiles carry no data. Simplest is to give tile number N (in reading order) quote N modulo 10, so every tile opens a quote and the same tile always opens the same one. The alternative is to tie each quote to a project's colour. I would not try that.
**Effort:** about one script of 60 to 100 lines plus three classes. Desktop first. Phones: tap works, but the timed fly-in needs checking.

### Option 2 — Click a bubble to open the project it belongs to
**What the visitor sees:** hover a tile and it lifts slightly; click and the page goes to a project page through the existing page transition (the pixel transition, or whatever R-036/R-037 end up with).
**Designer alone?** Almost no. A tile is a `div`; to be a link it would need to be a link block, and 191 tiles would each need a link set in the Designer. The tiles also feed the Contact fly-in script, which needs them as they are. So custom code: one click handler that reads a project address from each tile.
**New classes:** none needed (a cursor rule in the page style block, as above).
**The catch (this is why I rank it last):** a tile does not say which project it is. We would have to make up the mapping, for example giving each of the 14 or so projects a colour and spreading them over the wall, so a visitor clicks a plain coloured tile and lands on a project they had no way to guess. The testimonials link to only about 3 of the 10 projects. **I'd only do this if Michael wants the wall to be a decorative shortcut, not a way to read the praise.**
**Risk to the scroll animations:** low, as no layer is added. Two risks: a page change from the wall must clear the tile layer used by the Contact script; and the page transition measures the screen, so doing it mid-scroll (while the wall is tilted) needs checking.
**Effort:** a short script, plus a decision on the mapping.

### Option 3 — Leave the testimonial wall alone and make the folio wall clickable (R-086)
**What the visitor sees:** nothing new on the testimonial wall. In the folio wall, under the hero, each project image links to its project page (straight link, or the image growing into place as the page opens, to be chosen in a separate options note under R-086).
**Designer alone?** The folio wall has 153 image tiles, so each is an image with a link in the Designer (check each one has its project; I did not read them). A straight link is Designer-only; "morph into place" is custom code and a risk to the page transition.
**New classes:** none for a straight link.
**Risk to the scroll animations:** low for a straight link; higher for a morph, because the folio wall has three ScrollTriggers (they start at 679, 1132 and 1811px and the last runs to 16,188px) and the morph would run on top of one of them.
**Why list it:** it matches what the task wording most likely meant ("portfolio images") and it needs nothing invented, because the images already know their projects. It does not make the testimonial wall clickable.

## 3. Recommendation

1. **Fold R-074 into R-086 and do Option 3 first.** The task asked for portfolio images, and only the folio wall has them. It uses real data and the lowest-risk method.
2. **If Michael still wants the testimonial wall clickable, do Option 1.** It is the only one that gives the tile a real job: the wall is empty colour, and a click that shows a real testimonial is a satisfying thing to find. Build it desktop first, hold the scroll still carefully and check it again after any change to the Contact fly-in.
3. **Skip Option 2** unless he is happy with an invented mapping.
4. **Dragging rows sideways:** not recommended for the testimonial wall, because the scroll interaction sets each row's sideways position and a drag would fight it. It belongs in a separate options note after the folio wall's click is settled.

## 4. If Option 1 is chosen: build plan

1. Michael approves the three class names and properties above (D-006).
2. Read the Home page footer custom code first (replace-whole-block rule, D-005); add a fifth script block, keep the other four exactly; copy it into this repo (R-029). Make the "before" backup (D-103).
3. Build the card in the Designer with the three classes, outside `testi-wall_sticky`, but inside the section so it is hidden with it.
4. Script: only while the wall is built (a scroll range read from the wall's start and the parting point, not hard-coded), ignore hidden or flying tiles, ignore a click that follows a drag or flick, stop Lenis on open and start it on close, close on scroll-key, Escape or outside click.
5. Check on published staging in Chrome (timing and animation), at desktop width: click, close, scroll on; open one, use a menu jump; scroll into Contact and back; reduced motion (the wall is hidden there, so nothing to click).
6. Michael publishes, checks and backs up (D-008).

## 5. Checked and guessed

**Checked (published staging Home page, Chrome on the Mac Studio, 2044px wide, by reading the page and screenshots):** the element tree and class names; that tiles are empty `div`s with no link or text; the quotes layer (`pointer-events: none`, opacity 0 until the wall parts, ten quotes plus heading); the stage tilt and row offsets; the single ScrollTrigger for the wall (start 38,338, end 60,073, scrub); the folio wall's 153 tiles and no links; that project links exist only in the Work list; that a point in the middle of the wall hits a tile when the wall is built; that `contact-bubbles.js` picks `.testi-wall_chip` tiles (by reading the repo copy).

**Guessed or not checked:**
- **I did not use the Webflow MCP.** Reading through it needs a Designer backup first, and I judged the live page and the repo's own copy enough for an options note. So the interaction's own steps, the Designer class properties, and whether the folio images carry links in the Designer were not read. Because I made no Webflow tool call, no backup was made and nothing was changed there.
- The exact scroll range in which a tile is clickable (the parting starts somewhere after the wall is built); I guessed "from the wall's start to the parting".
- Whether a drag conflicts with the row offsets (reasoned, not tried).
- Quote-to-project matching (names only).
- Phones and tablets, Safari and Firefox, and a real 60fps look: not checked.
- That Lenis can be stopped and started without a jump: not tried.
