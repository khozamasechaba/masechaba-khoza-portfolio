
export interface Project {
  id: string;
  title: string;
  company: string;
  summary: string;
  value: string;
  problem: string;
  discovery: string;
  solution: string;
  implementation: string;
  results: string;
  artifacts: {
    type: 'process-flow' | 'sketch' | 'wireframe' | 'other';
    imageUrl: string;
    label: string;
  }[];
  backlog: string[];
  link?: string;
  previewImage: string;
  tags: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  industry: string;
  focusArea: string;
  period: string;
  description: string;
  isPassionProject?: boolean;
}

export interface Skill {
  name: string;
  description: string;
  category: 'Product' | 'Technical' | 'Design' | 'Leadership';
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface JoyItem {
  title: string;
  description: string;
  imageUrl?: string;
}
