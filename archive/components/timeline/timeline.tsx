import Image from "next/image";

import "./styles.css";
import { timelineEntries } from "@/components/timeline/timeline-entries";

interface TimelineProps {
  id?: string;
}

export default function Timeline({ id }: TimelineProps) {
  return (
    <div className="scroll-section" id={id}>
      <div className="section-wrapper">
        <div className="timeline">
          {timelineEntries.map((entry, index) => (
            <div key={index} className="timeline-entry">
              {entry.year && <div className="timeline-year">{entry.year}</div>}
              <div className="timeline-item">
                <Image
                  src={entry.image}
                  alt={`${entry.title} Logo`}
                  width={400}
                  height={400}
                  className="timeline-image"
                />
                <div className="content">
                  <h2>{entry.title}</h2>
                  <h3>{entry.subtitle}</h3>
                  {entry.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
