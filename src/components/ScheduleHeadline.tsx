import { Heading, list } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  data: string;
  fv?: boolean;
};

const ScheduleHeadline: FC<Props> = ({ data, fv }) => {
  return (
    <Heading
      fontSize={{ base: '2rem', sm: '2.2rem' }}
      textStyle="bodyWidth"
      sx={{
        ...(fv
          ? {
              color: 'white',
            }
          : {
              color: 'black',
            }),
      }}
    >
      {data}
    </Heading>
  );
};

export default ScheduleHeadline;
