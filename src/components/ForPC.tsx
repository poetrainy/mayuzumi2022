import { Flex, Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

const ForPC: FC = () => {
  return (
    <>
      <Box>
        <Flex as="h1">Sorry!</Flex>
        <Text>
          「黛灰の2022年7月の配信スケジュール帳」は現在、スマートフォンでのみ閲覧できます。
          <br />
          是非、お手持ちのスマホで右のQRコードを読み込み、再度アクセスをお試しください！
        </Text>
      </Box>
      <Box w="400px" h="400px">
        <Box
          as="img"
          src="https://images.microcms-assets.io/assets/647bcd6f4e7f44178ce069f1433b38f0/19b7a9edcc814f488f8bfeaf4fd77cb1/qr.png"
          objectFit="contain"
        />
      </Box>
      <Text>または、以下のURLをブラウザに入力してください。</Text>
      <Box>https://www.mayuzumi2022.com/</Box>
    </>
  );
};

export default ForPC;
