import react, { useState, useEffect } from 'react';

interface SizeWindowProps {
  height: number | undefined,
  width: number | undefined
};

export default function useSizeWindow () {
  const [ sizeWindow, setSizeWindow ] = useState<SizeWindowProps>({
    height: window.innerHeight,
    width: window.innerWidth
  });

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

  return [sizeWindow]
  
}; 