import { Flex, Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Arc from './Arc';
import OriginalSpacer from './OriginalSpacer';
import ProfileLink from './ProfileLink';
import ScheduleVideo from './ScheduleVideo';

const Profile: FC = () => {
  return (
    <Box bg="primary" color="white" pos="relative">
      <OriginalSpacer size="112px" />
      <Box textStyle="bodyWidth">
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
      <ProfileLink />
      <OriginalSpacer size="40px" />
      <ScheduleVideo data="https://www.youtube.com/watch?v=NAWjHQH_5AE" />
      <OriginalSpacer size="56px" />
      <Arc color="primary" />
    </Box>
  );
};

export default Profile;
