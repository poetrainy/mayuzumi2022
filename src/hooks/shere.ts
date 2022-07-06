import Twitter from '../assets/Shere/Twitter';
import Line from '../assets/Shere/Line';

const defaultUrl: string = 'https://www.mayuzumi2022.com/';

const shereInfo = [
  {
    name: 'line',
    url: `https://social-plugins.line.me/lineit/share?url=${defaultUrl}`,
    icon: Line,
  },
  {
    name: 'twitter',
    url: `https://twitter.com/intent/tweet?url=${defaultUrl}&text=%E9%BB%9B%E3%81%AE2022%E5%B9%B47%E6%9C%88%E3%82%B9%E3%82%B1%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E5%B8%B3`,
    icon: Twitter,
  },
];

export default shereInfo;
