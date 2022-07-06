import { Heading, list } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  data: string;
  fv?: boolean;
};

const ScheduleHeadline: FC<Props> = ({ data, fv }) => {
  return (
    <Heading
      fontSize="2rem"
      sx={{
        ...(fv
          ? {
              color: 'white',
            }
          : {
              color: 'black',
              margin: '0 5vw',
            }),
      }}
    >
      {data}
    </Heading>
  );
};

export default ScheduleHeadline;
