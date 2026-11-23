import type { Metadata } from "next";
import SectionPage from "@/components/portfolio/section-page";
import WritingPanel from "@/components/tab-viewer/writing-panel";
import { WritingPrototypePage } from "@/components/portfolio/writing-prototype";

export const metadata: Metadata = { title: "Writing | Kieran Ho" };
export default async function Page({ searchParams }: { searchParams: Promise<{ preview?: string | string[]; post?: string | string[] }> }) {
  if (process.env.NODE_ENV === "development") {
    const { preview, post } = await searchParams;
    if (preview === "writing") {
      return <SectionPage section="writing"><WritingPrototypePage selectedPost={typeof post === "string" ? post : undefined} /></SectionPage>;
    }
  }
  return <SectionPage section="writing"><WritingPanel /></SectionPage>;
}
