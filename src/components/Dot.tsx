import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import OriginalSpacer from './OriginalSpacer';

const Dot: FC = () => {
  return (
    <>
      <OriginalSpacer size="40px" />
      <Box
        w="7px"
        h="7px"
        bg="primary"
        borderRadius="9999px"
        mx="auto"
        position="relative"
        sx={{
          '&::before': {
            content: "''",
            display: 'block',
            w: '7px',
            h: '7px',
            bg: 'primary',
            borderRadius: '9999px',
            position: 'absolute',
            inset: 'auto auto 14px auto',
          },
          '&::after': {
            content: "''",
            display: 'block',
            w: '7px',
            h: '7px',
            bg: 'primary',
            borderRadius: '9999px',
            position: 'absolute',
            inset: '14px auto auto auto',
          },
        }}
      ></Box>
      <OriginalSpacer size="24px" />
    </>
  );
};

export default Dot;
