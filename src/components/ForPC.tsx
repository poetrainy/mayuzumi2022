import { Flex, Box, Text, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import HeadOgp from './HeadOgp';

const ForPC: FC = () => {
  return (
    <>
      <HeadOgp />
      <Flex
        as="main"
        flexDirection="column"
        justifyContent="center"
        w="800px"
        h="100vh"
        minH="600px"
        mx="auto"
      >
        <Box w="400px" h="400px">
          <Box
            as="img"
            src="https://images.microcms-assets.io/assets/647bcd6f4e7f44178ce069f1433b38f0/74611afe885b4f70bc9d5341eeb3d132/qr.png"
            objectFit="contain"
          />
        </Box>
        <Heading as="h1" color="primary" fontFamily="accent" fontSize="4rem">
          Sorry!
        </Heading>
        <Text m="16px 0 32px" lineHeight="2.5rem">
          「黛灰
          7月配信スケジュール帳」は現在、スマートフォンでのみ閲覧できます。
          <br />
          QRコードを読み込むか、以下のURLをブラウザに入力し、再度アクセスをお試しください！
        </Text>
        <Box
          color="secondary"
          fontFamily="accent"
          fontSize="2rem"
          textDecoration="underline"
        >
          https://www.mayuzumi2022.com/
        </Box>
      </Flex>
    </>
  );
};

export default ForPC;
