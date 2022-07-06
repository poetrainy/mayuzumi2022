import { Box, ChakraProvider, Flex, Text } from '@chakra-ui/react';
import theme from '../src/theme';
import { AppProps } from 'next/dist/shared/lib/router/router';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <AnyComponent {...pageProps} />
      </ChakraProvider>
    </>
  );
};
export default MyApp;
