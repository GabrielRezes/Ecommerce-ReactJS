import { useState, useEffect } from 'react';

type PropsSizeWindow = {
  height: number | undefined,
  width: number | undefined
};

export default function useSizeWindow () {
  const [ sizeWindow, setSizeWindow ] = useState<PropsSizeWindow>({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const [ isMobile, setIsMobile ] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setSizeWindow({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    sizeWindow.width && sizeWindow.width > 720 
      ? setIsMobile(false) 
      : setIsMobile(true);
  },[sizeWindow.width]);

  return  { isMobile }; 
}; 