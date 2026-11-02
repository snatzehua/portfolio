import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { writingEntries } from "@/content/writing";
import { formatDate } from "@/content/types";
import { experienceEntries } from "@/components/tab-viewer/entries/experience-entries";
import ProjectStatusBadge from "./project-status-badge";

function PreviewImage({ src, priority = false }: { src?: string; priority?: boolean }) {
  return src ? <div className="overview-preview-image" aria-hidden="true"><Image src={src} alt="" fill sizes="(max-width: 600px) 90vw, (max-width: 900px) 65vw, 45vw" priority={priority} /></div> : null;
}

export default function HomeOverview() {
  const project = projects[0];
  const writing = writingEntries[0];
  const experience = experienceEntries.find((entry) => entry.isCurrent);

  return <div className="home-overview" aria-label="Portfolio overview">
    <section id="projects" aria-labelledby="overview-projects">
      <Link className="overview-sheet" href="/projects">
        <div className="overview-description"><p className="eyebrow">01 / Work & experiments</p><h2 id="overview-projects">Projects</h2><p>The questions, decisions, and lessons behind my work.</p><span className="overview-action">View all projects ({projects.length}) <span aria-hidden="true">→</span></span></div>
        <div className="overview-preview overview-illustrated"><PreviewImage src={project.cover} priority /><div className="overview-preview-copy"><span className="preview-label">Featured project</span><h3>{project.title}</h3><p>{project.summary}</p><span className="preview-meta"><ProjectStatusBadge status={project.status} /> · {project.tags.slice(0, 2).join(" / ")}</span></div></div>
      </Link>
    </section>
    <section id="experience" aria-labelledby="overview-experience">
      <Link className="overview-sheet" href="/experience">
        <div className="overview-description"><p className="eyebrow">02 / Along the way</p><h2 id="overview-experience">Background</h2><p>The teams I&apos;ve worked with and the places I&apos;ve learned.</p><span className="overview-action">Experience & education <span aria-hidden="true">→</span></span></div>
        <div className="overview-preview overview-current-role">{experience && <div className="overview-credential overview-preview-copy"><Image src={experience.image} alt="" width={44} height={44} /><div><span className="preview-label">Current role</span><h3>{experience.title}</h3><p>{experience.subtitle}</p><p className="current-role-summary">{experience.details[0]}</p></div></div>}</div>
      </Link>
    </section>
    <section id="lifestyle" aria-labelledby="overview-lifestyle">
      <Link className="overview-sheet" href="/lifestyle">
        <div className="overview-description"><p className="eyebrow">03 / Outside the screen</p><h2 id="overview-lifestyle">Lifestyle</h2><p>Places, moments, and the occasional unexpected hobby.</p><span className="overview-action">Travel, photography & more <span aria-hidden="true">→</span></span></div>
        <div className="overview-preview overview-illustrated overview-lifestyle"><PreviewImage src="/images/path.jpg" /><div className="overview-preview-copy"><span className="preview-label">A few other things</span><h3>Finding moments</h3><p>Travel, photography, and blacksmithing.</p></div><div className="overview-polaroid-pair"><Image src="/images/blacksmith1-polaroid.png" alt="A polaroid from my blacksmithing workshop" width={240} height={300} sizes="(max-width: 600px) 38vw, 200px" /><Image src="/images/blacksmith2-polaroid.png" alt="A second polaroid from my blacksmithing workshop" width={240} height={300} sizes="(max-width: 600px) 38vw, 200px" /></div></div>
      </Link>
    </section>
    <section id="writing" aria-labelledby="overview-writing">
      <Link className="overview-sheet" href="/writing">
        <div className="overview-description"><p className="eyebrow">04 / Puzzles & practice</p><h2 id="overview-writing">Extras</h2><p>Competitions, problem-solving, and other things I&apos;m working on.</p><span className="overview-action">Browse extras ({writingEntries.length}) <span aria-hidden="true">→</span></span></div>
        <div className="overview-preview overview-illustrated"><PreviewImage src={writing.banner} /><div className="overview-preview-copy"><span className="preview-label">Latest entry · {formatDate(writing.publishedAt)}</span><h3>{writing.title}</h3><p>{writing.summary}</p></div></div>
      </Link>
    </section>
  </div>;
}
