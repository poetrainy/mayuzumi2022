import { Box, keyframes } from '@chakra-ui/react';
import { useEffect, useState, FC } from 'react';
import { Schedule } from '../types/schedule';
import OriginalSpacer from './OriginalSpacer';
import ScheduleDate from './ScheduleDate';
import ScheduleHeadline from './ScheduleHeadline';
import ScheduleMember from './ScheduleMember';
import ScheduleVideo from './ScheduleVideo';

type Props = {
  data: Schedule;
  index?: number;
};

const Schedule: FC<Props> = ({ data, index }) => {
  const [day, setDay] = useState<number>(0);
  useEffect(() => {
    setDay(Number(data.id.split('-')[2]));
  }, [data.id, day]);

  return (
    <Box as="article" transition=" 0.6s opacity, 0.6s transform">
      <ScheduleDate day={day} dayOfWeek={data.dayOfWeek} />
      <OriginalSpacer size="40px" />
      <ScheduleHeadline data={data.title ? data.title : data.temporary} />
      {day !== 29 ? (
        <>
          <OriginalSpacer size="24px" />
          <ScheduleVideo data={data.url ? data.url : ''} date={index} />
          <OriginalSpacer size="32px" />
          <ScheduleMember data={data.member} />
          <OriginalSpacer size="80px" />
        </>
      ) : (
        <OriginalSpacer size="80px" />
      )}
    </Box>
  );
};

export default Schedule;
