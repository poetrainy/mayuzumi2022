import { Box, color, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState, VFC } from 'react';
import { Collaboration, Schedule } from '../types/schedule';
import OriginalSpacer from './OriginalSpacer';
import ScheduleHeadline from './ScheduleHeadline';
import ScheduleMember from './ScheduleMember';
import ScheduleVideo from './ScheduleVideo';

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
      <Text color="white" fontFamily="accent" px="5vw">
        Today’s activity is:
      </Text>
      <OriginalSpacer size="8px" />
      <ScheduleHeadline
        data={data.titleJa ? data.titleJa : data.temporary}
        fv
      />
      <OriginalSpacer size="24px" />
      <ScheduleVideo data={data.shereUrl ? data.shereUrl : ''} />
      <Flex
        justifyContent="center"
        alignItems="center"
        w="fit-content"
        m="auto 5vw auto auto"
      >
        <Text color="#99A7A5" fontSize="1.2rem" fontWeight="bold">
          毎日なにかしらの活動
        </Text>
        <OriginalSpacer size="8px" horizontal />
        <Flex
          justifyContent="center"
          alignItems="center"
          w="40px"
          h="40px"
          color="white"
          bg="secondary"
          borderRadius="9999px"
          fontWeight="bold"
        >
          #{count}
        </Flex>
        <ScheduleMember data={member} />
      </Flex>
    </Box>
  );
};

export default FirstView;
