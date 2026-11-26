"use client";

import { useState } from "react";
import { projectCollections, selectedProjectSlugs } from "@/content/project-collections";
import ProjectCard, { type ProjectCardData } from "./project-card";

type Filter = "all" | (typeof projectCollections)[number]["id"];

export default function ProjectCollection({ projects }: { projects: ProjectCardData[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const bySlug = new Map(projects.map(project => [project.slug, project]));
  const selected = selectedProjectSlugs.flatMap(slug => bySlug.get(slug) ? [bySlug.get(slug)!] : []);
  const groups = projectCollections.filter(group => filter === "all" || filter === group.id).map(group => ({
    ...group,
    projects: group.slugs.flatMap(slug => {
      const project = bySlug.get(slug);
      return project && (filter !== "all" || !selectedProjectSlugs.includes(slug)) ? [project] : [];
    }),
  }));
  const resultCount = filter === "all" ? projects.length : groups.reduce((total, group) => total + group.projects.length, 0);

  return <>
    <div className="project-filters" role="group" aria-label="Filter projects">
      <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>All</button>
      {projectCollections.map(group => <button key={group.id} type="button" aria-pressed={filter === group.id} onClick={() => setFilter(group.id)}>{group.title}</button>)}
    </div>
    <p className="sr-only" role="status">Showing {resultCount} projects{filter !== "all" ? ` in ${projectCollections.find(group => group.id === filter)?.title}` : ""}.</p>
    <div className="project-collections">
      {filter === "all" && <section aria-labelledby="selected-projects-heading" className="project-collection">
        <h2 id="selected-projects-heading" className="project-collection-title">Selected work</h2>
        <div className="project-grid">{selected.map((project, i) => <ProjectCard key={project.slug} project={project} headingLevel={3} priority={i < 3} />)}</div>
      </section>}
      {groups.map(group => !!group.projects.length && <section key={group.id} aria-labelledby={`collection-${group.id}`} className="project-collection">
        <h2 id={`collection-${group.id}`} className="project-collection-title">{group.title}</h2>
        <div className="project-grid">{group.projects.map(project => <ProjectCard key={project.slug} project={project} headingLevel={3} />)}</div>
      </section>)}
    </div>
  </>;
}
