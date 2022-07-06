import { Heading } from '@chakra-ui/react';
import { FC } from 'react';

const Head: FC = () => {
  return (
    <Heading
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="64px"
      bg="primary"
    >
      黛灰の配信スケジュール
    </Heading>
  );
};

export default Head;
