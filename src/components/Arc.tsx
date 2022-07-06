import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  color: string;
};

const Arc: FC<Props> = ({ color }) => {
  return (
    <Flex
      flexDirection="column"
      h="64px"
      justifyContent="flex-end"
      overflow="hidden"
      position="absolute"
      inset="99.9% 0 0 0"
      zIndex="5"
    >
      <Box
        background={color}
        minH="120px"
        borderBottomRightRadius="700px 300px"
        borderBottomLeftRadius="700px 300px"
        m="0 -100px 24px"
        px="100px"
        boxShadow="0 0 24px #00000050"
        zIndex="-1"
      ></Box>
    </Flex>
  );
};

export default Arc;
