import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import OriginalSpacer from './OriginalSpacer';
import FootLink from './FootLink';

type Props = {
  index?: boolean;
};

const Foot: FC<Props> = ({ index }) => {
  return (
    <Box
      sx={{
        ...(index
          ? {
              background: 'white',
            }
          : {
              color: 'white',
              background: 'primary',
            }),
      }}
    >
      <OriginalSpacer size="96px" />
      <Heading
        color="secondary"
        fontSize="18px"
        fontFamily="accent"
        textStyle="bodyWidth"
      >
        About this site:
      </Heading>
      <OriginalSpacer size="12px" />
      <Flex
        flexDirection="column"
        gap="4px"
        fontSize="12px"
        lineHeight="2rem"
        textStyle="bodyWidth"
      >
        <Text>
          にじさんじ所属バーチャルライバー黛灰さんの、活動終了前約1ヶ月間の配信及び動画投稿予定を追い掛ける
          <Text as="span" fontWeight="bold">
            非公式ファンサイト
          </Text>
          （以下、当サイト）です。
        </Text>
        <Text>
          当サイトは黛灰さんファンであるいち個人が作成したものであり、にじさんじ及びANYCOROR株式会社様とは一切関係がございません。
        </Text>
        <Text>
          当サイトに関してのご質問やご指摘等がございましたら、
          <Text
            as="a"
            href="/"
            target="page"
            opacity={1}
            transition="opacity 0.2s"
            textDecoration="underline"
            _hover={{
              opacity: '0.6',
            }}
          >
            こちら
          </Text>
          までお願いいたします。
        </Text>
      </Flex>
      <OriginalSpacer size="40px" />
      <FootLink />
      <OriginalSpacer size="16px" />
      <Text
        as="small"
        display="block"
        color="#929292"
        fontSize="1rem"
        textAlign="center"
      >
        &copy; mayuzumi2022.com
      </Text>
      <OriginalSpacer size="96px" />
    </Box>
  );
};

export default Foot;
