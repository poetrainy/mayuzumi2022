import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Schedule } from '../types/schedule';

type Props = {
  day: number;
  dayOfWeek: Schedule['dayOfWeek'];
};

const ScheduleDate: FC<Props> = ({ day, dayOfWeek }) => (
  <Flex
    alignItems="center"
    w="fit-content"
    h={{ base: '48px', sm: '56px' }}
    color="white"
    bg="secondary"
    p={{ base: '0 64px 0 5vw', sm: '0 80px 0 10vw' }}
    fontSize="1.6rem"
    fontWeight="bold"
    borderRadius="0 9999px 9999px 0"
  >
    {day}日（{dayOfWeek}）
  </Flex>
);

export default ScheduleDate;
