import SectionHeader from "@/components/portfolio/section-header";
import Image from "next/image";
import { experienceEntries, type ExperienceEntry } from "./entries/experience-entries";
import { educationEntries, type EducationEntry } from "./entries/education-entries";

function groupEntries(entries: (ExperienceEntry | EducationEntry)[]) {
  const groups = new Map<string, (ExperienceEntry | EducationEntry)[]>();
  [...entries].reverse().forEach((entry) => {
    const year = entry.year ?? "Other";
    groups.set(year, [...(groups.get(year) ?? []), entry]);
  });
  return [...groups].sort(([a], [b]) => b.localeCompare(a));
}

function Timeline({ entries, label }: { entries: (ExperienceEntry | EducationEntry)[]; label: string }) {
  return <div className="timeline-list" aria-label={label}>
    {groupEntries(entries).map(([year, items]) => <div className="timeline-year-group" key={year}>
      <p className="timeline-year">{year}</p>
      <div className="timeline-year-entries">
        {items.map((entry, i) => <article className="timeline-entry" key={`${entry.title}-${i}`}>
          <div className="timeline-entry-header"><Image src={entry.image} alt="" width={52} height={52} className="timeline-logo" /><div><h3>{entry.title}</h3><p>{entry.subtitle}</p></div></div>
          <ul>{entry.details.map((detail) => <li key={detail}>{detail}</li>)}{entry["details-list"]?.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        </article>)}
      </div>
    </div>)}
  </div>;
}

export default function ExperienceEducationPanel() {
  return <div className="section-page timeline-page">
    <SectionHeader section="experience" eyebrow="02 / Along the way" title="Background" headingId="experience-heading" description="The places I’ve learned, the teams I’ve worked with, and the work that has shaped how I think." caption={[`${experienceEntries.length} roles · ${educationEntries.length} education entries`, "Newest first"]} />
    <section id="work-experience" className="timeline-subsection" aria-labelledby="work-experience-heading"><h2 id="work-experience-heading">Work experience</h2><Timeline entries={experienceEntries} label="Experience timeline" /></section>
    <section id="education" className="timeline-subsection" aria-labelledby="education-heading"><h2 id="education-heading">Education</h2><Timeline entries={educationEntries} label="Education timeline" /></section>
  </div>;
}
