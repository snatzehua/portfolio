# Project writeup structure

Use this guide when creating or substantially revising a portfolio project. Its purpose is to show
how the author understood a problem, made decisions and checked the outcome. A feature list or a
summary of repository files is not enough. Pair this structure with the
[voice guidance](../.agents/skills/kieran-voice/SKILL.md).

The underlying thread is **problem → reasoning and choices → implementation → evidence → outcome**.
Core competencies should emerge from concrete decisions and work, rather than a list of claimed
skills. Use project-specific headings and combine sections for smaller projects; this is a coverage
standard, not a requirement to give every project the same headings or chronology.

The author's requested delivery is a start-to-end research/development account, with short,
occasionally witty subsection titles and matter-of-fact paragraphs whose connected reasons can run
across several clauses. Keep the headings specific to the work, avoid a quota of jokes or identical
phrasing across projects, and let the longer explanations carry actual reasoning. Include how the
question or target changed and why the project paused or ended; do not stop at the first demo or
most favourable result. Preserve the author's existing titles and text where they already do this.

## 1. Establish the source material before drafting

Read the active project's README, technical documents, relevant code, saved results and original
figures. Inventory available images, including ignored output directories where appropriate. Ask
what each artifact actually demonstrates. Keep the portfolio checkout separate from the research
or application checkout.

Build a short evidence map in working notes before writing:

| Detail needed | Evidence to consult | What to establish |
| --- | --- | --- |
| Motivation and intended use | Author's explanation, original brief | Why the work existed and what success meant |
| Ownership | Author/team records and implementation history | What the author personally did |
| Data and scope | Source documentation, scripts, sample inputs | What was observed, where, when and at what resolution |
| Decisions and pivots | Author's rationale, notes, implementation changes | Why one approach was chosen and what prompted a change |
| Mechanism | Relevant code and technical documents | What is implemented and how inputs become outputs |
| Results | Saved predictions, evaluations, logs or demonstrations | What was actually checked, against which comparison |
| Figures | Original images, maps, diagrams and captions | Which image explains each important claim |

Code establishes behaviour, not personal motivation. A proposed feature is not an implemented one;
an implemented feature is not a measured benefit. Resolve contradictions before drafting. Retrieve
external sources when needed for outside claims; do not treat a README's assertion as independent
verification of that assertion.

## 2. Opening: the question, context and scope

Give a short summary of what was built or investigated and the current supported outcome. Then
explain the situation that made it worth doing: the user's difficulty, research question or
assignment brief, and the author's actual motivation. Establish the intended user or decision and
what a useful result would look like.

Include the relevant period, role and collaborators in the existing metadata. State personal
contributions explicitly for team projects. Do not claim sole ownership from a repository name.

## 3. Show the reader what the project is working with

Introduce unfamiliar inputs, geography, users or workflows before explaining the algorithm.
Use a concrete sample rather than assuming the reader knows the domain.

- A geographic study needs an overview and the actual study boundaries before area-specific results.
- A data project needs the source, unit of observation, time span and relevant coverage limitations.
- An application needs the starting workflow and an actual interface or representative input/output.
- Distinguish original observations from derived labels, estimates and comparison datasets.

For State of the Strait, this means showing Singapore and its counting zones before the forecast
results, explaining how MPA chartlet boundaries and the approximate eastern box were obtained, and
separating satellite observations from AIS-based PortWatch records.

## 4. Explain the approach through a concrete example

Trace an input through the important steps to its output. Define unfamiliar terms where they first
matter. Explain what each step contributes and its limits, rather than enumerating libraries.

Use existing technical diagrams where they accurately describe the current implementation. Add a
small diagram when a flow, dependency or algorithm is hard to follow in prose. Distinguish conceptual
workflows from implemented paths and tested behaviour.

A reader should be able to follow one example without opening the source code. For instance,
image cutouts make existing pixels easier to inspect; they do not improve resolution or add an
automated cloud classifier. Say which operation the code actually performs.

## 5. Develop the decisions, difficulties and pivots

