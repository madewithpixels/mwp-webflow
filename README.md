# mwp-webflow

The madewithpixels website's project record (SCOPE, ROADMAP, DECISIONS, STATUS, AGENTS) and its custom code.

## Custom code: edit in `src/`, build into `dist/`

```
src/
  site/        every page            -> dist/site.min.js
  home/        Home page             -> dist/home.min.js + dist/home.min.css
  estimate/    Estimate page         -> dist/estimate.min.js
  portfolio/   project pages         -> dist/portfolio.min.css
dist/          the built, minified files (with .map source maps). Committed, because jsDelivr serves them from GitHub.
build.cjs      the build script (esbuild)
```

A bundle is any folder in `src/` with an `index.js` and/or `index.css`. The index file lists, in order, which files go in
(`import './ticker-marquee.js';` or `@import './contents-device.css';`). To add a script: put the file in the folder and add one line to the index.

### Everyday use
One-off set-up (needs Node; check with `node -v`): in Terminal, in this folder, run `npm install`.

| Command | What it does |
|---|---|
| `npm run build` | Builds everything once into `dist/` |
| `npm run watch` | Rebuilds each time you save a file in `src/` |
| `npm run dev` | Same as watch, and serves `dist/` at `http://localhost:5173/` (e.g. `http://localhost:5173/home.min.js`) so a page on staging can load the newest build before anything is pushed |

Commit `dist/` together with `src/`. The site does not load any of this yet: until the switch-over (R-055, D-002, D-003, D-023) the live code is still
in Webflow's code boxes, and these files are the source being prepared for it.

### Serving through jsDelivr (when the switch happens)
Tag a release (`v0.1.0`, ...) and load the tagged files, for example
`https://cdn.jsdelivr.net/gh/madewithpixels/mwp-webflow@v0.1.0/dist/home.min.js` (`defer`). Use a new tag per release so addresses never go stale.

### Where each source file came from (R-029)
| File | Webflow code box it was copied from |
|---|---|
| `src/site/menu-contact-text.js` | Site settings, head: inline script "MenuContactText" 1.0.3 (R-105) |
| `src/site/page-transition.js` | Site settings, footer: the project page slide transition (R-083, R-103) |
| `src/home/contents-device.css`, `.js` | Home page, head: the contents device block, appended after the R-093 block (R-099, R-104). It was one HTML block with two `<style>` and one `<script>`; the original is kept in `archive/contents-device.html` |
| `src/home/ticker-marquee.js` | Home page, footer: the ticker script |
| `src/home/ticker-mask.js` | Home page, written by Codex for R-035; the exact box is not recorded |
| `src/home/pricing-cta-mobile-arrow.js` | Home page, for R-101; the exact box is not recorded |
| `src/home/contact-bubbles.js` | Home page, footer: the fourth `<script>` (R-079) |
| `src/home/custom.js` | The original back-layer parallax. **Not in the Home bundle** until R-029 confirms the site still runs it |
| `src/estimate/estimate-*.js` | Estimate page, footer: five inline scripts (R-106 to R-111) |
| `src/portfolio/project-nav-arrows.css` | The Portfolio Nav component's second code embed (R-038) |

**Not in the repo yet** (R-029): the larger blocks in the Home page head and footer and the Site head and footer. They are in `snapshots/custom-code.json`
as one string each and still need splitting into files here.

### Notes
- The build targets Safari 15 (the iPad Air 2 runs iOS 15.8), so newer syntax is rewritten for it.
- Each bundle runs inside its own wrapper, so top-level names no longer leak between scripts. Anything one script needs from another must be on `window`.
- The Webflow code boxes are `<script>` blocks that run where they sit; a bundle loaded with `defer` runs after the page is parsed. Check load order and timing when each box is switched.
