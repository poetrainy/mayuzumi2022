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
  accent: "'Poppins', sans-serif",
  body: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
};
const breakpoints = {
  sm: '500px',
  md: '640px',
  lg: '820px',
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
  bodyWidth: {
    width: {
      base: '90vw',
      sm: '80vw',
    },
    mx: 'auto',
  },
  fadeInStyle: {
    transform: 'translateY(4px)',
    opacity: '0',
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
