import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Schedule } from '../types/schedule';
import Arc from './Arc';
import Dot from './Dot';
import Circle from './Circle';
import OriginalSpacer from './OriginalSpacer';
import ScheduleHeadline from './ScheduleHeadline';
import ScheduleMember from './ScheduleMember';
import ScheduleVideo from './ScheduleVideo';
import Count from './Count';

type Props = {
  data: Schedule;
  count: number;
};

const FirstView: FC<Props> = ({ data, count }) => {
  return (
    <Box
      position="relative"
      sx={{
        '&::after': {
          content: "''",
          display: 'block',
          width: '100%',
          height: '240px',
          background:
            "url('https://images.microcms-assets.io/assets/647bcd6f4e7f44178ce069f1433b38f0/69c25590539d497dab7104d55b5a379c/fv_bg.png')",
          backgroundRepeat: 'repeat no-repeat',
          backgroundSize: 'contain',
          position: 'absolute',
          inset: '0 0 auto auto',
          zIndex: '-1',
        },
      }}
    >
      <>
        <OriginalSpacer size="24px" />
        <Flex justifyContent="flex-end" alignItems="center" gap="8px" px="5vw">
          <Text
            w="fit-content"
            // color="#99A7A5"
            color="white"
            // mx="auto"
            fontSize="1.2rem"
            fontWeight="bold"
          >
            今日のなにかしらの活動
          </Text>
          <Count data={count} />
        </Flex>
        <OriginalSpacer size="8px" />
        <Flex alignItems="center" gap="8px" w="90vw" mx="auto">
          <ScheduleHeadline
            data={data.title ? data.title : data.temporary}
            fv
          />
        </Flex>
        <OriginalSpacer size="24px" />
        <ScheduleVideo data={data.url ? data.url : ''} />
        <OriginalSpacer size="24px" />
        <ScheduleMember data={data.member ? data.member : []} />
        <Dot />
        <Arc color="white" />
        <Circle primary />
      </>
    </Box>
  );
};

export default FirstView;
