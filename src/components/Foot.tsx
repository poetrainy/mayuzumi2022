import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { VFC } from 'react';
import OriginalSpacer from './OriginalSpacer';
import FootLink from './FootLink';

type Props = {
  index: boolean;
};

const Head: VFC<Props> = ({ index }) => {
  return (
    <Box
      sx={{
        ...(index
          ? {
              background: 'white',
            }
          : {
              background: 'primary',
            }),
      }}
    >
      <OriginalSpacer size="96px" />
      <Heading
        w="90vw"
        color="secondary"
        fontFamily="accent"
        fontSize="14px"
        m="0 auto 12px"
      >
        About this site:
      </Heading>
      <Flex
        flexDirection="column"
        gap="4px"
        w="90vw"
        fontSize="12px"
        mx="auto"
        lineHeight="2rem"
      >
        <Text>
          にじさんじ所属バーチャルライバー黛灰さんの、活動終了前約1ヶ月間の配信及び動画投稿予定を追い掛ける非公式ファンサイト（以下、当サイト）です。
        </Text>
        <Text>
          当サイトは黛灰さんファンであるいち個人が作成したものであり、にじさんじ及びANYCOROR株式会社様とは一切関係がございません。
        </Text>
        <Text>
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
      </Flex>
      <OriginalSpacer size="40px" />
      <FootLink index={index} />
      <OriginalSpacer size="16px" />
      <Text
        as="small"
        display="block"
        color="#929292"
        fontSize="1rem"
        textAlign="center"
      >
        &copy; 2022 mayuzumi2022schedule
      </Text>
      <OriginalSpacer size="96px" />
    </Box>
  );
};

export default Head;
