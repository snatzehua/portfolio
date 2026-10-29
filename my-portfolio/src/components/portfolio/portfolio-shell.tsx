import Sidebar from "@/components/sidebar/sidebar";
import Image from "next/image";
import type { Section } from "@/content/types";
import { navigation } from "@/content/navigation";
import "./styles.css";

export default function PortfolioShell({ section, children, showIntro = false, singlePage = false }: { section: Section; children: React.ReactNode; showIntro?: boolean; singlePage?: boolean }) {
  return (
    <div className="portfolio-shell">
      <div className="portfolio-backdrop" aria-hidden="true">
        <Image src="/images/IMG_3726.webp" alt="" fill sizes="100vw" quality={80} priority />
      </div>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Sidebar activeSection={section} singlePage={singlePage} navigation={navigation} />
      <main className="portfolio-main" id="main-content" tabIndex={-1}>
        {showIntro && (
          <header className="welcome-banner" id="intro">
            <div className="welcome-banner-copy">
              <p className="eyebrow">Building, learning, exploring</p>
              <h1>Hi, I&apos;m Kieran.</h1>
              <p>A little of what I do, and how I think.</p>
            </div>
          </header>
        )}
        <div className={`portfolio-paper${showIntro ? " portfolio-paper-projects" : ""}`}>{children}</div>
      </main>
    </div>
  );
}
