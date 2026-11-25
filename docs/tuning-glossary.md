# Tuning glossary

All 65 numbers live in the Webflow Variables panel, collection **Tuning**. Code reads each one as `--_tuning---<name in lower case, spaces as dashes>` and keeps today's value as a fallback, so a missing variable changes nothing.

Names end with their unit: `ms` = milliseconds (1000 = 1 second), `s` = seconds, `px` = pixels, `vw` = % of screen width, `screens` = screen heights, `1 or 0` = on/off switch. Names with no unit are a plain ratio or a point along a scroll (0 = start, 1 = end).

Changes take effect after a publish. Nothing here changes layout widths or the 992 / 767 / 750 breakpoints (see the end).

Status: **All four boxes wired (25 Nov 2026, staging).** Site head, Site footer, Home head and Home footer read these variables, with today's value as the fallback. Change a value in the Variables panel, then publish. Not yet published to the live domain.

## Faulty terminal (the hero's background text)
| Name | Now | What it does |
|---|---|---|
| Terminal Character Scale Phone | 1 | Size of the terminal characters on phones (767px and below). LOWER = BIGGER characters. |
| Terminal Character Scale Desktop | 2 | Same, for every wider screen. |

## Folio list hover preview (Work section, pointer devices only)
| Name | Now | What it does |
|---|---|---|
| Folio Preview Width px | 400 | Width of the screenshot that follows the pointer. |
| Folio Preview Pointer Gap px | 16 | Space between the pointer and the screenshot (it flips to the other side near the screen edge). |
| Folio Preview Fade ms | 150 | How long the screenshot takes to fade in and out. |
| Folio Preview Image Swap ms | 120 | Cross-fade time when moving from one project to the next. |
| Folio Preview Start Scale | 0.97 | The screenshot grows from this size to full size as it appears. 1 = no growth. Ignored for reduced motion. |

## Project page arrows (the slide between projects)
| Name | Now | What it does |
|---|---|---|
| Project Slide Duration ms | 420 | How long each element takes to slide off or on. |
| Project Slide Stagger ms | 70 | Delay between one element starting and the next (title, text, screenshots). |
| Project Slide Edge Margin px | 8 | Extra distance past the edge before an element is clipped. |
| Project Slide Image Wait ms | 1200 | Longest the arriving page waits for the first screenshots to load before sliding in anyway. |

## Scroll magnet (desktop, sections marked data-snap)
| Name | Now | What it does |
|---|---|---|
| Magnet Coast Absorb ms | 220 | After a catch, the trackpad's leftover coasting is ignored until the wheel has been quiet this long. HIGHER = stickier. |
| Magnet Absorb Limit ms | 2500 | Safety stop: never hold the scroll longer than this. |
| Magnet Glide Shortest s | 0.35 | Quickest catch deceleration (used for a fast scroll). |
| Magnet Glide Longest s | 1.1 | Slowest catch deceleration (used for a slow scroll). |
| Magnet Settle Zone Before screens | 0.35 | A slow scroll that stops this far above a section start glides the last bit in. |
| Magnet Settle Zone After screens | 0.2 | Same, for stopping just past a section start. |
| Magnet Settle Wait ms | 140 | How long the scroll must be still before settling. |
| Magnet Catch On 1 or 0 | 1 | 1 = catch a downward scroll at the section start. 0 = only settle (the first version). |

## Touch swipe on project pages
| Name | Now | What it does |
|---|---|---|
| Swipe Minimum Distance px | 60 | Sideways distance before a swipe counts as next/previous. |
| Swipe Maximum Time ms | 700 | A swipe slower than this is ignored. |

## Site-wide
| Name | Now | What it does |
|---|---|---|
| Resize Wait ms | 150 | After the window stops resizing, pages wait this long before re-measuring. |
| Contact Bubble Screen Margin px | 12 | The phone/email bubble stays at least this far from the screen edge. |
| Contact Bubble Button Gap px | 14 | Space between the header button and its bubble. |
| Contact Bubble Hide Delay ms | 250 | The bubble stays this long after the pointer leaves, so you can reach the Copy button. |
| Contact Bubble Copied Message ms | 1600 | How long "Copied" shows before the button says "Copy" again. |
| Page Morph Title s | 0.35 | Home to project morph: the title's move time. |
| Page Morph Image s | 0.6 | Home to project morph: the screenshot's move time. |
| Page Morph Fade s | 0.45 | Home to project morph: the rest of the page's cross-fade. |
| Logo Marquee Speed px per s | 180 | Speed of the scrolling client logos. |

