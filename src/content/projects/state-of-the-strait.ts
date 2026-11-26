import type { Project } from "../types";

const project: Project = {
  "slug": "state-of-the-strait",
  "title": "State of the Strait",
  "summary": "Exploring free satellite imagery (Sentinel-1 & 2) from Microsoft's Planetary Computer to assess the feasibility of tracking ship movements & activity. ",
  "publishedAt": "2026-11-15",
  "period": "2026",
  "role": "Personal research project",
  "status": "In progress",
  "tags": [
    "Python",
    "Sentinel-1/2",
    "PortWatch"
  ],
  "outcome": "Calendar and historical-growth repairs reduced retrospective bunker-sales MAPE from 4.68% to 3.90%; a selected petroleum-count candidate reached 3.74%, but did not beat its control in the one additional month checked.",
  "sections": [
    {
      "id": "question",
      "title": "Inspiration",
      "blocks": [
        {
          "type": "text",
          "content": "I first came across satellite imagery as a data source through its use in estimating oil inventories. Analysts could use the shadows inside storage tanks with floating roofs to [work out roughly how much oil they held](https://www.nature.com/articles/s41599-023-02128-5)."
        },
        {
          "type": "text",
          "content": "This gave me the idea on testing whether free satellite imagery could give an independent view of ship activity through the Strait of Hormuz, where AIS-based tracking depends on the signals ships transmit."
        }
      ],
      "navTitle": "What I'm trying to do"
    },
    {
      "id": "implementation",
      "title": "Detection windows",
      "blocks": [
        {
          "type": "text",
          "content": "The Python scripts query the Planetary Computer STAC catalogue, make previews and extract candidate detections. The optical script also saves 80×80-pixel crops around up to six of the largest detections and enlarges them for viewing for comparison and manual validation."
        },
        {
          "type": "image",
          "src": "/images/projects/strait.webp",
          "caption": "Sentinel-2 RGB preview, 24 October 2026. Contains modified Copernicus Sentinel data (2026), accessed through Microsoft Planetary Computer."
        }
      ],
      "navTitle": "Image processing"
    },
    {
      "id": "findings",
      "title": "Clouded judgement",
      "blocks": [
        {
          "type": "text",
          "content": "Before looking for ships, the optical script uses Sentinel-2’s Scene Classification Layer (SCL) to exclude likely clouds and cloud shadows, and expands the excluded areas around their edges. The SCL isn't 100% accurate, and several small clouds still reached the detector, which picked them up because they were bright against the surrounding water and shows the need for better detection rules or models."
        },
        {
          "type": "image",
          "src": "/images/projects/strait-detections-grid.png",
          "caption": "Six candidate detections on 29 September 2026, arranged in reading order. Cutouts 4 and 5 (bottom left and bottom centre) show ships; the others show clouds. Each is an 80×80-pixel crop enlarged for inspection, without adding detail. Contains modified Copernicus Sentinel data (2026), accessed through Microsoft Planetary Computer.",
          "technical": true
        },
        {
          "type": "text",
          "content": "The fourth and fifth cutouts show ships, while the others show clouds. Shape, wakes and the colour offset between optical bands offered possible ways to distinguish them, but there was no implemented second-stage classifier to make that distinction automatically, so the initial bright-object count was still too crude to use as a traffic series."
        }
      ],
      "navTitle": "Cloud false positives"
    },
    {
      "id": "why-singapore",
      "title": "A change of port",
      "blocks": [
        {
          "type": "text",
          "content": "Unfortunately the Strait of Hormuz didn't have a lot of shipping traffic during this period as one would expect, which posed a problem for our research problem. I considered using PortWatch as an additional means to track ship positions to compare with our sparse data, but PortWatch was rate-limiting our requests, and its reliance on AIS raised another issue. Missing transmissions and interference around Hormuz meant I couldn’t simply treat the reported traffic as a complete record. "
        },
        {
          "type": "text",
          "content": "I shifted to Singapore’s anchorages to work on the narrower, simpler problem of ship detection and to test the limits of free satellite data in a far simpler context. The charted boundaries gave me defined areas where I could compare radar detections with manual counts before testing whether those counts were useful for predicting bunker fuel sales."
        }
      ]
    },
    {
      "id": "singapore-study-area",
      "title": "Drawing the line",
      "blocks": [
        {
          "type": "text",
          "content": "The satellite view below puts the Singapore study in context. Ships are visible off the southern and eastern coast, around the port and its anchorages. These are the waters I focused on for the counting exercise, using radar imagery for the detections and this optical view to show the geography."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/strait-singapore-overview.png",
          "technical": true,
          "caption": "Singapore in Sentinel-2C true colour, 22 August 2026. Changi Airport is on the right, with ships visible offshore; cloud obscures parts of the west. Saved project preview at 20 metres per pixel. Contains modified Copernicus Sentinel data (2026), accessed through Microsoft Planetary Computer."
        },
        {
          "type": "text",
          "content": "The counting areas came from MPA’s anchorage chartlet, whose PDF drawing outlines were converted into geographic coordinates and checked against the map’s coordinate ticks, the satellite coastline and the visible arrangement of anchored ships. I grouped the areas into bunkering, petroleum and general anchorages, with small-craft, quarantine and special-purpose zones excluded, and added a separate waiting-area box east of the port limits. Six chartlet boundaries needed reconstruction, and that eastern box was drawn manually, so the dashed outlines mark approximate areas rather than precise official boundaries."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/strait-singapore-anchorages.png",
          "technical": true,
          "caption": "Study boundaries over Sentinel-1 VV radar, 22 October 2026. Orange: bunkering; purple: petroleum; blue: general; green: the eastern waiting area outside port limits; grey: excluded zones. Dashed boundaries are approximate: six chartlet outlines were reconstructed, and the large green OPL_E box was drawn separately. The optical overview above covers a smaller extent and a different date. Contains modified Copernicus Sentinel data (2026), accessed through Microsoft Planetary Computer; anchorage outlines derived from MPA’s chartlet."
        }
      ]
    },
    {
      "id": "detection-pipeline",
      "title": "Identifying ships",
      "blocks": [
        {
          "type": "text",
          "content": "For Singapore I used Sentinel-1 radar, which avoids the optical cloud problem but still needs to distinguish ships from the surrounding sea. The CFAR detector compares a bright candidate with a ring of nearby water, leaving a guard area around the candidate so the ship itself does not dominate that comparison. A fixed brightness threshold had been unreliable across different water backgrounds, while comparing locally gave the threshold a reference for each part of the scene."
        },
        {
          "type": "diagram",
          "title": "From radar to a monthly forecast input",
          "steps": [
            {
              "label": "Radar passes",
              "detail": "Select images covering the Singapore anchorages."
            },
            {
              "label": "Local detection",
              "detail": "Use CFAR within the anchorage polygons."
            },
            {
              "label": "Coverage adjustment",
              "detail": "Aggregate to average ships per pass."
            },
            {
              "label": "Forecast comparison",
              "detail": "Compare bunker-sales predictions with a past-data baseline."
            }
          ],
          "caption": "This is the Singapore radar extension. The Hormuz optical workflow uses a separate detection and inspection path."
        },
        {
          "type": "text",
          "content": "Looking at the outputs also exposed counting problems. A large tanker could appear as separate bright bow and stern pieces, so the detector grows connected bright pixels and the analysis merges detections within 150 metres. Land is masked with a buffer around the coast, and smaller radar fragments are kept out of the main count. Those changes address specific failure cases; they do not turn every remaining box into a verified ship."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/strait-radar-detections.png",
          "technical": true,
          "caption": "The same Sentinel-1 radar scene before detection (left) and with detector boxes (right), AEBA anchorage, 26 October 2025. Yellow marks the anchorage boundary. Red boxes mark medium/large candidates used in the main count; blue boxes mark smaller detections. Thicker boxes are inside the boundary. These are detector outputs, not independently verified ship labels. Contains modified Copernicus Sentinel data (2025), accessed through Microsoft Planetary Computer."
        },
        {
          "type": "text",
          "content": "The saved hand check covers ten zone crops on seven dates, with 113 ships counted by the detector and 113 by eye in total, and no crop differing by more than one. That is a useful initial check, but equal totals can hide misses and false positives, crowded nearshore scenes remain difficult to judge, and the large eastern waiting area was not hand-counted. It supports inspecting the measurement before using it, rather than claiming a general detection accuracy from a small sample."
        }
      ],
      "navTitle": "Detection pipeline"
    },
    {
      "id": "singapore-test",
      "title": "Mapping it out",
      "blocks": [
        {
          "type": "text",
          "content": "The Singapore pipeline covers 830-plus radar passes, using a CFAR detector within anchorage boundaries derived from MPA’s chartlet. Coverage varied from two to nine passes a month, so we used average ships per pass to account for the differing frequencies (monthly sums would be inaccurate)."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/strait-ships-per-pass.png",
          "technical": true,
          "caption": "Ship counts for individual Sentinel-1 passes, grouped by anchorage type. Coloured dots identify orbit tracks; the black line is a three-month median. These are per-pass observations, not monthly totals or the final orbit-adjusted monthly forecast input. Averaging eligible passes prevents months with more images from automatically receiving a higher count. Contains modified Copernicus Sentinel data (2016–2026), accessed through Microsoft Planetary Computer."
        },
        {
          "type": "text",
          "content": "The prediction target was monthly bunker fuel sold, and the estimate was made after the month ended but before MPA’s assumed release date on the tenth of the following month. The original historical-sales model started from the previous month’s sales and used the same monthly change one year earlier; the satellite version added the current month’s change in average orbit-adjusted ships per pass. Both were refitted on earlier months only, and the comparison used the same 82 eligible months from January 2019 to September 2026, with gaps where the primary satellite feature was unavailable."
        },
        {
          "type": "text",
          "content": "The original combined model’s mean absolute percentage error was 4.70%, compared with 4.68% using historical sales alone, so adding the total ship count did not improve that test. A petroleum-anchorage subgroup looked better after comparing several groups, which made it a research lead rather than the original result. The sales labels are revised official figures, and the archived image dates do not recreate every piece of first-release information a live forecaster would have had."
        }
      ],
      "navTitle": "Singapore study"
    },
    {
      "id": "satellite-only-test",
      "title": "Standalone prediction",
      "blocks": [
        {
          "type": "text",
          "content": "I also tested whether satellite counts could estimate monthly sales on their own. This model learns the relationship between ship counts and sales from earlier months, then uses the current month’s average orbit-adjusted ship count to estimate the sales level. It has no previous-month sales or seasonal sales input when making that estimate."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/strait-satellite-only-sales.png",
          "technical": true,
          "caption": "Satellite-only estimates versus actual MPA bunker sales on the same 82 evaluation months, January 2019–September 2026. Green shows actual sales; brown shows estimates. Bars below show percentage error, with negative values indicating underestimates. Gaps are excluded evaluation months. MAPE is 6.69%. These are saved expanding-window estimates using revised official sales, from an exploratory historical follow-up."
        },
        {
          "type": "text",
          "content": "The standalone model reached 6.69% MAPE on those same 82 months, while simply carrying the previous month’s sales forward gave 5.31%. Its estimates stayed near a typical sales level and missed both monthly spikes and the higher level of demand in the later years. Historical sales were training labels for this model, but previous sales were not an input when making its estimate, so it really did have to make do with the satellite count."
        },
        {
          "type": "text",
          "content": "That result made the measurement mismatch worth looking at directly. The satellite feature is average occupancy at a few observation times, while bunker sales are fuel delivered across a whole month. The number of visits, how long ships stay, how much fuel each buys and activity outside the counted anchorages can all change without a proportional change in visible ships, although those mechanisms would need their own data before I could attribute the errors to them."
        }
      ]
    },
    {
      "id": "exploratory-count-checks",
      "title": "Moving together",
      "blocks": [
        {
          "type": "text",
          "content": "There were stretches where counts and sales looked promising together, so I compared monthly percentage changes and checked whether the relationship depended on the time window or a delay between the two series. The same-month change correlation was −0.09 across the 82 evaluation months, and both moved in the same direction in 45.1% of them. Dividing sales by the days in each month reduced the variance of sales changes by about 42.5%, but the correlation with count changes was still only +0.03, so calendar duration explained part of the sales variation without revealing a strong positive link to the counts."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/strait-monthly-changes.png",
          "technical": true,
          "caption": "Monthly percentage changes in the primary total ship-count feature and bunker sales, followed by the same observations as a scatter plot. Pearson correlation −0.09; Spearman correlation −0.14; same direction in 37 of 82 months. Counts use the orbit adjustment available at each historical prediction date. Missing evaluation months remain gaps."
        },
        {
          "type": "text",
          "content": "The relationship did change over time. The trailing 12-month correlation reached +0.53 in February 2021, but fell to −0.69 in October 2022. The 24-month check also changed sign. There were periods of positive co-movement, though the pattern was unstable rather than a consistently positive link."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/strait-rolling-correlations.png",
          "technical": true,
          "caption": "Correlations of monthly percentage changes over trailing 12- and 24-calendar-month windows, requiring at least 9 and 18 paired observations respectively. Both fixed windows are shown. Overlapping windows are not independent tests, and gaps are not interpolated."
        },
        {
          "type": "text",
          "content": "I also compared ship-count changes with sales changes up to three months earlier and later. When ships led sales by one month, the correlation was weakly positive at +0.15; leads of two and three months were near zero. Using the same 52 observations at every offset left the one-month lead small at +0.13. These are exploratory checks on data already examined, rather than evidence that a revised model would forecast better."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/strait-lead-lag.png",
          "technical": true,
          "caption": "All seven tested offsets, from −3 to +3 calendar months. Positive offsets mean ships lead sales; negative offsets mean sales lead ships. Brown bars use the available paired observations at each offset, with sample sizes labelled. Green bars use the same 52 observations across all offsets. The largest positive correlation pairs sales with ship-count changes one month later, which does not support a ship-leading-sales interpretation. No causal or statistical-significance claim is made."
        }
      ]
    },
    {
      "id": "high-error-months",
      "title": "Taking a step back",
      "blocks": [
        {
          "type": "text",
          "content": "In February 2022, fuel sales fell 13% while our ship count increased. January had 31 days and February had 28, so even with the same daily fuel sales, February’s monthly total would be about 9.7% lower. After accounting for the number of days, daily sales fell only 3.6%. [Argus also reported](https://www.argusmedia.com/en/news-and-insights/latest-market-news/2311359-singapore-bunker-sales-in-february-fall) that other Asian ports were offering more competitive prices, so there were reasons for fuel purchases to change even if ships were still present in Singapore."
        },
        {
          "type": "text",
          "content": "December 2023 exposed a different limitation. Sales increased about 18% while our count fell, and the [EIA linked the higher demand around this period](https://www.eia.gov/TodayinEnergy/detail.php?id=62224) to longer voyages avoiding the Red Sea. That gives us a plausible reason for the two series to diverge: ships could buy more fuel per visit without more ships appearing in an image. We hadn’t measured purchases per ship, so we couldn’t test that explanation directly, and counting the ships more accurately would not necessarily have supplied the missing information."
        },
        {
          "type": "text",
          "content": "The largest miss came in December 2025, when the satellite-only estimate was 24% too low. Sales rose sharply while the count barely changed, and we haven’t established what drove that increase. One possibility is precautionary fuel buying amid renewed threats of conflict with Iran, although the [29 December warning](https://theprint.in/world/trump-meets-netanyahu-on-gaza-ceasefire-floats-support-for-another-iran-strike/2814694/) came late in the month and we haven’t established a link to purchases. The result shows where the count failed to capture demand, but explaining the spike would require information about the vessels, their fuel purchases and the market conditions that month."
        }
      ]
    },
    {
      "id": "model-repairs",
      "title": "A fairer comparison",
      "blocks": [
        {
          "type": "text",
          "content": "I then tested a fixed group of repairs against the problems the diagnostics had exposed. Sales were converted to tonnes per day and reconstructed using the known length of the target month, and the history models were given the previous month’s sales growth alongside the seasonal change. I compared expanding history with a trailing five-year window, then tried current counts, counts one month earlier, a three-month count average, petroleum-anchorage counts and a radar size proxy. The last proxy gives larger retained radar footprints more weight, but it measures bright radar response rather than actual hull area or fuel capacity."
        },
        {
          "type": "text",
          "content": "The biggest improvement came from the forecasting setup. MAPE fell from the original history model’s 4.68% to 4.14% with daily-sales seasonal modelling, and to 3.90% when previous-month growth was also included. Shortening the history alone did not improve the daily seasonal model, and the five-year version with previous growth reached 3.94%, slightly behind the expanding version. That matters because an improved model containing satellite data would otherwise make it easy to credit the images for gains that came from the baseline."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/strait-model-repairs.png",
          "technical": true,
          "caption": "Selected comparisons from the fixed repair grid and declared history/calendar ablations. All use the same 82 evaluation months; lower MAPE is better. All 22 candidate/control rows and month-level predictions are retained in the research outputs. The historical data had already been inspected, so these are exploratory comparisons rather than a new holdout."
        },
        {
          "type": "text",
          "content": "For each satellite addition I also fitted a history-only control on exactly the same earlier months, because missing satellite observations can otherwise change the training sample as well as the inputs. Total counts gave 3.94% MAPE against their matched control’s 3.91%, so they still did not help. Petroleum counts reached 3.74% against a 3.93% control, an improvement of about 0.19 percentage points, while smoothing and size weighting gave much smaller changes. The lagged-count candidate needed four history-only fallbacks when its input was missing, and every evaluation month remained in the comparison."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/strait-satellite-additions.png",
          "technical": true,
          "caption": "Change in MAPE from each satellite addition relative to its same-row, same-window history control. Negative is better. The petroleum group was already examined in earlier development, and the best addition was selected on inspected data; this is not proof of a reliable new forecasting edge."
        },
        {
          "type": "text",
          "content": "A recalibrated standalone count model with calendar adjustment and a recent three-year training window improved on the first standalone attempt, but its 5.11% error was barely better than the matched recent-mean control’s 5.16% and remained worse than the revised history models. The petroleum result is the stronger lead, although the group had already been inspected and the error comparisons helped select it, so the apparent gain still needs evidence beyond these historical months."
        }
      ]
    },
    {
      "id": "one-more-month",
      "title": "Further comparison",
      "blocks": [
        {
          "type": "text",
          "content": "Before retrieving October 2026’s official sales figure, I froze predictions from the revised models using the existing September sales history and October satellite inputs. The retrieved figure was 5.315 million tonnes, and the revised expanding-history model estimated 4.850 million, an 8.75% underestimate, compared with 10.50% for the original history model and 21.45% for the original satellite-only model."
        },
        {
          "type": "text",
          "content": "The petroleum candidate estimated 4.831 million tonnes, missing by 9.10%, while its matched history control missed by 8.79%. This single additional historical month is too small to validate a model, but it is a useful check against the temptation to stop at the best development score: the better baseline carried over in that month, and the selected satellite addition did not."
        }
      ]
    },
    {
      "id": "better-observations",
      "title": "Better data",
      "blocks": [
        {
          "type": "text",
          "content": "There are two directions I would pursue from here, because the weak relationship could reflect both what the images miss and what a ship count leaves out about fuel demand. More frequent observations could help estimate arrivals, departures, turnover and time spent at anchor, while higher-resolution imagery could improve detection and support estimates of vessel size. Linking those observations to AIS records or vessel registries could also help distinguish ship types and capacities, so the feature could describe the activity taking place rather than just how many bright objects were present."
        },
        {
          "type": "text",
          "content": "That would still need validation against independently identified ships, and even a correctly identified vessel’s capacity would not tell me how much fuel it purchased on that visit. Fuel deliveries would usually need transaction or operational records, while a useful estimate of turnover would need observations frequent enough to distinguish ships arriving and leaving between images. These are proposed measurement improvements; the limited hand checks so far do not establish that inaccurate detection caused the forecasting errors."
        }
      ]
    },
    {
      "id": "bunkering-decisions",
      "title": "Understanding the trade",
      "blocks": [
        {
          "type": "text",
          "content": "The other direction is to understand the bunkering process well enough to decide which observations should matter. A ship can be at anchor for reasons other than refuelling, and a fuel purchase depends on more than its presence: the voyage ahead, fuel remaining onboard, the quantity it can take, the services being arranged and the commercial choices around the stop could all be relevant. I would want to understand who makes that decision, whether onboard or through the owner, charterer or a purchasing team, and what information they use."
        },
        {
          "type": "text",
          "content": "Pricing would be part of that investigation, including whether Singapore is attractive relative to other refuelling ports, whether contracts affect where fuel is bought and how availability or delivery time changes the quantity ordered. Those mechanisms have not been measured in this study, so they are questions for domain research rather than explanations I can assign to every error. Better imagery would help describe the activity, and understanding the purchase decision would help choose which parts of that activity are worth using to predict fuel sales volume."
        }
      ]
    },
    {
      "id": "limits",
      "title": "Final thoughts",
      "blocks": [
        {
          "type": "text",
          "content": "The useful outcome so far is a better specified prediction problem and a stronger historical baseline, alongside a narrower satellite hypothesis. The count still covers only a few snapshots each month and only selected anchorages, the radar size proxy is not measured vessel capacity, and the historical tests use revised official sales. There is no demonstrated general satellite advantage or validated explanation for every demand spike."
        },
        {
          "type": "text",
          "content": "The next check is to freeze the revised expanding-history model, the five-year matched history control and its petroleum-count addition, then collect a consecutive run of new months without changing the features after seeing each result. The plan records the first retrieved official figure and the image cutoff for each issue, keeps misses visible and compares the paired errors over the full sequence. More hand-labelled detections and data on vessel size, turnover and actual fuel purchases would address different parts of the measurement problem, but adding them would need a separate declared experiment."
        }
      ],
      "navTitle": "Limitations"
    }
  ],
  "cover": "/images/projects/banners/state-of-the-strait.webp",
  "coverAlt": "Full-width crop of the saved Sentinel-2 Hormuz image from 24 October 2026, including visible cloud cover. Modified Copernicus Sentinel data via Microsoft Planetary Computer."
};

export default project;
