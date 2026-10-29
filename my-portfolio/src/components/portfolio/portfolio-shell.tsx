import Sidebar from "@/components/sidebar/sidebar";
import Image from "next/image";
import type { Section } from "@/content/types";
import { navigation } from "@/content/navigation";
import "./styles.css";

export default function PortfolioShell({ section, children }: { section: Section | "home"; children: React.ReactNode }) {
  return (
    <div className="portfolio-shell">
      <div className="portfolio-backdrop" aria-hidden="true">
        <Image src="/images/IMG_3726.webp" alt="" fill sizes="100vw" quality={80} priority />
      </div>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Sidebar activeSection={section} navigation={navigation} />
      <main className="portfolio-main" id="main-content" tabIndex={-1}>
        <div className={`portfolio-paper${section === "home" ? " portfolio-paper-overview" : ""}`}>{children}</div>
      </main>
    </div>
  );
}
