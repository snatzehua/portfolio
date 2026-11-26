import SectionHeader from "@/components/portfolio/section-header";
import Image from "next/image";
import { experienceEntries, type ExperienceEntry } from "./entries/experience-entries";
import { educationEntries, type EducationEntry } from "./entries/education-entries";

type TimelineEntry = ExperienceEntry | EducationEntry;

function endOrder(entry: TimelineEntry) {
  return entry.endYear === "Present" ? Infinity : entry.endYear ?? Number(entry.year ?? 0);
}

function sortEntries(entries: TimelineEntry[]) {
  return [...entries].sort((a, b) => {
    const aEnd = endOrder(a);
    const bEnd = endOrder(b);
    if (aEnd !== bEnd) return bEnd - aEnd;
    return (b.startYear ?? Number(b.year ?? 0)) - (a.startYear ?? Number(a.year ?? 0));
  });
}

function Timeline({ entries, label }: { entries: (ExperienceEntry | EducationEntry)[]; label: string }) {
  return <div className="timeline-list" aria-label={label}>
    {sortEntries(entries).map((entry, i) => <article className={`timeline-year-group${entry.endYear === "Present" ? " timeline-present" : ""}`} key={`${entry.title}-${i}`}>

      <div className="timeline-entry">
          <div className="timeline-entry-header">
            <Image src={entry.image} alt="" width={72} height={72} sizes="(max-width: 600px) 64px, 72px" className="timeline-logo" />
            <div>
              <h3>{entry.title}</h3>
              <p className="timeline-organisation">{entry.subtitle}</p>
              <p className="timeline-year">{entry.startYear !== undefined && entry.endYear !== undefined ? <>
        <time dateTime={String(entry.startYear)}>{entry.startYear}</time>
        {entry.startYear !== entry.endYear && <><span className="timeline-date-divider" aria-hidden="true">–</span><span className="sr-only"> to </span>{entry.endYear === "Present" ? <span>Present</span> : <time dateTime={String(entry.endYear)}>{entry.endYear}</time>}</>}
      </> : entry.year}</p>
            </div>
          </div>
          <ul>{entry.details.map((detail) => <li key={detail}>{detail}</li>)}{entry["details-list"]?.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      </div>
    </article>)}
  </div>;
}

export default function ExperienceEducationPanel() {
  return <div className="section-page timeline-page">
    <SectionHeader section="experience" eyebrow="Along the way" title="Background" headingId="experience-heading" />
    <section id="work-experience" className="timeline-subsection" aria-labelledby="work-experience-heading"><div className="timeline-subsection-heading"><h2 id="work-experience-heading">Work experience</h2></div><Timeline entries={experienceEntries} label="Experience timeline" /></section>
    <section id="education" className="timeline-subsection" aria-labelledby="education-heading"><div className="timeline-subsection-heading"><h2 id="education-heading">Education</h2></div><Timeline entries={educationEntries} label="Education timeline" /></section>
  </div>;
}
