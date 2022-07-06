import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Member } from '../types/schedule';
import OriginalSpacer from './OriginalSpacer';

type Props = {
  data: Member[];
};

const ScheduleHeadline: FC<Props> = ({ data }) => {
  return (
    <Box w="90vw" mx="auto">
      <Text as="span" fontFamily="accent">
        Member:
      </Text>
      {data.length !== 0 ? (
        <>
          <OriginalSpacer size="12px" />
          <Flex as="ul" flexDirection="column" gap="14px">
            {data.map((item) => (
              <Flex as="li" alignItems="center" gap="12px" key={item.id}>
                <Box
                  w="36px"
                  h="36px"
                  bg={item.color}
                  border="transparent"
                  outline="#57B993 2.5px solid"
                  outlineOffset="2px"
                  borderRadius="9999px"
                ></Box>
                <Box fontSize="1.2rem">{item.name}</Box>
              </Flex>
            ))}
          </Flex>
        </>
      ) : (
        <Text as="span">未発表</Text>
      )}
    </Box>
  );
};

export default ScheduleHeadline;
