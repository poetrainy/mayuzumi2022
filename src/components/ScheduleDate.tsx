import { Flex } from '@chakra-ui/react';
import { VFC } from 'react';
import { Schedule } from '../types/schedule';

type Props = {
  day: number;
  dayOfWeek: string;
};

const ScheduleDate: VFC<Props> = ({ day, dayOfWeek }) => (
  <Flex
    alignItems="center"
    w="fit-content"
    h="48px"
    color="white"
    bg="secondary"
    p="0 64px 0 5vw "
    fontSize="1.6rem"
    fontWeight="bold"
    borderRadius="0 9999px 9999px 0"
  >
    {day}日（{dayOfWeek}）
  </Flex>
);

export default ScheduleDate;
