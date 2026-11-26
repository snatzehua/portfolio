export interface ExperienceEntry {
  title: string;
  subtitle: string;
  image: string;
  details: string[];
  "details-list"?: string[];
  year?: string;
  startYear?: number;
  endYear?: number | "Present";
  isCurrent?: boolean;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: "Pilot Trainee (Regular Service)",
    startYear: 2022,
    endYear: 2022,
    subtitle: "Republic of Singapore Air Force (RSAF)",
    image: "/images/experience/MINDEF-logo-circle.png",
    details: ["Air Grading in Jandakot, Australia"],
    year: "2022",
  },
  {
    title: "Teaching & Contract Work",
    subtitle: "National University of Singapore (NUS)",
    startYear: 2024,
    endYear: 2026,
    image: "/images/education/NUS-logo-circle.png",
    details: [
      "CS1010 Programming Methodology teaching assistant",
      "CP3880 Advanced Technology Attachment Programme (ATAP) tutor",
      "PI3881 Student Internship Programme (SIP) tutor",
      "Contract software engineer - Hostel Financial Claims",
    ],
    year: "2024",
  },
  {
    title: "Cloud & Data Engineering Intern",
    subtitle: "Synapxe Pte Ltd",
    startYear: 2025,
    endYear: 2025,
    image: "/images/experience/synapxe-logo-edited.png",
    details: [
      "Automated data migration and processing workflows for HEALIX using AWS, Python, Bash and Excel VBA.",
      "Developed AWS Lambda tooling to publish researchers’ results to Tableau.",
    ],
    year: "2025",
  },
  {
    title: "Technical Lead @ Glass",
    startYear: 2025,
    endYear: 2025,
    subtitle: "NES Foundry",
    image: "/images/experience/nes-foundry.png",
    details: ["Startup application development for skincare diagnostics"],
    year: "2025",
  },
  {
    title: "Software Engineering Intern",
    subtitle: "Government Technology Agency (GovTech) · Internal Audit",
    startYear: 2026,
    endYear: "Present",
    isCurrent: true,
    image: "/images/experience/03e053c00a03ed937548f5ea8275db46.png",
    details: [
      "Co-built AuditMate, an LLM-assisted audit-question and response-tracking tool shipped to 30+ auditors.",
      "Adapted PDF tampering-detection workflows using Tesseract OCR and PyMuPDF.",
      "Wrote access-review checks for DevSecOps audits and ported procurement-audit agents to Databricks.",
    ],
    year: "2026",
  },
  {
    title: "Quantitative Research Lead",
    subtitle: "NUS Fintech Society",
    startYear: 2026,
    endYear: "Present",
    isCurrent: true,
    image: "/images/education/NUS-logo-circle.png",
    details: [
      "Research on cross-sectional equity return prediction and model interpretability.",
      "Comparing linear, tree-based and deep-learning models in a cost-aware long–short equity strategy.",
      "Investigating whether changes in SHAP explanations can warn of declining model performance.",
    ],
    year: "2026",
  },
];
