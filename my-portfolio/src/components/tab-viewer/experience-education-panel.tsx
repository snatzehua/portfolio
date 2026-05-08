"use client";

import { useState } from "react";
import { Fragment } from "react";
import { motion } from "framer-motion";
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

type MergedRow = {
  year: string;
  eduGroup: Group<EducationEntry> | null;
  expGroup: Group<ExperienceEntry> | null;
};

function buildMergedRows(
  edu: Group<EducationEntry>[],
  exp: Group<ExperienceEntry>[]
): MergedRow[] {
  const years = Array.from(
    new Set([
      ...edu.map(g => g.year).filter(Boolean),
      ...exp.map(g => g.year).filter(Boolean),
    ])
  ).sort((a, b) => parseInt(b!) - parseInt(a!)) as string[];

  return years.map(year => ({
    year,
    eduGroup: edu.find(g => g.year === year) ?? null,
    expGroup: exp.find(g => g.year === year) ?? null,
  }));
}

const expGroups = buildGroups(experienceEntries);
const eduGroups = buildGroups(educationEntries);
const mergedRows = buildMergedRows(eduGroups, expGroups);

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

// col(640) + spine(60) + col(640) = 1340px; viewport 780px; shift = 560px
const SHIFT = -560;

export default function ExperienceEducationPanel() {
  const [view, setView] = useState<View>("experience");

  const switchTo = (next: View) => {
    if (next === view) return;
    setView(next);
  };

  return (
    <div className="exp-edu-wrapper">
      {/* Centered split header */}
      <div className="exp-edu-header">
        <motion.button
          className="panel-side-label"
          onClick={() => switchTo("education")}
          animate={{
            opacity: view === "education" ? 1 : 0.38,
            filter: view === "education" ? "blur(0px)" : "blur(1px)",
          }}
          transition={{ duration: 0.35 }}
        >
          <span className="panel-label-arrow">←</span>
          Education
        </motion.button>

        <div className="panel-header-divider" />

        <motion.button
          className="panel-side-label"
          onClick={() => switchTo("experience")}
          animate={{
            opacity: view === "experience" ? 1 : 0.38,
            filter: view === "experience" ? "blur(0px)" : "blur(1px)",
          }}
          transition={{ duration: 0.35 }}
        >
          Experience
          <span className="panel-label-arrow">→</span>
        </motion.button>
      </div>

      {/* Two-column shared timeline with edge-fade mask */}
      <div className="timeline-viewport">
        <motion.div
          className="timeline-double"
          data-view={view}
          animate={{ x: view === "education" ? 0 : SHIFT }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {mergedRows.map((row) => (
            <Fragment key={row.year}>
              {/* Education cell */}
              <div className="col-cell col-cell-left">
                {row.eduGroup && (
                  <>
                    <p className="col-year-label">{row.year}</p>
                    <article className="post-card">
                      {row.eduGroup.entries.map((entry, ei) => (
                        <Fragment key={ei}>
                          {ei > 0 && <div className="post-divider" />}
                          <EntryCard entry={entry} />
                        </Fragment>
                      ))}
                    </article>
                  </>
                )}
              </div>

              {/* Spine: dot on the shared line */}
              <div className="spine-cell">
                <div className="spine-dot" />
              </div>

              {/* Experience cell */}
              <div className="col-cell col-cell-right">
                {row.expGroup && (
                  <>
                    <p className="col-year-label">{row.year}</p>
                    <article className="post-card">
                      {row.expGroup.entries.map((entry, ei) => (
                        <Fragment key={ei}>
                          {ei > 0 && <div className="post-divider" />}
                          <EntryCard entry={entry} />
                        </Fragment>
                      ))}
                    </article>
                  </>
                )}
              </div>
            </Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
