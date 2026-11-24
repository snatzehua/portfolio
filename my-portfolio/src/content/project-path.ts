import type { Project } from "./types";

type ProjectIdentity = Pick<Project, "title" | "slug">;

export function projectUrlSlug(project: ProjectIdentity) {
  return project.title.normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || project.slug;
}

export function projectPath(project: ProjectIdentity) {
  return `/projects/${projectUrlSlug(project)}`;
}
