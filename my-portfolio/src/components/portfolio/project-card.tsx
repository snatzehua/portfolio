import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { projectCoverSrc } from "@/content/project-covers";
import { hasFullProjectWriteup } from "@/content/project-writeups";

const featuredImages: Record<string, { src: string; alt: string; contain?: boolean; position?: string; background?: string }> = {
  "crop-yield-research": { src: "/images/projects/crop-yield-satellite.png", alt: "Sentinel-2 view of fields and cloud cover around Haut-Rhin, Alsace, on 13 July 2023, used in the maize research project", position: "center 80%" },
  "please-help-me": { src: "/images/projects/scheduler-sample-week.png", alt: "Actual Calendar & Task Scheduler interface showing its built-in sample week, with demo commitments, tasks and work sessions", position: "left top" },
  careersphere: { src: "/images/projects/careersphere.webp", alt: "CareerSphere team architecture diagram", contain: true },
  room: { src: projectCoverSrc("/images/projects/banners/room.webp"), alt: "Illustrative Room dependency view separating edits, declared contracts and downstream impact; not a product screenshot.", contain: true, background: "#1b302c" },
};

export type ProjectCardData = Pick<Project, "slug" | "title" | "summary" | "cover" | "coverAlt" | "period" | "role">;

export default function ProjectCard({ project, featured = false, priority = false, highlighted = false, headingLevel }: { project: ProjectCardData; featured?: boolean; priority?: boolean; highlighted?: boolean; headingLevel?: 2 | 3 }) {
  const Heading = (headingLevel ?? (featured ? 3 : 2)) === 3 ? "h3" : "h2";
  const image = featured || project.slug === "crop-yield-research"
    ? featuredImages[project.slug]
    : { src: projectCoverSrc(project.cover), alt: project.coverAlt };
  return <Link href={`/projects/${project.slug}`} id={featured ? undefined : `project-${project.slug}`} data-highlighted={highlighted || undefined} className={`project-card${featured ? " project-card-featured" : ""}${!image ? " project-card-text" : ""}`}>
    {image && <div className={`project-cover${"contain" in image && image.contain ? " project-cover-contain" : ""}`} style={"background" in image ? { backgroundColor: image.background } : undefined}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 92vw, (max-width: 900px) 45vw, 360px" className="project-cover-image" style={"position" in image ? { objectPosition: image.position } : undefined} priority={priority} /></div>}
    <div className="project-card-content">
      {!featured && <div className="card-meta"><span>{project.period}</span>{!hasFullProjectWriteup(project.slug) && <span>Write-up WIP</span>}</div>}
      <Heading>{project.title}</Heading>
      <p>{project.summary}</p>
      {!featured && <p className="project-role">{project.role}</p>}
      <span className="card-action">View project <span aria-hidden="true">→</span></span>
    </div>
  </Link>;
}
