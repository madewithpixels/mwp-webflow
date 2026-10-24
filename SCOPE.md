# madewithpixels website — Scope

*Retrofitted 24 October 2026 by Claude (Cowork), from Michael's task list for the project in boss ("madewithpixels Website"), the session notes in the "MWP Website 2026" Claude project, and Michael's message of 24 October 2026. Anything marked (inferred — confirm) is my reading, not something Michael has said.*

## Purpose
Finish and launch the new madewithpixels.co.uk, built in Webflow, in place of the current site. Then use it to win work: local and sector landing pages, a social campaign and promotion of the studio's Webflow scripts.
*(Sources: the "Finish MWP site" task, the Webflow '26 and Phase 2 lists in boss.)*

- **Staging:** madewithpixels-dev.webflow.io (Webflow site ID 683cced100c63d0f60a847a3).
- **Live today:** madewithpixels.co.uk, the old static site on Azure, until the relaunch. *(boss memory of the site; inferred — confirm it is still the live one.)*
- **This repo** (`madewithpixels/mwp-webflow`): the four project docs, and the site's custom code once it moves out of Webflow's custom code boxes and is served through jsDelivr (Michael, 24 October 2026; D-002).

## Principles
- **S-01 · Webflow first.** Keep as much as possible in the Webflow Designer (native interactions and styles) rather than custom scripts, so Michael can change it himself. (D-004)
- **S-02 · Everything stays editable in the Designer.** Styles written by agents follow the Webflow UI-safe styling rules. (D-006)
- **S-03 · Michael sees the options before anything visual changes.** He chooses; agents build. (D-007)
- **S-04 · A check and a backup after every task.** Michael publishes and takes the backups. (D-008)
- **S-05 · The brand comes first.** The palette and type sizes don't change to chase accessibility or speed scores; the hit is accepted. (D-009)
- **S-06 · Motion that holds up.** Scroll animations must look the same however you arrive at a section: scrolling, the menu, a resize, or a phone. (D-017, D-018)

## In scope
- The home page and its scroll sections: hero, intro, about, ticker, pricing, portfolio, testimonial wall, contact.
- The 39 portfolio project pages and the transitions into and out of them.
- The estimate page (/estimate) as it sits in the site: layout, forms, success pages, look. *(The estimate tool's own code lives in its own repo, MWP-Instant-Website-Estimate.)*
- Phone and tablet layouts.
- Launch preparation: speed, SEO, schema, analytics, forms, custom code on jsDelivr.
- After launch (Michael's "Phase 2" list): landing pages, schema links, social profiles, promoting the Webflow scripts.

## Out of scope
- The SmashBurger navigation component itself. It has its own project; this site only updates to its releases.
- faulty-terminal, the hero's background library. It has its own repo and project; this site only sets its options.
- The estimate tool's code (its own repo).
- boss's side of the relaunch (search tracking, leads, the relaunch brief). Listed here only where the site has to do something for it.

## Success criteria (inferred — confirm)
- The new site is live on madewithpixels.co.uk, with old addresses redirected and nothing lost in search.
- It works and reads well on desk, tablet and phone.
- Enquiries from the forms arrive and are counted in GA4 and boss.

## Open questions for Michael (not blocking)
- Is the old Azure site still what madewithpixels.co.uk serves, and do its old addresses need redirecting? (R-059)
- Success criteria above: right, or what would you add?
