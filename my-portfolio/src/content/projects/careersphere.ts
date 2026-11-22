import type { Project } from "../types";

const project: Project = {
  "slug": "careersphere",
  "title": "CareerSphere",
  "summary": "A career exploration app we built to connect someone’s skills with realistic roles, gaps and next steps.",
  "publishedAt": "2026-11-15",
  "period": "2026",
  "role": "Team of two · Live job ingestion and data pipeline",
  "status": "Completed",
  "tags": [
    "Python",
    "DuckDB",
    "MotherDuck",
    "OpenAI",
    "Cloud Run"
  ],
  "outcome": "We won first place in the PyCon SG Jobs & Skills track. My job-ingestion work connected the skills data to roughly 88,000 postings.",
  "sections": [
    {
      "id": "problem",
      "title": "A next step",
      "blocks": [
        {
          "type": "text",
          "content": "My teammate and I built CareerSphere for the PyCon SG Jobs & Skills hackathon, where the problem was to turn someone’s background and goals into a realistic next step. For a job seeker in Singapore, the SkillsFuture framework gives role requirements and proficiency levels, while job listings show what employers are advertising, but those are separate things to work through. A user can describe their experience, uncertainty, timeline or salary expectations in plain language, and the app connects that to related roles, gaps and possible courses or jobs, with enough evidence to see why a recommendation appeared. We won first place in the Jobs & Skills track."
        },
        {
          "type": "text",
          "content": "Most of my work was on getting live job data into that process, while my teammate did most of the scoring, sphere and serving application. That division matters to the account: the interface and matching engine were team work, and the ingestion pipeline was the part I primarily owned."
        }
      ]
    },
    {
      "id": "approach",
      "title": "Let the data decide",
      "blocks": [
        {
          "type": "text",
          "content": "A profile or résumé first becomes structured skills and evidence, then those skills are matched to the SkillsFuture framework and passed into deterministic Python functions for role fit, gaps and job ranking. The language model can interpret the request, choose among allowlisted tools and explain their returned results, while the requirements, scores and source rows remain owned by the data and code. That gives someone inspecting a recommendation something more concrete than a confident paragraph to examine."
        },
        {
          "type": "image",
          "src": "/images/projects/careersphere.webp",
          "caption": "CareerSphere architecture: the browser calls an orchestrator, whose tools retrieve data and calculate scores. Original team diagram.",
          "technical": true
        },
        {
          "type": "text",
          "content": "Take the chemical-engineering example used during development: a profile mentions process design, chemical safety and thermodynamics. Matching can connect the first two to workplace skills such as Process Engineering Design and Chemical Risk Management, while thermodynamics can stay outside the official vocabulary rather than being forced into an unrelated requirement. The role tools then compare the matched skills and inferred proficiency with the framework rows, rank the remaining gaps and look for supporting courses and postings."
        },
        {
          "type": "text",
          "content": "The app combines a FastAPI backend and an in-process DuckDB snapshot with a React interface that shows roles on a sphere. The team chose a mostly linear flow from onboarding to analysis, the sphere and recommendations, because the visual overview still needed readable roles, gaps and evidence around it. The model can steer through the available tools, but invalid tool calls or provider failures can fall back to a fixed analysis pipeline with the same output shape."
        }
      ]
    },
    {
      "id": "my-contribution",
      "title": "Jobs, with receipts",
      "blocks": [
        {
          "type": "text",
          "content": "The jobs work grew out of a change in scope. The early concept was not a job finder, but MyCareersFuture returned structured skills for each posting, so the team could connect vacancies to the same skill-based analysis instead of adding a separate black-box job matcher. My pipeline connected the framework to a saved snapshot of roughly 88,000 postings, retaining posting identifiers, source links, salary fields, dates and job-skill links so a recommendation could lead back to a listing someone could inspect."
        },
        {
          "type": "text",
          "content": "The local collection path keeps posting history in SQLite, and the import selects the latest open or reopened snapshot for each source identifier before writing the jobs and their skills into DuckDB. The vocabularies do not share a skill identifier, so connecting them needs a crosswalk rather than a join on an official code. Semantic matching supplies candidate links, confident mappings can attach to the framework, and the other skill strings remain market-only. Keeping an unmatched tool name is more useful than quietly treating it as an official skill it does not represent."
        },
        {
          "type": "text",
          "content": "I then built the reusable hosted updater, which fetches recent pages and writes jobs and skills into MotherDuck. Existing job identifiers are updated and their skill rows replaced, while each ingestion run records its progress and errors; the Cloud Run job was set up with a daily scheduler. I also tried a Cloud SQL ingestion path before MotherDuck. [missing decision rationale] Explain what prompted that change in the ingestion architecture and why MotherDuck became the canonical store."
        },
        {
          "type": "text",
          "content": "I also worked on profile enrichment, although scraping was not reliable enough to make it a core dependency. A source being available during development did not guarantee that it would answer at demo time, and keeping the jobs snapshot separate from the request-time API meant the app could still show real saved postings when the upstream service was slow or rate-limited."
        }
      ]
    },
    {
      "id": "data-flow",
      "title": "Fresh enough",
      "blocks": [
        {
          "type": "text",
          "content": "Ingestion and serving eventually used different stores for different jobs. MotherDuck remained the canonical place for updates, but the team found that repeated per-role lookups made remote reads expensive: the deployment notes record roughly 175 milliseconds per lookup across regions, compared with about one millisecond in-process, and an analysis ran beyond five minutes. The serving app moved to a DuckDB snapshot baked into its container image. That removed the database network round trips without moving the Singapore-facing app or adding mutable startup refreshes across instances."
        },
        {
          "type": "text",
          "content": "That is the freshness tradeoff behind live jobs. The collection process can refresh MotherDuck daily, but the deployed app serves the snapshot it was built with, and a new snapshot has to be baked into a new image before those updates reach users. Chaining that rebuild to ingestion remained follow-up work in the deployment notes. The roughly 88,000 figure therefore belongs to the saved hackathon dataset; it does not tell us how many of those vacancies are open today."
        }
      ]
    },
    {
      "id": "decisions",
      "title": "Close isn’t qualified",
      "blocks": [
        {
          "type": "text",
          "content": "Matching needed more work than replacing exact keywords with embeddings. Early semantic checks helped connect different descriptions of the same skill, but they also produced plausible-looking mistakes, such as lab workflows matching a visual-effects pipeline skill. Some framework requirements were surprising in the context of a role too. The team kept confidence thresholds, domain context and alias/string fallbacks around the match, and skills without a defensible framework equivalent could remain separate."
        },
        {
          "type": "text",
          "content": "Later, software profiles were surfacing unrelated retail and media roles because a distilled skill list had lost the occupational context of the résumé. The team changed role relevance to blend the raw résumé representation with the matched framework skills, and the decision log records checks on three real résumés to see whether their specialties survived and unrelated roles fell back. Those were targeted development checks, with a remaining off-field tail noted in the log, rather than a recommendation-accuracy benchmark."
        },
        {
          "type": "text",
          "content": "The app also distinguishes a plausible career direction from strict coverage of the framework requirements. Someone can be close enough to explore a role while still missing important evidence or proficiency, and goals can influence which credible directions are emphasised without changing the underlying fit. The sphere supplies the overview, then the gaps, courses and postings give the surrounding detail needed to decide what a next step would involve."
        }
      ]
    },
    {
      "id": "limits",
      "title": "Beyond the demo",
      "blocks": [
        {
          "type": "text",
          "content": "The repository includes implementation checks for the boundaries that mattered here: job-ingestion fixtures check replacement without duplicate skill rows and preservation of unmatched skills, while orchestrator tests check allowed tools, computed outputs and fallback behaviour. These checks establish particular software behaviours. They do not establish that the skill crosswalk is always right or that following a suggested career move will work."
        },
        {
          "type": "text",
          "content": "We also used lightweight feedback from people around us, which helped shape practical details such as timeline and salary expectations. Alongside the first-place result, that shows we built and presented a system people could react to, but the feedback was not a controlled evaluation of career outcomes or recommendation accuracy. The saved posting volume describes the ingestion work, and the deployment timings explain an architectural choice; neither measures the quality of the advice."
        },
        {
          "type": "text",
          "content": "The completed scope was the hackathon deliverable. Job and course records still need upkeep, scraping and course-detail links can fail, and users need to check that the matched skills describe what they can actually do. The next useful checks would be to review a labelled sample of skill mappings and follow recommendations with users beyond the demo, recording source freshness and fallback use alongside their feedback. Automatic serving-snapshot refresh would address a separate operational gap."
        }
      ]
    }
  ],
  "repository": "https://github.com/rohanz/careersphere",
  "cover": "/images/projects/banners/careersphere.webp",
  "coverAlt": "CareerSphere’s original wordmark and globe icon on a full dark banner."
};

export default project;
