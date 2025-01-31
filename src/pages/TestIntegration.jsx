import React, { useState } from "react";
import Confetti from "react-confetti";

function TestIntegration() {
  const [integrationStatus, setIntegrationStatus] = useState(null); // null, "success", or "failure"

  const testIntegration = () => {
    // Simulate an API call to check integration status
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // Randomly simulate success or failure
      setIntegrationStatus(isSuccess ? "success" : "failure");
    }, 1500); // Simulate a 1.5-second delay
  };

  const resetIntegration = () => {
    setIntegrationStatus(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6">
      {/* Test Integration Button */}
      {integrationStatus === null && (
        <button
          onClick={testIntegration}
          className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all"
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
          <h1 className="text-4xl font-bold mb-6">🎉 Integration Successful!</h1>
          <p className="text-xl text-gray-200 mb-8">
            Your chatbot has been successfully integrated with your website.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => alert("Redirecting to Admin Panel...")}
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all"
            >
              Explore Admin Panel
            </button>
            <button
              onClick={() => alert("Starting chatbot conversation...")}
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all"
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
                className="px-6 py-2 bg-twitter text-white font-semibold rounded-lg hover:bg-twitter-dark transition-all"
              >
                Twitter
              </button>
              <button
                onClick={() => alert("Sharing on LinkedIn...")}
                className="px-6 py-2 bg-linkedin text-white font-semibold rounded-lg hover:bg-linkedin-dark transition-all"
              >
                LinkedIn
              </button>
              <button
                onClick={() => alert("Sharing on Facebook...")}
                className="px-6 py-2 bg-facebook text-white font-semibold rounded-lg hover:bg-facebook-dark transition-all"
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
          <h1 className="text-4xl font-bold mb-6">⚠️ Integration Not Detected</h1>
          <p className="text-xl text-gray-200 mb-8">
            We couldn't detect the chatbot integration yet. Please ensure the
            code is correctly added to your website.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={testIntegration}
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all"
            >
              Retry Test
            </button>
            <button
              onClick={() => alert("Redirecting to support...")}
              className="px-8 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition-all"
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
          className="mt-8 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all"
        >
          Go Back
        </button>
      )}
    </div>
  );
}

export default TestIntegration;