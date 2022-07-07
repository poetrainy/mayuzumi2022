import { Box, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';

const Head: FC = () => {
  return (
    <NextLink href="/" passHref>
      <Box as="a" target="page">
        <Heading
          as="h1"
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          h="64px"
          color="white"
          bg="primary"
          fontSize="1.4rem"
          fontFamily="accentJa"
          p="0 0 16px"
        >
          黛灰 7月配信スケジュール帳
        </Heading>
      </Box>
    </NextLink>
  );
};

export default Head;
