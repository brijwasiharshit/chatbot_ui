import React from 'react';
import DetectedShimmer from './DetectedShimmer';
import ScrapedDummy from './ScrapedDummy';
import PendingDummy from './PendingDummy';

const Detections = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* Detected Pages Section */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-teal-800">Detected Pages</h2>
          <span className="text-sm text-gray-500">Total: 7 pages</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <DetectedShimmer />
          <DetectedShimmer />
          <DetectedShimmer />
          <DetectedShimmer />
          <DetectedShimmer />
          <DetectedShimmer />
          <DetectedShimmer />
        </div>
      </div>

      {/* Scraped Pages Section */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-orange-600">Scraped Pages</h2>
          <span className="text-sm text-red-500 font-medium">
            Click on any page to view its contents
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ScrapedDummy />
          <ScrapedDummy />
          <ScrapedDummy />
          <ScrapedDummy />
          <ScrapedDummy />
          <ScrapedDummy />
          <ScrapedDummy />
        </div>
      </div>

      {/* Pending Pages Section */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-green-800">Pending Pages</h2>
          <span className="text-sm text-gray-500">Total: 4 pages</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <PendingDummy />
          <PendingDummy />
          <PendingDummy />
          <PendingDummy />
        </div>
      </div>
    </div>
  );
};

export default Detections;