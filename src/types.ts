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
  githubUrl?: string;
  liveUrl?: string;
  keyFeatures: string[];
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
  icon: string;
  skills: {
    name: string;
    level: 'Comfortable' | 'Working Knowledge' | 'Learning' | 'Exploring';
  }[];
}

export interface LearningItem {
  subject: string;
  stage: 'Learning' | 'Exploring';
  focus: string;
}

export interface AIWorkflowStep {
  label: string;
  description: string;
}

export interface IdeaItem {
  id: string;
  title: string;
  tagline: string;
  status: 'Building' | 'Exploring' | 'Experimenting' | 'Thinking';
  category: string;
  problem: string;
  coreIdea: string;
  solution: string;
  tags: string[];
}

export interface CurrentlyBuildingItem {
  name: string;
  description: string;
  status: string;
  url?: string;
}
