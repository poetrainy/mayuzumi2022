import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: '#086776',
  secondary: '#96AC11',
  black: '#414141',
  lightGray: '#F5F5F5',
  white: '#fff',
};
const styles = {
  global: {
    html: {
      fontSize: '62.5%',
      scrollBehavior: 'smoth-scroll',
    },
    body: {
      color: 'black',
      fontSize: '1.4rem',
      fontFamily: 'body',
      a: {
        textDecoration: 'none',
      },
      li: {
        listStyleType: 'none',
      },
    },
  },
};
const fonts = {
  body: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
  accent: "'Fira Code', monospace",
};
const breakpoints = {
  sm: '600px',
  md: '1024px',
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  breakpoints,
});

export default theme;
