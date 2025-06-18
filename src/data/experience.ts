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
    id: "mccyber-2024-1",
    unit: "Marine Forces Cyber Command",
    position: "Data Scientist",
    startYear: 2024,
    endYear: "Present",
    summary: "AI Capabilities Developer.",
  },
  {
    id: "mccyber-2024",
    unit: "Marine Corps Cyberspace Warfare Group",
    position: "Assistant Future/Current Operations Office and Training Officer",
    startYear: 2023,
    endYear: 2024,
    summary: "Help develop the future offensive and defensive cyber operators through training and exercises.",
  },
  {
    id: "usmc-2023",
    unit: "31st Marine Expeditionary Unit",
    position: "Cyberspace Warfare Officer - Staff Planner",
    startYear: 2020,
    endYear: 2023,
    summary: "Pushed the innovation of tactical cyber operations at the edge.",
  },
  {
    id: "usmc-2020-1",
    unit: "DCO-IDM, III MIG, III MEF",
    position: "Cyberspace Warfare Officer - Executive Officer, Operations Officer, and Platoon Commander",
    startYear: 2018,
    endYear: 2020,
    summary: "Led the development of the new defensive cyber operations program for the III Marine Expeditionary Force.",
  },
  {
    id: "usmc-2020",
    unit: "Defense Digital Service",
    position: "Software Engineer",
    startYear: 2020,
    endYear: 2020,
    summary: "Had the opportunity to take part in a DevSecOps team that developed a framework to rapidly deploy and manage cloud-based applications into the Marine Corps Enterprise Network.",
  },
  {
    id: "usmc-2012",
    unit: "Recruiting Sub Station Bellevue, Recruiting Station Seattle",
    position: "Canvassing Recruiter",
    startYear: 2009,
    endYear: 2012,
    summary: "Provided the opportunity for young men and women to be part of the legacy.",
  },
  {
    id: "usmc-2017",
    unit: "Enlisted Time",
    position: "Enlisted Marine E1-E7",
    startYear: 2003,
    endYear: 2017,
    summary: "Served in various leadership and technical roles, supporting the Aviation Combat Element.",
  },
]; 