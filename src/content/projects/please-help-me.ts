import type { Project } from "../types";

const project: Project = {
  "slug": "please-help-me",
  "title": "Please Help Me",
  "summary": "A local calendar that compares ways to fit work around deadlines, commitments and working preferences, with each plan held for review.",
  "publishedAt": "2026-11-16",
  "period": "2026",
  "role": "Personal application project",
  "status": "In progress",
  "tags": [
    "TypeScript",
    "React",
    "Node.js",
    "SQLite",
    "Scheduling algorithms"
  ],
  "outcome": "Six heuristic scheduling strategies and a reviewable planning loop are implemented locally; a fixed packing case improves on deadline-first placement, while better real-world follow-through remains unmeasured.",
  "sections": [
    {
      "id": "problem",
      "title": "One calendar",
      "blocks": [
        {
          "type": "text",
          "content": "I wanted to outsource time blocking and end up with one definitive calendar that accounts for all my deadlines, with the plan built around my preferences and habits. The goal is to delegate the work of turning those deadlines into a schedule I can follow."
        },
        {
          "type": "text",
          "content": "I built a local calendar and task planner around that goal, starting with fixed commitments, tasks, deadlines and work sessions, then adding capacity calculations, alternative schedules and a record of the choices made around them. The scheduler checks whether the remaining work fits into the hours I have actually made available. Breaks, buffers and daily limits are part of that calculation, because an empty rectangle on a calendar does not necessarily mean another hour of work is realistic, and a plan that accounts for every deadline still needs to be something I can follow."
        },
        {
          "type": "image",
          "src": "/images/projects/scheduler-sample-week.png",
          "caption": "The actual local calendar interface, captured with the built-in sample week in a fresh temporary database on 16 November 2026. All tasks and events shown are demo records, not my personal calendar."
        },
        {
          "type": "text",
          "content": "[missing problem context] Add the preferences and habits that matter most, and a concrete example of what the previous planning process failed to account for."
        }
      ]
    },
    {
      "id": "architecture",
      "title": "Work and its rectangles",
      "blocks": [
        {
          "type": "text",
          "content": "I kept three records distinct: a task is work still to do, an event blocks time, and a session allocates part of a task to a particular slot. A report can need three hours and have two sessions without becoming two separate deadlines, and moving either session leaves the task’s remaining effort unchanged. React and FullCalendar provide the interface, while an Express API and SQLite retain the records and a shared TypeScript engine performs the capacity and scheduling calculations. It runs as a single-user application on my machine; persistence here means records survive a restart, rather than syncing across devices."
        },
        {
          "type": "image",
          "src": "/images/projects/technical/scheduler-workflow.png",
          "caption": "The planning workflow from the project’s technical documentation: task inputs and availability feed a planning snapshot, candidate schedules pass through review and application, and progress feeds replanning and preference evidence. Original Mermaid export supplied by the author. This is a process map; the proposed evaluation harness and improved real-world follow-through are not established by the diagram.",
          "technical": true
        },
        {
          "type": "text",
          "content": "Those records feed a planning snapshot alongside the working rules and existing allocations. Capacity calculation establishes the time available, candidate generation tries to place the work, and review decides which proposal becomes the accepted schedule. Progress updates and changed commitments then feed another pass. The distinction matters because having enough hours in total does not establish that the work fits: four free 30-minute gaps cannot hold a task that needs two uninterrupted hours."
        }
      ]
    },
    {
      "id": "scheduler",
      "title": "It has to fit",
      "blocks": [
        {
          "type": "text",
          "content": "Capacity calculation expands recurring commitments in their time zones, removes their overlap with working windows and breaks, and applies daily limits and a contingency buffer. The engine then takes eligible tasks in order and greedily fills valid gaps, respecting deadlines, earliest starts, dependencies and minimum or maximum session lengths. A dependent task becomes schedulable only when its predecessor is already complete or has been fully allocated first. Unknown effort and blocked dependencies stay in the unallocated report, so a complete-looking calendar cannot hide work the engine has no basis for placing."
        },
        {
          "type": "text",
          "content": "The placement details matter even for a small task. If 60 minutes of work require sessions of at least 30 minutes, putting 59 minutes into the first available gap leaves one minute that cannot form a valid session. The engine can place 30 minutes first and retain another usable 30-minute block, and it can also abandon an otherwise stable placement when preserving existing sessions would cause an avoidable earlier-deadline shortfall."
        },
        {
          "type": "text",
          "content": "The original deadline ordering is useful, but it can consume the only long gap with a short task and leave longer work stranded. The app now constructs six candidates from the same snapshot: deadline-first with preservation, fresh deadline placement, long blocks first, large tasks first, priority-first and personal fit. It compares constraint errors first, then cumulative shortfall at each deadline, then total known unallocated work, supported preferences, disruption and session count. These are ordered tests rather than one weighted score, so a better preference score cannot compensate for worse deadline coverage. Six heuristics provide alternatives to inspect; they do not establish a globally optimal schedule or six independently validated improvements."
        },
        {
          "type": "text",
          "content": "[missing alternatives] Add which scheduling approaches you considered before choosing these heuristics, and why that compromise suited the first version."
        }
      ]
    },
    {
      "id": "acceptance",
      "title": "Before committing",
      "blocks": [
        {
          "type": "text",
          "content": "A preview saves the planning inputs, all six candidates and the reasons for the recommendation without changing accepted sessions. Choosing another candidate updates the explanation, including a warning if its constraint or deadline coverage is worse. Acceptance checks the current records and rules against the saved state fingerprint, checks the learning settings and rejects expired previews or sessions that have already started. A confirmation is only meaningful if it still applies to the calendar the user is looking at."
        },
        {
          "type": "text",
          "content": "Session changes, acceptance history and the undo record are then written in one SQLite transaction, so a failed write cannot leave half a plan applied. Undo restores the previous sessions only while the workspace still matches the state after acceptance; later edits make it refuse rather than overwrite newer work. Locked sessions also remain subject to conflict checks. This gives replanning a controlled way to change the calendar, although it says nothing by itself about whether the selected schedule is useful."
        }
      ]
    },
    {
      "id": "assistant",
      "title": "Let the model talk",
      "blocks": [
        {
          "type": "text",
          "content": "The assistant handles the less structured side of the input: it can read calendar context, request planning calculations and propose an assessment containing a task breakdown, dependencies, assumptions and separate human and AI effort ranges. The deterministic engine still calculates capacity and places sessions. Accepting an assessment saves expected human effort and dependencies for planning, while marking it reviewed for training is a separate action; a model proposal should not quietly become either confirmed workload or its own correct answer."
        },
        {
          "type": "text",
          "content": "The saved implementation checks include a live Codex call that produced a structured assessment through the planner’s tools without changing confirmed effort. That establishes the proposal path, while estimate accuracy still needs reviewed reference cases. Text-provider, external-source and voice paths exist, but live voice-provider and Canvas acceptance remain pending configuration and testing. This web application is also separate from the earlier Python terminal assistant listed on this site, whose Google integrations are not evidence for this implementation."
        }
      ]
    },
    {
      "id": "next",
      "title": "Learning my habits",
      "blocks": [
        {
          "type": "text",
          "content": "The app records placement choices such as moving a session or accepting a candidate, and groups them by task type, weekday, four-hour time band, session length and recent commitments. Repeated edits to one session contribute its latest choice rather than many apparently independent votes, and accepting a suggestion has less weight than placing a session directly. The default requires five distinct sessions before using a group and gives older evidence a 45-day half-life, while unsupported groups remain neutral."
        },
        {
          "type": "text",
          "content": "Those observations can influence placement within the confirmed constraints, but moving a session does not reveal why the original slot failed or how much work was done. The evaluation therefore keeps observed choices, optional actual-time reports, completion markers and missing outcomes distinct, and historical checks exclude observations that occurred after their cutoff. It also follows the candidate actually accepted, rather than crediting the initial recommendation when the user chose something else. It would be easy to produce a flattering learning curve by treating every elapsed slot as a successful work session, but that would measure the calendar rather than the work."
        }
      ]
    },
    {
      "id": "evidence",
      "title": "A plan isn’t progress",
      "blocks": [
        {
          "type": "text",
          "content": "The fixed packing test makes the benefit of trying another ordering quite concrete. It provides a 90-minute morning window and a 45-minute afternoon window, with a 45-minute task due first and a 90-minute task requiring one uninterrupted session. Deadline-first placement puts the short task in the morning, leaving no valid place for the long one. An alternative reserves the morning for the long task and puts the short task in the afternoon, reducing known unallocated work from 90 minutes to zero. That is a scheduling improvement on this particular fixture, with known effort and fixed availability; it does not establish hours saved or better follow-through."
        },
        {
          "type": "text",
          "content": "Automated checks cover record persistence, scheduling constraints, stale previews, acceptance and undo, along with distinct-session preference support, chronological cutoffs and evaluation of user overrides. Rerunning the learning tests for this write-up passed 13 of 14 checks, including the packing comparison, but the personal-fit timing test returned the baseline where it expected a personalized candidate. The fixture mixes current recording times with a fixed replay cutoff, which appears to explain the failure, but that diagnosis still needs a controlled check. The earlier documented browser checks used an isolated synthetic workspace to inspect proposals, selection, acceptance, undo and reports. Neither set of checks establishes better real-world follow-through."
        },
        {
          "type": "text",
          "content": "The separate assessor pipeline exports reviewed examples, groups related briefs into chronological train, validation and test splits, and compares untuned, LoRA-tuned and reference outputs on matching frozen inputs. Its synthetic runtime exercise completed training and inference, but the random local base and its adapter returned no valid assessment on the single test case, while the reference returned one. The quality gate failed and no useful trained assessor was promoted. The 15 November acceptance audit also recorded zero reviewed training examples in the pilot, so this exercise cannot stand in for an assessment-quality benchmark."
        },
        {
          "type": "text",
          "content": "The next development step is a more independent test of scheduling and replanning, with workload estimation held fixed so the two problems can be examined separately. Five fictional month-long profiles and timed disruptions have been specified, including delayed cancellation notices, overruns and completion reports that arrive after the work. They are authored fixtures and a sequential protocol, not completed actor simulations; the runner, shared simulation clock and independent evaluator remain proposed. Static comparisons can test coverage and disruption, while ordinary use still needs to show which plans are accepted, revised and followed through to deadlines. The planning loop is implemented, but the original goal of a calendar I can reliably delegate to remains open."
        }
      ]
    }
  ],
  "cover": "/images/projects/banners/please-help-me.webp",
  "coverAlt": "Actual Please Help Me calendar interface with its built-in sample week, beside the Please Help Me title; sample data, not a personal calendar."
};

export default project;
