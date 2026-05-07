import { Fragment } from "react";
import Image from "next/image";
import { timelineEntries } from "./timeline-entries";

const SHORT_LABELS: Record<string, string> = {
  "Raffles Institution (IP)": "Raffles",
  "National Service (Joint Service)": "Nat. Service",
  "National University of Singapore (NUS)": "NUS",
  "Synapxe Pte Ltd": "Synapxe",
};

// Most-recent first; computed once at module level
const entries = [...timelineEntries].reverse();

export const EXPERIENCE_NAV = entries.map((entry, i) => ({
  id: `exp-${i}`,
  label: SHORT_LABELS[entry.title] ?? entry.title,
}));

export default function ExperiencePanel() {
  let lastYear = "";

  return (
    <div className="timeline-track">
      {entries.map((entry, i) => {
        const year = entry.year ?? "";
        if (year && year !== lastYear) {
          lastYear = year;
        }

        return (
          <Fragment key={i}>
            {year && (
              <div className="year-marker">
                <span className="year-text">{year}</span>
              </div>
            )}
            <article id={`exp-${i}`} className="post-card">
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
            </article>
          </Fragment>
        );
      })}
    </div>
  );
}
