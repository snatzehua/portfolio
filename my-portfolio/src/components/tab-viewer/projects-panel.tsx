import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { formatDate } from "@/content/types";

export default function ProjectsPanel() {
  return (
    <div className="section-page projects-page">
      <header className="section-heading projects-heading">
        <p className="eyebrow">01 / Work & experiments</p>
        <h2 id="projects-heading">Selected projects<span className="heading-dot">.</span></h2>
        <p>The questions, decisions, and lessons behind my work.</p>
        <div className="section-caption"><span>{String(projects.length).padStart(2, "0")} projects</span><span>Newest case studies first</span></div>
      </header>
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
              <div className="card-meta"><span className="status"><span aria-hidden="true" />{project.status}</span><time dateTime={project.publishedAt}>{formatDate(project.publishedAt)}</time></div>
              <h3>{project.title}</h3>
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
