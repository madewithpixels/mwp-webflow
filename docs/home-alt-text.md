# Home page alt text (R-053, brief #245)

**Status:** proposed - Michael to approve. Nothing has been written into Webflow. Edit the "Proposed alt text" column; leave a cell as `(empty)` for "decorative, alt left blank on purpose".

**Checked:** 2 November 2026, the published staging Home page (madewithpixels-dev.webflow.io), Chrome on the Mac Studio, desktop. Every `<img>` on the page was counted: **192**, all with empty alt. The Webflow MCP read tools were not used (see the end), so the file names below come from the published page, with Webflow's hash prefix and `-p-500` size suffix removed.

## Summary

| Group | Images | Proposed | Meaningful | Decorative |
|---|---|---|---|---|
| Folio wall (project montage) | 153 | Decorative, alt empty | 0 | 153 |
| Client logo strip | 36 | First copy of each logo named; repeats empty | 6 | 30 |
| "We're focussed on..." icons | 2 | Decorative (the words beside them say it) | 0 | 2 |
| Stray image with no file and no position | 1 | Decorative | 0 | 1 |
| **Total** | **192** | | **6** | **186** |

The one real decision is the folio wall. I recommend **decorative** (see below). If you choose to describe it, meaningful becomes 6 + 153 = 159 and decorative 33.

## 1. Folio wall: 153 tiles

Where: the "Hundreds of projects delivered for clients of all shapes and sizes..." section. Nine rows of 17 tiles, each 221px square. 131 different files; 22 files appear twice (the wall reuses some screenshots).

Kind: screenshots of finished client websites. No tile is a link and none carries text of its own.

**Recommendation: all 153 decorative (alt empty).** Reasons: it is a visual montage, the section's own heading says what it is, no tile links anywhere, and 153 near-identical descriptions would be read out one by one by a screen reader and add nothing. The projects themselves get proper descriptions on their own pages.

**If you would rather describe them**, use the pattern "Screenshot of the [client] website" and edit the client name below. Client names are my reading of the file names, so please correct any I have wrong (marked `?`).

| File name starts with | Tiles | Client (my reading) | Alt if described |
|---|---|---|---|
| nowthen | 12 | Now Then | Screenshot of the Now Then website |
| opus | 8 | Opus ? | Screenshot of the Opus website |
| origin | 7 | Origin ? | Screenshot of the Origin website |
| mednet | 6 | Mednet | Screenshot of the Mednet website |
| futura | 6 | Futura | Screenshot of the Futura website |
| bespoke | 6 | Bespoke ? | Screenshot of the Bespoke website |
| guild | 6 | Guild ? | Screenshot of the Guild website |
| mwa | 6 | MWA ? | Screenshot of the MWA website |
| aype | 5 | Aype | Screenshot of the Aype website |
| continuum | 5 | Continuum ? | Screenshot of the Continuum website |
| oxford | 5 | Oxford ? | Screenshot of the Oxford website |
| halstead | 5 | Halstead | Screenshot of the Halstead website |
| farmernorton | 4 | Farmer Norton | Screenshot of the Farmer Norton website |
| lynnbutler | 4 | Lynn Butler | Screenshot of the Lynn Butler website |
| fairness | 4 | Fairness ? | Screenshot of the Fairness website |
| soyolive | 4 | SOYO Live ? | Screenshot of the SOYO website |
| kentlife | 4 | Kent Life | Screenshot of the Kent Life website |
| dolphin | 4 | Dolphin ? | Screenshot of the Dolphin website |
| kadow | 4 | Kadow ? | Screenshot of the Kadow website |
| aquaculture | 3 | Aquaculture ? | Screenshot of the Aquaculture website |
| code | 3 | Code ? | Screenshot of the Code website |
| antoninewall | 3 | Antoine ? | Screenshot of the Antoine website |
| shogun | 3 | Shogun ? | Screenshot of the Shogun website |
| qualsys | 3 | Qualsys | Screenshot of the Qualsys website |
| noiseaware | 2 | Noise Aware | Screenshot of the Noise Aware website |
| creswellcrags | 2 | Creswell Crags | Screenshot of the Creswell Crags website |
| writingsheffield | 2 | Writing Sheffield | Screenshot of the Writing Sheffield website |
| vamoosh | 2 | Vamoosh | Screenshot of the Vamoosh website |
| insight | 2 | Insight ? | Screenshot of the Insight website |
| musttaudio | 2 | Mustt Audio | Screenshot of the Mustt Audio website |
| jessop | 2 | Jessop ? | Screenshot of the Jessop website |
| soyo | 2 | SOYO | Screenshot of the SOYO website |
| travelledger | 2 | Travel Ledger | Screenshot of the Travel Ledger website |
| ohm | 2 | OHM ? | Screenshot of the OHM website |
| blackcatwhitecat | 2 | Black Cat White Cat | Screenshot of the Black Cat White Cat website |
| shepherd | 2 | Shepherd ? | Screenshot of the Shepherd website |
| club600 (file `club6001`) | 2 | Club 600 ? | Screenshot of the Club 600 website |
| dionne | 1 | Dionne ? | Screenshot of the Dionne website |
| castlemarket | 1 | Castle Market | Screenshot of the Castle Market website |
| mollymalones | 1 | Molly Malone's | Screenshot of the Molly Malone's website |
| mcculley | 1 | McCulley ? | Screenshot of the McCulley website |
| MrWilsons | 1 | Mr Wilson's | Screenshot of the Mr Wilson's website |
| coronationstreet | 1 | Coronation Street ? | Screenshot of the Coronation Street website |
| tradinghistories | 1 | Trading Histories | Screenshot of the Trading Histories website |
| **Total** | **153** | | |

