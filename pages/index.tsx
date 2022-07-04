import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import FirstView from '../src/components/FirstView';
import Head from '../src/components/Head';
import Dot from '../src/components/Dot';
import { client } from '../src/libs/client';
import { linksType, Schedule } from '../src/types/schedule';
import OriginalSpacer from '../src/components/OriginalSpacer';
import ScheduleComponent from '../src/components/Schedule';
import LinkBtn from '../src/components/LinkBtn';
import ScheduleVideo from '../src/components/ScheduleVideo';
import Foot from '../src/components/Foot';

type Props = {
  fvSchedule: Schedule;
  indexSchedule: Schedule;
  links: linksType;
};

let calendar = new Date();
let startedDay = 3;
let day = calendar.getDate();
let count = day - startedDay + 1;

let links = [
  {
    name: '黛 灰 / Kai Mayuzumi【にじさんじ】',
    icon: 'youtube',
    color: '#FF0000',
    url: 'https://www.youtube.com/channel/UCb5JxV6vKlYVknoJB8TnyYg',
  },
  {
    name: '黛 灰(まゆずみ かい)@にじさんじ',
    icon: 'twitter',
    color: '#1DA1F2',
    url: 'https://twitter.com/mayuzumi_X',
  },
  {
    name: '黛灰｜にじさんじ 公式サイト',
    icon: 'info',
    color: '#2A4B71',
    url: 'https://www.nijisanji.jp/members/kai-mayuzumi',
  },
  {
    name: '黛灰｜にじさんじ オフィシャルストア',
    icon: 'store',
    color: '#2A4B71',
    url: 'https://shop.nijisanji.jp/s/niji/item/list?ima=5321&page=1&word=%E9%BB%9B%E7%81%B0',
  },
];

const Home: NextPage<Props> = ({ fvSchedule, indexSchedule, links }) => {
  console.log(indexSchedule);

  return (
    <>
      <Head />
      <FirstView data={fvSchedule} count={count} />
      <Dot />
      <Box bg="lightGray">
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
        <LinkBtn text="全ての配信予定を見る" primaryColor />
        <Dot />
      </Box>
      <Box bg="primary" color="white">
        <Flex flexDirection="column" justifyContent="center" w="90vw" mx="auto">
          <Text fontFamily="accent">All plesented by:</Text>
          <Text display="inline-block" fontSize="3rem" fontWeight="bold">
            黛 灰
          </Text>
          <Text display="inline-block">Kai Mayuzumi</Text>
          <Text>
            類い稀な才能を持つハッカー。ある依頼をされ潜入調査のために、配信活動を始める。（にじさんじ公式紹介文より引用）
          </Text>
        </Flex>
        <OriginalSpacer size="32px" />
        <Flex as="ul" flexDirection="column" gap="16px">
          {/* {links.map((item, i) => (
            <Box as="li" key={i}>
              <Flex
                as="a"
                href={item.url}
                target="page"
                alignItems="center"
                w="90vw"
                h="64px"
                bg={item.color}
                mx="auto"
                fontWeight="bold"
                borderRadius="9999px"
              >
                {item.name}
              </Flex>
            </Box>
          ))} */}
        </Flex>
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
      </Box>
      <Foot data={links} />
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
