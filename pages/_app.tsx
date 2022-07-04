import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';
import { AppProps } from 'next/dist/shared/lib/router/router';
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Head } from 'next/document';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  return (
    <>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <ChakraProvider resetCSS theme={theme}>
        <AnyComponent {...pageProps} />
      </ChakraProvider>
    </>
  );
};
export default MyApp;
