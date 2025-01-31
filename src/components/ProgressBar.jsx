import React, { useContext, useEffect, useState } from 'react';
import { waitContext } from '../pages/ScrapedData';
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const {waitBtn,setWaitBtn} = useContext(waitContext);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        else{
           setWaitBtn(false);
        }
        clearInterval(interval);
        return prevProgress;
      });
    }, 40);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 w-full ml-4 z-50 bg-gray-100"
      style={{ boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="relative w-full bg-gray-200 h-4">
        <span
          className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-xs font-semibold text-yellow-500"
          style={{ lineHeight: '1.5rem' }}
        >
          {progress}%
        </span>
        <div
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 h-4"
          style={{
            width: `${progress}%`,
            transition: 'width 0.2s ease-out',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
