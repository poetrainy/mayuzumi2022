import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import FirstView from '../src/components/FirstView';
import Head from '../src/components/Head';
import Dot from '../src/components/Dot';
import { client } from '../src/libs/client';
import { Schedule } from '../src/types/schedule';
import OriginalSpacer from '../src/components/OriginalSpacer';
import ScheduleComponent from '../src/components/Schedule';
import LinkBtn from '../src/components/LinkBtn';
import Foot from '../src/components/Foot';
import Arc from '../src/components/Arc';
import ScrollTop from '../src/components/ScrollTop';
import Circle from '../src/components/Circle';
import Profile from '../src/components/Profile';
import HeadOgp from '../src/components/HeadOgp';
import dateFnsTz from 'date-fns-tz';
const { utcToZonedTime } = dateFnsTz;

type Props = {
  fvSchedule: Schedule;
  indexSchedule: Schedule[];
};

let startedDay = 3;
// let date = {
//   month: utcToZonedTime(new Date(), 'Asia/Tokyo').getMonth() + 1,
//   day: utcToZonedTime(new Date(), 'Asia/Tokyo').getDate(),
// };
let date = {
  month: 7,
  day: 5,
};

let count = date.day - startedDay + 1;

let scheduleGetDay = date.day - startedDay;

const Home: NextPage<Props> = ({ fvSchedule, indexSchedule }) => {
  return (
    <>
      <HeadOgp />
      <Head />
      <FirstView data={fvSchedule} count={count} date={date} />
      <Box bg="lightGray" pos="relative">
        <OriginalSpacer size="104px" />
        <OriginalSpacer size="40px" />
        {indexSchedule.map((item, i) => (
          <ScheduleComponent data={item} key={i} index={i} />
        ))}
        <LinkBtn text="全ての予定とアーカイブを見る" link="/1" primaryColor />
        <Dot />
        <Arc color="lightGray" />
        <Circle />
      </Box>
      <Profile />
      <Foot index />
      <ScrollTop />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const microCMSData = await client.get({
    endpoint: 'schedule',
    queries: {
      offset: 0,
      limit: 100,
    },
  });
  let schedule = microCMSData.contents.reverse();

  return {
    props: {
      fvSchedule: schedule[scheduleGetDay],
      indexSchedule: schedule.splice(scheduleGetDay + 1, 3),
    },
  };
};
