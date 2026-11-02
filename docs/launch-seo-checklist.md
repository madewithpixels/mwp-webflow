# Launch SEO switch-on checklist (R-069, R-060, R-053)

Written 2 November 2026 by Claude (night shift), brief #244. Read-only audit of the published staging site, https://madewithpixels-dev.webflow.io. Nothing in Webflow was changed or published, and no canonical was set (D-014: it waits for launch).

## 1. What staging says now

Checked in Chrome on the Mac Studio by fetching each page's published HTML and /sitemap.xml. 42 pages are in the sitemap (Home, /estimate, /success, 39 project pages under /portfolio/). Every one returned 200.

| Page | Indexing (robots tag in the page) | In /sitemap.xml | Canonical tag |
|---|---|---|---|
| Home `/` | No tag (so "index" by default) | Yes | None |
| `/estimate` | No tag | Yes | None |
| `/success` (thank-you page, heading currently reads "404", title "Success") | No tag | **Yes (should be out)** | None |
| All 39 project pages `/portfolio/<name>` | No tag | Yes (all 39) | None |

Other facts:
- No page has a noindex tag. Nothing is blocked page by page.
- `/robots.txt` on staging reads `User-agent: *` then `Disallow: /`. That is Webflow's block for the staging address, not something in the site's settings you can edit. The live domain gets its own robots.txt when you publish there.
- The sitemap lists staging addresses. Webflow rewrites them to the live domain when you publish to it.
- Limits of the check: I could read what the published page says, not the Designer toggles. The sitemap column comes from /sitemap.xml itself. If a toggle in the Designer disagrees with the published page, the published page is what search engines see.

## 2. Switch-on steps at launch

Do these in the Designer on the madewithpixels site, then publish to the custom domain yourself (D-008, D-009). Do 1 to 4 before publishing.

1. **Thank-you page.** Open the Pages panel, hover `/success`, click the gear icon. Under "SEO settings" tick "Exclude this page from search results" (this adds noindex), and untick "Include in sitemap" (named "Sitemap indexing" in some versions: set it to off). Also decide the heading: it says "404" at the moment (see docs/seo-audit.md, point 6).
2. **Home and /estimate.** In the same gear panel, check "Exclude this page from search results" is **off** and "Include in sitemap" is **on**. Today they have no noindex, so this is only a look.
3. **Project pages.** The project pages are one CMS template. Open the Pages panel, then the "Portfolio" collection template page, gear icon. Check "Exclude from search results" is off. In the CMS, check no project has its own "Exclude from sitemap" ticked unless you want it hidden.
4. **Canonical link.** On each page's gear panel, under "SEO settings", find "Canonical URL" (in Webflow this is in Site settings > SEO > Global canonical URL, or on the page). Easiest: Site settings > SEO > "Global canonical URL" and enter `https://www.madewithpixels.co.uk`. Webflow then adds the page path itself, so Home becomes `https://www.madewithpixels.co.uk/`, `/estimate` becomes `https://www.madewithpixels.co.uk/estimate`, and a project becomes `https://www.madewithpixels.co.uk/portfolio/farmer-norton`. If you have to enter it by hand per page, use the same pattern.
5. **Domain indexing.** Site settings > SEO: untick "Disable Webflow subdomain indexing" only if you want the staging site found (you probably don't, so leave it ticked). Check the custom domain is the default one and set to `www`.
6. **Sitemap.** Site settings > SEO > "Auto-generate sitemap" must be on. After publishing, open `https://www.madewithpixels.co.uk/sitemap.xml`. It should list 41 addresses (42 minus /success) on `www.madewithpixels.co.uk`.
7. **robots.txt.** Site settings > SEO > robots.txt: the content should allow crawling and point to the sitemap. Paste: `User-agent: *` then `Allow: /` then `Sitemap: https://www.madewithpixels.co.uk/sitemap.xml`.
8. **Publish to the custom domain** (not just staging), then run the check in section 3.
9. **Search Console.** Add the sitemap address under Sitemaps, and use URL Inspection on Home to request indexing. (Michael only: needs his Google login.)

New landing pages (R-069): as each one goes live, repeat steps 2 and 4 for it, and check it appears in the sitemap.

## 3. Quick check after publishing

Open `https://www.madewithpixels.co.uk` in Chrome, open DevTools (Cmd+Option+J), go to Console and paste this. It reads the sitemap and checks every page.

```js
(async () => {
  const base = location.origin;
  const sm = await (await fetch('/sitemap.xml')).text();
  const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]));
  const rows = [];
  for (const u of [...urls, new URL('/success', base)]) {
    const r = await fetch(u.pathname);
    const d = new DOMParser().parseFromString(await r.text(), 'text/html');
    const robots = d.querySelector('meta[name=robots]')?.content || '';
    const canon = d.querySelector('link[rel=canonical]')?.href || '';
    const want = 'https://www.madewithpixels.co.uk' + (u.pathname === '/' ? '/' : u.pathname);
    const isSuccess = u.pathname === '/success';
    const inMap = urls.some(x => x.pathname === u.pathname);
    const ok = isSuccess ? (/noindex/.test(robots) && !inMap)
                         : (!/noindex/.test(robots) && inMap && canon.replace(/\/$/, '') === want.replace(/\/$/, ''));
    rows.push({ path: u.pathname, status: r.status, robots, canonical: canon, inSitemap: inMap, ok });
  }
  console.table(rows);
  console.log('robots.txt:\n' + await (await fetch('/robots.txt')).text());
  const bad = rows.filter(x => !x.ok);
  console.log(bad.length ? 'PROBLEMS: ' + bad.map(x => x.path).join(', ') : 'ALL GOOD: ' + rows.length + ' pages');
})();
```

What good looks like: the last line says "ALL GOOD", `/success` has noindex and is not in the sitemap, every other page has a canonical starting `https://www.madewithpixels.co.uk`, and the robots.txt shows `Allow: /` and the sitemap line, not `Disallow: /`. The last line says "ALL GOOD: 42 pages" if everything is right (41 in the sitemap plus /success).

If it says PROBLEMS, the paths listed are the pages to re-check in section 2.
