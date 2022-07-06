import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  data: number;
};

const Count: FC<Props> = ({ data }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="40px"
      h="40px"
      color="white"
      bg="secondary"
      fontSize="1.6rem"
      fontFamily="accent"
      fontWeight="bold"
      borderRadius="9999px"
    >
      #{data}
    </Flex>
  );
};

export default Count;
