import type { Metadata } from "next";
import SectionPage from "@/components/portfolio/section-page";
import LifestylePanel from "@/components/tab-viewer/lifestyle-panel";

export const metadata: Metadata = { title: "Lifestyle | Kieran Ho" };
export default function Page() {
  return <SectionPage section="lifestyle"><LifestylePanel /></SectionPage>;
}
