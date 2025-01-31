import React, { useContext, useEffect, useState } from 'react';
import { waitContext } from '../pages/ScrapedData';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const { waitBtn, setWaitBtn } = useContext(waitContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          setWaitBtn(false);
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 40);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [setWaitBtn]);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-lg">
      <div className="relative h-5 w-full bg-gray-200 overflow-hidden ">
        {/* Progress Bar */}
        <div
  className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-300 ease-out rounded-md"
  style={{ width: `${progress}%` }}
  role="progressbar"
  aria-valuenow={progress}
  aria-valuemin={0}
  aria-valuemax={100}
></div>

      </div>
      {/* Percentage Display */}

    </div>
  );
};

export default ProgressBar;