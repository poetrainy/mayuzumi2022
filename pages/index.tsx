import { Box, Flex, Text } from '@chakra-ui/react';
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
import ProfileLink from '../src/components/ProfileLink';
import Arc from '../src/components/Arc';
import ScrollTop from '../src/components/ScrollTop';
import Circle from '../src/components/Circle';

type Props = {
  fvSchedule: Schedule;
  indexSchedule: Schedule[];
};

let calendar = new Date();
let startedDay = 3;
let day = calendar.getDate();
let count = day - startedDay + 1;

const Home: NextPage<Props> = ({ fvSchedule, indexSchedule }) => {
  return (
    <>
      <Head />
      <FirstView data={fvSchedule} count={count} />
      <Box bg="lightGray" pos="relative">
        <OriginalSpacer size="104px" />
        <Text w="90vw" m="0 auto 8px" fontFamily="accent">
          About thid site:
        </Text>
        <Text w="90vw" mx="auto" fontSize="1.2rem">
          にじさんじ所属バーチャルライバー黛灰さんの、活動終了前約1ヶ月間の配信及び動画投稿予定を追い掛ける非公式ファンサイトです。
        </Text>
        <OriginalSpacer size="40px" />
        {indexSchedule.map((item, i) => (
          <ScheduleComponent data={item} key={i} />
        ))}
        <LinkBtn text="全ての配信予定を見る" link="/1" primaryColor />
        <Dot />
        <Arc color="lightGray" />
        <Circle />
      </Box>
      <Box bg="primary" color="white" pos="relative">
        <OriginalSpacer size="112px" />
        <Box w="90vw" mx="auto">
          <Text fontFamily="accent">All plesented by:</Text>
          <OriginalSpacer size="2px" />
          <Flex alignItems="center" gap="16px">
            <Text w="fit-content" fontSize="3rem" fontWeight="bold">
              黛 灰
            </Text>
            <Text>Kai Mayuzumi</Text>
          </Flex>
          <OriginalSpacer size="12px" />
          <Text lineHeight="2.5rem">
            類い稀な才能を持つハッカー。ある依頼をされ潜入調査のために、配信活動を始める。（にじさんじ公式紹介文より引用）
          </Text>
        </Box>
        <OriginalSpacer size="32px" />
        <ProfileLink />
        <OriginalSpacer size="40px" />
        <Box width="90vw" height="calc( 90vw / 16 * 9 )" mx="auto">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/NAWjHQH_5AE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
        <OriginalSpacer size="56px" />
        <Arc color="primary" />
      </Box>
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
  let scheduleGetDay = day - startedDay;
  return {
    props: {
      fvSchedule: schedule[scheduleGetDay],
      indexSchedule: schedule.splice(scheduleGetDay + 1, 3),
    },
  };
};
