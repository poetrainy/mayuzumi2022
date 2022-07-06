import { Box, Flex, keyframes, Text } from '@chakra-ui/react';
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
import { motion } from 'framer-motion';

type Props = {
  data: Schedule;
  count: number;
};

const fadeIn = keyframes`
  0% { opacity:0; }
  100% { opacity:1; transform:translateY(0); }
`;

const fadeInAnimation = (i: number) =>
  `${fadeIn} 0.7s ${i}s ease-in-out forwards`;

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
        <Flex
          as={motion.div}
          animation={fadeInAnimation(0.4)}
          justifyContent="flex-end"
          alignItems="center"
          gap="8px"
          width={{
            base: '90vw',
            sm: '80vw',
          }}
          mx="auto"
          textStyle="fadeInStyle"
        >
          <Text
            w="fit-content"
            color="white"
            fontSize="1.2rem"
            fontWeight="bold"
          >
            今日のなにかしらの活動
          </Text>
          <Count data={count} />
        </Flex>
        <OriginalSpacer size="8px" />
        <Box
          as={motion.div}
          animation={fadeInAnimation(0.8)}
          textStyle="fadeInStyle"
        >
          <ScheduleHeadline
            data={data.title ? data.title : data.temporary}
            fv
          />
        </Box>
        <OriginalSpacer size="24px" />
        <Box
          as={motion.div}
          animation={fadeInAnimation(1.2)}
          textStyle="fadeInStyle"
        >
          <ScheduleVideo data={data.url ? data.url : ''} />
          <OriginalSpacer size="24px" />
          <ScheduleMember data={data.member ? data.member : []} />
        </Box>
        <Dot />
        <Arc color="white" />
        <Circle primary />
      </>
    </Box>
  );
};

export default FirstView;
