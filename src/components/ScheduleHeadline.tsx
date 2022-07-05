import { Heading, list } from '@chakra-ui/react';
import { VFC } from 'react';

type Props = {
  data: string;
  fv?: boolean;
};

const ScheduleHeadline: VFC<Props> = ({ data, fv }) => {
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
