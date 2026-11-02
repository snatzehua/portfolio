import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioShell from "@/components/portfolio/portfolio-shell";
import ArticlePage from "@/components/article/article-page";
import ProjectStatusBadge from "@/components/portfolio/project-status-badge";
import { getProject, projects } from "@/content/projects";
import { formatDate } from "@/content/types";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: `${project.title} | Kieran Ho`, description: project.summary } : {};
}
export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const links = [
    ...(project.repository ? [{ label: "View repository", href: project.repository }] : []),
    ...(project.demo ? [{ label: "View demo", href: project.demo }] : []),
  ];
  return (
    <PortfolioShell section="projects">
      <ArticlePage kind="projects" title={project.title} intro={project.summary} date={formatDate(project.publishedAt)} tags={project.tags} sections={project.sections} facts={[{ label: "Role", value: project.role }, { label: "Period", value: project.period }, { label: "Status", value: <ProjectStatusBadge status={project.status} /> }]} outcome={project.outcome} links={links} />
    </PortfolioShell>
  );
}
