# madewithpixels website — Decisions

*Retrofitted 24 October 2026 by Claude (Cowork). Harvested from the session notes in the "MWP Website 2026" Claude project, Michael's task list in boss, and Michael's instructions in sessions. Each decision cites its source. Status words are fixed (Proposed · Accepted · Superseded by D-nnn · Rejected) so boss can read them.*

## D-001 · The project docs live in this repo
**Status:** Accepted
**Qualifier:** technical — settled by Claude (night shift), 25 October 2026, under D-096; Michael can reopen it
**Qualifier:** inferred — confirm. Michael added this folder on 24 October 2026 and asked for the boss doc structure; boss's D-103 says Webflow sites keep their docs at `~/Work on MacStudio/Webflow/<site>/`.
**Date:** 24 October 2026
**Source:** Michael's message, 24 October 2026; boss DECISIONS.md D-103.
SCOPE, ROADMAP, DECISIONS and STATUS sit in `mwp-webflow` (GitHub `madewithpixels/mwp-webflow`) beside the site's custom code, rather than in a separate docs-only folder.
**Rationale:** one place for the site's record and its code; D-103 already allows the docs repo to "become, or sit beside," the site's own repo.
**Consequence:** when boss's Webflow projects work (boss R-115) registers madewithpixels, point it at this folder.

## D-002 · The site's custom code moves into this repo and is served through jsDelivr
**Status:** Accepted
**Date:** 24 October 2026
**Source:** Michael's task "ALL custom code served via jsDelivr" (Launch prep); his message of 24 October 2026 ("the custom.js file will eventually hold our custom code and be served via jsDelivr").
The scripts now pasted into Webflow's site and page custom code boxes move into this repo (starting with `custom.js`) and are loaded from jsDelivr.
**Consequence:** script changes become commits, pushes and a jsDelivr version bump instead of edits in Webflow. See D-003 for timing.

## D-003 · Move the code in two steps: the repo becomes the record now, the site switches to jsDelivr at launch prep
**Status:** Accepted
**Qualifier:** Michael, 24 October 2026: agreed the recommendation (switch at launch prep).
**Date:** 24 October 2026
**Source:** Claude's suggestion, 24 October 2026 (with the roadmap order).
**For Michael:** Should the site load its scripts from jsDelivr now, or only at launch prep?
**Options:**
- Now: every tweak during the polish work needs a commit, a push and a cache refresh before you can see it on staging.
- At launch prep (recommended): keep editing in Webflow while the animations are still changing, but copy every script into this repo after each change so the repo is the record. Switch the site over once, near launch.
**Recommendation:** at launch prep, because the motion work still changes the code most days.
**If you don't decide:** agents copy the code into the repo after each change and leave the site loading it from Webflow.

## D-004 · Keep as much as possible in the Webflow Designer
**Status:** Accepted
**Date:** standing (recorded October 2026)
**Source:** Michael, in sessions; account memory for the site.
Native interactions and Designer styles first; custom scripts only where Webflow can't do it (for example clip-path animation on the pricing cards, the bubble morph).

## D-005 · Agents write code changes straight into Webflow's custom code
**Status:** Accepted
**Qualifier:** Michael, 24 October 2026. Changes once D-002's switch to jsDelivr happens: then agents change the repo instead.
**Date:** 24 October 2026
**Source:** Michael ("why can't you put it in custom code?"), 24 October 2026.
Agents write custom code through the Webflow MCP rather than handing Michael snippets to paste. The custom code boxes are replaced whole, so agents always read the current content first.

## D-006 · Styles written by agents stay editable in the Designer
**Status:** Accepted
**Date:** standing
**Source:** the webflow-ui-safe-styling skill; Michael's rules in sessions.
No new class without Michael's approval (name and properties listed first); no combo classes, grid or pseudo-element styles through the MCP; longhand properties only; styles read back after writing.
**Watch out:** the site has its own `mwp-css-nav_*` classes and SmashBurger library copies with the same names. Check `isFromLibrary` before editing one (nav notes, 23 October 2026).

## D-007 · Options before visual changes; Michael decides
**Status:** Accepted
**Date:** standing
**Source:** Michael, in sessions.

