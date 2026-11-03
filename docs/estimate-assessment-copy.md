# Assessment screen: tighter copy and finishing notes (R-051, R-050)

**Date:** 2 November 2026 (night shift, briefs #243 and #248). **By:** Claude (night shift).
**Page:** the estimate tool's assessment screen, https://madewithpixels-dev.webflow.io/estimate (staging).
**Status:** wording approved by Michael (2 November 2026, in boss); advice lines drafted below for his look. Nothing has been changed in Webflow or in the estimate tool's code. R-051 and R-050 stay planned. Acceptance: pending.
**Checked how:** Chrome on the Mac Studio, desktop about 1467px wide. I stepped through all six questions (first option each time, nothing submitted) to the assessment. For 390px I loaded the same page in a 390px-wide frame, because resizing the window did not change the layout (page width stayed 2044px); the frame reported 390px and no sideways scrolling. Not checked: other answer paths (the wording changes with the answers), the email-capture step, other browsers.

## Where the wording repeats (assessment screen)

- "Your assessment" (progress label), "Standard build" (badge), "Your project assessment" (heading) all announce the same thing.
- Three headings say "what's shaping/driving": "What's shaping your estimate" (side panel during questions), "What's shaping the project", "What's driving your estimate".
- The price range and "Estimated investment" appear twice (left card and right panel); "Final price depends on scope…" appears twice, worded two ways ("design revisions" / "number of design revisions").
- "Indicative range, not a fixed quote" and "a clear fixed quotation" say the same thing twice; "clear" appears three times in one screen.
- The intro ("Answer six simple questions… personalised project assessment") is still on screen above the assessment.
- The right panel repeats each answer back, which the left card's paragraph also does in general terms.

## Current copy against proposed

The aim is advice about the choices that save time and money, in a friendly voice. Michael answered "Yes" to this wording on 2 November 2026. Two rows are now settled by his other answers (see the next section).


| Where | Current | Proposed |
|---|---|---|
| Progress label | Your assessment | Your results |
| Badge | Standard build | Standard build (unchanged) |
| Heading | Your project assessment | Here's what we'd suggest |
| Lead line | This looks like a focused website project with a clear route forward. | A focused project with a clear way forward: good news for both budget and timing. |
| Sub-heading | What's shaping the project | Our advice |
| Paragraph (single page example) | Based on your answers, this is likely to be a single page website project. That's a common starting point, and it gives us a clear opportunity to create something more polished and useful than a simple brochure site. | From your answers, a single page site looks like the right fit. It's quick to build, easy to keep within budget, and can still look polished and do real work for you. |
| Price label | Estimated investment | Likely cost |
| Price note | Final price depends on scope and design revisions. | (merged into the line below) |
| Explanation | This is an indicative range, not a fixed quote. It shows the likely level of design, development and content support involved. After a short conversation, we can turn this into a clear fixed quotation. | A guide, not a quote. Chat to us for 15 minutes and we'll turn it into a fixed price. |
| Tips sub-heading | Keeping costs towards the lower end | How to keep cost and time down |
| Tip 1 | Start with the essentials and add features in a second phase. Webflow makes it easy to grow the site later. | Start with the essentials and add extras later. Webflow makes growing the site easy. |
| Tip 2 | A single point of contact and quick feedback keep the project on schedule. Fewer revision rounds means a lower final cost. | Quick, consolidated feedback keeps the project on schedule, and fewer revision rounds mean a lower final cost. |
| Email button | Get this assessment by email | Email me these results |
| Rating | How useful was this assessment? | Was this helpful? |
| Right panel heading | What's driving your estimate | What makes up the cost |
| Right panel intro | Your estimate reflects the level of design, content, assets and functionality your project is likely to need. | Each part of your project adds to the range. |
| Right panel total | Estimated investment: £500–£1,500 / Final price depends on scope and number of design revisions. | Remove: the total is already in the left card (or keep it here and drop it from the left). Decision for Michael. |
| Main button | Book a consultation | Book a free chat (only if the consultation is free: **confirm**) |
| Side panel during questions | What's shaping your estimate / As you answer, we'll show which parts of the project are likely to influence the budget most. | Your estimate so far / Each answer updates the range as you go. |
| Intro on question screens | Answer six simple questions. / We'll give you a personalised project assessment, including a budget estimate BEFORE we ask for your email address. Yes, really... | Six quick questions, then your estimate and our advice: all before we ask for your email. Yes, really. |

The six question screens read well and are not repeated, so I did not rewrite them: questions are "What are you looking for?", "How large is the website likely to be?", "How established is your brand?", "How much written content already exists?", "What visual assets do you have?" and "What would you like the website to include?". One idea for the friendly-advice aim: add one short advice line per answer on the assessment (for example, for "Most content exists": "Having your content ready is one of the biggest time savers."). That needs code in the estimate tool, so it is a choice for Michael, not drafted here.

## Finishing observations (R-050)

Proposed - Michael to approve; all unconfirmed by Michael.

Desktop (about 1467px):
1. Under the "Get this assessment by email" button there is a bare text box with a "Send" button and no label, which looks unfinished. The star rating sits under it. (I did not type or send anything.)
2. The "Get this assessment by email" button is a dim teal outline on dark and looks disabled.
3. The sub-heading "Keeping costs towards the lower end" is small and faint compared with "What's shaping the project", so the advice, the most useful part, looks like a footnote.
4. The paragraph text runs narrow (about 480px) while the price note and tips run full width, so the left card has uneven line lengths.
5. The price range is shown twice on one screen (left card and right panel).
6. The fixed round buttons at top left sit over the progress bar's "Your assessment" label.
7. The Brand, Content and Visual Assets bars show "—" with a grey empty bar. It reads as missing rather than "no extra cost".
390px:
8. No sideways scrolling and nothing under 44px that I could find. Smallest text is about 11px (the answer captions in the right panel).
9. The fixed round buttons overlap the top of the content.
10. The "Book a consultation" bar is stuck to the bottom of the screen and covers the end of the card, including the email button, when you scroll to it.
11. The page is long (about 2,470px in the frame), and the "what makes up the cost" panel comes after all the left card text.
12. The heading "Your project assessment" wraps to two lines, fine, but the badge sits tight above it.
**Not looked at:** other answer paths, the estimate email step, Safari, a real phone.

## Michael's answers (boss, 2 November 2026)

1. Wording above: **Yes.**
2. The consultation is free: **Yes.** So the main button reads "Book a free chat". The price note keeps "Chat to us for 15 minutes" (15 minutes is the length I proposed; Michael has not confirmed it, so check it before it goes live).
3. Price display: keep **the one on the right** ("it's what users have been seeing during the process"). So the price and range come out of the left card, and the right panel keeps "Estimated investment" with its range. The left card's "Likely cost" label, price note and "A guide, not a quote" line move to sit under the right panel's total, so the caveat is not lost.
4. Per-answer advice lines: **Yes.** Drafted below. This needs code in the estimate tool's own repo (MWP-Instant-Website-Estimate).

## Per-answer advice lines (approved as written - Michael, 3 November 2026, in boss, brief #266)

Michael chose "Good to use as written" for all the lines below. The "15 minutes" in the price note is still my figure, not his: confirm before it goes live. Nothing is built yet; Acceptance stays pending.

How it would work: on the assessment, under "Our advice", show one short line for each answer the person gave (questions 1 to 5; question 6 gets a line only for the features picked, up to the first three). Friendly, about saving time or money. The options and their order are exactly as on staging today.

**1. What are you looking for?**
| Answer | Advice line |
|---|---|
| A brand new website | A fresh start gives us room to get the structure right first time, which saves rework later. |
| A redesign of an existing website | We'll keep what already works, such as good content and search rankings, so you only pay to change what needs it. |
| Improvements to an existing website | Targeted updates are the quickest, most affordable route. Starting small is often the smartest move. |
| Brand, website and marketing support | Planning the brand, site and marketing together avoids paying twice for the same thinking. |
| I'm not sure yet | No problem. A short chat usually makes the best starting point clear. |

**2. How large is the website likely to be?**
| Answer | Advice line |
|---|---|
| Single page website | Quick to build and easy to keep within budget, and it can still do real work for you. |
| Small website | A sensible size for most service businesses. Every page you add adds time, so keep to the pages that earn their place. |
| Medium website | More pages means more content to prepare, so getting that ready early is the biggest time saver. |
| Larger website | Building it in phases keeps the first launch faster and spreads the cost. |
| Not sure | We've estimated cautiously. Once we know the pages you need, the range usually narrows. |

**3. How established is your brand?**
| Answer | Advice line |
|---|---|
| We already have a professional brand identity | Having this ready is a real time and cost saver: we can start designing straight away. |
| We have a logo and some brand assets | A good starting point. A short list of your colours and fonts will save us time. |
| We only have a logo | We'll build the visual style around your logo as part of the design, which adds a little time. |
| We'd like help developing our brand | Doing the brand and site together keeps them consistent and is usually better value than separate projects. |

**4. How much written content already exists?**
| Answer | Advice line |
|---|---|
| Everything is written | Having your content ready is one of the biggest time savers. |
| Most content exists | Nearly there. Finishing the gaps before design starts keeps the project on schedule. |
| Some content exists | Agreeing the page structure early lets us shape the rest of the words around it. |
| We'd like help writing it | We can write it with you. Sending rough notes or bullet points first saves time. |

**5. What visual assets do you have?**
| Answer | Advice line |
|---|---|
| Professional photography and imagery | Strong images lift a site more than anything else, and they cost you nothing extra here. |
| Some good imagery | We'll make the most of what you have. Sending it all early helps us see what's missing. |
| Mostly phone photos | Good phone photos can work well with careful use. Send your best ones and we'll tell you where new ones would help. |
| Very little usable imagery | A small photo shoot or well-chosen stock can fill the gaps affordably. |
| Not sure | Send us what you've got and we'll recommend the simplest route. |

**6. What would you like the website to include?** (shown for the first three picked, in the order listed)
| Feature | Advice line |
|---|---|
| Blog / advice section | A short list of starter articles makes the launch stronger. You can add more later. |
| Portfolio / case studies | A few strong case studies beat a long list. |
| Services section | Clear, separate pages for each service help visitors and search engines. |
| Downloads | Keep to the few files people ask for most. |
| Events | Plan how events will be kept up to date, as old dates quickly look stale. |
| Testimonials | Real quotes with names and faces are the most convincing. |
| Team profiles | Good photos of your team matter more than long biographies. |
| Advanced forms | Simple forms get more replies. Only ask for what you need. |
| Booking system | Worth planning carefully, as it often connects to other tools and adds cost. |
| CRM / email integration | Tell us which tools you use now so we can connect to them rather than replace them. |
| Ecommerce | Starting with a small product range keeps the first version quick and affordable. |
| AI functionality | A clear, single purpose keeps this affordable. We can start small and build on it. |
| Bespoke software or app functionality | This is where cost grows fastest. A first phase with just the essentials keeps it in control. |

Notes for whoever builds it: keep lines to one sentence of about 20 words, show at most five to six advice lines in total so the screen stays shorter, and drop any line whose answer is "Not sure" if the screen feels crowded.

## Needs Michael

Nothing blocks. Optional: read the advice lines above and say which to change. Once happy, a brief for the estimate tool's repo (MWP-Instant-Website-Estimate) can make the wording, price-display and advice-line changes together with the finishing items.

**Next useful action:** that brief, covering the approved wording (with the price removed from the left card), the "Book a free chat" button, the advice lines, and the finishing items above.
