import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import Arrow from '../assets/Arrow';

type Props = {
  primary?: boolean;
};

const Circle: FC<Props> = ({ primary }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w="64px"
      h="64px"
      borderRadius="9999px"
      m="auto"
      position="absolute"
      inset="auto 0 -72px"
      zIndex="10"
      sx={{
        ...(primary
          ? {
              background: 'primary',
            }
          : {
              background: 'secondary',
            }),
      }}
    >
      {/* <Box as={Arrow} w="36px" h="32px" mt="4px"></Box> */}
    </Flex>
  );
};

export default Circle;
