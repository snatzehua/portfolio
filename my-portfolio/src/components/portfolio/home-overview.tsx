import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/content/projects";
import { writingEntries } from "@/content/writing";
import { experienceEntries } from "@/components/tab-viewer/entries/experience-entries";
import ProjectCard from "./project-card";

const selectedSlugs = ["state-of-the-strait", "careersphere", "local-calendar-assistant"];

export default function HomeOverview() {
  const selected = selectedSlugs.flatMap((slug) => { const project = getProject(slug); return project ? [project] : []; });
  const experience = experienceEntries.find((entry) => entry.isCurrent);
  return <div className="home-overview">
    <header className="home-intro" id="intro">
      <div className="intro-profile">
        <Image className="intro-polaroid" src="/images/polaroid_pfp_edited.png" alt="Kieran holding a white dog in a polaroid photograph" width={377} height={601} sizes="(max-width: 600px) 76px, 96px" priority />
        <div><p className="intro-name">Kieran Ho</p><p className="intro-bio">Business Analytics at NUS. Curious about data, systems, and how things work.</p></div>
      </div>
      <h1>Building, learning, exploring.</h1>
    </header>
    <section className="home-projects" id="projects" aria-labelledby="overview-projects">
      <div className="home-section-heading"><h2 id="overview-projects">Selected projects</h2><Link className="text-link" href="/projects">All projects <span aria-hidden="true">→</span></Link></div>
      <div className="selected-project-grid">{selected.map((project, i) => <ProjectCard key={project.slug} project={project} featured priority={i === 0} />)}</div>
    </section>
    <section className="home-lifestyle" id="lifestyle" aria-labelledby="overview-lifestyle">
      <Link className="lifestyle-banner" href="/lifestyle">
        <Image src="/images/path.jpg" alt="A stone path winding through a quiet forest" fill sizes="(max-width: 1200px) 94vw, 1120px" />
        <div className="lifestyle-banner-copy"><h2 id="overview-lifestyle">Outside the screen</h2><p>Travel, photography, and blacksmithing.</p><span>Lifestyle <span aria-hidden="true">→</span></span></div>
      </Link>
      <div className="home-polaroids" aria-label="Blacksmithing photographs"><Image src="/images/blacksmith1-polaroid.png" alt="A polaroid from my blacksmithing workshop" width={240} height={300} sizes="(max-width: 600px) 100px, 134px" /><Image src="/images/blacksmith2-polaroid.png" alt="A second polaroid from my blacksmithing workshop" width={240} height={300} sizes="(max-width: 600px) 100px, 134px" /></div>
    </section>
    <div className="home-notes">
      <section id="experience" aria-labelledby="overview-experience"><div className="home-section-heading"><h2 id="overview-experience">Background</h2><Link className="text-link" href="/experience">Experience & education <span aria-hidden="true">→</span></Link></div>{experience && <div className="home-current-role"><Image src={experience.image} alt="" width={44} height={44} /><div><p className="small-label">Current role</p><h3>{experience.title}</h3><p>{experience.subtitle}</p></div></div>}</section>
      <section id="writing" aria-labelledby="overview-writing"><div className="home-section-heading"><h2 id="overview-writing">Extras</h2><Link className="text-link" href="/writing">All extras <span aria-hidden="true">→</span></Link></div><div className="home-writing-list">{writingEntries.slice(0, 2).map((entry) => <Link key={entry.slug} href={`/writing/${entry.slug}`}><span>{entry.title}</span><span aria-hidden="true">→</span></Link>)}</div></section>
    </div>
  </div>;
}