Proposed alt for all 153 as recommended: `(empty)`.

## 2. Client logo strip: 36 images

Where: the scrolling logo strip (class `logo-track`, inside `logo-mask`). It holds six logos, each repeated six times so the strip loops without a gap. Each is about 151 × 45px. Not links.

Meaningful: the logos say who the clients are. Name each logo once and mark the five repeats of each as empty, so a screen reader hears each client once, not six times.

| Position(s) in strip | File name | Kind | Proposed alt text |
|---|---|---|---|
| 1st copy | bbc-logo.svg | Meaningful | BBC logo |
| 1st copy | Armitage-shanks-logo.svg | Meaningful | Armitage Shanks logo |
| 1st copy | Speedo-logo.svg | Meaningful | Speedo logo |
| 1st copy | the-university-of-nottingham-logo.svg | Meaningful | University of Nottingham logo |
| 1st copy | ITV Logo.svg | Meaningful | ITV logo |
| 1st copy | EH Logo.svg | Meaningful | English Heritage logo (my reading of "EH": **please confirm**) |
| 2nd to 6th copies (30 images, the same six files) | as above | Decorative (repeat) | (empty) |

Note for whoever applies this: the repeats must be exactly the first copy's files, and the clone images can be hidden from screen readers by the empty alt. Which six are the "first copy" is the first six in the strip in page order.

## 3. "We're focussed on..." icons: 2 images

Where: the "We're focussed on..." block, beside the headings "Webflow" and "Lovable" (class `focus-block` in `focus-wrapper`).

| Image | File name | Kind | Proposed alt text |
|---|---|---|---|
| Webflow icon | IconWebflow.svg | Decorative: the word "Webflow" sits next to it | (empty) |
| Lovable icon | Lovable.svg | Decorative: the word "Lovable" sits next to it | (empty) |

## 4. Stray image: 1

Where: after the end of the page wrapper, next to the contact details. It has no file (empty source), no width on screen, and only a style attribute. It looks like a hidden tracking or tag pixel added by a script, not a design image.

Proposed: (empty), decorative. Nothing to edit in Webflow; it may not be in the Designer at all.

## Not covered, on purpose

- The seven inline SVG shapes on the page are not `<img>` elements, so they were not in the 192. They are worth a look when the alt text is applied (they need `aria-hidden` or a title if they carry meaning). I did not inspect them.
- The hero project wall and testi-wall contain no `<img>` elements on the published page.
- Project pages and /estimate are outside this brief.

## How this was checked and what is missing

- Counted and grouped with a script in the page on the staging domain: 192 `<img>` elements; 153 + 36 + 2 + 1 = 192.
- I did **not** use the Webflow MCP read tools. They needed a "before" backup first, which has to be made in the Designer, and nobody could sign in to do it overnight. Because the published page lists every image, nothing was lost, but I could not confirm the Designer element names or whether an image is set to "Decorative" in Webflow's own settings. Nothing in Webflow was read or changed, so no backup was made.
- Client names marked `?` are my guesses from file names.
