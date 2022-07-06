import { Box, color, Flex, Text } from '@chakra-ui/react';

import { useEffect, useState, FC } from 'react';
import { Collaboration, Schedule } from '../types/schedule';
import OriginalSpacer from './OriginalSpacer';
import ScheduleDate from './ScheduleDate';
import ScheduleHeadline from './ScheduleHeadline';
import ScheduleMember from './ScheduleMember';
import ScheduleVideo from './ScheduleVideo';

type Props = {
  data: Schedule;
};

const Schedule: FC<Props> = ({ data }) => {
  const [day, setDay] = useState<number>(0);
  useEffect(() => {
    setDay(Number(data.id.split('-')[2]));
  }, [day]);

  return (
    <Box as="article">
      <ScheduleDate day={day} dayOfWeek={data.dayOfWeek} />
      <OriginalSpacer size="32px" />
      <ScheduleHeadline data={data.titleJa ? data.titleJa : data.temporary} />
      <OriginalSpacer size="16px" />
      {/* <ScheduleVideo data={data.shereUrl ? data.shereUrl : ''} /> */}
      <OriginalSpacer size="56px" />
    </Box>
  );
};

export default Schedule;
