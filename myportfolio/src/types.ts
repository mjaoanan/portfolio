
export interface Project {
  title: string;
  role: string;
  date: string;
  description: string[];
  imageUrl: string;
  projectUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  description: string[];
}