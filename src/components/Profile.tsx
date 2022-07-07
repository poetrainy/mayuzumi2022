import { Flex, Box, keyframes, Text } from '@chakra-ui/react';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import Arc from './Arc';
import OriginalSpacer from './OriginalSpacer';
import ProfileLink from './ProfileLink';
import ScheduleVideo from './ScheduleVideo';
// import { motion } from 'framer-motion';

// const fadeIn = keyframes`
//   0% {
//     opacity:0;
//   }
//   100% {
//     opacity:1;
//     transform:translateY(0);
//   }
// `;

// const fadeInAnimation = (i: number) =>
//   `${fadeIn} 0.7s ${i}s ease-in-out forwards`;

const Profile: FC = () => {
  const [y, setY] = useState(0);
  // const [isScroll, setIsScroll] = useState(0);

  const getItem = (e: SyntheticEvent<HTMLDivElement, Event>) => {
    const top = e.target.getBoundingClientRect().top;
    setY(top);
    console.log(top, y);
  };

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const scrollWindow = () => {
  //   let scroll = 0;
  //   scroll = window.scrollY;
  //   if (y <= scroll) {
  //     setIsScroll(1);
  //   } else {
  //     setIsScroll(0);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollWindow);
  //   return () => {
  //     window.removeEventListener('scroll', scrollWindow);
  //   };
  // }, []);

  return (
    <Box onLoad={(e) => getItem(e)} bg="primary" color="white" pos="relative">
      <OriginalSpacer size="112px" />
      <Box
        // as={motion.div}
        // animation={fadeInAnimation(isScroll * 0.4)}
        // textStyle="fadeInStyle"
        textStyle="bodyWidth"
      >
        <Text fontSize="16px" fontFamily="accent">
          All plesented by:
        </Text>
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
      {/* <Box
        as={motion.div}
        animation={fadeInAnimation(isScroll * 0.8)}
        textStyle="fadeInStyle"
      > */}
      <ProfileLink />
      {/* </Box> */}
      <OriginalSpacer size="40px" />
      {/* <Box
        as={motion.div}
        animation={fadeInAnimation(isScroll * 1.2)}
        textStyle="fadeInStyle"
      > */}
      <ScheduleVideo data="https://www.youtube.com/watch?v=NAWjHQH_5AE" />
      {/* </Box> */}
      <OriginalSpacer size="56px" />
      <Arc color="primary" />
    </Box>
  );
};

export default Profile;
