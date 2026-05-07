import Image from "next/image";
import { projects } from "@/components/block-scroll/block-scroll-entries";

export const PROJECTS_NAV = projects.map((p, i) => ({
  id: `proj-${i}`,
  label: p.title.split(" ")[0],
}));

export default function ProjectsPanel() {
  return (
    <div className="panel">
      {projects.map((project, i) => (
        <article key={i} id={`proj-${i}`} className="post-card">
          {project.imgSrc && (
            <div className="post-image-wrapper">
              <Image
                src={project.imgSrc}
                alt={project.title}
                width={1200}
                height={630}
                className="post-image"
              />
            </div>
          )}
          <p className="post-period">{project.period}</p>
          <h2 className="post-title">{project.title}</h2>
          <p className="post-body">{project.description}</p>
          <div className="post-tags">
            {project.tags.map((tag, j) => (
              <span key={j} className="post-tag">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
