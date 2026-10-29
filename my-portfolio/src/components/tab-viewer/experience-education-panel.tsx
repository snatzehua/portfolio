"use client";

import { useState } from "react";
import Image from "next/image";
import { experienceEntries, type ExperienceEntry } from "./entries/experience-entries";
import { educationEntries, type EducationEntry } from "./entries/education-entries";

type View = "experience" | "education";
function groupEntries(entries: (ExperienceEntry | EducationEntry)[]) {
  const groups = new Map<string, (ExperienceEntry | EducationEntry)[]>();
  [...entries].reverse().forEach((entry) => {
    const year = entry.year ?? "Other";
    groups.set(year, [...(groups.get(year) ?? []), entry]);
  });
  return [...groups].sort(([a], [b]) => b.localeCompare(a));
}
export default function ExperienceEducationPanel() {
  const [view, setView] = useState<View>("experience");
  const groups = groupEntries(view === "experience" ? experienceEntries : educationEntries);
  return (
    <div className="section-page timeline-page">
      <header className="section-heading">
        <p className="eyebrow">02 / Along the way</p>
        <h1>A little context<span className="heading-dot">.</span></h1>
        <p>The places I&apos;ve learned, the teams I&apos;ve worked with, and the work that has shaped how I think.</p>
      </header>
      <div className="timeline-controls" role="group" aria-label="Timeline view">
        {(["experience", "education"] as const).map((option) => <button key={option} aria-pressed={view === option} aria-controls="timeline-entries" onClick={() => setView(option)}>{option === "experience" ? "Experience" : "Education"}</button>)}
      </div>
      <div id="timeline-entries" className="timeline-list" aria-label={view === "experience" ? "Experience timeline" : "Education timeline"}>
        {groups.map(([year, entries]) => (
          <section className="timeline-year-group" key={`${view}-${year}`}>
            <h2 className="timeline-year">{year}</h2>
            <div className="timeline-year-entries">
              {entries.map((entry, i) => <article className="timeline-entry" key={`${entry.title}-${i}`}>
                <div className="timeline-entry-header"><Image src={entry.image} alt="" width={52} height={52} className="timeline-logo" /><div><h3>{entry.title}</h3><p>{entry.subtitle}</p></div></div>
                <ul>{entry.details.map((detail) => <li key={detail}>{detail}</li>)}{entry["details-list"]?.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
