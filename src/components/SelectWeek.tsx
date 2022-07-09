import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';

type Props = {
  week: number;
};

let startedDay: number = 3;
const id: number[] = [1, 2, 3, 4];

const SelectWeek: FC<Props> = ({ week }) => {
  return (
    <Flex
      as="ul"
      justifyContent="space-between"
      w="80vw"
      maxW="360px"
      mx="auto"
    >
      {id.map((item, i) => (
        <Box as="li" key={item}>
          <NextLink href={`/${item}`} passHref>
            <Flex
              as="a"
              href={`/${item}`}
              justifyContent="center"
              alignItems="center"
              w="68px"
              h="68px"
              color="white"
              fontWeight="bold"
              borderRadius="9999px"
              transition="0.2s background"
              _hover={{
                background: 'secondary',
              }}
              sx={{
                ...(week === i
                  ? {
                      background: 'secondary',
                    }
                  : {
                      background: 'primary',
                    }),
              }}
            >
              {startedDay + 7 * i}日-
            </Flex>
          </NextLink>
        </Box>
      ))}
    </Flex>
  );
};

export default SelectWeek;
