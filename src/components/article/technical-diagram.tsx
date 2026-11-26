import type { DiagramBlock } from "@/content/types";

export default function TechnicalDiagram({ title, steps, caption }: DiagramBlock) {
  return (
    <figure className="technical-diagram" aria-label={title}>
      <div className="technical-diagram-title">{title}</div>
      <ol className="technical-diagram-flow" style={{ "--diagram-steps": steps.length } as React.CSSProperties}>
        {steps.map((step, index) => (
          <li key={step.label} className="technical-diagram-step">
            <span className="technical-diagram-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <strong>{step.label}</strong>
            <span className="technical-diagram-detail">{step.detail}</span>
            {index < steps.length - 1 && <span className="technical-diagram-arrow" aria-hidden="true">→</span>}
          </li>
        ))}
      </ol>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
