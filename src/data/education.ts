export type Education = {
  id: string;
  university: string;
  logo: string; // path to logo image
  degree: string;
  concentration: string;
  gradDate: string;
  description?: string;
  link?: string;
};

export const education: Education[] = [
  {
    id: "berkeley-mids",
    university: "UC Berkeley",
    logo: "/logos/ucberkeley.svg",
    degree: "Master of Information and Data Science (MIDS)",
    concentration: "Machine Learning, Data Engineering, and Generative AI",
    gradDate: "2025",
    description: "Rigorous interdisciplinary program focused on advanced machine learning, big data systems, and real-world data science applications. Capstone project in generative AI for cybersecurity.",
    link: "https://www.ischool.berkeley.edu/programs/mids"
  },
  {
    id: "nps-cybersecurity",
    university: "Naval Postgraduate School",
    logo: "/logos/nps.png",
    degree: "Graduate Certificate in Cyber Security Fundamentals",
    concentration: "Cyber Defense",
    gradDate: "2020",
    description: "The program is intended to help you obtain a strong foundational understanding of computer network defense, vulnerabilities, and exploitations. The objective of the certificate is intended to enable students to make choices that will result in better defense of their networks",
    link: "https://online.nps.edu/-/256-cybersecurity-fundamentals-certificate#:~:text=The%20Cybersecurity%20Fundamentals%20graduate%20certificate,network%20defense%2C%20attack%20and%20exploitation"
  },
  {
    id: "uw-informatics",
    university: "University of Washington",
    logo: "/logos/uw.png",
    degree: "Bachelor of Science in Informatics",
    concentration: "Information Architecture and Information Assurance & Cybersecurity",
    gradDate: "2017",
    description: "Comprehensive curriculum in information systems, data analysis, and cybersecurity. Led student research on secure data pipelines and digital transformation in public sector.",
    link: "https://ischool.uw.edu/programs/informatics"
  },
  {
    id: "umuc-japanese",
    university: "University of Maryland University College",
    logo: "/logos/umuc.png",
    degree: "Undergraduate Certificate in Japanese Studies",
    concentration: "Japanese Language and Culture",
    gradDate: "2009",
    description: 'Gain familiarity with Japanese language and culture, including the study of Japanese history, literature, and philosophy.',
    link: "https://asia.umgc.edu/online-degrees/undergraduate-certificates/foreign-language-area-studies-japanese"
  },
]; 