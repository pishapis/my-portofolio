// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  favicon?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'mobile' | 'cms';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}