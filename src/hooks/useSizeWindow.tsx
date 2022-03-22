import react, { useState, useEffect } from 'react';

interface Size {
  height: Number | undefined,
  width: Number | undefined
};

export default function useSizeWindow () {
  const [ size, setSize ] = useState<Size>({
    height: undefined,
    width: undefined
  });

  useEffect(() => {

    const handleResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
  
}; 