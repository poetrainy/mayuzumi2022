import { Box, Flex } from '@chakra-ui/react';
import { VFC } from 'react';

const ScrollTop: VFC = () => (
  <Flex
    as="a"
    href="#"
    justifyContent="center"
    alignItems="center"
    w="48px"
    h="48px"
    bg="secondary"
    position="fixed"
    inset="auto 24px 40px auto"
    transition="0.2s background"
    _hover={{
      bg: 'primary',
    }}
  >
    <Box
      w="0"
      h="0"
      borderStyle="solid"
      borderWidth="0 10px 17.3px 10px"
      borderColor="transparent transparent #ffffff transparent"
    ></Box>
  </Flex>
);

export default ScrollTop;
