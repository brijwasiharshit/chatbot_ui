import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-[80vh] flex items-center py-48 justify-center flex-col ">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-blue-500 rounded-full animate-spin mb-4"></div>
      <h1 className="text-white text-2xl sm:text-4xl font-semibold">Loading...</h1>
    </div>
  );
};

export default LoadingSpinner;
