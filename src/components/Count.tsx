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
      borderRadius="9999px"
      fontWeight="bold"
    >
      #{data}
    </Flex>
  );
};

export default Count;
