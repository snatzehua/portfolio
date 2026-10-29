import type { Metadata } from "next";
import PortfolioShell from "@/components/portfolio/portfolio-shell";
import ScrollMemory from "@/components/portfolio/scroll-memory";
import ProjectsPanel from "@/components/tab-viewer/projects-panel";
import WritingPanel from "@/components/tab-viewer/writing-panel";
import ExperienceEducationPanel from "@/components/tab-viewer/experience-education-panel";
import LifestylePanel from "@/components/tab-viewer/lifestyle-panel";
import type { Section } from "@/content/types";

type Props = { searchParams: Promise<{ section?: string | string[] }> };
function getSection(value?: string | string[]): Section {
  return value === "writing" || value === "experience" || value === "lifestyle" ? value : "projects";
}
const labels = { projects: "Projects", writing: "Writing", experience: "Experience & Education", lifestyle: "Lifestyle" };
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  return { title: `${labels[getSection((await searchParams).section)]} | Kieran Ho` };
}
export default async function Home({ searchParams }: Props) {
  const section = getSection((await searchParams).section);
  return (
    <PortfolioShell section={section} showIntro={section === "projects"}>
      <ScrollMemory section={section} />
      {section === "projects" && <ProjectsPanel />}
      {section === "writing" && <WritingPanel />}
      {section === "experience" && <ExperienceEducationPanel />}
      {section === "lifestyle" && <LifestylePanel />}
    </PortfolioShell>
  );
}
