export type Schedule = {
  map(arg0: (item: any, i: any) => void): import('react').ReactNode;
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  dayOfWeek: string[];
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

export type linksType = {
  name: string;
  icon: string;
  color: string;
  url: string;
}[];

// export type Collaboration = {
//   name: string[];
//   color: string[];
// };
