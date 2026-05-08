export interface EducationEntry {
  title: string;
  subtitle: string;
  image: string;
  details: string[];
  "details-list"?: string[];
  year?: string;
}

export const educationEntries: EducationEntry[] = [
  {
    title: "Raffles Institution (IP)",
    subtitle: "GCE 'A'-levels",
    image: "/images/education/RI-logo-circle.png",
    details: ["IP Y1-6 PCME, Raffles Diploma Distinction"],
    year: "2020",
  },
  {
    title: "National University of Singapore (NUS)",
    subtitle: "BSc. (Hons) in Business Analytics",
    image: "/images/education/NUS-logo-circle.png",
    details: ["4.45/5.00 GPA (Penultimate Year Student)"],
    "details-list": [
      "Machine-Learning & Financial Analytics Dual Specialisation",
      "Kent Ridge Hall Block Committee & Photography Chair",
    ],
    year: "2023",
  },
  {
    title: "Denmark Technical University (DTU)",
    subtitle: "Student Exchange Programme",
    image: "/images/education/dtu.png",
    details: ["MSc. Courses in Algorithms, Time Series and Machine Learning"],
    "details-list": [
      "Technical Investment Assocation - Quant",
      "Lille Kat Social Problem Solving",
    ],
    year: "2026",
  },
];
