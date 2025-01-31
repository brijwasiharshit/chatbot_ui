import React from 'react';

const DetectedShimmer = () => {
  return (
    <div
      role="status"
      className="mx-2 max-w-xs p-4 space-y-2 border border-gray-800 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700 dark:border-gray-700"
    >
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex items-center justify-between pt-2">
          <div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-16 mb-1"></div>
            <div className="w-20 h-1.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 w-8"></div>
        </div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default DetectedShimmer;
