import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { writingEntries } from "@/content/writing";
import { formatDate } from "@/content/types";
import { experienceEntries } from "@/components/tab-viewer/entries/experience-entries";
import { educationEntries } from "@/components/tab-viewer/entries/education-entries";

export default function HomeOverview() {
  const project = projects[0];
  const writing = writingEntries[0];
  const experience = [...experienceEntries].reverse().sort((a, b) => (b.year ?? "").localeCompare(a.year ?? ""))[0];
  const education = educationEntries.find((entry) => entry.title === "National University of Singapore (NUS)");

  return <div className="home-overview" aria-label="Portfolio overview">
    <section id="projects" aria-labelledby="overview-projects">
      <Link className="overview-sheet" href="/projects">
        <div className="overview-description"><p className="eyebrow">01 / Work & experiments</p><h2 id="overview-projects">Projects</h2><p>The questions, decisions, and lessons behind my work.</p><span className="overview-action">View all projects ({projects.length}) <span aria-hidden="true">→</span></span></div>
        <div className="overview-preview overview-project"><span className="preview-label">Featured project</span><h3>{project.title}</h3><p>{project.summary}</p><span className="preview-meta">{project.status} · {project.tags.slice(0, 2).join(" / ")}</span></div>
      </Link>
    </section>
    <section id="experience" aria-labelledby="overview-experience">
      <Link className="overview-sheet" href="/experience">
        <div className="overview-description"><p className="eyebrow">02 / Along the way</p><h2 id="overview-experience">Experience<br />& Education</h2><p>The teams I&apos;ve worked with and the places I&apos;ve learned.</p><span className="overview-action">Follow the timeline <span aria-hidden="true">→</span></span></div>
        <div className="overview-preview overview-credentials">
          {[{ entry: experience, label: "Recent experience" }, { entry: education, label: "Education" }].map(({ entry, label }) => entry && <div className="overview-credential" key={label}><Image src={entry.image} alt="" width={42} height={42} /><div><span className="preview-label">{label}</span><h3>{entry.title}</h3><p>{entry.subtitle}</p></div></div>)}
        </div>
      </Link>
    </section>
    <section id="lifestyle" aria-labelledby="overview-lifestyle">
      <Link className="overview-sheet" href="/lifestyle">
        <div className="overview-description"><p className="eyebrow">03 / Outside the screen</p><h2 id="overview-lifestyle">Lifestyle</h2><p>Places, moments, and the occasional unexpected hobby.</p><span className="overview-action">Travel, photography & more <span aria-hidden="true">→</span></span></div>
        <div className="overview-preview overview-photos"><div className="overview-photo-pair"><Image src="/images/grid/photo1.webp" alt="A photograph from my travel collection" width={240} height={260} /><Image src="/images/blacksmith1-polaroid.png" alt="A polaroid from a blacksmithing workshop" width={240} height={260} /></div><span className="preview-meta">Travel / Photography / Blacksmithing</span></div>
      </Link>
    </section>
    <section id="writing" aria-labelledby="overview-writing">
      <Link className="overview-sheet" href="/writing">
        <div className="overview-description"><p className="eyebrow">04 / Puzzles & practice</p><h2 id="overview-writing">Extras</h2><p>Competitions, problem-solving, and other things I&apos;m working on.</p><span className="overview-action">Browse extras ({writingEntries.length}) <span aria-hidden="true">→</span></span></div>
        <div className="overview-preview overview-writing">{writing.banner && <Image src={writing.banner} alt="" width={130} height={130} />}<div><span className="preview-label">Latest entry · {formatDate(writing.publishedAt)}</span><h3>{writing.title}</h3><p>{writing.summary}</p></div></div>
      </Link>
    </section>
  </div>;
}
