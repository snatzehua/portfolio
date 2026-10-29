import { projects } from "./projects";
import { writingEntries } from "./writing";
import type { Section } from "./types";

export interface NavigationGroup {
  id: Section;
  label: string;
  children: { label: string; anchor: string }[];
}

export const navigation: NavigationGroup[] = [
  { id: "projects", label: "Projects", children: projects.map(({ title, slug }) => ({ label: title, anchor: `project-${slug}` })) },
  { id: "experience", label: "Experience & Education", children: [
    { label: "Work experience", anchor: "work-experience" },
    { label: "Education", anchor: "education" },
  ] },
  { id: "writing", label: "Writing", children: writingEntries.map(({ title, slug }) => ({ label: title, anchor: `article-${slug}` })) },
  { id: "lifestyle", label: "Lifestyle", children: [
    { label: "Travel", anchor: "travel" },
    { label: "Photography", anchor: "photography" },
    { label: "Blacksmithing", anchor: "blacksmithing" },
  ] },
];
