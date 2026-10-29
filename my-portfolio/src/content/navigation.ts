import { projects } from "./projects";
import { writingEntries } from "./writing";
import type { Section } from "./types";

export interface NavigationGroup {
  id: Section;
  label: string;
  href: string;
  children: { label: string; href: string; detailHref?: string }[];
}

export const navigation: NavigationGroup[] = [
  { id: "projects", label: "Projects", href: "/projects", children: projects.map(({ title, slug }) => ({ label: title, href: `/projects#project-${slug}`, detailHref: `/projects/${slug}` })) },
  { id: "experience", label: "Experience & Education", href: "/experience", children: [
    { label: "Work experience", href: "/experience#work-experience" },
    { label: "Education", href: "/experience#education" },
  ] },
  { id: "writing", label: "Writing", href: "/writing", children: writingEntries.map(({ title, slug }) => ({ label: title, href: `/writing#article-${slug}`, detailHref: `/writing/${slug}` })) },
  { id: "lifestyle", label: "Lifestyle", href: "/lifestyle", children: [
    { label: "Travel", href: "/lifestyle#travel" },
    { label: "Photography", href: "/lifestyle#photography" },
    { label: "Blacksmithing", href: "/lifestyle#blacksmithing" },
  ] },
];
