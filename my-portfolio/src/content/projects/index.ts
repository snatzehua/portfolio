import gdelt from "./gdelt-sentiment";
import openclaw from "./openclaw-network";
import { newestFirst } from "../types";

export const projects = newestFirst([gdelt, openclaw]);
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
