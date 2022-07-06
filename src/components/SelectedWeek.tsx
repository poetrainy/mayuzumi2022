import { Heading } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  week: number;
};

let startedDay: number = 3;
const SelectedWeek: FC<Props> = ({ week }) => {
  return (
    <Heading as="h2" w="fit-content" mx="auto" fontSize="2.2rem">
      7月
      {startedDay + 7 * week}日-7月
      {startedDay + 6 + 7 * week === 30 ? 29 : startedDay + 6 + 7 * week}
      日の予定
    </Heading>
  );
};

export default SelectedWeek;
