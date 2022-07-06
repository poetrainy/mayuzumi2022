export type Schedule = {
  map(arg0: (item: any, i: any) => void): import('react').ReactNode;
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  dayOfWeek: ['月' | '火' | '水' | '木' | '金' | '土' | '日'];
  temporary: string;
  titleJa?: string;
  url?: string;
  shereUrl?: string;
  member?: string;
  color?: string;
};

export type Collaboration = {
  name: string;
  color: string;
}[];

export type linkType = {
  name: string;
  icon: string;
  color: string;
  url: string;
}[];

export type Link = 'youtube' | 'twitter' | 'info' | 'store';
