import { Box, Flex, Text } from '@chakra-ui/react';
import { useState, VFC } from 'react';
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
  // collaboration: {
  //   name: string;
  //   color: string;
  // }[];
};

const FirstView: VFC<Props> = ({ data, count }) => {
  const [name, setName] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [member, setMember] = useState([]);
  // if (data.member !== undefined && data.color !== undefined && name == '') {
  //   setName(data.member.split(','));
  //   setColor(data.color.split(','));
  //   console.log(name, color);
  // }
  // useEffect(() => {
  //   if (data.member !== undefined && data.color !== undefined && name === []) {
  //     setName(data.member.split(','));
  //     setColor(data.color.split(','));
  //     for (let i = 0; i < name.length; i++) {
  //       setMember([
  //         ...member,
  //         {
  //           name: name[i],
  //           color: color[i],
  //         },
  //       ]);
  //     }
  //     console.log(member);
  //   }
  // }, [name]);

  return (
    <Box
      position="relative"
      sx={{
        '&::after': {
          content: "''",
          display: 'block',
          width: '100%',
          height: '60%',
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
      <Text
        w="90vw"
        color="#99A7A5"
        mx="auto"
        fontSize="1.2rem"
        fontWeight="bold"
      >
        今日のなにかしらの活動
      </Text>
      <OriginalSpacer size="8px" />
      <Flex alignItems="center" gap="8px" w="90vw" mx="auto">
        <Count data={count} />
        <ScheduleHeadline
          data={data.titleJa ? data.titleJa : data.temporary}
          fv
        />
      </Flex>
      <OriginalSpacer size="24px" />
      <ScheduleVideo data={data.shereUrl ? data.shereUrl : ''} />
      <ScheduleMember data={member} />
      <Dot />
      <Arc color="white" />
      <Circle primary />
    </Box>
  );
};

export default FirstView;
