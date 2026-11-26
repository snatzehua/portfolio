import { Fragment } from "react";
import Image from "next/image";
import { experienceEntries, type ExperienceEntry } from "./entries/experience-entries";

type Group = { year?: string; entries: ExperienceEntry[] };

const entries = [...experienceEntries].reverse();

const groups = entries.reduce<Group[]>((acc, entry) => {
  const last = acc[acc.length - 1];
  if (last && last.year && entry.year && last.year === entry.year) {
    last.entries.push(entry);
  } else {
    acc.push({ year: entry.year, entries: [entry] });
  }
  return acc;
}, []);

export default function ExperiencePanel() {
  return (
    <div className="timeline-track">
      {groups.map((group, gi) => (
        <Fragment key={gi}>
          {group.year && (
            <div className="year-marker">
              <span className="year-text">{group.year}</span>
            </div>
          )}
          <article id={`exp-${gi}`} className="post-card">
            {group.entries.map((entry, ei) => (
              <Fragment key={ei}>
                {ei > 0 && <div className="post-divider" />}
                <div className="post-header">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    width={88}
                    height={88}
                    className="post-logo"
                  />
                  <div>
                    <h2 className="post-title">{entry.title}</h2>
                    <p className="post-subtitle">{entry.subtitle}</p>
                  </div>
                </div>
                {entry.details && (
                  <ul className="post-details">
                    {entry.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                )}
                {entry["details-list"] && (
                  <ul className="post-details-list">
                    {entry["details-list"].map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                )}
              </Fragment>
            ))}
          </article>
        </Fragment>
      ))}
    </div>
  );
}
