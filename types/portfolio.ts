export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: string;
  href: string;
};

export type Achievement = {
  value: string;
  label: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type Experience = {
  role: string;
  company?: string;
  startDate: string;
  endDate: string;
  description: string;
  accomplishments: string[];
  technologies: string[];
};

export type Project = {
  title: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  featured: boolean;
  liveUrl?: string;
  repositoryUrl?: string;
  image?: string;
};

export type ResearchProject = {
  title: string;
  status?: string;
  summary: string;
  pipeline: string[];
  contributions: string[];
  methods: string[];
  challenges: string[];
  findings: string[];
  nextSteps: string[];
  technologies: string[];
  temporary?: boolean;
  publicationUrl?: string;
};
