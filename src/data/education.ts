export type Education = {
  id: string;
  university: string;
  logo: string; // path to logo image
  degree: string;
  concentration: string;
  gradDate: string;
};

export const education: Education[] = [
  {
    id: "berkeley-mids",
    university: "UC Berkeley",
    logo: "/logos/berkeley.png",
    degree: "Master of Information and Data Science",
    concentration: "Machine Learning & Data Engineering",
    gradDate: "2023",
  },
  {
    id: "uw-informatics",
    university: "University of Washington",
    logo: "/logos/uw.png",
    degree: "Bachelor of Science in Informatics",
    concentration: "Data Science & Cybersecurity",
    gradDate: "2015",
  },
]; 