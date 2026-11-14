import SectionHeader from "@/components/portfolio/section-header";
import ProjectCard from "@/components/portfolio/project-card";
import { projects } from "@/content/projects";

export default function ProjectsPanel() {
  return <div className="section-page projects-page">
    <SectionHeader section="projects" eyebrow="Work & experiments" title="Projects" headingId="projects-heading" description="The questions, decisions, and lessons behind my work." caption={[`${projects.length} projects`, "Newest case studies first"]} />
    <div className="project-grid">{projects.map((project, i) => <ProjectCard key={project.slug} project={project} priority={i < 3} />)}</div>
  </div>;
}
