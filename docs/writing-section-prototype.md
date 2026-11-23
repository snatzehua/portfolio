# Writing section — local concept

23 November 2026. The author requested a landing-page section for blog-style learning notes, opinions, and accounts of where things stand, potentially replacing or integrating Extras. This is a local prototype, not a publication decision.

## Recommended direction

Use **Writing** as the umbrella at the existing `/writing` address. Existing puzzle posts already fit that description and retain their exact URLs. Keep Projects for detailed accounts of building or researching something; let Writing hold a narrower learning, an argument, a dated overview, or a reflection that can connect several projects.

| Direction | Useful when | Trade-off |
| --- | --- | --- |
| Writing absorbs Extras | Most material is essays, notes, updates and puzzle explanations | Some future activities may need a small practice/archive area. Recommended for the current two-post archive. |
| Separate Writing and Extras | Extras grows into tools, interactive experiments or other non-article material | Adds navigation and an extra place for readers to search. The current archive does not yet need that split. |
| Call the whole section Notes | Short exploratory entries become the dominant format | May understate substantial essays and opinion pieces. |

## Content and editorial ideas

- **Learning notes:** a concrete thing learned, an example or failed attempt, and what changed in the author's understanding. Small observations can stand alone.
- **Opinions:** a position, the reasons behind it and the complications or limits. Gather the author's actual position rather than turning a project description into an invented belief.
- **State-of-things posts:** dated snapshots of a project, research area or broader topic. Separate what is established, the author's interpretation and what they are watching next. Later revisions can keep an updated date.
- **Puzzles and practice:** retain the existing walkthroughs. Future Codeforces or competition accounts can explain an approach, a failure or a lesson when the author supplies the material.

Suggested first topic: the writing-voice experiment. The conversation already contains original writing, unsuccessful examples and specific author corrections about flow, simplicity, dry humour and punctuation. It has enough first-hand material to develop without inventing a personal origin story.

New topics in the prototype are clearly labelled samples or editorial ideas. The two puzzle posts remain the only registered, published writing entries. No fictional publication dates, reading times, results or finished essays were added.

## Presentation

The sample concept gives Writing a full-width section after selected projects: one lead excerpt and two smaller ideas, followed by links to the existing puzzles. Text and editorial typography carry the section; cover images are optional. Background remains below Lifestyle in this preview.

The index concept separates possible next posts from the real archive so the prototype does not imply publication. Once actual pieces exist, a newest-first list with a selected lead entry should be sufficient. Add filters when the archive makes them useful, rather than starting with empty categories or multiple menus. Kinds can be quiet metadata on articles rather than separate navigation sections.

Reuse the existing article renderer and source-file workflow if adopted. Potential optional metadata: kind, updated date, related project slugs, and a selected-homepage flag. Preserve existing puzzle slugs. Link to relevant projects for implementation detail without making every article project-related.

## Preview and scope

Run the existing development server and open:

- `http://127.0.0.1:3100/?preview=writing#writing` — section in the homepage.
- `http://127.0.0.1:3100/writing?preview=writing` — index concept.
- `http://127.0.0.1:3100/writing?preview=writing&post=voice` — sample reading view.

The query branch is enabled only in development. The author adopted Writing as the navigation, homepage and archive label, then requested the expanded section on the normal landing page. The local homepage now uses that layout with its actual published posts; sample topics and experimental index/reading views remain in the preview branch. The author approved publication of the real-data homepage and Writing label on 24 November 2026, alongside “State of Affairs”. The experimental index, sample topics and sample reading views remain development-only. The prototype keeps the existing archive accessible; it does not register the sample ideas as posts.

The Writing name has been adopted across the local site, including navigation and article back links, and the homepage layout now uses published entries. The remaining follow-up is to review the experimental index and select actual new posts or author-supplied drafts for publication. No new CMS or platform migration is needed for this concept.
