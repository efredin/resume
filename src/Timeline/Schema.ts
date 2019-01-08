import { SemanticICONS } from 'semantic-ui-react';

export interface Timeline {
  events: TimelineEvent[];
}

export interface TimelineItem {
  title: string;
}

export interface TimelineEvent extends TimelineItem {
  type: 'role' | 'project' | 'education';
  image?: string;
  icon?: SemanticICONS;
  date: string;
  company?: string;
  description: string;
  achievements?: TimelineEventAchievement[];
  skills?: TimelineEventSkill[];
}

export interface TimelineEventAchievement extends TimelineItem {
  description: string;
}

export interface TimelineEventSkill extends TimelineItem {
  level: number;
}
