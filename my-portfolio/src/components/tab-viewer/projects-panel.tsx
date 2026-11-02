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
              {project.coverSteps ? (
                <div className="project-flow" aria-hidden="true">
                  {project.coverSteps.map((step, stepIndex) => (
                    <div className="project-flow-step" key={step}>
                      <span className="project-flow-index">{String(stepIndex + 1).padStart(2, "0")}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              ) : project.cover ? <Image src={project.cover} alt={project.coverAlt ?? project.title} fill sizes="(max-width: 760px) 90vw, (max-width: 1100px) 70vw, 440px" className="project-cover-image" priority={i === 0} /> : null}
              <span className="project-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="project-card-content">
              <div className="card-meta"><ProjectStatusBadge status={project.status} /><time dateTime={project.publishedAt}>{formatDate(project.publishedAt)}</time></div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="project-takeaway"><span>Where it stands</span><p>{project.outcome}</p></div>
              <p className="project-role">{project.role} · {project.period}</p>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <span className="card-action">Explore project <span aria-hidden="true">↗</span></span>
            </div>
          </Link>
        ))}
      </div>
      <p className="section-footnote">The work is ongoing. So is the learning.</p>
    </div>
  );
}
