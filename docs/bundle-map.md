# Bundle map (B1 proposal, 25 November 2026)

Where every block in the four boxes goes when the bundles are cut. Source: `snapshots/2026-11-25-tuning-batch2/`. Nothing is moved yet. Estimate head and footer (796 and 3,245 characters) go to the `estimate` bundle.

## Stays inline in Webflow (must run before first paint, or is the loader)
**Site head**
- Preconnect link.
- Shared core (script 3.6k and style 2k), per decision (a).
- Scrollbar width script.
- Project page transition hide rule (style and script).
- Home to project view transition (`@view-transition` style and the pagereveal script).
- Frame probe (194 characters).
- The loader (new).

**Home head**
- `<link rel="expect">`.
- Arrival cover (script and style).
- Pricing short-screen CSS (avoids a flash).

**Site footer**
- Lenis tags.
- The faulty-terminal tags and their init lines.

**Home footer**
- The FT logo resolve tag.

## `site` bundle (every page)
**CSS**
- Burger marker hide.
- Split-text line height.
- Open-menu phone button.
- Contact pills.
- Skip link.
- Contact tip.

**JS**
- Contact bubble script (4.9k).
- Menu close on leave (3.1k).
- Skip link script (2k).
- Terminal fade-in logic (1.2k).
- Lenis start-up and the shared parts of the 25k footer block.
- Scroll magnet (desktop; sections marked `data-snap`).

## `portfolio` bundle (project template only)
- Portfolio Nav arrows: style and script (5.4k, now in the Site head).
- Project page slide transition (in the Lenis block).
- Folio list hover preview: used on Home and the Portfolio list, so it goes in `site` unless the list is only on Home (to check).

## `home` bundle
**CSS**
- Testimonial wall.
- About sequence.
- Contents device.
- Phone About panel.
- Pricing CTA arrow.
- Hero scroll cue and exit mask.
- Hero nav.

**JS**
- Testimonial back rows.
- Scroll animation redraw (8.8k).
- Contents device.
- Folio wall lift.
- Pricing short-screen switch.
- Hero nav shift.
- Ticker.
- Pricing shapes.
- Heart (15k).
- About sequence mask.
- Logo marquee.

## Needs a decision before B1 (timing)
Head scripts run before the page exists; bundle scripts load after. Anything that listens for `DOMContentLoaded` is safe. Anything that touches elements immediately, or must beat first paint, stays inline. In the head blocks above that move, only the Portfolio arrows script and the contact bubble use `DOMContentLoaded` already; I will confirm each when cutting.

## Next
1. Extract blocks into `src/<bundle>/<feature>.js|css` with `index.js` importing them in box order.
2. Build.
3. Compare each bundle's unminified content to the box blocks (text diff, zero lines changed apart from imports).
4. Loader and dev switch (B2).
