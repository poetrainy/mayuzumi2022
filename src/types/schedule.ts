export type Schedule = {
  map(arg0: (item: any, i: any) => void): import('react').ReactNode;
  id: string;
  date: string;
  dayOfWeek: ['月' | '火' | '水' | '木' | '金' | '土' | '日'];
  temporary: string;
  title: string;
  url?: string;
  member: Member[];
};

export type Member = {
  map(arg0: (item: any, i: any) => void): import('react').ReactNode;
  id: string;
  name: string;
  color: string;
};

export type Link = 'youtube' | 'twitter' | 'info' | 'store';
