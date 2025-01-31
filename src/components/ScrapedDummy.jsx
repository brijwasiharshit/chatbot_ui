import React from 'react'
import SCRAPEDIMG from '../assets/images/scraped.png';
import { useNavigate } from 'react-router';

const ScrapedDummy = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{navigate("/body/content")}} className='hover:cursor-pointer border-gray-800 border-2 p-1 hover:scale-110 '>
    <img src = {SCRAPEDIMG} />
    </div>
  )
}

export default ScrapedDummy