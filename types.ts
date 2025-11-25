export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  outcome: string;
}

export interface Training {
  id: string;
  title: string;
  institution: string;
  year: string;
  description: string;
  certificateLink?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}