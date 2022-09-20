import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "../../src/components/Head";
import { client } from "../../src/libs/client";
import { Schedule } from "../../src/types/schedule";
import OriginalSpacer from "../../src/components/OriginalSpacer";
import ScheduleComponent from "../../src/components/Schedule";
import SelectWeek from "../../src/components/SelectWeek";
import Foot from "../../src/components/Foot";
import Arc from "../../src/components/Arc";
import ScrollTop from "../../src/components/ScrollTop";
import SelectedWeek from "../../src/components/SelectedWeek";
import Pagenation from "../../src/components/Pagenation";
import HeadOgp from "../../src/components/HeadOgp";
import axios from "axios";

type Props = {
  getSundayData: Schedule[];
  week: number;
  streamingTitle: string[];
};

let startedDay = 3;

const Home: NextPage<Props> = ({ getSundayData, week, streamingTitle }) => {
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
        {getSundayData.map((item, i) => (
          <ScheduleComponent
            data={item}
            key={item.id}
            headline={streamingTitle[i]}
          />
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
  const id: string[] = ["1", "2", "3", "4"];
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
    endpoint: "schedule",
    queries: {
      offset: 0,
      limit: 100,
    },
  });
  // スケジュール全て
  let schedule: Schedule[] = microCMSData.contents.reverse();
  // 日曜日の日付の配列
  let getSunday: number[] = [3, 10, 17, 24];
  // 1週間分の予定を入れる予定の配列
  let getSundayData = [];

  let week = Number(params.id) - 1;

  for (let i = 0; i < schedule.length; i++) {
    let hoge = Number(schedule[i].id.split("-")[0]);
    if (week === 3) {
      if (hoge >= getSunday[week]) {
        getSundayData.push(schedule[i]);
      }
    } else {
      if (hoge >= getSunday[week] && hoge < getSunday[week + 1]) {
        getSundayData.push(schedule[i]);
      }
    }
  }

  let streamingTitle: string[] = [];

  for (let i = 0; i < getSundayData.length; i++) {
    const getItem = await axios.get(getSundayData[i].url);
    const item = getItem.data;
    const streamingTitleItem = item
      .split("<title>")[1]
      .split(" - YouTube</title>")[0];
    streamingTitle.push(streamingTitleItem);
  }

  return {
    props: {
      getSundayData: getSundayData,
      week: week,
      streamingTitle: streamingTitle,
    },
  };
};
