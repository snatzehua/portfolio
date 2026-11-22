import type { ArticleSection, Project } from "./types";

// Draft sections remain in their source records and in the local editor.
// Only these five accounts are currently requested as full public writeups.
export const fullProjectWriteupSlugs = [
  "state-of-the-strait",
  "careersphere",
  "please-help-me",
  "crop-yield-research",
  "gdelt-sentiment",
] as const;

export function hasFullProjectWriteup(slug: string): boolean {
  return fullProjectWriteupSlugs.some(item => item === slug);
}

export function visibleProjectSections(project: Pick<Project, "slug" | "sections">): ArticleSection[] {
  if (hasFullProjectWriteup(project.slug)) return project.sections;
  return [{
    id: "writeup-in-progress",
    title: "Write-up in progress",
    blocks: [{ type: "text", content: "This project’s write-up is a work in progress. The full account will be added here." }],
  }];
}
