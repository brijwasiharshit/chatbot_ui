import React from "react";
import { useNavigate } from "react-router";

function IntegrationTesting() {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-xl shadow-lg space-y-6 w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Chatbot Integration & Testing</h2>
        <button onClick={()=>{navigate("/body/testchatbot")}} className="hover:cursor-pointer w-full px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500">
          Test Chatbot
        </button>
        <button onClick={()=>{navigate("/body/integrateonwebsite")}} className="hover:cursor-pointer w-full px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500">
          Integrate on Website
        </button>
        <button className="hover:cursor-pointer w-full px-6 py-3 bg-purple-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-500">
          Test Integration
        </button>
      </div>
    </div>
  );
}

export default IntegrationTesting;
