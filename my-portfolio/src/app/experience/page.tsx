import type { Metadata } from "next";
import SectionPage from "@/components/portfolio/section-page";
import ExperienceEducationPanel from "@/components/tab-viewer/experience-education-panel";

export const metadata: Metadata = { title: "Background | Kieran Ho" };
export default function Page() {
  return <SectionPage section="experience"><ExperienceEducationPanel /></SectionPage>;
}
