import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { formatDate } from "@/content/types";

export default function ProjectsPanel() {
  return (
    <div className="section-page">
      <header className="section-heading">
        <p className="eyebrow">01 / Selected work</p>
        <h1>Things I&apos;m figuring out<span className="heading-dot">.</span></h1>
        <p>Projects, experiments, and the decisions behind them. A closer look at what I&apos;m building and learning along the way.</p>
        <div className="section-caption"><span>{String(projects.length).padStart(2, "0")} projects</span><span>Newest case studies first</span></div>
      </header>
      <div className="project-grid">
        {projects.map((project, i) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className="project-card">
            <div className={`project-cover${project.cover ? "" : " project-cover-network"}`}>
              {project.cover ? <Image src={project.cover} alt={project.coverAlt ?? project.title} fill sizes="(max-width: 760px) 90vw, (max-width: 1100px) 70vw, 440px" className="project-cover-image" priority={i === 0} /> : <div className="network-illustration" aria-hidden="true"><span>PEOPLE</span><span>CONTEXT</span><span>CONNECTIONS</span></div>}
              <span className="project-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="project-card-content">
              <div className="card-meta"><span className="status"><span aria-hidden="true" />{project.status}</span><time dateTime={project.publishedAt}>{formatDate(project.publishedAt)}</time></div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
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
