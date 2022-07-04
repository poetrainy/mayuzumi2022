import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { VFC } from 'react';
import { linksType } from '../types/schedule';
import OriginalSpacer from './OriginalSpacer';

type Props = {
  data: linksType;
};

const Head: VFC<Props> = ({ data }) => {
  return (
    <>
      <Heading
        w="90vw"
        color="secondary"
        fontFamily="accent"
        fontSize="14px"
        m="0 auto 8px"
      >
        About this site:
      </Heading>
      <Text w="90vw" fontSize="12px" mx="auto">
        にじさんじ所属バーチャルライバー黛灰さんの、活動終了前約1ヶ月間の配信及び動画投稿予定を追い掛ける非公式ファンサイト（以下、当サイト）です。
        <br />
        当サイトは黛灰さんファンであるいち個人が作成したものであり、にじさんじ及びANYCOROR株式会社様とは一切関係がございません。
        <br />
        当サイトに関してのご質問やご指摘等がございましたら、
        <Text
          as="a"
          href="#"
          opacity={1}
          transition="opacity 0.2s"
          textDecoration="underline"
          _hover={{
            opacity: '0.6',
            textDecoration: 'none',
          }}
        >
          こちら
        </Text>
        までお願いいたします。
      </Text>
      <Flex as="ul">
        {data.map((item, i) => (
          <Box as="li" key={i}>
            <Flex
              as="a"
              href={item.url}
              w="48px"
              h="48px"
              bg="primary"
              borderRadius="9999px"
            ></Flex>
          </Box>
        ))}
      </Flex>
      <OriginalSpacer size="136px" />
    </>
  );
};

export default Head;
