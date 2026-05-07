export interface TimelineEntry {
  title: string;
  subtitle: string;
  image: string;
  details: string[];
  year?: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    title: "Raffles Institution (IP)",
    subtitle: "GCE 'A'-levels",
    image: "/images/RI-logo-circle.png",
    details: ["IP Y1-6 PCME, Raffles Diploma Distinction"],
    year: "2020",
  },
  {
    title: "National Service (Joint Service)",
    subtitle: "Regular Service / Full-time NS",
    image: "/images/MINDEF-logo-circle.png",
    details: ["Pilot Trainee"],
    year: "2022",
  },
  {
    title: "National University of Singapore (NUS)",
    subtitle: "BSc. (Hons) in Business Analytics",
    image: "/images/NUS-logo-circle.png",
    details: ["4.45/5.00 GPA, Spec. Machine-Learning & Finance"],
    year: "2023",
  },
  {
    title: "National University of Singapore (NUS)",
    subtitle: "Teaching Assistant",
    image: "/images/NUS-logo-circle.png",
    details: ["Laboratory tutoring for programming methodology in C"],
    year: "2024",
  },
  {
    title: "Synapxe Pte Ltd",
    subtitle: "Data & Cloud Engineer Intern",
    image: "/images/synapxe-logo-edited.png",
    details: ["HEALIX implementation (cloud-based analytics platform)"],
  },
  {
    title: "NES Foundry (Glass)",
    subtitle: "Technical Lead",
    image: "/images/nes-foundry.png",
    details: ["HEALIX implementation (cloud-based analytics platform)"],
    year: "2025",
  },
  {
    title: "GovTech Singapore",
    subtitle: "Data Science / Data Engineering Intern",
    image: "/images/03e053c00a03ed937548f5ea8275db46.png",
    details: ["Internal Audit (Finance & IT)"],
    year: "2026",
  },
];
