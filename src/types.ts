export interface Project {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  tags: string[];
  status: string;
  color: string;
  category: string;
  featuredVisual: string;
  fullOverview: string;
  keyFeatures: string[];
  liveDemoType?: 'beatflow' | 'boibazar' | 'pdfreader' | 'nafs' | 'redparadox';
}

export interface IdeaItem {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  coreIdea: string;
  solution: string;
  status: 'Thinking' | 'Exploring' | 'Building' | 'Experimenting' | 'Coming Soon';
  tags: string[];
  category: string;
  updatedAt: string;
}

export interface TimelineMilestone {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Foundational' | 'Practicing' | 'Building' | 'Exploring';
    icon?: string;
  }[];
}

export interface LearningItem {
  subject: string;
  stage: 'Exploring' | 'Practicing' | 'Building' | 'Understanding';
  focus: string;
  progressPercentage: number;
}
