import { Box, Flex, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';

type Props = {
  data: string;
  date?: number;
};

const attention = ['あした！', 'あさって！', 'しあさって！'];

const ScheduleVideo: FC<Props> = ({ data, date }) => {
  const [url, setUrl] = useState<string>('');
  useEffect(() => {
    if (data !== '') {
      setUrl(data.split('watch?v=')[1]);
    }
  }, [data, url]);
  return (
    <Box
      height={{ base: 'calc( 90vw / 16 * 9 )', sm: 'calc( 80vw / 16 * 9 )' }}
      pos="relative"
      textStyle="bodyWidth"
    >
      {data !== '' ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${url}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <Box
          as="img"
          src="https://images.microcms-assets.io/assets/647bcd6f4e7f44178ce069f1433b38f0/200e8ffe7d6f4417a050f23503c8337b/watingBroadcast.png?w=800"
          alt="待機所はまだ作成されていません"
        />
      )}
      {date !== undefined ? (
        <Flex
          justifyContent="center"
          alignItems="center"
          w="80px"
          h="80px"
          color="white"
          bg="#d9185f"
          borderRadius="9999px"
          fontWeight="bold"
          fontSize="1.3rem"
          letterSpacing="-0.1rem"
          pos="absolute"
          inset="-40px -3vw auto auto"
        >
          <Text transform="rotateZ(10deg)">{attention[date]}</Text>
        </Flex>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ScheduleVideo;
