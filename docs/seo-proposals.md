# SEO drafts: titles, descriptions, schema, llms.txt (R-053, R-064)

**Status of everything below: proposed - Michael to approve.** Nothing has been written into Webflow.
**Date:** 2 November 2026. **By:** Claude (night shift), brief #242.
**Audit base:** a fresh read of the published staging site (madewithpixels-dev.webflow.io) on 2 November 2026 in Chrome, matching the fuller audit of 1 November in `docs/seo-audit.md`.

## 1 Audit table (Home, /estimate, five project pages)
| Page | Title tag | Description | Open Graph | Twitter | Canonical | Headings | JSON-LD |
|---|---|---|---|---|---|---|---|
| Home | Independent Web Design in Sheffield \| madewithpixels (52 characters) | Present, about 155 characters | og:title, og:description, og:type. **No og:image, no og:url.** | card = summary_large_image, **no twitter:image** | **None** | One H1, 27 headings; levels skip (H2 to H4/H5) | One block: ProfessionalService + Person + WebSite. **No sameAs, no logo** |
| /estimate | Instant Website Estimate \| madewithpixels | Present | as Home, no image, no url | as Home | **None** | One H1, 14 headings, order sensible | WebPage with breadcrumb |
| /portfolio/farmer-norton | Farmer Norton Webflow Website \| Sheffield Web Design | Present | og:image yes, no og:url | card present | **None** | One H1, only heading | WebPage + about |
| /portfolio/travel-ledger | Travel Ledger Umbraco Website \| Travel Finance | Present | og:image yes | card present | **None** | One H1, only heading | WebPage |
| /portfolio/futura | Futura Website Design & Front-End Development | Present | og:image yes | card present | **None** | One H1, only heading | WebPage |
| /portfolio/soyo | SOYO Sheffield Nightlife Website \| Sitefinity CMS | Present | og:image yes | card present | **None** | One H1, only heading | WebPage |
| /portfolio/mednet | Mednet NHS Training Website & Online Tests | Present | og:image yes | card present | **None** | One H1, only heading | WebPage |

**llms.txt:** exists on staging (status 200, about 10.5 KB). It opens with a summary, key facts, services, portfolio and optional links. Its details are in the 1 November audit.
**robots meta:** none on any page checked. Canonical and indexing belong to R-060 and R-069 and are not touched here.

## 2 Proposed titles and descriptions
Titles stay under about 60 characters, descriptions under about 155.

**Home** (proposed - Michael to approve)
- Title: `Web Designer in Sheffield | madewithpixels` (43)
- Description: `Independent Webflow designer and developer in Sheffield since 2008. Custom websites and business tools from £500. Get an instant estimate.` (about 140)
- Why: the current title is fine; this puts the person-search phrase "web designer" first. Keep the current one if you prefer it. The current description is also good, so the real gain is small.

**/estimate** (proposed - Michael to approve)
- Title: `Instant Website Price Estimate | madewithpixels` (46)
- Description: `Answer a few quick questions and get an instant, no-obligation price range for your website or web app from a Sheffield studio.` (about 128)
- Why: "price" is the word people search for.

## 3 Draft JSON-LD: sameAs (proposed - Michael to approve)
The Home block already uses ProfessionalService, which is a kind of LocalBusiness, so I propose adding to it rather than replacing it. Add these three properties to the existing ProfessionalService object (`…/#organization`) and, if you wish, `sameAs` to the Person too:

```json
"logo": "PLACEHOLDER-LOGO-IMAGE-URL (needs a logo image file, 112px or larger square)",
"sameAs": [
  "PLACEHOLDER-LINKEDIN-PROFILE-URL (Michael to supply)",
  "PLACEHOLDER-GITHUB-PROFILE-URL (Michael to supply)",
  "PLACEHOLDER-WEBFLOW-PROFILE-URL (Michael to supply)"
]
```

Do not publish with the placeholders in: Google would read them as broken links. Related to fix: Home says complex projects start at £2000 while the schema and llms.txt say £5,000 (see audit, point 5).

## 4 llms.txt outline (proposed - Michael to approve)
The current file already follows this shape; the proposal is only to tidy it:
1. `# madewithpixels` and a two-sentence summary (who, where, since when, what).
2. Key facts: founder, founded 2008, location, contact, platforms, services, white-label work.
3. Prices: one line, once, using the agreed figure for complex projects.
4. `## Services`: Home and /estimate, one line each.
5. `## Portfolio`: one line per project (name, year, what was built).
6. `## Profiles`: LinkedIn, GitHub and Webflow URLs, using the same three placeholders as above.
7. `## Optional`: contact, estimate page.
Also: keep the spelling of client names identical to the page (Halstead, SOYO) and edit the file whenever a project changes, because it is uploaded by hand.
