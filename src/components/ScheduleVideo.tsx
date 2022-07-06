import { Box } from '@chakra-ui/react';
import console from 'console';
import { FC, useEffect, useState } from 'react';

type Props = {
  data: string;
};

const ScheduleVideo: FC<Props> = ({ data }) => {
  const [url, setUrl] = useState<string>('');
  useEffect(() => {
    if (data !== '') {
      setUrl(data.split('watch?v=')[1]);
    }
  }, [url]);
  return (
    <Box width="90vw" height="calc( 90vw / 16 * 9 )" mx="auto">
      {/* {isLoading && <LoadingSpiner/>} */}
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
    </Box>
  );
};

export default ScheduleVideo;
