import { Box, Heading } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  data: string;
};

const ScheduleHeadline: FC<Props> = ({ data }) => {
  return (
    <Box width="80vw" height="calc( 80vw / 16 * 9 )" mx="auto">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${data}`}
        // src={`https://www.youtube-nocookie.com/embed/${data}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        
      ></iframe>
    </Box>
  );
};

export default ScheduleHeadline;
