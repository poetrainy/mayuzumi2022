import { Box } from '@chakra-ui/react';
import { VFC } from 'react';
import OriginalSpacer from './OriginalSpacer';

const Dot: VFC = () => {
  return (
    <>
      <OriginalSpacer size="36px" />
      <Box
        w="8px"
        h="8px"
        bg="primary"
        borderRadius="9999px"
        mx="auto"
        position="relative"
        sx={{
          '&::before': {
            content: "''",
            display: 'block',
            w: '8px',
            h: '8px',
            bg: 'primary',
            borderRadius: '9999px',
            position: 'absolute',
            inset: 'auto auto 16px auto',
          },
          '&::after': {
            content: "''",
            display: 'block',
            w: '8px',
            h: '8px',
            bg: 'primary',
            borderRadius: '9999px',
            position: 'absolute',
            inset: '16px auto auto auto',
          },
        }}
      ></Box>
      <OriginalSpacer size="24px" />
    </>
  );
};

export default Dot;
