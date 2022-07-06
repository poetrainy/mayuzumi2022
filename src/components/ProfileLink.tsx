import { Flex, Box } from '@chakra-ui/react';
import { FC } from 'react';
import linkInfo from '../hooks/link';

const ProfileLink: FC = () => {
  return (
    <Flex
      as="ul"
      justifyContent="center"
      flexWrap="wrap"
      gap="16px"
      textStyle="bodyWidth"
    >
      {linkInfo.map((item, i) => (
        <Box
          as="li"
          key={i}
          w={{ base: '100%', sm: '100%', md: '48%' }}
          maxW="360px"
        >
          <Flex
            as="a"
            target="page"
            href={item.url}
            alignItems="center"
            w="100%"
            h="60px"
            bg={item.color}
            px="24px"
            mx="auto"
            fontWeight="bold"
            borderRadius="9999px"
          >
            <Box
              as={item.icon}
              width="24px"
              height="24px"
              m="0 12px 0 0"
              fill="white"
            />
            {item.name}
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default ProfileLink;
