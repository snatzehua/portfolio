export interface ExperienceEntry {
  title: string;
  subtitle: string;
  image: string;
  details: string[];
  "details-list"?: string[];
  year?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: "Pilot Trainee (Regular Service)",
    subtitle: "RSAF - Air Force",
    image: "/images/experience/MINDEF-logo-circle.png",
    details: ["Air Grading in Jandakot, Australia"],
    year: "2022",
  },
  {
    title: "Teaching Assistant",
    subtitle: "National University of Singapore (NUS)",
    image: "/images/education/NUS-logo-circle.png",
    details: ["Laboratory tutoring for programming methodology in C"],
    year: "2024",
  },
  {
    title: "Data & Cloud Engineer Intern",
    subtitle: "Synapxe Pte Ltd",
    image: "/images/experience/synapxe-logo-edited.png",
    details: ["HEALIX implementation (cloud-based analytics platform)"],
    year: "2025",
  },
  {
    title: "Contract Software Engineer",
    subtitle: "National University of Singapore (NUS)",
    image: "/images/education/NUS-logo-circle.png",
    details: ["Full-stack development for Hostel Financial Claims"],
    year: "2025",
  },
  {
    title: "Technical Lead @ Glass",
    subtitle: "NES Foundry",
    image: "/images/experience/nes-foundry.png",
    details: ["Startup application development for skincare diagnostics"],
    year: "2025",
  },
  {
    title: "Teaching Assistant",
    subtitle: "National University of Singapore (NUS)",
    image: "/images/education/NUS-logo-circle.png",
    details: ["Advanced technology attachment programme tutor"],
    year: "2026",
  },
  {
    title: "Data Science / Data Engineering Intern",
    subtitle: "Govtech Singapore",
    image: "/images/experience/03e053c00a03ed937548f5ea8275db46.png",
    details: ["Internal Audit (Finance & IT), anomaly detection & forecasting"],
    year: "2026",
  },
];
