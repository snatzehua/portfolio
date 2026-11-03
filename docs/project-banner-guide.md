# Creating a project banner

Use this workflow for every new project and every replacement cover. Keep the output and evidence rules consistent; choose the composition and typography to suit the project.

## Output contract

- Compose at **1600 × 600** (8:3); export WebP with the shared `bannerSpec` in `my-portfolio/scripts/lib/banner-layout.mjs` (quality 90, effort 6).
- Save to `my-portfolio/public/images/projects/banners/<project-slug>.webp`. The slug must match the content entry.
- Fill the background edge to edge. Arrange the subject within that artboard; do not stretch a square image or graph into a wide rectangle.
- Preserve logos, image proportions, and graph geometry. For data, preserve values, units, baselines, class meanings, and necessary source qualifications.
- Generate through `scripts/generate-project-covers.mjs`. Commit the output and manifest alongside the recipe and its inputs. Do not hand-edit generated WebPs or `manifest.json`.

The generator rejects incorrectly sized compositions and missing descriptions. `check:content` also checks every project cover against the generated manifest. The validator checks output dimensions, file hashes, input and recipe fingerprints, provenance fields, and missing/duplicate files. These checks catch stale or inconsistent assets; visual review still determines whether the design works.

## 1. Choose evidence and a treatment

Inspect the project repository and its saved outputs first. Choose the most useful available material:

| Material | Suitable treatment | Existing reference |
| --- | --- | --- |
| Real imagery | Image-led crop, small corner caption and restrained local contrast overlay | State of the Strait |
| Brand identity | Original logo/wordmark, balanced as a single composition | CareerSphere, Travlah |
| Recorded quantitative output | Report or research plate with readable axes, units, legends, and source scope | BAF, GDELT, Systematic Portfolio |
| Graph or matrix | Technical diagram with preserved proportions; place captions beside it when the geometry is compact | Bitcoin, HMM |
| Documented architecture | Purpose-drawn diagram; typography reflects the domain | JurAI |
| Early concept with no implementation evidence | Clearly identified illustration, without implied real usage or results | OpenClaw, Calendar |

These are examples, not fixed templates. Serif headings can suit research/legal work; monospace can suit technical labels; humanist sans can suit utilities. Preserve original brand typography. Never manufacture measurements, screenshots, satellite features, or contact/calendar content to make a cover look complete. Label synthetic demos and concepts explicitly.

## 2. Write a short brief

Copy this into the project's working notes or a comment beside its generator block. Resolve the evidence questions before drawing.

```text
Project slug:
What the banner should communicate in one glance:
Source files / repository paths / saved run and date:
Evidence type: original branding | real imagery | saved result | synthetic demo | concept
Display title and any essential qualifier:
Composition: image-led | centred identity | text + visual | full-width plot | other
Typography / palette / visual reference:
Subject bounds and text area:
Aspect-ratio / axis / scale / crop rules:
Alt description (describe what is shown, including evidence limitations):
Provenance and permissions / required credit:
```

## 3. Implement one deterministic recipe

1. Keep original inputs in `public/images/projects/` or `banner-sources/`. Register source images through the generator's `source()` helper so their hashes are recorded. Keep numeric inputs in `scripts/project-cover-data/snapshot.json`, with their original source/run and qualifications documented in its README. Do not refresh all research data just to change typography.
2. Add an `artDirection` entry for the slug and a scoped composition block in `scripts/generate-project-covers.mjs`. Reuse its drawing and typography helpers, then call `await write(slug, svg(body, background), alt, basis)`. For an image-led banner, crop with Sharp to the artboard deliberately and composite the caption overlay before calling `write()`.
3. Use a **single scale on both axes** for spatial diagrams. `fitPoints(points, { x, y, width, height, padding })` centres a complete point set inside a rectangle without distortion. Leave padding for node radii/strokes. If the subject is near-square, place it in one half and use the other half for a centred text block/legend; avoid stretching it to fill the banner. Mathematical plot axes may have different unit scales, but must remain labelled and faithful to the values.
4. As a starting guide, reserve 40–80 px around important content. For a text/visual split, use the left 0–800 px for text, centred around x=400, and the right half for the visual. Adjust these areas to prevent overlap. Keep titles short or wrap deliberately. Important labels should generally be at least 28 px at source size; minor credits may be smaller if the full credit is also available in the write-up. Font families may vary by context; avoid shrinking a long heading into unreadability.
5. Set the content entry's `cover` to `/images/projects/banners/<slug>.webp` and `coverAlt` to the reviewed description. Register the project in `src/content/projects/index.ts`. Update the per-project source table in `scripts/project-cover-data/README.md`.

`write()` records dimensions, byte size, output hash, alt description, source basis, and art direction. The manifest also fingerprints source inputs and the generator/layout module. `src/content/project-covers.ts` uses the output hash to refresh cached banner URLs automatically.

## 4. Generate, validate, and review

From `my-portfolio/`:

```sh
npm run generate:covers
npm run check:content
npm run preview:covers
```

The preview command first validates the assets, then writes **`.banner-preview/projects.webp`**, an ignored contact sheet at roughly desktop card size (440 × 165 per banner). `npm run check:covers` runs the asset checks on their own. Generation is offline and uses the checked-in inputs; output bytes can vary across platforms with different fonts or image libraries.

Review the contact sheet, then the real `/projects` page at desktop and phone widths:

- Is the subject recognisable at card size, with the intended title readable?
- Does the banner background fill the card without an inset thumbnail frame?
- Are text blocks balanced within their own areas, with no collisions or cropped marks?
- Are graphs/images proportionate, nodes unclipped, and legends clear? Dense graph details may need the linked write-up for inspection.
- Are the required dates, units, credits, synthetic-data/concept qualifiers, and class meanings accurate?
- Does the alt description match the actual visual?

Review `git diff`, including the manifest. A single-banner visual edit should not unexpectedly change other banners, source data, or project claims. Save a browser screenshot for the review and commit the recipe, inputs, generated assets, manifest, and relevant documentation together. Run the usual type/build checks when adding content or changing application code.
