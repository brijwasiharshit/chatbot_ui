import React, { useState } from "react";

function IntegrateOnWebsite() {
  const [copied, setCopied] = useState(false);
  const dummyCode = `<script src="https://example.com/chatbot.js"></script>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(dummyCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6">
      <h2 className="text-4xl font-bold mb-6 text-center">Chatbot Integration</h2>
      <p className="text-lg text-gray-200 mb-8 text-center max-w-2xl">
        Choose how you want to integrate the chatbot on your website. Whether you prefer a quick copy-paste or sending instructions to your developer, we've got you covered.
      </p>

      <div className="flex flex-wrap gap-8 justify-center w-full max-w-6xl">
        {/* Copy-Paste Instructions */}
        <div className="bg-white text-gray-800 rounded-xl shadow-2xl p-8 w-full sm:w-[45%] lg:w-[40%] transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600">
            Copy-Paste Instructions
          </h3>
          <p className="mb-6 text-gray-700 text-center">
            Copy and paste the following code into the{" "}
            <code className="font-mono bg-gray-100 px-2 py-1 rounded text-blue-600">
              &lt;head&gt;
            </code>{" "}
            section of your website:
          </p>
          <div className="relative bg-gray-100 p-4 rounded-lg mb-6 text-sm overflow-x-auto">
            <code className="font-mono text-gray-800">{dummyCode}</code>
            <button
              onClick={copyToClipboard}
              className="absolute top-3 right-3 text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="Copy code"
            >
              📋
            </button>
          </div>
          {copied && (
            <p className="text-green-600 text-sm text-center mb-4">
              ✅ Code copied successfully!
            </p>
          )}
        </div>

        {/* Mail Instructions */}
        <div className="bg-white text-gray-800 rounded-xl shadow-2xl p-8 w-full sm:w-[45%] lg:w-[40%] transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-6 text-center text-purple-600">
            Mail Instructions
          </h3>
          <p className="mb-6 text-gray-700 text-center">
            Enter your developer's email address, and we'll send them the integration instructions.
          </p>
          <input
            type="email"
            placeholder="developer@example.com"
            className="w-full px-4 py-3 border rounded-lg mb-6 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button
            onClick={() => alert("Instructions sent!")}
            className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Send Instructions
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntegrateOnWebsite;