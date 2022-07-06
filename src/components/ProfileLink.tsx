import { Flex, Box } from '@chakra-ui/react';
import { FC } from 'react';
import linkInfo from '../hooks/link';

const ProfileLink: FC = () => {
  return (
    <Flex
      as="ul"
      flexDirection="column"
      gap="16px"
    >
      {linkInfo.map((item, i) => (
        <Box as="li" key={i}>
          <Flex
            as="a"
            href={item.url}
            target="page"
            alignItems="center"
            w="90vw"
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
