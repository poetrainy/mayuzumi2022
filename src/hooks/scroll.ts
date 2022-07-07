import { useEffect, useState } from 'react';

const scroll = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [scrollPin, setScrollPin] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollAction = () => {
    setScrollPin(window.scrollY);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener('scroll', scrollAction);
    return () => {
      window.removeEventListener('scroll', scrollAction);
    };
  }, [scrollAction]);

  return scrollPin;
};

export default scroll;
