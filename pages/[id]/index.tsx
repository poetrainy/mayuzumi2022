import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from '../../src/components/Head';
import { client } from '../../src/libs/client';
import { Schedule } from '../../src/types/schedule';
import OriginalSpacer from '../../src/components/OriginalSpacer';
import ScheduleComponent from '../../src/components/Schedule';
import SelectWeek from '../../src/components/SelectWeek';
import Foot from '../../src/components/Foot';
import Arc from '../../src/components/Arc';
import ScrollTop from '../../src/components/ScrollTop';
import SelectedWeek from '../../src/components/SelectedWeek';
import Pagenation from '../../src/components/Pagenation';
import HeadOgp from '../../src/components/HeadOgp';

type Props = {
  getSundayData: Schedule[];
  week: number;
};

let startedDay = 3;

const Home: NextPage<Props> = ({ getSundayData, week }) => {
  return (
    <>
      <HeadOgp week={week} firstDay={startedDay + 7 * week} />
      <Head />
      <Box pos="relative">
        <OriginalSpacer size="40px" />
        <SelectWeek week={week} />
        <OriginalSpacer size="56px" />
        <SelectedWeek week={week} />
        <Arc color="white" />
      </Box>
      <Box bg="lightGray" pos="relative">
        <OriginalSpacer size="88px" />
        {getSundayData.map((item) => (
          <ScheduleComponent data={item} key={item.id} />
        ))}
        <Pagenation week={week} />
        <Arc color="lightGray" />
        <OriginalSpacer size="4px" />
      </Box>
      <Foot />
      <ScrollTop />
    </>
  );
};

export default Home;

export const getStaticPaths = () => {
  const id: string[] = ['1', '2', '3', '4'];
  const paths = id.map((item) => ({ params: { id: item } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const microCMSData = await client.get({
    endpoint: 'schedule',
    queries: {
      offset: 0,
      limit: 100,
    },
  });
  let schedule: Schedule[] = microCMSData.contents.reverse();
  // スケジュール全て
  let getSunday: number[] = [];
  // 日曜日の日付の配列
  let getSundayData: Schedule[][] = [];
  // 1週間分の予定を入れる予定の配列
  let num: number = 0;
  for (let i = 0; i < schedule.length; i++) {
    if (schedule[i].dayOfWeek[0] === '日') {
      getSunday.push(i);
    }
  }
  for (let i = 0; i < getSunday.length; i++) {
    getSundayData.push([]);
    for (let i2 = 0; i2 < 7; i2++) {
      num = Number(getSunday[i] + i2);
      if (num >= 27) {
        break;
      } else {
        getSundayData[i].push(schedule[num]);
      }
    }
  }
  return {
    props: {
      scheduleData: schedule,
      getSundayData: getSundayData[Number(params.id) - 1],
      week: Number(params.id) - 1,
    },
  };
};
