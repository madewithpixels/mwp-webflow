# Where the burger menu links land: tablet and phone landscape (11 November 2026, brief #377)

Items: R-136, R-138, R-139 (related R-124, R-131). Nothing was changed in Webflow, scripts or classes; nothing published.

## How it was measured
Published staging (madewithpixels-dev.webflow.io), Claude in Chrome on the Mac Studio. The browser window would not resize, so each band is a same-origin frame of the stated size inside the tab (media queries and Lenis see the frame size). Fresh load of the start page, 3.5 seconds to settle, the burger link clicked by script (the menu is not opened by a real tap), landing read 4.5 seconds later. Not a real iPad or phone; not Safari.

**Offset** = where the page actually landed minus where the section's top was at load, in px. 0 is the section top. Positive = landed that far past the top (later in the page); negative = landed that far short. For Pricing at 1024 the section itself moves down 1,210px once its pinned spacer is built, so offsets use the top at load.

## Home page
| Link | 768x1024 | 820x1180 | 1024x768 | 667x375 |
|---|---|---|---|---|
| About | top 14,643 · landed 14,643 · **0** | 16,874 · 16,874 · **0** | 10,982 · 11,981 · **+999** | 5,786 · 5,786 · **0** |
| Pricing | 21,260 · 21,260 · **0** | 24,494 · 24,494 · **0** | 26,933 · 28,143 · **+1,210** | 7,709 · 7,709 · **0** |
| Work | 23,633 · 23,748 · **+115** | 26,938 · 27,061 · **+123** | 30,773 · 30,927 · **+154** | 9,976 · 10,076 · **+100** |
| Testimonials | 27,791 · 29,020 · **+1,229** | 31,268 · 32,684 · **+1,416** | 35,266 · 36,226 · **+960** | 14,108 · 14,558 · **+450** |
| Contact | 46,428 · 46,428 · **0** | 52,744 · 52,744 · **0** | 49,243 · 49,243 · **0** | 20,933 · 20,933 · **0** |

(each cell: section top at load · where the page landed · offset)

## From the Estimate page (burger link on /estimate, which jumps to Home)
Landing read on the Home page after the jump, against the same section tops as above.
| Link | 768x1024 | 820x1180 | 1024x768 | 667x375 |
|---|---|---|---|---|
| About | **0** | **0** | **0** (Home gives +999) | **0** |
| Pricing | **0** | **0** | **0** (Home gives +1,210) | **0** |
| Work | **+115** after settling (first read, 2s: −3,991) | **+123** | **−2,688** | **+100** |
| Testimonials | **+1,229** | **+1,416** | **−2,688** | **+450** |
| Contact | **0** | **0** | **−2,688** | **0** |

The Estimate path matches the Home path at 768, 820 and 667, except at 1024 landscape. Checked twice for Work at 1024 and 768, reading at 2, 4.5, 8 and 14 seconds: at 768 the first read is far short and corrects itself by 4.5 seconds; at 1024 it stays 2,688px short for 14 seconds.

## What the numbers say
1. **Raw-top bands (768, 820, 667): About, Pricing and Contact land on the section top (0).** Michael's complaint about About at portrait is that the intro text hasn't revealed yet at that spot (see R-138), not a pixel error.
2. **Work lands 100 to 154px past its top in every band** (667: 100, 768: 115, 820: 123, 1024: 154). The offset grows with the frame, so it looks like a share of the frame (about 0.15 of the width at 667 to 820, 0.15 at 1024), not a fixed number. That is the desktop rule's 0.2 factor, or something close, being applied below 992px.
3. **Testimonials lands 450 to 1,416px past its top** (1.2 screens at portrait, 1.2 at 820, 1.2 at 667). Its section is very tall (18,637px at 768), so a share of its length reaches deep into the pinned reveal.
4. **At 1024 landscape, Home uses the desktop numbers** (About +999, Pricing +1,210, Testimonials +960). They were tuned at 1440x900.
5. **From Estimate at 1024 the three later sections land 2,688px short**, and never correct. The same 2,688px is how far those sections move down once the page has built its pinned spacers. At 1024 the Estimate path jumps using the layout before the spacers exist; at 768 the page re-settles and corrects.

## Cause hypotheses (inferred — confirm)
- The Home jump script (head "Primary nav" block, offsets stored on the sections) applies the desktop offsets at 992px and up, and the raw top below 992. That explains the 1024 numbers and the 0 offsets, but not Work and Testimonials below 992 (still unexplained; see R-138).
- The Estimate path (script "EstimateMenuAnchors", R-106) lands on the raw top without the desktop offsets, and at 1024 measures before the pinned spacers (D-017 settle pass) are built. That explains the −2,688.

## Fix options
**A. Per-size landing numbers in the existing scripts (custom code, D-005). Recommended.** Add tablet and short-landscape values next to the desktop ones, apply them below 992 and for frames under about 500px tall, and make the Estimate path wait for the settle pass before it jumps (or re-aim once after it). I write it straight into Webflow and copy it into the repo (R-029). Risk: the numbers need a look on a real iPad and phone; the script is shared with desktop, so a slip could move desktop jumps (re-test 1440). Needs the unexplained Work and Testimonials extra found first.

**B. Make the offsets size-proof (custom code, D-005).** Express each landing as a share of the section's own length or the frame height, one rule for all sizes, and give the Estimate path the same function. Risk: a bigger change to scripts Michael has accepted (R-106); desktop must be re-tested end to end.

**C. Designer side.** Change the sections' own spacing at tablet and landscape (for example the top padding of Work so the heading clears the menu, the reveal start of About) so the raw top is already a good landing. No script change. Risk: touches layout and the pinned animations (R-126, R-127, D-017); new classes need approval (D-006) and interaction edits cannot be checked in the Designer. It would not fix the Estimate 1024 miss, which is a timing fault.

Recommendation: A, then B only if the per-size numbers prove fiddly. C is worth doing alone only for the Work heading position in phone landscape (R-136), where "it needs to be lower" is a spacing question.

## Not checked
A real iPad or phone; Safari; the real burger tap; touch scrolling; Estimate pages reached with a hash already in the URL (R-131).
