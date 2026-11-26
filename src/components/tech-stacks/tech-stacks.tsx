import "./styles.css";

import { techStacks } from "./tech-stacks-data";

export default function TechStack() {
  return (
    <div className="scroll-section">
      <div className="section-wrapper">
        <div className="tech-column">
          {techStacks.map((section) => (
            <div key={section.category} className="tech-card">
              <h2 className="tech-title">{section.category}</h2>
              <div className="tech-icon-row">
                {section.items.map(({ name, icon }) => (
                  <div key={name} className="tech-icon">
                    <div className="tech-icon-img">{icon}</div>
                    <span className="tech-label">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
