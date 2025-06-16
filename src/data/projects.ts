export type Project = {
  id: string;
  title: string;
  impact: string;
  tech: string[];
  visual?: string; // path to image, diagram, or gif
  summary: string;
};

export const projects: Project[] = [
  {
    id: "cyber-platform",
    title: "Defensive Cyberspace Operations Platform",
    impact: "Enabled real-time threat detection and response for critical military networks.",
    tech: ["Python", "Supabase", "pgvector", "Docker"],
    visual: "/visuals/cyber-platform-diagram.png",
    summary: "Developed a scalable platform for monitoring and defending against cyber threats, leveraging AI and modern cloud-native technologies.",
  },
  {
    id: "ai-agent-dev",
    title: "AI Agent Development",
    impact: "Automated intelligence analysis, reducing manual workload by 60%.",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    visual: "/visuals/ai-agent-gif.gif",
    summary: "Built and deployed generative AI agents for data analysis and mission support, integrating with secure DoD infrastructure.",
  },
  {
    id: "data-viz-dashboard",
    title: "Operational Data Visualization Dashboard",
    impact: "Improved situational awareness for commanders with real-time, interactive dashboards.",
    tech: ["TypeScript", "Next.js", "D3.js", "Tailwind CSS"],
    visual: "/visuals/data-viz-dashboard.png",
    summary: "Designed and implemented a dashboard for visualizing operational data, supporting rapid decision-making in dynamic environments.",
  },
]; 