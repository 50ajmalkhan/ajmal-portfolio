export type Experience = {
  company: string;
  location: string;
  span: string;
  highlight?: string;
  roles: { title: string; period: string }[];
};

export const experience: Experience[] = [
  {
    company: "WorkHub",
    location: "Remote · Full-time",
    span: "Apr 2022 – Present (4+ years)",
    highlight: "Promoted to Senior Engineer",
    roles: [
      { title: "Senior Full Stack Engineer", period: "Dec 2023 – Present" },
      { title: "Full Stack Developer", period: "Apr 2022 – Dec 2023" },
    ],
  },
  {
    company: "Protaigé",
    location: "Remote · Contract (Concurrent)",
    span: "Apr 2025 – Present",
    roles: [{ title: "Senior Full Stack Developer", period: "Apr 2025 – Present" }],
  },
  {
    company: "Experts Cloud Private Limited",
    location: "Lahore · On-site",
    span: "Apr 2020 – Apr 2022 (2+ years)",
    highlight: "Intern → Full-time Developer",
    roles: [
      { title: "Full Stack Developer", period: "Jul 2020 – Apr 2022" },
      { title: "Software Engineer Intern", period: "Apr 2020 – Jul 2020" },
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science (BSCS)",
  period: "2015 – 2019",
  institution:
    "Punjab University College of Information Technology (PUCIT), University of the Punjab",
  location: "Lahore, Pakistan",
};
