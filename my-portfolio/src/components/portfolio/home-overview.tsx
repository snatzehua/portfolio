import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/content/projects";
import { selectedProjectSlugs } from "@/content/project-collections";
import { experienceEntries } from "@/components/tab-viewer/entries/experience-entries";
import HomeProjects from "./home-projects";
import HomeWriting from "./home-writing";



export default function HomeOverview() {
  const selected = selectedProjectSlugs.flatMap((slug) => {
    const project = getProject(slug);
    if (!project) return [];
    const { title, summary, cover, coverAlt, period, role } = project;
    return [{ slug, title, summary, cover, coverAlt, period, role }];
  });
  const experience = experienceEntries.filter((entry) => entry.isCurrent).sort((a, b) => (b.startYear ?? 0) - (a.startYear ?? 0))[0];
  return <div className="home-overview">
    <header className="home-intro" id="intro">
      <div className="intro-backdrop" aria-hidden="true"><Image src="/images/IMG_3726.webp" alt="" fill sizes="(max-width: 600px) 100vw, 900px" /></div>
      <Image className="intro-polaroid" src="/images/polaroid_pfp_edited.png" alt="Kieran holding a white dog in a polaroid photograph" width={377} height={601} sizes="(max-width: 600px) 76px, 150px" priority />
      <div className="intro-copy">
        <div className="intro-identity">
          <h1 className="intro-name">Kieran Ho</h1>
          <p className="intro-subtitle">FINAL YEAR BUSINESS ANALYTICS STUDENT</p>
        </div>
      </div>
    </header>
    <HomeProjects projects={selected} />
    <HomeWriting />
    <div className="home-notes home-notes-background">
      <section id="experience" aria-labelledby="overview-experience"><div className="home-section-heading"><h2 id="overview-experience">Background</h2><Link className="text-link" href="/experience">Experience & education <span aria-hidden="true">→</span></Link></div>{experience && <div className="home-current-role"><Image src={experience.image} alt="" width={44} height={44} /><div><p className="small-label">Current role</p><h3>{experience.title}</h3><p>{experience.subtitle}</p></div></div>}</section>
    </div>
    <section className="home-lifestyle" id="lifestyle" aria-labelledby="overview-lifestyle">
      <Link className="lifestyle-banner" href="/lifestyle">
        <Image src="/images/path.jpg" alt="A stone path winding through a quiet forest" fill sizes="(max-width: 1200px) 94vw, 1120px" />
        <div className="lifestyle-banner-copy"><h2 id="overview-lifestyle">Outside the screen</h2><p>What I do in my spare time</p><span>Lifestyle <span aria-hidden="true">→</span></span></div>
      </Link>
      <div className="home-polaroids" aria-label="Blacksmithing photographs"><Image src="/images/blacksmith1-polaroid.png" alt="A polaroid from my blacksmithing workshop" width={240} height={300} sizes="(max-width: 600px) 100px, 134px" /><Image src="/images/blacksmith2-polaroid.png" alt="A second polaroid from my blacksmithing workshop" width={240} height={300} sizes="(max-width: 600px) 100px, 134px" /></div>
    </section>
  </div>;
}
