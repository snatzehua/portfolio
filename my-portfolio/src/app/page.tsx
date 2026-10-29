import type { Metadata } from "next";
import { redirect } from "next/navigation";
import PortfolioShell from "@/components/portfolio/portfolio-shell";
import ScrollMemory from "@/components/portfolio/scroll-memory";
import ProjectsPanel from "@/components/tab-viewer/projects-panel";
import WritingPanel from "@/components/tab-viewer/writing-panel";
import ExperienceEducationPanel from "@/components/tab-viewer/experience-education-panel";
import LifestylePanel from "@/components/tab-viewer/lifestyle-panel";

export const metadata: Metadata = { title: "Kieran Ho | Projects, writing & explorations" };
type Props = { searchParams: Promise<{ section?: string | string[] }> };

export default async function Home({ searchParams }: Props) {
  const { section } = await searchParams;
  if (section === "projects" || section === "experience" || section === "writing" || section === "lifestyle") {
    redirect(`/#${section}`);
  }
  return (
    <PortfolioShell section="projects" showIntro singlePage>
      <ScrollMemory section="home" />
      <section id="projects" className="home-section" aria-labelledby="projects-heading"><ProjectsPanel /></section>
      <section id="experience" className="home-section" aria-labelledby="experience-heading"><ExperienceEducationPanel /></section>
      <section id="writing" className="home-section" aria-labelledby="writing-heading"><WritingPanel /></section>
      <section id="lifestyle" className="home-section" aria-labelledby="lifestyle-heading"><LifestylePanel /></section>
    </PortfolioShell>
  );
}
