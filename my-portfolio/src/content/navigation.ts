import type { Section } from "./types";

export interface NavigationGroup {
  id: Section;
  label: string;
  href: string;
}

export const navigation: NavigationGroup[] = [
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "experience", label: "Background", href: "/experience" },
  { id: "lifestyle", label: "Lifestyle", href: "/lifestyle" },
  { id: "writing", label: "Extras", href: "/writing" },
];
