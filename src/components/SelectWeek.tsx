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
    <Flex as="ul" justifyContent="space-between" w="90vw" h="56px" mx="auto">
      {id.map((item, i) => (
        <Box key={item} w="23%" h="100%">
          <NextLink href={`/${item}`} passHref>
            <Flex
              as="a"
              href={`/${item}`}
              justifyContent="center"
              alignContent="center"
              w="100%"
              h="100%"
              color="white"
              fontWeight="bold"
              pr="10%"
              borderRadius="8px"
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
              <Text as="span">
                {startedDay + 7 * i}日 - <br />
                {startedDay + 6 + 7 * i === 30 ? 29 : startedDay + 6 + 7 * i}日
              </Text>
            </Flex>
          </NextLink>
        </Box>
      ))}
    </Flex>
  );
};

export default SelectWeek;
