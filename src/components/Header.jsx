import React, { useContext } from "react";
import { rightArrow } from "../assets/svgs.jsx";
import { waitContext } from "../pages/ScrapedData.jsx";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const { waitBtn } = useContext(waitContext); // Use context value here
  const scraped = 7,
    total = 18,
    pending = 4;

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 sm:py-4 px-3 sm:px-6 md:px-8 shadow-md flex flex-col gap-3 sm:gap-4 md:flex-row justify-between items-center">
      {/* Title */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center md:text-left">
        Website Data Summary
      </h1>

      {/* Stats Section */}
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start text-xs sm:text-sm">
        <span className="bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md whitespace-nowrap">
          <strong>TOTAL:</strong> {total}
        </span>
        <span className="bg-green-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md whitespace-nowrap">
          <strong>SCRAPED:</strong> {scraped}
        </span>
        <span className="bg-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md whitespace-nowrap">
          <strong>PENDING:</strong> {pending}
        </span>
      </div>

      {/* Button Section */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
        {/* Wait Button */}
        <button
          disabled={!waitBtn}
          className="bg-white text-blue-600 font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md transition-all hover:bg-blue-100 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap w-full sm:w-auto"
        >
          Wait
        </button>

        {/* Move to Next Step Button */}
        <button
          onClick={() => {
            navigate("/body/integrated");
          }}
          className="bg-white text-blue-600 font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md transition-all flex gap-2 hover:bg-blue-100 hover:scale-105 whitespace-nowrap w-full sm:w-auto"
        >
          Move to next step
          {rightArrow}
        </button>
      </div>
    </header>
  );
};

export default Header;
