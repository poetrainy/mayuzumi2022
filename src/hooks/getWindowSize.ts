import { useEffect, useState } from 'react';

const getWindowSize = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      window.addEventListener('load', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    } else {
      return;
    }
  }, []);

  return windowSize;
};

export default getWindowSize;