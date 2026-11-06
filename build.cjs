// Builds every bundle in src/ into dist/ (minified, with source maps).
//   npm run build   build once
//   npm run watch   rebuild on every save
//   npm run dev     rebuild on every save AND serve dist/ at http://localhost:5173 (CORS open) for testing on staging
// A bundle is any folder in src/ that has an index.js and/or index.css. src/home -> dist/home.min.js + dist/home.min.css.
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const esbuild = require('esbuild');
const pkg = require('./package.json');

const SRC = path.join(__dirname, 'src');
const OUT = path.join(__dirname, 'dist');
const mode = process.argv[2] || 'build';

const entries = [];
for (const dir of fs.readdirSync(SRC, { withFileTypes: true })) {
  if (!dir.isDirectory() || dir.name.startsWith('_')) continue;
  for (const ext of ['js', 'css']) {
    const file = path.join(SRC, dir.name, 'index.' + ext);
    if (fs.existsSync(file)) entries.push({ name: dir.name, ext, in: file, out: `${dir.name}.min` });
  }
}
if (!entries.length) { console.error('No src/<bundle>/index.js or index.css found.'); process.exit(1); }

const common = {
  bundle: true,
  minify: true,
  sourcemap: true,
  charset: 'utf8',
  legalComments: 'none',
  logLevel: 'info',
  // iPad Air 2 runs iOS 15.8, so keep the output readable by Safari 15.
  target: ['safari15', 'chrome90', 'firefox90'],
};
const banner = (e) => `/* madewithpixels ${pkg.name} v${pkg.version} - src/${e.name}/index.${e.ext} */`;
const jsOpts = (e) => ({ ...common, entryPoints: [{ in: e.in, out: e.out }], outdir: OUT, format: 'iife', banner: { js: banner(e) } });
const cssOpts = (e) => ({ ...common, entryPoints: [{ in: e.in, out: e.out }], outdir: OUT, banner: { css: banner(e) } });
const opts = (e) => (e.ext === 'js' ? jsOpts(e) : cssOpts(e));

function report() {
  console.log('\nBundle sizes (bytes):');
  for (const e of entries) {
    const f = path.join(OUT, `${e.out}.${e.ext}`);
    if (!fs.existsSync(f)) continue;
    const buf = fs.readFileSync(f);
    console.log(`  ${path.relative(__dirname, f).padEnd(28)} ${String(buf.length).padStart(7)}  gzip ${String(zlib.gzipSync(buf).length).padStart(6)}`);
  }
}

(async () => {
  if (mode === 'build') {
    fs.rmSync(OUT, { recursive: true, force: true });
    for (const e of entries) await esbuild.build(opts(e));
    report();
    return;
  }
  const ctxs = [];
  for (const e of entries) ctxs.push(await esbuild.context(opts(e)));
  for (const c of ctxs) await c.rebuild();
  report();
  if (mode === 'dev') {
    const { port } = await ctxs[0].serve({ servedir: OUT, port: 5173, cors: { origin: '*' } });
    console.log(`\nServing dist/ at http://localhost:${port}/  (e.g. http://localhost:${port}/home.min.js)`);
  }
  for (const c of ctxs) await c.watch();
  console.log('Watching src/ for changes. Ctrl+C to stop.');
})().catch((err) => { console.error(err); process.exit(1); });
