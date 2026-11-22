export interface EducationEntry {
  title: string;
  subtitle: string;
  image: string;
  details: string[];
  "details-list"?: string[];
  year?: string;
  startYear?: number;
  endYear?: number | "Present";
}

export const educationEntries: EducationEntry[] = [
  {
    title: "Raffles Institution (IP)",
    startYear: 2015,
    endYear: 2020,
    subtitle: "GCE 'A'-levels",
    image: "/images/education/RI-logo-circle.png",
    details: ["GCE A-levels: 83.75/90.00", "IP Y1-6 PCME, Raffles Diploma Distinction"],
    year: "2020",
  },
  {
    title: "National University of Singapore (NUS)",
    startYear: 2023,
    endYear: "Present",
    subtitle: "BSc. (Hons) in Business Analytics",
    image: "/images/education/NUS-logo-circle.png",
    details: ["GPA: 4.45/5.00", "Expected graduation: May 2027"],
    "details-list": [
      "Machine-Learning & Financial Analytics Dual Specialisation",
      "Kent Ridge Hall Block Committee & Photography Chair",
    ],
    year: "2023",
  },
  {
    title: "Technical University of Denmark (DTU)",
    startYear: 2026,
    endYear: 2026,
    subtitle: "Student Exchange Programme",
    image: "/images/education/dtu.png",
    details: ["MSc. Courses in Algorithms, Time Series and Machine Learning"],
    "details-list": [
      "DTU Technical Investment Association (TIA) — Quant",
      "Lille Kat Social Problem Solving",
    ],
    year: "2026",
  },
];