Choose the few decisions that matter. Connect the initial approach, observed difficulty, options,
chosen response and consequences. Explain the tradeoff using the information available at the time.
Include unsuccessful attempts when they explain how the project developed.

A pivot needs a bridge: what became difficult, why that mattered to the question, and why the new
scope made the next step more useful or testable. Avoid reconstructing personal reasoning from code.
Distinguish the reason for a pivot from a justification developed after seeing the results.

For State of the Strait, the move from Hormuz to Singapore needs the author's rationale, the cloud
and radar detection problems, PortWatch access/comparison limitations, and the narrower ship-counting
check. The later bunker-sales experiment is a further question, not proof of detection accuracy.

## 6. Explain validation before asking the reader to interpret results

State what was tested, the comparison, sample size/time window, procedure and metric. Separate:

- **Implementation checks:** whether the software follows its specification.
- **Measurement checks:** whether detections, labels or derived quantities match the underlying reality.
- **Usefulness checks:** whether the output helps with the intended task or improves on a baseline.

For predictions, name the target, prediction time, available inputs, training window and evaluation
months. Identify any input containing historical target information. Explain the metric in ordinary
language and distinguish error from accuracy. Label post-hoc experiments and repeatedly inspected
results; do not present them as untouched validation.

For a manual detection check, report misses and false positives where available. Equal aggregate
counts alone do not establish that the same objects were identified correctly.

## 7. Report the outcome and what it supports

Lead with the actual finding, including a negative or inconclusive one. Give the baseline alongside
numerical results, with compatible units and evaluation samples. Link or record the supporting
artifact. Separate exploratory subgroup findings from the original primary test.

For an application without a measured user study, describe the demonstrated functionality and
observed checks. Do not invent time savings, adoption, productivity gains or deployment readiness.
Explain what was learned without turning every result into a success story.

## 8. Limits and a concrete next step

Name limitations that affect interpretation and what remains unknown. Keep proposed improvements
separate from completed work. Select one to three next steps that address a specific uncertainty,
and state what evidence would make the conclusion stronger or change the approach.

Keep presentation chores in the [backlog](../BACKLOG.md), separate from research or product next steps.

## Figures belong in the argument

Place each figure beside the explanation it supports. The cover does not replace the study-area map,
architecture diagram, interface example or failure case needed in the body. Prefer original project
artifacts over decorative or generated substitutes for technical evidence.

Each caption should establish what is shown, how to read the labels/colours, the relevant date or
scope, and any qualification needed to interpret it. Record source paths and transformations in
`my-portfolio/public/images/projects/README.md`, and intrinsic dimensions in
`my-portfolio/src/content/media.ts`. Distinguish different dates/extents between related images.
Use expandable technical images when labels or fine detail need inspection. Check readability on a
phone and preserve attribution. Do not publish private records or use synthetic images as results.

## Missing context stays visible while drafting

Use descriptive editorial placeholders only where a material gap affects the account:
`[missing motive]`, `[missing problem context]`, `[missing decision rationale]`,
`[missing alternatives]`, `[missing contribution]` or `[missing evidence]`.
Add a short contextual prompt explaining the missing input; do not use a bare `[...]` or fill the
slot with invented reasons. Existing author statements can resolve a gap even if the repository
contains no record of it. Ask for essential missing information or retain a clear draft marker;
never silently treat a marker as finished public copy.

## Review the whole account before calling it complete

- The reader understands the problem, intended value, author's contribution and supported outcome.
- Inputs, geography and domain terms are introduced before the mechanisms and results relying on them.
- Important decisions and changes of direction have reasons grounded in the author's actual account.
- Implemented, inspected, measured, exploratory and proposed work are clearly distinguished.
- Numerical claims have sources, comparisons, units and the right evaluation scope.
- Existing useful figures have been considered; the reader does not need to request each one individually.
- The sequence works as a complete story after edits, with no disconnected patches or contradictory claims.
- Preserve manual edits, stable section IDs and approved wording. Navigation labels follow headings.
- Check the existing [banner guide](project-banner-guide.md), source provenance and relevant links.
- Run `npm run check:content` from `my-portfolio/`. Visually check changed figures and layouts as needed.
