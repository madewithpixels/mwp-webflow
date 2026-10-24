# AGENTS.md — working rules for AI agents in this repo

Adapted on 24 October 2026 from boss's AGENTS.md (the rules agreed by Michael, Claude and Codex on 24 September 2026), for a Webflow site. Read by Codex automatically and by Claude through `CLAUDE.md`.

**Project:** the madewithpixels website: the new madewithpixels.co.uk, built in Webflow.
**Webflow site:** "madewithpixels", site ID `683cced100c63d0f60a847a3`, staging madewithpixels-dev.webflow.io. Home page ID `683cced100c63d0f60a847af`.
**This repo:** `/Users/michaelauty/Work on MacStudio/mwp-webflow` on the Mac Studio, `madewithpixels/mwp-webflow` on GitHub. It holds the four project docs and, from now on, the site's custom code (D-002).
**Owner:** Michael Auty. Michael chairs the work.
**Procedures and templates:** the `project-docs` skill (its single source is in the boss repo). **Writing for Michael:** boss's `docs/WRITING-FOR-MICHAEL.md`.

## 1. The four project docs
| File | Answers | Rule |
|---|---|---|
| `SCOPE.md` | What are we building? Does this work belong? | Purpose, principles, boundaries, success criteria |
| `ROADMAP.md` | In what order? | A roadmap item is a plan, not proof of work |
| `DECISIONS.md` | Why this direction? | Numbered; never rewrite a settled decision — supersede it |
| `STATUS.md` | Where do things stand now? | Dated snapshot with a reviewed-at commit; may lag reality |

> **Retrofitted 24 October 2026** from Michael's task list in boss and the session notes. Michael's task list in boss stays his; the roadmap is the agents' record of it.

## 2. Starting a session
1. Read the STATUS header, then the parts of the docs the task touches.
2. Run `git log` since the reviewed-at commit and `git --no-optional-locks status`. Say so if work landed that the docs don't reflect. Leave uncommitted work that isn't yours alone.
3. If the work doesn't fit SCOPE or contradicts a settled decision, stop and ask.
4. Name the R- item(s) the session serves.

## 3. Work, proof and sign-off are separate
- **State:** planned · in progress · blocked · built · dropped
- **Evidence:** none · verified (local) · verified (live) · n/a — for this site, "verified (live)" means checked on the published staging site, and say which browser and width.
- **Acceptance:** pending · accepted (date) — **Michael only**. Acceptance is Michael trying it on staging. Never mark your own work accepted; recording a verdict he gave (in boss or in chat, quoting him) is transcription.
- Everything Michael reads follows boss's Writing for Michael: plain English, IDs second, numbered steps.

## 4. What agents may change
- **Directly, on `main`:** STATUS entries; State and Evidence; evidence links; corrections of plain fact; roadmap items and order; new decisions (as `Proposed`); scope changes.
- **Never:** edit a settled decision in place (supersede it); delete history; set Acceptance (except to record his verdict); drop work.

## 5. Michael's task lists, time and billing are his
- Never create, edit or reorder tasks in boss's task lists. Agent work is tracked against R- items here.
- Never create, edit or estimate time entries **unless Michael asks in that session**, and then say exactly what was written and how it was worked out (as on 24 October 2026).

## 6. Working in Webflow
- **Designer first** (D-004). Custom code only where Webflow can't do the job.
- **Styles** follow the Webflow UI-safe styling rules (D-006): no new class without Michael's approval (name and properties first); no combo classes, grid or pseudo-element styles through the MCP; longhand only; read back after writing. Check `isFromLibrary` before editing any `mwp-css-nav_*` class: the SmashBurger library has copies with the same names.
- **Options first** (D-007): describe the choices before a visual change; Michael picks.
- **Custom code** (D-005): write it straight into Webflow through the MCP, not as snippets for Michael. `set_site_freeform_code` and `set_page_freeform_code` replace the whole block: read it first, keep everything else exactly, and check the echoed result. Copy the changed block into this repo too (R-029), until the site loads from jsDelivr (R-055); after that, change the repo, not Webflow.
- **Publishing:** Michael publishes, and checks and backs up after every task (D-008). boss's publishing trial (D-009) allows the staging domain only, never the custom domain.
- **Testing:** the Designer doesn't run custom code; check on the published staging site. Use Claude in Chrome on the Mac Studio for anything about timing or animation; the built-in browser pane throttles animation frames and is only good for layout. Webflow interactions (IX3) run on GSAP ScrollTrigger: see the sticky-section and redraw notes behind D-017 before changing scroll animations.
- **Ignore** the old `mwp-site-menu-*` menu on staging (D-015).

## 7. Ending a session
Write a dated, signed STATUS entry for Michael: Changed (with R- IDs) · Outputs · Checked how · Still open · Needs Michael · Next useful action, plus a Handoff paragraph if someone else picks it up. Ask Michael to check and back up.

## 8. Commits
Reference the item ID (`R-029: site footer scripts into the repo`). Commit and push only when Michael asks. A shell that can't delete files (the Cowork shell on the Mac) must not commit here: git leaves lock files behind that break the next git command.

## 9. Style
British English, plain language, dates written out (24 October 2026). Update in place, except the STATUS log and superseded decisions, which keep their history.

## 10. Reporting into boss
Not switched on for this repo yet. When boss's Webflow projects work (boss R-115) registers this site, follow boss's AGENTS.md §10 here too. Until then: do the work, write STATUS, and let Michael commit.
