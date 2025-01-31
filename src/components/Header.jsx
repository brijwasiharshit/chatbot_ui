import React, { useContext } from "react";
import { rightArrow } from "../assets/svgs.jsx";
import { waitContext } from "../pages/ScrapedData.jsx";
import { useNavigate } from "react-router";


const Header = () => {
  const navigate = useNavigate();
 const {waitBtn} = useContext(waitContext);  // Use context value here
  const scraped = 4, total = 10, pending = 6;

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-4 px-8 shadow-md flex flex-col md:flex-row justify-between items-center">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center md:text-left mb-4 md:mb-0">
        Website Data Summary
      </h1>

      {/* Stats Section */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
        <span className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md">
          <strong>TOTAL:</strong> {total}
        </span>
        <span className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md">
          <strong>SCRAPED:</strong> {scraped}
        </span>
        <span className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md">
          <strong>PENDING:</strong> {pending}
        </span>
      </div>

      {/* Button Section */}
      <div className="flex gap-3">
        {/* Wait Button */}
        <button
          disabled={!waitBtn}
          className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow-md mt-4 md:mt-0 transition-all hover:bg-blue-100 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Wait
        </button>

        {/* Move to Next Step Button */}
        <button onClick={()=>{navigate("")}} className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow-md mt-4 md:mt-0 transition-all flex gap-2 hover:bg-blue-100 hover:scale-105">
          Move to next step
          {rightArrow}
        </button>
      </div>
    </header>
  );
};

export default Header;
