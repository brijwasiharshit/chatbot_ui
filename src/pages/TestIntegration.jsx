import React, { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

function TestIntegration() {
  const [integrationStatus, setIntegrationStatus] = useState(null); // null, "success", or "failure"

  const testIntegration = () => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      setIntegrationStatus(isSuccess ? "success" : "failure");
    }, 500);
  };

  const resetIntegration = () => {
    setIntegrationStatus(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6 sm:p-8 md:p-10"
    >
      {/* Test Integration Button */}
      {integrationStatus === null && (
        <button
          onClick={testIntegration}
          className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all text-sm sm:text-base"
        >
          Test Integration
        </button>
      )}

      {/* Success UI */}
      {integrationStatus === "success" && (
        <div className="text-center">
          {/* Confetti Animation */}
          <Confetti width={window.innerWidth} height={window.innerHeight} />

          {/* Success Message */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">🎉 Integration Successful!</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Your chatbot has been successfully integrated with your website.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => alert("Redirecting to Admin Panel...")}
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all text-sm sm:text-base"
            >
              Explore Admin Panel
            </button>
            <button
              onClick={() => alert("Starting chatbot conversation...")}
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all text-sm sm:text-base"
            >
              Start Talking to Your Chatbot
            </button>
          </div>

          {/* Social Media Sharing Buttons */}
          <div className="mt-8">
            <p className="text-gray-200 mb-4">Share your success:</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => alert("Sharing on Twitter...")}
                className="px-6 py-2 bg-twitter text-white font-semibold rounded-lg hover:bg-twitter-dark transition-all text-sm"
              >
                Twitter
              </button>
              <button
                onClick={() => alert("Sharing on LinkedIn...")}
                className="px-6 py-2 bg-linkedin text-white font-semibold rounded-lg hover:bg-linkedin-dark transition-all text-sm"
              >
                LinkedIn
              </button>
              <button
                onClick={() => alert("Sharing on Facebook...")}
                className="px-6 py-2 bg-facebook text-white font-semibold rounded-lg hover:bg-facebook-dark transition-all text-sm"
              >
                Facebook
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Failure UI */}
      {integrationStatus === "failure" && (
        <div className="text-center">
          {/* Failure Message */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">⚠️ Integration Not Detected</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            We couldn't detect the chatbot integration yet. Please ensure the
            code is correctly added to your website.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={testIntegration}
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all text-sm sm:text-base"
            >
              Retry Test
            </button>
            <button
              onClick={() => alert("Redirecting to support...")}
              className="px-8 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition-all text-sm sm:text-base"
            >
              Contact Support
            </button>
          </div>
        </div>
      )}

      {/* Reset Button (if not in initial state) */}
      {integrationStatus !== null && (
        <button
          onClick={resetIntegration}
          className="mt-8 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all text-sm sm:text-base"
        >
          Go Back
        </button>
      )}
    </motion.div>
  );
}

export default TestIntegration;
