import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import PagenationNext from './PagenationNext';
import PagenationPrev from './PagenationPrev';

type Props = {
  week: number;
};

const Pagenation: FC<Props> = ({ week }) => {
  return (
    <Flex
      alignItems="center"
      gap="24px"
      w="fit-content"
      h="54px"
      mx="auto"
      pos="relative"
      zIndex={6}
    >
      <PagenationPrev week={week} />
      <Box w="20px" h="20px" bg="#e0e0e0" borderRadius="9999px" />
      <PagenationNext week={week + 2} />
    </Flex>
  );
};

export default Pagenation;
