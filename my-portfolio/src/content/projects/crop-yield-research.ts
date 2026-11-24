import type { Project } from "../types";

const project: Project = {
  "slug": "crop-yield-research",
  "title": "Satellite crop forecasting",
  "summary": "Investigating how early weather and satellite observations can tell us something useful about regional crop production.",
  "publishedAt": "2026-11-15",
  "period": "2026",
  "role": "Testing satellite data ",
  "status": "Paused",
  "tags": [
    "Python",
    "Sentinel-1/2",
    "Geospatial analysis",
    "Time-series forecasting"
  ],
  "cover": "/images/projects/banners/crop-yield-research.webp",
  "coverAlt": "Satellite crop forecasting title beside the saved map of five French maize pilot regions; geography, not a forecast or measured crop-health map.",
  "outcome": "The research progressed from maize yield to regional all-crop production, with some retrospective July gains but unresolved source timing and drought failures; phase one is archived and no model is promoted.",
  "sections": [
    {
      "id": "problem",
      "title": "Historic Heatwave",
      "blocks": [
        {
          "type": "text",
          "content": "Earlier this year, I experienced one of [the hottest summers on record](https://en.wikipedia.org/wiki/2026_European_heatwaves), when I happened to be in Paris for a week during the heatwave starting in end-May. It was surreal going from the coldest January in Denmark to one of the hottest Junes in Paris, worsened by the lack of appropriate infrastructure to deal with the extreme weather."
        },
        {
          "type": "image",
          "src": "/images/projects/crop-paris-riverside.png",
          "width": "half",
          "alt": "A couple silhouetted beneath overhanging trees by the water at sunset in Paris.",
          "caption": "Couple at Sunset, taken by me"
        },
        {
          "type": "text",
          "content": "Despite how great and grand it was, I suffered daily in my cramped Airbnb; a structure with zero ventilation in a building that was built to trap heat. This experience left me deeply vengeful against the horrific effects of climate change and soured the otherwise wonderful experience I had in Paris, especially given my personal vendetta against the heat in Singapore.\n"
        },
        {
          "type": "image",
          "src": "/images/projects/crop-paris-night.png",
          "width": "half",
          "alt": "Red flares illuminate a crowd gathered in Paris at night.",
          "caption": "[PSG riots](https://en.wikipedia.org/wiki/2026_Paris_Saint-Germain_celebration_riots), taken by me"
        },
        {
          "type": "text",
          "content": "Fast forward a few months, I started playing around with satellite imaging data. It was then that I noticed that among the many different types of data, there were temperature maps, and I recalled my experience in Paris. Curious, I pulled the data for the region and looked at the heat maps. "
        },
        {
          "type": "text",
          "content": "Messing about with the data, I realised that there were vegetation-index maps, and I then became curious about whether I could measure what the heatwaves were doing to crop growth and yields. "
        },
        {
          "type": "text",
          "content": "An early estimate was the aim, while there was still a season left to observe, rather than an explanation assembled after the harvest. Staying with the theme of Paris & France, I began with a five-region French maize pilot into a broader regional production-index study."
        },
        {
          "type": "image",
          "src": "/images/projects/crop-yield-regions.png",
          "width": "half",
          "caption": "The five pilot regions. Saved project map using GISCO boundaries and Agreste departmental aggregates; this shows the study geography, not crop condition."
        },
        {
          "type": "text",
          "content": "Maize gave the initial forecast a specific target for now; I wanted to isolate the heat-based effects given that different crops may have vastly different temperature sensitivity. Weather-only and historical-trend models stayed beside the satellite versions, allowing us to develop a benchmark to determine if satellite imagery truly improved that comparison. "
        }
      ]
    },
    {
      "id": "evaluation",
      "title": "Crop Circles",
      "blocks": [
        {
          "type": "text",
          "content": "Picking maize was the easy bit. Working out whether the satellite was actually looking at maize took a little more doing. The historical crop map could tell me what had grown in a field before, but farmers rotate their crops, and even a field marked “maize” might have been grown for silage while my yield figures covered grain and seed. A cloudy image raised a simpler problem. If I gave a missing reading a value of zero, I’d record a sudden loss of vegetation every time I lost sight of the field."
        },
        {
          "type": "text",
          "content": "For Centre in 2024 and 2025, I could use each year’s crop declarations to narrow the sample down to grain maize. I compared how green those fields looked from space with the regional crop-condition reports as each season went on. I expected the two to move together more clearly than they did. Those two seasons helped me check which fields I was measuring and how I was calculating greenness. I still needed the harvest figures to find out whether any of it helped predict yield."
        },
        {
          "type": "text",
          "content": "I treated each forecast as if I were making it that month. For maize, I trained on earlier seasons, stopped the weather data seven days before month-end and compared models on the same regions and years. July mattered most to me, though I kept the May to September results and reran the comparison without provisional 2025. For the later production study I held back the annual figures by two or three years to allow for publication delays, and kept forecasts that used current official estimates in a separate group. The harder part was recreating the satellite archive. I could date a satellite pass, but couldn’t always tell which version of its readings I could have downloaded that July."
        }
      ]
    },
    {
      "id": "forecast-implementation",
      "title": "Predictions",
      "blocks": [
        {
          "type": "text",
          "content": "I started with the region’s historical yield trend. The part I wanted the model to learn was how far this particular harvest might finish above or below it. For each patch of farmland I sampled, I summarised the season’s heat, growing degree days, rain and dry spells using NASA POWER weather data, alongside Sentinel-2 vegetation indices and Sentinel-1 radar. Each patch could cover several parcels. I weighted the readings and combined them by department, then by region. In the July 2023 example for Alsace below, you can follow the regularised regression from the yield trend through each estimated contribution and back to tonnes per hectare. I fitted it using earlier harvests, so I could compare its finished forecast with the actual 2023 yield. That comparison measures forecast error. Isolating what heat caused would take a different experiment."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/crop-forecast-flow.png",
          "caption": "The maize forecast from weather and satellite readings to tonnes per hectare. This is the earlier version that used 25 or 50 sampling windows. The dashed arrows show where reference data and later harvest figures enter the evaluation.",
          "technical": true
        },
        {
          "type": "image",
          "src": "/images/projects/technical/crop-model-detail.png",
          "caption": "Alsace, July 2023. This example uses 25 windows and shows how the model fitted on earlier harvests turned that July’s observations into a yield forecast.",
          "technical": true
        }
      ]
    },
    {
      "id": "satellite",
      "title": "A clearer picture",
      "blocks": [
        {
          "type": "text",
          "content": "With the first forecasts in hand, I wondered whether the satellite was simply getting too few clear looks at the fields. I considered PlanetScope, though I had no account and hadn’t established how much of its archive I could use. I stayed with the public Sentinel data and checked how much land I could see, how cloudy it was and how old each reading was. Radar could still take a measurement through cloud, but microwave scattering tells you something different about a field from its colour in an optical image. Adding it didn’t improve the July yield forecast."
        },
        {
          "type": "image",
          "src": "/images/projects/crop-yield-satellite.png",
          "width": "half",
          "caption": "Fields, settlements and cloud over Haut-Rhin, Alsace, on 13 July 2023. An RGB image like this gives a sense of the landscape. I needed crop declarations to identify the maize. Contains modified Copernicus Sentinel data (2023), accessed through Microsoft Planetary Computer."
        },
        {
          "type": "text",
          "content": "I tried taking the latest available optical reading within the month. Across the sampled sites, the share of the July maize mask covered by observations rose from 94.7% to 99.5%, and the average reading was 5.8 days old instead of 12.9. I was getting a more recent look at almost all the maize in my sample. The awkward result was that the July forecasts got a little worse, with the average error going from about 0.828 to 0.839 tonnes per hectare."
        }
      ]
    },
    {
      "id": "weather",
      "title": "Weather permitting",
      "blocks": [
        {
          "type": "text",
          "content": "By this point I was looking at 150 patches of farmland from space and still using just one weather point in each of the 25 departments. I tried sampling the weather at those same 150 locations, keeping the satellite inputs, yield figures and model settings fixed. Across 20 region-years from 2022 to 2025, the July weather-only forecast missed the eventual yield by 0.808 tonnes per hectare on average, down from 0.816. Taking out provisional 2025 gave a similar improvement, from 0.895 to 0.883. Putting the satellite readings back in brought the error up to about 0.819."
        },
        {
          "type": "image",
          "src": "/images/projects/crop-yield-checkpoints.png",
          "caption": "Average maize yield error from May to September, with and without provisional 2025. Lower values mean the forecast landed closer to the harvest. I used the same historical seasons throughout these experiments."
        },
        {
          "type": "text",
          "content": "It was a small improvement, and by September the denser weather sample was doing worse. I tried giving the old fitted model the new weather readings to see whether the extra locations alone explained July. That didn’t reproduce the gain. I also tried using local climate to scale the inputs. The extreme values looked more reasonable afterwards, but the forecasts got worse, so I dropped that change."
        }
      ]
    },
    {
      "id": "production-track",
      "title": "Beyond maize",
      "blocks": [
        {
          "type": "text",
          "content": "Maize had given me somewhere to start, but a region can lose a good chunk of its harvest even if the maize does fine. To get back to the broader question that had interested me in Paris, I turned to the official regional plant-output accounts. These combine cereals, forage, vegetables, fruit, wine and other crops, weighting each by its economic importance. An index of 89.3 means the region produced 10.7% less by volume than the previous year. That gave me one outcome to forecast across crops, although it still left open how much of any loss was down to heat."
        },
        {
          "type": "text",
          "content": "For this version I used satellite estimates of how much of the light available for photosynthesis the vegetation absorbed, known as FPAR, across cropland and rangeland. A field can look much greener than it did last month simply because it’s June. I tried comparing vegetation at the same point in the calendar across years and combined those changes with the weather. Using the vegetation levels directly had done worse than the baseline. Adding detail about each region’s crop mix hadn’t fixed that either, since a regional share still tells me very little about what’s growing in any particular pixel."
        },
        {
          "type": "text",
          "content": "I could match Centre-Val de Loire, Pays de la Loire and Bretagne directly to the historical forecasts I was using for comparison. I kept the seven-region extension separate because some modern regions needed older forecasts pieced together. Across the 27 region-years from 2017 to 2025 in those three regions, the July mean absolute error fell from 6.466 to 5.912 percentage points when I held back the annual figures by two years, and from 6.674 to 5.978 with a three-year delay. The 2024 figures were semi-final and 2025 was provisional, but taking out 2025 still left a gain. I also checked forecasts for the first day of April, June, August and October alongside 1 July."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/crop-production-july.png",
          "technical": true,
          "caption": "July forecasts for Centre-Val de Loire, Pays de la Loire and Bretagne with annual figures held back by two years. Error is measured in percentage points of annual production change. The 27 region-years include provisional 2025 and use the revised archives."
        },
        {
          "type": "text",
          "content": "A model that put more emphasis on recent stress brought the July error down to 5.649 points for the three regions with a two-year delay. By then I’d worked with these same seasons quite a few times, and the size of the gain depended on the month, the regions and the delay I used. What gave me more pause was the timing of the images themselves. When I held the satellite data back by ninety days, the July benefit from comparing vegetation across years disappeared. Ninety days was a sensitivity check. The actual delay, and whether the archived values had since been smoothed or revised, were still open questions."
        }
      ]
    },
    {
      "id": "failure-case",
      "title": "Missing the drought",
      "blocks": [
        {
          "type": "text",
          "content": "Bretagne in 2022 was exactly the sort of summer that got me interested in this project. The harvest figures put regional crop production down 10.7% on the previous year. Forage accounted for 6.77 percentage points of that fall, and horticulture and vegetables for another 2.88. In July the baseline had predicted a 1.49% increase. My calendar comparison put it up 5.77%, and the recent-stress version put it up 7.89%. The two models with better average scores were both further off in the year I most wanted them to get right."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/crop-bretagne-timeline.png",
          "technical": true,
          "caption": "Bretagne’s 2022 growing season. The timeline includes reports published after July, which helped me piece together where the forecast went wrong."
        },
        {
          "type": "text",
          "content": "Reading the regional reports afterwards filled in some of what the forecasts had missed. There was already damage by late June, and later on the grass stopped growing. Drying winds and irrigation limits mattered, and a vegetable could still have a visible canopy even if its quality had deteriorated enough to affect what growers could sell. The drought showed up in the weather data, but my model’s regional vegetation summaries failed to capture how much forage was being lost over the season. Some of the clearest accounts came out in September, which made them useful for understanding the miss and two months too late to help the July forecast."
        }
      ]
    },
    {
      "id": "limits",
      "title": "Conclusion",
      "blocks": [
        {
          "type": "text",
          "content": "I archived the first phase on 18 November 2026. I tried one more July replay using only satellite data for which I had a dated source copy, but that left six region-years per label delay. It also used a different crop-only recipe and still relied on revised weather and harvest figures. At that point I’d learnt quite a bit about those particular summers, and I didn’t have a new one left to test a different model on. I kept the baseline and paused development."
        },
        {
          "type": "text",
          "content": "If I pick this up again, I’d start by saving the observations as they arrive, including the date each version becomes available. A longer archive with that history would work too. I’d also want forage measurements that capture when growth slows and stops, and harvest figures covering the same crops and regions as the satellite sample. Then I could make a forecast in July, put it aside, and see how close I was when the harvest came in."
        }
      ]
    }
  ]
};

export default project;
