import { Heading, list } from '@chakra-ui/react';
import { VFC } from 'react';

type Props = {
  data: string;
  fv?: boolean;
};

const ScheduleHeadline: VFC<Props> = ({ data, fv }) => {
  return (
    <Heading
      w="90vw"
      mx="auto"
      fontSize="2rem"
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
