export type Education = {
  id: string;
  university: string;
  logo: string; // path to logo image
  degree: string;
  concentration: string;
  gradDate: string;
  description?: string;
};

export const education: Education[] = [
  {
    id: "berkeley-mids",
    university: "UC Berkeley",
    logo: "/logos/berkeley.png",
    degree: "Master of Information and Data Science",
    concentration: "Machine Learning & Data Engineering",
    gradDate: "2023",
    description: "Rigorous interdisciplinary program focused on advanced machine learning, big data systems, and real-world data science applications. Capstone project in generative AI for cybersecurity.",
  },
  {
    id: "uw-informatics",
    university: "University of Washington",
    logo: "/logos/uw.png",
    degree: "Bachelor of Science in Informatics",
    concentration: "Data Science & Cybersecurity",
    gradDate: "2015",
    description: "Comprehensive curriculum in information systems, data analysis, and cybersecurity. Led student research on secure data pipelines and digital transformation in public sector.",
  },
]; 