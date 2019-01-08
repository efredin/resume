import { SemanticICONS } from 'semantic-ui-react';

export interface Timeline {
  events: TimelineItem[];
}

export interface TimelineItem {
  type: string;
  title: string;
  description: string;
}

export interface TimelineEventItem extends TimelineItem {
  achievements?: TimelineAchievementItem[];
  skills?: TimelineSkillItem[];
  date: string;
  image?: string;
  icon?: SemanticICONS;
}

export interface TimelineRoleItem extends TimelineEventItem {
  type: 'role';
  company: string;
  url?: string;
}

export interface TimelineEducationItem extends TimelineEventItem {
  type: 'education';
  institution: string;
  url?: string;
}

export interface TimelineProjectItem extends TimelineEventItem {
  type: 'project';
  company?: string;
  url?: string;
}

export interface TimelineAchievementItem extends TimelineItem {
  type: 'achievement';
  description: string;
}

export interface TimelineSkillItem extends TimelineItem {
  type: 'skill';
  level: number;
}
