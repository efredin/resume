export interface Timeline {
  items: TimelineItem[];
}

export interface TimelineItem {
  date: string;
  type: 'role' | 'achievement';
  title: string;
  description: string;
  company?: string;
  image?: string;
  icon?: string;
}
