import React, { useState } from "react";

function TestChatbot() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6">
      {/* Test Chatbot Button */}
      <button
        onClick={toggleChatbot}
        className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all"
      >
        Test Chatbot
      </button>

      {/* Chatbot Overlay */}
      {isChatbotOpen && (
        <div className="fixed inset-0 flex flex-col">
          {/* Top Bar for Feedback */}
          <div className="w-full bg-white py-3 px-6 shadow-md flex justify-between items-center z-50">
            <p className="text-gray-800 font-semibold">
              Chatbot not working as intended?{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Share feedback
              </a>
            </p>
            <button
              onClick={toggleChatbot}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              ✕
            </button>
          </div>

          {/* Beautiful Dummy Website Background */}
          <div className="flex-1 overflow-y-auto bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
              <div className="max-w-4xl mx-auto text-center px-4">
                <h1 className="text-5xl font-bold mb-6">
                  Welcome to Our Modern Website
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  We provide innovative solutions to grow your business and
                  enhance your online presence.
                </p>
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all">
                  Get Started
                </button>
              </div>
            </div>

            {/* Features Section */}
            <div className="max-w-6xl mx-auto py-16 px-4">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                Our Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="text-4xl text-blue-600 mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Fast Performance
                  </h3>
                  <p className="text-gray-600">
                    Our platform is optimized for speed, ensuring a seamless
                    experience for your users.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="text-4xl text-purple-600 mb-4">✨</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Modern Design
                  </h3>
                  <p className="text-gray-600">
                    Sleek and intuitive design that captivates your audience and
                    enhances usability.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="text-4xl text-blue-600 mb-4">🔒</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Secure & Reliable
                  </h3>
                  <p className="text-gray-600">
                    We prioritize security and reliability to protect your data
                    and ensure uptime.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-gray-100 py-16">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                  What Our Clients Say
                </h2>
                <div className="space-y-8">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-gray-600 mb-4">
                      "This platform has transformed our business. The chatbot
                      integration is seamless, and the support team is
                      fantastic!"
                    </p>
                    <p className="text-gray-800 font-semibold">— Jane Doe</p>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-gray-600 mb-4">
                      "We love the modern design and ease of use. Highly
                      recommended for anyone looking to grow their online
                      presence."
                    </p>
                    <p className="text-gray-800 font-semibold">— John Smith</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-white py-8">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <p className="text-gray-600">
                  © 2023 Modern Website. All rights reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Dummy Chatbot */}
          <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-2xl overflow-hidden z-50">
            {/* Chatbot Header */}
            <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">Dummy Chatbot</h3>
              <button
                onClick={toggleChatbot}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                ✕
              </button>
            </div>

            {/* Chatbot Body */}
            <div className="p-4 h-64 overflow-y-auto">
              <p className="text-gray-700">Hello! How can I assist you today?</p>
            </div>

            {/* Chatbot Input */}
            <div className="border-t p-4">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestChatbot;