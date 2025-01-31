import React, { useState } from "react";
import { motion } from "framer-motion";

function TestChatbot() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white p-4 md:p-6"
    >
      {/* Chatbot Overlay */}
      <div className="fixed inset-0 flex flex-col bg-white shadow-lg">
        {/* Top Bar for Feedback */}
        <div className="w-full bg-gray-100 py-3 px-6 flex justify-between items-center shadow-md">
          <p className="text-sm sm:text-base text-gray-800">
            Chatbot not working?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Share feedback
            </a>
          </p>
          <button className="text-gray-600 hover:text-gray-800">✕</button>
        </div>

        {/* Website Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 sm:py-20 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Dummy Website</h1>
            <p className="text-lg sm:text-xl text-gray-200">
              We provide innovative solutions to grow your business.
            </p>
          </div>

          {/* Features Section */}
          <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Fast Performance", desc: "Optimized for speed." },
              { icon: "✨", title: "Sleek Design", desc: "User-friendly & modern." },
              { icon: "🔒", title: "Secure & Reliable", desc: "Data protection ensured." },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-white py-6 text-center text-gray-600">
            © 2025 Dummy Website. All rights reserved.
          </div>
        </div>

        {/* Chatbot UI */}
        <div className="fixed bottom-6 right-2 md:right-6 w-full sm:w-40 md:w-96 lg:w-1/3 xl:w-1/4 bg-white rounded-lg shadow-2xl">
          <div className="bg-blue-500 text-white p-4 flex justify-between">
            <h3 className="font-semibold text-sm sm:text-base">Dummy Chatbot</h3>
            <button className="hover:text-gray-200">✕</button>
          </div>
          <div className="p-4 h-32 lg:h-48 overflow-y-auto">
            <p className="text-gray-700">Hello! How can I assist you today?</p>
          </div>
          <div className="border-t p-4">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TestChatbot;
