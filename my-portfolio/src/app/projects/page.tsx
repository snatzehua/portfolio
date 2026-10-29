import type { Metadata } from "next";
import SectionPage from "@/components/portfolio/section-page";
import ProjectsPanel from "@/components/tab-viewer/projects-panel";

export const metadata: Metadata = { title: "Projects | Kieran Ho" };
export default function Page() {
  return <SectionPage section="projects"><ProjectsPanel /></SectionPage>;
}
