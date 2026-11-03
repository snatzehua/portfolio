import type { ReactNode } from "react";

export default function DoodleNote({ children, direction = "down", className = "" }: {
  children: ReactNode;
  direction?: "down" | "up";
  className?: string;
}) {
  return <div className={`doodle-note ${className}`} data-direction={direction}>
    <svg viewBox="0 0 80 44" aria-hidden="true" focusable="false">
      <path d="M72 7C66 31 39 6 15 34M15 34L17 20M15 34L29 29" />
    </svg>
    <span>{children}</span>
  </div>;
}
