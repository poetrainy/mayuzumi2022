import { Flex, Box } from '@chakra-ui/react';
import { FC } from 'react';
import linkInfo from '../hooks/link';

type Props = {
  index: boolean;
};

const FootLink: FC<Props> = ({ index }) => {
  return (
    <Flex as="ul" justifyContent="center" gap="16px">
      {linkInfo.map((item, i) => (
        <Box as="li" key={i}>
          <Flex
            justifyContent="center"
            alignItems="center"
            as="a"
            href={item.url}
            w="48px"
            h="48px"
            bg="primary"
            borderRadius="9999px"
            sx={{
              ...(index
                ? {
                    background: 'primary',
                  }
                : {
                    background: 'white',
                  }),
            }}
          >
            <Box
              as={item.icon}
              w="24px"
              h="24px"
              sx={{
                ...(index
                  ? {
                      fill: 'white',
                    }
                  : {
                      fill: 'primary',
                    }),
              }}
            />
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default FootLink;
