import React, { createContext, useState } from 'react';
import Header from '../components/Header';
import Detections from '../components/Detections';
import ProgressBar from '../components/ProgressBar';
import { motion } from 'framer-motion';
// Create context outside of the component
export const waitContext = createContext();

const ScrapedData = () => {
  const [waitBtn, setWaitBtn] = useState(true); // Track button state
  const scraped = 4, total = 10, pending = 6;

  return (
    <motion.div
    initial = {{opacity:0}}
    animate = {{opacity:1}}
    exit = {{opacity:0}}

    >
      <waitContext.Provider value={{waitBtn,setWaitBtn}}>
        <Header />
        <Detections />
        <ProgressBar />
      </waitContext.Provider>
    </motion.div>
  );
};

export default ScrapedData;
