import { FaJava } from "react-icons/fa";

import {
  SiPython,
  SiR,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiSupabase,
  SiFirebase,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiNextdotjs,
  SiExpo,
  SiTableau,
  SiGithub,
  SiAdobephotoshop,
  SiCanva,
  SiFigma,
  SiCplusplus, // used as a fallback for C
} from "react-icons/si";

export const techStacks = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "R", icon: <SiR /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "C", icon: <SiCplusplus /> }, // close enough visually
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "pandas", icon: <SiPandas /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Expo", icon: <SiExpo /> },
      { name: "Tableau", icon: <SiTableau /> },
      { name: "GitHub", icon: <SiGithub /> },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
];
