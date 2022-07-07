import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';
import { AppProps } from 'next/dist/shared/lib/router/router';
import getWindowSize from '../src/hooks/getWindowSize';
import { useEffect, useState } from 'react';
import ForPC from '../src/components/ForPC';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { width } = getWindowSize();
  const [w, setW] = useState(0);
  useEffect(() => {
    if (width !== 0) {
      setW(width);
    }
  }, [width]);

  const AnyComponent = Component as any;
  return (
    <ChakraProvider resetCSS theme={theme}>
      {w >= 820 ? <ForPC /> : <AnyComponent {...pageProps} />}
    </ChakraProvider>
  );
};
export default MyApp;
