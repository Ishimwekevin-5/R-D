
export interface LabReport {
  id: string;
  timestamp: string;
  subject: string;
  summary: string;
  findings: string[];
  metrics: {
    label: string;
    value: number;
  }[];
  conclusion: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}
