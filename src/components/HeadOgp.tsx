import { FC } from 'react';
import Head from 'next/head';

type Props = {
  week?: number;
  firstDay?: number;
};

const HeadOgp: FC<Props> = ({ week, firstDay }) => {
  return (
    <Head>
      {week !== undefined && firstDay !== undefined ? (
        <>
          {/* ページのタイトル */}
          <title>
            7月{firstDay}日-7月{firstDay + 6}
            日の予定｜黛灰の2022年7月の配信スケジュール帳
          </title>
          {/* ページのタイトル */}
          <meta property="og:title" content="日" />
          {/* ページの説明文 */}
          <meta
            property="og:description"
            content={`にじさんじ所属バーチャルライバー黛灰さんの2022年7月${firstDay}日から7月${
              firstDay + 6
            }日までの配信スケジュールです。`}
          />
          {/* ページのURL */}
          <meta
            property="og:url"
            content={`https://www.mayuzumi2022.com/${week}`}
          />
        </>
      ) : (
        <>
          {/* ページのタイトル */}
          <title>黛灰の2022年7月の配信スケジュール帳</title>
          {/* ページのタイトル */}
          <meta property="og:title" content="" />
          {/* ページの説明文 */}
          <meta
            property="og:description"
            content="にじさんじ所属バーチャルライバー黛灰さんの2022年7月の配信スケジュールです。"
          />
          {/* ページのURL */}
          <meta property="og:url" content="https://www.mayuzumi2022.com" />
        </>
      )}
      {/* ページの種類 */}
      <meta property="og:type" content="website" />
      {/* サイト名 */}
      <meta
        property="og:site_name"
        content="黛灰の2022年7月の配信スケジュール帳"
      />
      {/* サムネイル画像の URL */}
      <meta
        property="og:image"
        content="https://images.microcms-assets.io/assets/647bcd6f4e7f44178ce069f1433b38f0/d988f7535f2449caa31c37719f2b8222/ogp.png?width=500"
      />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
};

export default HeadOgp;
