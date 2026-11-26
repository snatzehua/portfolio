import SectionHeader from "@/components/portfolio/section-header";
import ProjectCollection from "@/components/portfolio/project-collection";
import { projects } from "@/content/projects";

export default function ProjectsPanel() {
  return <div className="section-page projects-page">
    <SectionHeader section="projects" title="Projects" headingId="projects-heading" />
    <ProjectCollection projects={projects.map(({ slug, title, summary, cover, coverAlt, period, role }) => ({ slug, title, summary, cover, coverAlt, period, role }))} />
  </div>;
}
