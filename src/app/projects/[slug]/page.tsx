import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import PortfolioShell from "@/components/portfolio/portfolio-shell";
import ArticlePage from "@/components/article/article-page";
import { getProject, projects } from "@/content/projects";
import { projectPath, projectUrlSlug } from "@/content/project-path";
import { projectCover } from "@/content/project-covers";
import { visibleProjectSections } from "@/content/project-writeups";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(project => ({ slug: projectUrlSlug(project) })); }

function projectForRoute(slug: string) {
  const canonical = projects.find(project => projectUrlSlug(project) === slug);
  if (canonical) return canonical;
  const legacy = getProject(slug);
  if (legacy) permanentRedirect(projectPath(legacy));
  notFound();
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectForRoute((await params).slug);
  return { title: `${project.title} | Kieran Ho`, description: project.summary };
}
export default async function ProjectPage({ params }: Props) {
  const project = projectForRoute((await params).slug);
  const links = [
    ...(project.demo ? [{ label: "View demo", href: project.demo }] : []),
  ];
  return (
    <PortfolioShell section="projects">
      <ArticlePage kind="projects" title={project.title} intro={project.summary} tags={project.tags} sections={visibleProjectSections(project)} facts={[{ label: "Role", value: project.role }, { label: "Period", value: project.period }]} links={links} cover={projectCover(project.cover, project.coverAlt)} />
    </PortfolioShell>
  );
}
