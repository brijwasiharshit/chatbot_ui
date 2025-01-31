import React, { useState } from 'react'
import DetectedShimmer from './DetectedShimmer'
import ScrapedDummy from './ScrapedDummy'
import PendingDummy from './PendingDummy'

const Detections = () => {
  return (
    <div>

<div className=" p-4 rounded-lg shadow-lg">
  <span className="text-md bg-teal-700 text-white p-2 rounded-lg">
    Detected Pages:
  </span>
  <div className="mt-4 flex flex-wrap gap-6">
    <DetectedShimmer />
    <DetectedShimmer />
    <DetectedShimmer />
    <DetectedShimmer />
    <DetectedShimmer />
    <DetectedShimmer />
    <DetectedShimmer />
  </div>
</div>



<div className="bg-teal-50 p-6 rounded-lg shadow-lg">
  <div className="flex items-center space-x-2 mb-4">
    <span className="text-md bg-orange-500 text-white p-2 rounded-lg font-semibold">
      Scraped Pages:
    </span>
    <span className="text-red-500 font-bold text-sm">
      Click on any page to view its contents
    </span>
  </div>

  <div className="mt-6 flex flex-wrap gap-8 justify-start">
    <ScrapedDummy />
    <ScrapedDummy />
    <ScrapedDummy />
    <ScrapedDummy />
    <ScrapedDummy />
    <ScrapedDummy />
   
    <ScrapedDummy />
  </div>
</div>


<div className="bg-teal-50 p-4 rounded-lg shadow-lg">
  <span className="text-md bg-green-800 text-white p-2 rounded-lg">
    Pending Pages:
  </span>
  <div className="mt-4 flex flex-wrap gap-6">
    <PendingDummy />
    <PendingDummy />
    <PendingDummy />
    <PendingDummy />
  </div>
</div>
    </div>
  )
}

export default Detections