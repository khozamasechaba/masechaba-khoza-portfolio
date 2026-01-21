
export interface Project {
  id: number;
  title: string;
  company: string;
  challenge: string;
  solution: string;
  impact: string;
  tags: string[];
  icon?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}
