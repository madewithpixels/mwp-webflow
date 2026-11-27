# Colour lab (R-228, D-030)

A floating panel for trying colour schemes on the staging site, starting from the inverse (light) version of the dark slate design. Built on 27 November 2026 with Michael. It is a design tool, not part of the launch bundles, and it is **not loaded on the site today**.

## What it does
- **Your variables first.** Finds the colours in the Webflow variables on `:root` (ignoring `mwp-component-library*`, private `--_*` variables and transparent ones). Each has a swatch and a picker. Derived colours (`raspberry-dark` and similar) follow their source. Hard-coded colours that aren't variables sit lower down the list; any that match a variable's original value follow that variable.
- **Whole palette.** Hue shift, saturation and lightness sliders. Presets: Inverse (start), Original dark, Swap bg/text, Flip all.
- **Faulty Terminal look.** The terminal draws its own opaque colours and hard-codes its background, so it is changed with a CSS filter on the terminal's div only: invert, opacity, brightness, contrast, blur, hue rotate and saturation. Blend modes can't reach the page behind it (the hero is its own stacking context), so there is also an overlay layer inside `.ft-wrapper` that covers only the terminal: its own colour, amount and blend mode (16 modes).
- **Contrast.** Ratios against the background with AAA / AA / FAIL.
- **Controls.** Own colour picker (square plus hue strip); sliders with Shift for fine steps, mouse wheel, arrow keys, and double-click to reset. Draggable by the header; position remembered. "Copy variables" copies the current values as CSS. "Remove panel" removes it.
- **Keep changes on refresh** (tick-box, on by default). Saves the colours, sliders and terminal look in this browser (localStorage `mwp-lab-state`; the tick-box is `mwp-lab-keep`). Unticking clears what was saved.

It only previews. Nothing is written to Webflow: to use a scheme, copy the values into the Webflow variables.

## When it runs
Only on a `*.webflow.io` host, and only with `?lab` in the address. `?lab` sets a session flag so it survives navigation and refresh in the tab; `?lab=0` clears the flag. On the custom domain it does nothing even if loaded.

## Where the code lives
- Source: `src/lab/index.js` (plain ES5, no dependencies).
- Built: `dist/lab.min.js` (about 19 kB, 7 kB gzipped), built with the same esbuild settings as `build.cjs`. Note `npm run build` rebuilds every bundle, so run it as normal and this one comes out with the rest.
- It is its own bundle on purpose: it never joins the site or home bundles.

## How to switch it on (phase 2)
Add one registered inline script, in the footer, with this body (change the commit to the one that holds the `dist/lab.min.js` you want; pin to a commit, not `@main`, because jsDelivr caches branch names for hours):

```js
try{if(/\.webflow\.io$/.test(location.hostname)&&(/[?&]lab(=|&|$)/.test(location.search)||sessionStorage.getItem('mwp-lab'))){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/madewithpixels/mwp-webflow@COMMIT/dist/lab.min.js';document.head.appendChild(s)}}catch(e){}
```

The loader is about 300 characters, so it fits a registered script (2,000 character limit) and the custom code boxes. The check runs before anything is fetched, so visitors on the live domain download nothing. Delete the loader before launch, or leave it; it is inert on the live domain.

## History
- 27 November 2026: first built as a pasted `<script>`, which pushed the Site footer over its character limit, so it was compressed into six registered inline scripts plus a loader on staging. Michael held it back to avoid delaying launch; those scripts were deleted and the code moved here.
- The panel code is tied to the site's CSS: it reads `.ft-wrapper`, `div.mwp-component-library--faulty-terminal` and the colour variables on `:root`. If the terminal's structure changes (R-117 consolidation, the Faulty Terminal library), re-check the overlay and filter rules in `src/lab/index.js` (`fstyle`).

## Known limits
- Hard-coded colours are found by scanning the stylesheets; ones set by script (for example the contact bubbles reading computed colours) follow only if they read the variables at the time.
- The terminal's own colours come from its library; the filter and overlay approximate a light, low-contrast look. A true light terminal needs a setting in the library (see R-227's note on where Faulty Terminal's background is set).
- Accessibility: the contrast readout covers text against the background variable only; check real pairings (buttons, the ticker bands, pricing cards) by eye.
