import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Collaboration } from '../types/schedule';

type Props = {
  data: Collaboration;
};

const ScheduleHeadline: FC<Props> = ({ data }) => {
  return (
    <Box>
      <Text fontFamily="accent">Member:</Text>
    </Box>
  );
};

export default ScheduleHeadline;
