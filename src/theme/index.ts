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
const textStyles = {
  pagenation: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '52px',
    height: '52px',
    borderRadius: '9999px',
    svg: {
      width: '40px',
      height: '40px',
      color: 'white',
    },
  },
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  textStyles,
  breakpoints,
});

export default theme;
