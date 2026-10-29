import type { Metadata } from "next";
import SectionPage from "@/components/portfolio/section-page";
import WritingPanel from "@/components/tab-viewer/writing-panel";

export const metadata: Metadata = { title: "Extras | Kieran Ho" };
export default function Page() {
  return <SectionPage section="writing"><WritingPanel /></SectionPage>;
}
