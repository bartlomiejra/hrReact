import { useEffect, useState } from 'react';

export const useWindowHeight = () => {
  const [dimensions, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleWIndowResize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      return () => window.emoveEventListener('resize', handleWIndowResize);
    });
  }, []);

  return dimensions;
};
