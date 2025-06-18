export type Project = {
  id: string;
  title: string;
  impact: string;
  year: string;
  tech: string[];
  visual?: string; // path to image, diagram, or gif
  summary: string;
  link: string; // URL for more info
  priority: boolean;
};

export const projects: Project[] = [
  {
    id: "ai-genzen",
    title: "GenZen",
    impact: "Your AI-powered mental health support companion.",
    year: "2025",
    tech: ["Python", "Langgraph", "RAG", "Finetune LLM", "Docker", "FastAPI", "Next.js", "AWS Ecosystem", "Kubernetes"],
    visual: "/visuals/genzen-banner.png",
    summary: "Empowering students to manage stress, build resilience, and enhance their well-being through personalized, AI-driven mental health support - bridging the gap between technology and human connection.",
    link: "https://www.ischool.berkeley.edu/projects/2025/genzen",
    priority: true,
  },
  {
    id: "web-kishu",
    title: "Redesign Kishu Uuoko Website",
    impact: "Increase website traffic and engagement.",
    year: "2023",
    tech: ["JavaScript", "Gatsby", "Bulma"],
    visual: "/visuals/kishu-store.png",
    summary: "Modernization of the fish stores website using modern web technologies and design principles.",
    link: "https://kishuuoko.jp/",
    priority: false,
  },
  {
    id: "sw-solo",
    title: "System for Operations Logistics Order (SOLO)",
    impact: "Concept on how to modernize the Marine Corps' logistics system with a CI/CD pipeline for compliance.",
    year: "2020",
    tech: ["Python", "Django", "React", "GitHub Actions", "AWS Ecosystem"],
    visual: "/visuals/solo.png",
    summary: "Defense Digital Service project. It was created to prove that the Marine Corps can organically develop adhering to sound best industry best practices.",
    link: "https://github.com/deptofdefense/solo",
    priority: false,
  },
]; 