## Home page: ticker (the big heading with rows of words)
| Name | Now | What it does |
|---|---|---|
| Ticker Flick Glide | 0.94 | How far a flick keeps gliding. HIGHER = longer glide; 1 never stops, keep below 1. |
| Ticker Drag Start Distance px | 4 | Pointer movement before a press counts as a drag rather than a click. |
| Ticker Highlight Start Desktop | 0.3 | The highlight sweep begins this far through the section's scroll (0 = start, 1 = end). |
| Ticker Highlight End Desktop | 0.7 | And ends here. |
| Ticker Highlight Start Smaller | 0.1 | Same start point for screens under 992px. |
| Ticker Highlight End Smaller | 0.9 | Same end point for screens under 992px. |

## Home page: pricing (desktop shapes)
| Name | Now | What it does |
|---|---|---|
| Pricing Shapes Drop End | 0.15 | The coloured shapes finish dropping in at this point of the pricing scroll. |
| Pricing Shapes Form End | 0.32 | They finish forming into cards at this point. |
| Pricing Card Stagger | 0.025 | Delay between one card starting and the next, as a part of the scroll. |
| Pricing Inner Inset vw | 3 | Padding inside the card shapes. |
| Pricing Minimum Top Inset screens | 0.06 | Least space kept above and below the cards (a share of screen height). |
| Pricing Corner Radius px | 48 | Corner roundness of the card shapes. |
| Pricing Card Gap vw | 2.4 | Gap between cards and from the screen edge. |
| Pricing Card Maximum Width px | 600 | Cards never get wider than this. |
| Pricing Card Maximum Gap px | 48 | The gap never gets wider than this. |
| Pricing Text Inset vw | 2.4 | Text indent inside each card. |
| Pricing Menu Clearance px | 16 | Space kept between the menu buttons and the cards. |

## Home page: speech bubble and heart (Testimonials to Contact)
| Name | Now | What it does |
|---|---|---|
| Heart Flyin Start Unit of 192 | 182 | Where in the testimonial wall's scroll (out of 192) the bubbles start flying to the logo. HIGHER = later. |
| Heart Flyin End screens | -0.5 | The fly-in ends when Contact's top is this many screens below the top of the window. Negative = above. |
| Heart Flyin Stagger | 0.35 | Spread of the bubbles' start times. 0 = all together. |
| Heart Bubble Pick Margin screens | 0.25 | How far off screen a testimonial bubble can be and still be picked to fly. |
| Heart Wall Fade Point | 0.55 | The testimonial wall has faded out by this point of the fly-in. |
| Heart Shape Hold ms | 4000 | How long the speech bubble or heart stays before spinning to the other. |
| Heart Spin ms | 900 | Spin and glide time between bubble and heart. |
| Heart Ripple ms | 500 | The left-to-right ripple while it spins. |
| Heart Spin Back On 1 or 0 | 0 | 1 = also spin when scrolling back up from the heart. |
| Heart Smaller Screens Start Point | 0.1 | Screens under 992px (no fly-in): the cycle starts when Contact's top reaches this fraction of the screen. |
| Heart Smaller Screens Reset Point | 0.9 | Back to the bubble when scrolled back above this. |
| Heart Pixel Pitch px | 18 | Spacing of the pixel grid the bubble and heart are drawn on. |

## Home page: navigation and arrival
| Name | Now | What it does |
|---|---|---|
| Menu Jump Settle ms | 450 | After a menu jump, the page keeps redrawing its scroll animations for this long. |
| Contents Current Line screens | 0.5 | Contents device: a section becomes current once its start passes this fraction of the screen height. |
| Contents Rail Overhang px | 8 | How far the dotted rail extends past the first and last entry. |
| Scroll Cue Sweep s | 2.4 | Time of one sweep of the white highlight over "Scroll for more". |
| Arrival Cover Failsafe s | 4.5 | When you arrive from another page at a section link, the slate cover lifts by itself after this long if the page hasn't landed. |
| Back Landing Delay s | 1.8 | Back/forward/reload on screens under 992px: how long before the page lands at its remembered spot. |

## Not variables (stay in code)
- Media-query widths and heights (992, 767, 750): CSS can't read variables there. The 750 short-screen pricing height is in two places in Home (script and CSS); change both.
- Lists and text: the Portfolio arrow order, the Contents entries and their landing offsets, the speech-bubble pixel map, selectors, easing curves.
- Ticker copies per row (6): the native Ticker Drift interaction assumes it.