## D-008 · Michael publishes and backs up; a check and a backup after every task
**Status:** Accepted
**Qualifier:** boss's publishing trial (D-009) would let agents publish to the staging domain; until then Michael publishes.
**Date:** standing (since 30 September 2026)
**Source:** Michael, "Ask me to check and backup after every task complete"; task-queue notes.

## D-009 · Publishing trial: agents publish only to the staging domain
**Status:** Accepted
**Qualifier:** a trial run from boss (boss D-104, 21 October 2026); Michael decides at the end. madewithpixels after its relaunch is the real test.
**Date:** 21 October 2026
**Source:** boss DECISIONS.md D-104, R-118.

## D-010 · The brand palette doesn't change for contrast scores
**Status:** Accepted
**Date:** 29 September 2026
**Source:** PageSpeed notes, 29 September 2026.
Contrast failures on brand colours are accepted. A raspberry tint on the main heading and larger, bolder brand text were tried and reverted.

## D-011 · Fonts: the Adobe kit carries Soleil only; weights are trimmed after the final legibility pass
**Status:** Accepted
**Date:** 29 September 2026
**Source:** PageSpeed notes, 29 September 2026; task "Finalise font-weight inclusions to complete PSI fixes".

## D-012 · Studio facts for search and schema
**Status:** Accepted
**Date:** 29 September 2026
**Source:** SEO / schema audit notes, 29 September 2026.
Founded 2008; job title "Founder, Lead Designer & Developer"; public email and phone in the schema; project names as listed in the audit.

## D-013 · Landing pages stay out of the sitemap until their copy is written
**Status:** Accepted
**Date:** 29 September 2026
**Source:** SEO audit notes; task "Remember to set them to index in the sitemap before launch".

## D-014 · The canonical address is set at launch, not before
**Status:** Accepted
**Date:** 29 September 2026
**Source:** SEO audit notes; task "set canonical link to https://www.madewithpixels.co.uk".

## D-015 · Work from the Designer, not from staging's old menu build
**Status:** Accepted
**Date:** 23 October 2026
**Source:** nav notes, 23 October 2026.
Michael reverted a Codex rebuild of the open menu. Its `mwp-site-menu-*` classes may still show on staging but are not in the Designer; ignore them.

## D-016 · Home to project pages: a title-and-image morph on trial, the pixel transition as fallback
**Status:** Accepted
**Qualifier:** on trial since 30 September 2026. Michael's open task "Remove pixel page-transition" (R-036) would end the fallback.
**Date:** 30 September 2026
**Source:** task-queue notes (task 5); task "Different page transition".

## D-017 · Scroll animations measure sticky sections as if unstuck, and settle in page order after a jump
**Status:** Accepted
**Qualifier:** technical — settled by Claude, 24 October 2026; Michael confirmed the fix in Chrome, Safari and Firefox.
**Date:** 24 October 2026
**Source:** nav-jump-and-sticky notes.
Fixes the About text showing through behind Pricing after a menu jump. The pattern is reusable on other long scroll-animated sites (Michael has a job to try it on The Art of Factory Records).

## D-018 · The testimonial bubbles fly to the logo with the scroll on desktop, and on a timer on phones
**Status:** Accepted
**Date:** 24 October 2026
**Source:** heart-morph notes; Michael chose "Timed fly-in" and then "it's smoother — we'll leave it there for now".
On iPhone, anything moved in step with the scroll lags a frame behind it, so phones get a one-off timed animation the browser runs itself.

## D-019 · Scroll magnet: sections marked `data-snap` catch a fast scroll at their start (desktop only)
**Status:** Accepted
**Date:** 24 October 2026
**Source:** intro-pin notes (scroll magnet v2.1); Michael chose the catch version.

## D-020 · Folio wall images: square crops in WebP at quality 92
**Status:** Accepted
**Date:** 29 September 2026
**Source:** PageSpeed notes; Michael rejected quality 75 as too compressed.

## D-021 · Finish this site as far as possible before SmashBurger; update to its release afterwards
**Status:** Accepted
**Date:** 24 October 2026
**Source:** Michael, 24 October 2026 ("SB isn't finished yet… complete MWP site as far as possible, then finish SB").
The SmashBurger update (R-030) moves to the end of the roadmap. Menu changes that need the new release wait for it.
