export type Experience = {
  id: string;
  unit: string;
  position: string;
  startYear: number;
  endYear: number | "Present";
  summary: string;
};

export const experiences: Experience[] = [
  {
    id: "mccyber-2021",
    unit: "Marine Forces Cyber Command",
    position: "Cyberspace Warfare Officer",
    startYear: 2021,
    endYear: "Present",
    summary: "Led defensive cyberspace operations and developed AI-driven threat detection systems for mission-critical infrastructure.",
  },
  {
    id: "usmc-2015",
    unit: "1st Marine Division",
    position: "Operations Officer",
    startYear: 2015,
    endYear: 2021,
    summary: "Coordinated large-scale training and operational deployments, focusing on digital transformation and data-driven decision making.",
  },
  {
    id: "usmc-2003",
    unit: "Marine Corps Recruit Depot",
    position: "Enlisted Marine / Training NCO",
    startYear: 2003,
    endYear: 2015,
    summary: "Served in various leadership and technical roles, supporting the transition to modern information systems and cyber readiness.",
  },
]; 