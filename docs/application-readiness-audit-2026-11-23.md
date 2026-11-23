# Application-readiness audit — 23 November 2026

Audited overnight on 22–23 November 2026 (Singapore time). This review covers the current working copy, including the substantial pre-existing uncommitted changes. It does not describe those changes as published.

**Deployment follow-up, 23 November 2026:** The author subsequently requested publication. Commit `5e3494a` was pushed to `main`, Vercel reported success, and the actual `https://snatzehua.com` domain was verified: all 26 content routes return 200, the five full writeups have their expected titles and article sections, and the old résumé and development-only editor routes return 404. Please Help Me and Satellite crop forecasting use the author's final titles and matching cover assets. The original findings below describe the pre-deployment audit; publication is now complete, while the five personal-context notes remain as reviewed. Deployment evidence is under `output/deployment-2026-11-23/`.

## Finding

The local portfolio builds and its pages work, but the live website is still an older version. Do not treat the current local content as what an employer will see at `https://snatzehua.com` until a deployment is verified. Five author-input notes also remain visible in three full articles, awaiting the author's decision.

| Area | Finding |
| --- | --- |
| Projects | 19 registered entries, covering the 11 active project headings in the current master résumé. Five full articles and fourteen intentional WIP articles. |
| Background | Updated against the current master résumé and relevant supporting notes. Six experience entries and three education entries. |
| Extras | Two existing puzzle articles retained, with working original-puzzle links and available images. No new competition results inferred. |
| Lifestyle | Travel video, photography and blacksmithing retained. Image loading and interactive viewers checked. |
| Résumé | Old download endpoint and bundled public PDF removed at the author's request. Original résumé files and the Drive file were not changed. |
| Publication | Live homepage still has the earlier intro/tabs and “Penultimate Year” content. The new section and checked project URLs return 404 publicly. |

## Changes made in this audit

- Replaced the education entry's stale “Penultimate Year Student” wording with the current GPA and expected May 2027 graduation from the master résumé.
- Corrected “Technical University of Denmark” and “Technical Investment Association”.
- Aligned the GovTech role title and expanded its description using the résumé and supporting notes: shared AuditMate contribution, PDF-tampering work, access-review checks, procurement-agent work and Power Automate workflows. The homepage still features GovTech as requested.
- Added the NUS Fintech Society Quantitative Research Lead entry. Did not add the unverified team-size figure or claim a research result.
- Updated the Synapxe title and described migration and Tableau-publishing work without importing the unverified percentage improvements.
- Renamed the combined NUS work entry to “Teaching & Contract Work”; retained its existing individual roles without claiming unrecorded contributions to the claims system.
- Removed public source buttons for GDELT and Systematic Portfolio after GitHub metadata confirmed that those repositories are private; anonymous requests also return 404. Removed the Hack4Good source button after both authenticated metadata lookup and anonymous access returned 404. No repository visibility was changed.
- Deleted `/backend/api/resume-download` and `/documents/kieran-ho-resume.pdf`. Both return 404 in the rebuilt local production app. There were no active résumé-download links to remove from the current navigation.
- Expanded `check:content` to validate Background titles, dates, details, logo files and consistency of current roles.

The latest source of career information was the existing sibling résumé repository's `full_resume/full_resume.tex` and relevant `experience/` notes. This is alignment to the author's source documents, not an independent verification by employers. No private résumé source files were copied into this repository.

All nineteen project article bodies, both Extras records, original section IDs, media, existing draft visibility decisions and project status values were preserved. Numerical research claims were not rewritten or presented as new experiments.

## Author-input notes still visible

These notes were shown to the author during the audit. They remain unchanged; asking to see them was not permission to remove them.

| Article | Note |
| --- | --- |
| Calendar & Task Scheduler | `[missing problem context]` Preferences and habits that matter most, and a concrete failure of the previous planning process. |
| Calendar & Task Scheduler | `[missing alternatives]` Scheduling approaches considered and why the chosen compromise suited the first version. |
| GDELT | `[missing motive]` Original trigger for this news-and-market experiment. |
| GDELT | `[missing decision rationale]` Whether the research is continuing and what determined that decision. |
| CareerSphere | `[missing decision rationale]` Why ingestion moved from Cloud SQL to MotherDuck. |

The fourteen WIP articles are an explicit existing editorial policy, separate from the underlying projects' completion status. This audit did not expose their preserved draft bodies or invent content to finish them.

## Verification

- Content validation: 19 projects, two Extras entries, six experience entries, three education entries and nineteen provenance-backed banners.
- TypeScript and the production build pass after the résumé route is removed.
- Existing local-editor backend suite: 49 checks passed. The production `/edit` page and both checked editor API routes return 404.
- All 26 real content routes return 200. Unknown project/Extras slugs, removed résumé URLs and development-only editor routes return the expected 404: 33 requests in total.
- Four legacy `?section=` URLs return 307 redirects to their matching section routes.
- Desktop/mobile browser checks cover thirteen representative routes at 1440px and 390px, including all five full project articles, both Extras articles and all section indexes. No horizontal overflow, broken images or uncaught JavaScript exceptions were observed in those 26 views. Screenshots wait for the page entrance transition to finish.
- Nine interactive browser checks pass: mobile navigation, four project-filter views, photo-viewer keyboard navigation and focus return, technical-diagram zoom and travel-video metadata decoding.
- GitHub metadata was checked for all eleven original project repository links. The remaining eight project links point to public repositories. Both Jane Street puzzle links and the GitHub profile respond successfully.
- Automated access is limited for LinkedIn (999), Argus (403) and Nature's access-check redirect. Those responses do not establish broken links or verify the pages' substantive content.
- The build retains an existing image-optimisation lint warning in the older `hero-overlay` component. The local preview also requests Vercel Analytics, whose deployment-only endpoint returns 404 locally; this is distinct from an uncaught JavaScript exception.

Machine-readable evidence and the initial snapshot are under `output/application-audit-2026-11-22/`. Representative screenshots are under `output/playwright/application-audit-*`.

## Before sharing the live URL

1. Resolve the five author notes, or explicitly decide to keep them in the editor and omit them publicly.
2. Deploy the reviewed local version through the existing hosting workflow, then verify the actual domain and project URLs. This audit did not commit, push or deploy.
3. Confirm that the old résumé endpoint and public PDF are gone on the deployed site too. The local removal does not alter the current deployment.

`https://www.snatzehua.com` also did not resolve from the test environment. The confirmed responding address is the non-`www` domain; no DNS configuration was changed.
