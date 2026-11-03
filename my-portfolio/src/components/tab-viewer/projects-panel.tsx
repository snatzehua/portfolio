import SectionHeader from "@/components/portfolio/section-header";
import ProjectStatusBadge from "@/components/portfolio/project-status-badge";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { formatDate } from "@/content/types";

export default function ProjectsPanel() {
  return (
    <div className="section-page projects-page">
      <SectionHeader section="projects" eyebrow="01 / Work & experiments" title="Selected projects" headingId="projects-heading" description="The questions, decisions, and lessons behind my work." caption={[`${String(projects.length).padStart(2, "0")} projects`, "Newest case studies first"]} />
      <div className="project-grid">
        {projects.map((project, i) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} id={`project-${project.slug}`} className="project-card">
            <div className="project-cover">
              <Image src={project.cover} alt={project.coverAlt} fill sizes="(max-width: 760px) 90vw, (max-width: 1100px) 70vw, 440px" className="project-cover-image" priority={i === 0} />
            </div>
            <div className="project-card-content">
              <div className="card-meta"><ProjectStatusBadge status={project.status} /><time dateTime={project.publishedAt}>{formatDate(project.publishedAt)}</time></div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="project-takeaway"><span>Where it stands</span><p>{project.outcome}</p></div>
              <p className="project-role">{project.role} · {project.period}</p>
              <span className="card-action">Explore project <span aria-hidden="true">↗</span></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
