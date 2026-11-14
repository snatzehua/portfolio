import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { projectCoverSrc } from "@/content/project-covers";
import ProjectStatusBadge from "./project-status-badge";

const featuredImages: Record<string, { src: string; alt: string; contain?: boolean }> = {
  "state-of-the-strait": { src: "/images/projects/strait.webp", alt: "Sentinel-2 satellite preview of the Strait of Hormuz, including cloud cover" },
  careersphere: { src: "/images/projects/careersphere.webp", alt: "CareerSphere team architecture diagram", contain: true },
};

export default function ProjectCard({ project, featured = false, priority = false }: { project: Project; featured?: boolean; priority?: boolean }) {
  const image = featured ? featuredImages[project.slug] : { src: projectCoverSrc(project.cover), alt: project.coverAlt };
  return <Link href={`/projects/${project.slug}`} id={featured ? undefined : `project-${project.slug}`} className={`project-card${featured ? " project-card-featured" : ""}${!image ? " project-card-text" : ""}`}>
    {image && <div className={`project-cover${"contain" in image && image.contain ? " project-cover-contain" : ""}`}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 92vw, (max-width: 900px) 45vw, 360px" className="project-cover-image" priority={priority} /></div>}
    <div className="project-card-content">
      {!featured && <div className="card-meta"><ProjectStatusBadge status={project.status} /><span>{project.period}</span></div>}
      {featured ? <h3>{project.title}</h3> : <h2>{project.title}</h2>}
      <p>{project.summary}</p>
      {!featured && <p className="project-role">{project.role}</p>}
      <span className="card-action">View project <span aria-hidden="true">→</span></span>
    </div>
  </Link>;
}
