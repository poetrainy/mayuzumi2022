import { Box, Flex } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';

const ScrollTop: FC = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 200;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const normalStyle = {
    opacity: 0,
    transform: 'translateX(20px)',
  };
  const activeStyle = {
    opacity: 1,
    transform: 'translateX(0px)',
  };
  const style = isButtonActive ? activeStyle : normalStyle;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="48px"
      h="48px"
      bg="secondary"
      position="fixed"
      inset="auto 24px 40px auto"
      transition="0.2s background, 0.3s opacity, 0.5s transform"
      zIndex="30"
      style={style}
      _hover={{
        bg: 'primary',
      }}
      onClick={() => returnTop()}
    >
      <Box
        w="0"
        h="0"
        borderStyle="solid"
        borderWidth="0 10px 17.3px 10px"
        borderColor="transparent transparent #ffffff transparent"
      ></Box>
    </Flex>
  );
};

export default ScrollTop;
