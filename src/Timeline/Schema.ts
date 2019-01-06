export interface Timeline {
  items: TimelineItem[];
}

export interface TimelineItem {
  date: Date;
  type: 'role' | 'achievement';
  title: string;
  description: string;
}
