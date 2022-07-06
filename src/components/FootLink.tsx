import { Flex, Box } from '@chakra-ui/react';
import { FC } from 'react';
import shereInfo from '../hooks/shere';

const FootLink: FC = () => {
  return (
    <Flex as="ul" justifyContent="center" gap="16px">
      {shereInfo.map((item) => (
        <Box as="li" key={item.name}>
          <Box as="a" href={item.url}>
            <Box as={item.icon} w="40px" h="40px"/>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default FootLink;
