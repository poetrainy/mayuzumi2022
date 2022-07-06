import { Box, ChakraProvider, Flex, Text } from '@chakra-ui/react';
import theme from '../src/theme';
import { AppProps } from 'next/dist/shared/lib/router/router';
// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  return (
    <>
      <Head>
        <title>黛灰の2022年7月の配信スケジュール帳</title>
        <meta
          property="og:title"
          content="黛灰の2022年7月の配信スケジュール帳"
          key="title"
        />
        <meta property="og:url" content="https://www.mayuzumi2022.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="黛灰の2022年7月の配信スケジュール帳"
        />
        <meta
          property="og:description"
          content="にじさんじ所属バーチャルライバー黛灰さんの2022年7月の配信スケジュールです。"
        />
        <meta
          property="og:site_name"
          content="黛灰の2022年7月の配信スケジュール帳"
        />
        <meta
          property="og:image"
          content="https://images.microcms-assets.io/assets/647bcd6f4e7f44178ce069f1433b38f0/d988f7535f2449caa31c37719f2b8222/ogp.png?width=500"
        />
        <meta name="twitter:card" content="summary" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <AnyComponent {...pageProps} />
      </ChakraProvider>
    </>
  );
};
export default MyApp;
