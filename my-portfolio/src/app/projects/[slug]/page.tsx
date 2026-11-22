import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioShell from "@/components/portfolio/portfolio-shell";
import ArticlePage from "@/components/article/article-page";
import { getProject, projects } from "@/content/projects";
import { projectCoverSrc } from "@/content/project-covers";
import { visibleProjectSections } from "@/content/project-writeups";

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
    ...(project.demo ? [{ label: "View demo", href: project.demo }] : []),
  ];
  return (
    <PortfolioShell section="projects">
      <ArticlePage kind="projects" title={project.title} intro={project.summary} tags={project.tags} sections={visibleProjectSections(project)} facts={[{ label: "Role", value: project.role }, { label: "Period", value: project.period }]} links={links} cover={{ src: projectCoverSrc(project.cover), alt: project.coverAlt }} />
    </PortfolioShell>
  );
}
