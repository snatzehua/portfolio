"use client";

import { useState } from "react";
import { Fragment } from "react";
import Image from "next/image";
import { experienceEntries, type ExperienceEntry } from "./entries/experience-entries";
import { educationEntries, type EducationEntry } from "./entries/education-entries";

type View = "experience" | "education";
type Group<T> = { year?: string; entries: T[] };

function buildGroups<T extends { year?: string }>(entries: T[]): Group<T>[] {
  return [...entries].reverse().reduce<Group<T>[]>((acc, entry) => {
    const last = acc[acc.length - 1];
    if (last && last.year && entry.year && last.year === entry.year) {
      last.entries.push(entry);
    } else {
      acc.push({ year: entry.year, entries: [entry] });
    }
    return acc;
  }, []);
}

const expGroups = buildGroups(experienceEntries);
const eduGroups = buildGroups(educationEntries);

function EntryCard({ entry }: { entry: ExperienceEntry | EducationEntry }) {
  return (
    <>
      <div className="post-header">
        <Image src={entry.image} alt={entry.title} width={88} height={88} className="post-logo" />
        <div>
          <h2 className="post-title">{entry.title}</h2>
          <p className="post-subtitle">{entry.subtitle}</p>
        </div>
      </div>
      {entry.details && (
        <ul className="post-details">
          {entry.details.map((d, j) => <li key={j}>{d}</li>)}
        </ul>
      )}
      {entry["details-list"] && (
        <ul className="post-details-list">
          {entry["details-list"].map((d, j) => <li key={j}>{d}</li>)}
        </ul>
      )}
    </>
  );
}

export default function ExperienceEducationPanel() {
  const [view, setView] = useState<View>("experience");

  const switchTo = (next: View) => {
    if (next === view) return;
    setView(next);
  };

  return (
    <div className="exp-edu-wrapper">
      <div className="exp-edu-header">
        <div className="view-switcher" data-view={view}>
          <div className="view-switcher-pill" />
          <button className="view-switcher-btn" onClick={() => switchTo("education")}>
            Education
          </button>
          <button className="view-switcher-btn" onClick={() => switchTo("experience")}>
            Experience
          </button>
        </div>
      </div>

      <div className="timeline-viewport" data-view={view}>
        <div className="timeline-double">
          {/* Education column */}
          <div className="timeline-col timeline-col-edu" onClick={() => switchTo("education")}>
            {eduGroups.map((group, i) => (
              <div key={group.year ?? i} className="timeline-group">
                {group.year && <p className="col-year-label">{group.year}</p>}
                <article className="post-card">
                  {group.entries.map((entry, ei) => (
                    <Fragment key={ei}>
                      {ei > 0 && <div className="post-divider" />}
                      <EntryCard entry={entry} />
                    </Fragment>
                  ))}
                </article>
              </div>
            ))}
          </div>

          {/* Experience column */}
          <div className="timeline-col timeline-col-exp" onClick={() => switchTo("experience")}>
            {expGroups.map((group, i) => (
              <div key={group.year ?? i} className="timeline-group">
                {group.year && <p className="col-year-label">{group.year}</p>}
                <article className="post-card">
                  {group.entries.map((entry, ei) => (
                    <Fragment key={ei}>
                      {ei > 0 && <div className="post-divider" />}
                      <EntryCard entry={entry} />
                    </Fragment>
                  ))}
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
