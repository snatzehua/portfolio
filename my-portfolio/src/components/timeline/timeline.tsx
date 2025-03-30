import Image from "next/image";

import "./styles.css";
import { timelineEntries } from "@/components/timeline/timeline-entries"; // adjust path accordingly

export default function Timeline() {
  return (
    <div className="scroll-section">
      <div className="section-wrapper">
        <div className="timeline">
          {timelineEntries.map((entry, index) => (
            <div key={index} className="timeline-item">
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
          ))}
        </div>
      </div>
    </div>
  );
}
