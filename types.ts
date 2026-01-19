export enum View {
  HOME = "HOME",
  ABOUT = "ABOUT",
  PROJECTS = "PROJECTS",
  CONTACT = "CONTACT",
  ASSISTANT = "ASSISTANT",
}

export interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  status: "Active" | "Completed";
  liveLink: string;
}

export interface StatMetric {
  label: string;
  value: string | number;
  change: number; // Percentage change
  icon: React.ComponentType<any>;
}
