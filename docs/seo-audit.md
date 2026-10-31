# SEO audit: meta data, schema, llms.txt (R-053)

**Date:** 1 November 2026 (night shift, brief #155). **By:** Claude (night shift).
**What was checked:** the published staging site, https://madewithpixels-dev.webflow.io, in Claude in Chrome on the Mac Studio. I read the rendered page (title, meta tags, JSON-LD, headings, image alt text) and opened /robots.txt, /sitemap.xml and /llms.txt. I used no Webflow tools and changed nothing.
**Evidence:** verified (live) for what is listed; Acceptance not set.
**Not checked:** the custom domain (not live yet); Google's Rich Results test or the schema validator (no access, so the JSON-LD was checked by reading it, not validated); HTTP response headers (the browser would not show them; the success page showed the text of a 404 page but I could not read the status code); sizes of share images.

## Site-wide findings
| Item | What is there now | Problem | Fix | Who |
|---|---|---|---|---|
| /robots.txt | Exists. `User-agent: *` / `Disallow: /` | Correct for staging. The live site must not carry this. | Webflow publishes this from the domain's setting; check after launch. (R-069) | Michael (launch) |
| /sitemap.xml | Exists. 42 URLs on the staging host: Home, /estimate, /success, 39 project pages. All have `lastmod`; none has `priority` or `changefreq`. | Lists `/success` (a thank-you page that should not be in search). Addresses are staging ones; Webflow rewrites them to the live domain on publish. | Set /success to not appear in the sitemap and to noindex. (R-069) | Agent can, in page settings |
| /llms.txt | Exists, 4 sections: summary, key facts, Services (Home, /estimate), Portfolio (39 projects, one line each with year), Optional. All links use https://www.madewithpixels.co.uk. | See problems 5 and 6 below. Links will 404 until the live domain serves them. | Fix wording; keep as is otherwise. | Agent |
| Canonical tag | **Absent on every page checked.** | Nothing tells search engines which address is the real one. (R-060 will set https://www.madewithpixels.co.uk.) | R-060 | Michael / agent at launch |
| robots meta (noindex) | **No `<meta name="robots">` on any page checked.** Staging is blocked only by robots.txt. | Pages are not marked noindex in the page itself, so index status is controlled only by the domain-level setting. (R-069) | Check "Disable Webflow subdomain indexing" is on until launch; on launch, publish to the custom domain. | Michael |
| og:image, twitter:image, og:url | **Absent on Home, /estimate and /success.** Present only as og:image on project pages (the first screenshot). No og:url, no twitter:image anywhere. | Home and /estimate share as a plain link with no picture. | Michael picks a share image (1200 x 630); agent can then set it. | Michael |
| Favicon and webclip | Favicon (.ico) is set on Home; the touch icon was cut off in my read, so not confirmed. | None found. | None. | |
| JSON-LD on Home | One block, `@graph` with ProfessionalService, Person (Michael Auty), WebSite. Valid JSON. Uses `@id` links between them. | **No `sameAs` on any of the three (R-064).** No `logo`/`image`, no `geo`, no `openingHours`. Address has town and country only. | Add `sameAs` (LinkedIn, GitHub, Webflow profile), a `logo`, optionally street address. | Michael gives profile URLs; agent writes it |
| JSON-LD on other pages | /estimate: one WebPage linked to the Home `@id`s, has breadcrumb. Project pages: one WebPage each with an `about` CreativeWork naming the client and its images. /success: none. | The `/estimate` schema description is shorter than the page's meta description. Minor. | Make the two match. | Agent |
| Open Graph / Twitter | On every page: og:title, og:description, og:type=website, twitter:card=summary_large_image, twitter:title, twitter:description. | `twitter:card` asks for a large image but there is none on Home, /estimate or /success. | See share image above. | Michael |
| Language | Schema says `en-GB`. | (Not read from the `<html lang>` attribute on every page; Home reads as set.) | None. | |

## Page by page
| Page | Title | Meta description | Canonical | robots meta | OG image | Schema | Headings | Image alt text |
|---|---|---|---|---|---|---|---|---|
| Home `/` | Independent Web Design in Sheffield \| madewithpixels | "Independent Webflow design and development in Sheffield since 2008. Agency-quality websites and bespoke business tools from £500. Get an instant estimate." | none | none | **none** | ProfessionalService + Person + WebSite (no sameAs) | 26 headings. One H1 ("Web design in Sheffield since 2008"). H2s: "madewithpixels", "Hundreds of projects…". Levels skip (H2 → H3 → H4 → H5, several H4s are prices or tag lines like "£500", "£2000", "£LessThanYouThink"). | **192 images, every one has an empty alt (`alt=""`).** None describes anything. |
| `/estimate` | Instant Website Estimate \| madewithpixels | "Answer a few quick questions and get an instant, no-obligation price range for your new website or web app from madewithpixels in Sheffield." | none | none | **none** | WebPage (with breadcrumb) | 14 headings. One H1. Then H2 for each question and for "Your project assessment" and "Book a free project consultation", with H3/H4 below. Order is sensible. | No images. |
| `/success` | "Success" | **none** | none | none | none | none | One H1 whose text is **"404"**, next to the words "Thanks for getting in touch. Go back". | No images. |
| `/portfolio/farmer-norton` | Farmer Norton Webflow Website \| Sheffield Web Design | Bespoke Webflow website for Sheffield manufacturer… | none | none | yes (farmernorton01.webp) | WebPage + about CreativeWork | One H1 only. | 2 images, both described ("Screenshot of the Farmer Norton website"). |
| `/portfolio/travel-ledger` | Travel Ledger Umbraco Website \| Travel Finance | Custom Umbraco CMS website for London-based Travel Ledger… | none | none | yes | WebPage | One H1 only. | 1 image, described. |
| `/portfolio/ay-pe` | ay-pe Portfolio Website \| CGI & Interpretive Media | Portfolio website and WordPress blog for York-based ay-pe… | none | none | yes | WebPage | One H1 only. | 2 images, "(1 of 2)", "(2 of 2)". |
| `/portfolio/futura` | Futura Website Design & Front-End Development | Design-led website and front-end build for Futura… | none | none | yes | WebPage | One H1 only. | 4 images, described. |
| `/portfolio/shepherd-machinery` | Shepherd Machinery Webflow Website \| Sheffield | Webflow website for Sheffield industrial machinery supplier… | none | none | yes | WebPage | One H1 only. | 1 image, described. |
| `/portfolio/soyo` | SOYO Sheffield Nightlife Website \| Sitefinity CMS | Feature-rich Sitefinity CMS website for Sheffield nightlife venue SOYO… | none | none | yes | WebPage | One H1 only ("Soyo" while the title says "SOYO"). | 3 images, described. |
| `/portfolio/creswell-crags` | Creswell Crags Accessible Virtual Tour Website | CMS website and accessible 360° cave tour… | none | none | yes | WebPage + about CreativeWork (client address: Worksop) | One H1 only. | 2 images, described. |
| `/portfolio/aquaculture` | Aquaculture Magento E-commerce Website \| Sheffield | Magento e-commerce website for Sheffield retailer Aquaculture… | none | none | yes | WebPage | One H1 only. | 2 images, described. |
| `/portfolio/mednet` | Mednet NHS Training Website & Online Tests | Content-managed healthcare training website… | none | none | yes | WebPage | One H1 only. | 7 images, described ("Mednet Consult website"). |

Twelve pages were read in full (Home, /estimate, /success, nine project pages). The other 30 project pages are generated from the same template and the same CMS fields, so the pattern (title, description, og:image from the first screenshot, alt "Screenshot of the … website") should hold; I did not open them. Title patterns are inconsistent between projects (some end with "| Sheffield", some "| Sitefinity CMS", some have no suffix and no brand name).

## Schema on Home in detail
- **ProfessionalService** `…/#organization`: name, url, description, slogan, foundingDate 2008, founder → Person, email, telephone +447515392390, address (Sheffield, GB), areaServed (cities), priceRange "From £500", knowsAbout (10 items), makesOffer (3: Simple Websites from £500, Complex Digital Projects from £5,000, Digital Growth), review (5 reviews, all rated 5/5).
- **Person** Michael Auty, job title, worksFor.
- **WebSite** with publisher.
- **Missing:** `sameAs` (R-064), `logo`, `image`, street address, `geo`, `openingHours`.
- **Consistency checks:**
  - Name, email, phone and Sheffield match llms.txt. The phone number is written as 07515 392390 on the success page and +44 7515 392390 in llms.txt: same number.
  - **Price mismatch:** the visible Home page says Complex Digital Projects start at **£2000**, but the schema and llms.txt say **£5,000**.
  - Reviews in the schema (Soyo Live, Halstead Glass, Aquaculture, Now Then Magazine, Creswell Heritage Trust) come from the page's testimonials; one visible "Praise" heading was found. Google may ignore self-published reviews on your own business, and the 5 reviews are all 5 out of 5 without a review count. Low risk but worth knowing.
  - The `Review` author organisation is "SOYO Live" while the project is "Soyo" and "SoYo Live" in llms.txt (also "SOYO" in the title). Names vary.

## Problems and decisions for Michael
1. **No canonical tag anywhere.** Will be fixed by R-060 at launch. No decision needed, but it must happen before launch.
2. **No share picture for Home and /estimate** (and `twitter:card` asks for a large one). Needs a 1200 x 630 image from you. Options: (a) a designed card with the logo; (b) a screenshot of the Home hero; (c) leave and accept plain links. Recommend (a).
3. **Every image on Home has an empty alt (192).** Screen readers skip them and search engines learn nothing. Options: (a) write short alt text for the meaningful ones (about 10 to 20 project images, people, logo) and leave decorative ones empty; (b) leave. Recommend (a). Agent can do it once you OK the wording.
4. **No `sameAs` in the schema (R-064).** Needs your LinkedIn, GitHub and Webflow profile addresses. Options: (a) give the three addresses; (b) give some now. Agent can then add them.
5. **Price mismatch:** Home says £2000, schema and llms.txt say £5,000 for complex projects. Which is true? Recommend deciding the real figure and updating the other two to match.
6. **/success is badly set up:** its heading reads "404", it has no meta description, a generic "Success" title, and it is in the sitemap. Options: (a) change the heading to "Thanks for getting in touch", add noindex and remove from the sitemap; (b) leave the heading and just noindex. Recommend (a). Needs a Designer text change, so you or an agent with a backup.
7. **Indexing (R-069):** there is no noindex tag on any page; only robots.txt blocks staging. Before launch: confirm the live domain's robots.txt allows crawling, publish the sitemap on the live domain, and set noindex on /success. Michael does the publish.
8. **Project pages have only an H1.** Fine for a screenshot page but little text for search to use. Optional: add a short written paragraph per project (the CMS description exists in the meta tags already). Option: (a) leave, (b) show the existing description on the page. Your call (visual).
9. **Home heading levels skip** (H2 → H4/H5 used for prices and taglines). Cosmetic for search, small for accessibility. Fixing it means changing tags in the Designer without changing look; agent can do it once approved.
10. **Titles are inconsistent** across projects (suffixes differ, some lack the brand name). Optional tidy-up; agent can do it in the CMS if you agree a pattern.
11. **llms.txt:** exists and is good. Small wording issues: spells "Halstead Glass" correctly here; "Hasltead" was found elsewhere (R-052). The file is hand-uploaded, so any project change needs a matching edit. Links use the www address and will work only after launch.

**Agent can do (after your OK):** items 3, 6, 9, 10 and the schema edits in 4 and 5.
**Needs you:** share image (2), profile addresses (4), the real price (5), publishing and launch-day switches (1, 7).
