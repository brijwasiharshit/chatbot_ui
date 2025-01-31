import React, { useState } from 'react';
import { leftArrow } from '../assets/svgs';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Content = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('content'); // State to track which section is active

  // Sample data
  const sampleData = {
    title: "Homepage - This is dummy content",
    metaDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    headings: ["Lorem", "ipsum", "dolor"],
    content: [
      "omnis iste natus error sit voluptatem accusantium doloremque laudantium omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    ],
    links: {
      internal: [
        { label: "About Us", url: "#" },
        { label: "Contact Us", url: "#" }
      ],
      external: [
        { label: "Learn More", url: "https://externalwebsite.com" }
      ]
    },
    media: [
      { type: "image", url: "https://picsum.photos/200/200", altText: "Our chatbot in action" },
      { type: "video", url: "https://video-url" }
    ],
    structuredData: {
      faq: [
        { question: "quia dolor sit amet, consectetur, adipisci velit, sed qu", answer: "Follow the instructions in the integration guide." },
        { question: " ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui d", answer: "Contact us for a personalized quote." }
      ]
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-4"
    >
      {/* Header with Back Button */}
      <div className="flex items-center justify-between bg-gray-100 p-3 sm:p-4 mb-4">
        <button
          onClick={() => navigate("/body/scraping")}
          className="p-2 text-gray-700 rounded-lg hover:bg-gray-200 transition hover:cursor-pointer"
        >
          {leftArrow}
        </button>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center flex-1">
          Scraped Data for Webpage
        </h2>
      </div>

      {/* Tabs for toggling between sections */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
        <button
          className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${
            activeTab === 'content' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setActiveTab('content')}
        >
          Content
        </button>
        <button
          className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${
            activeTab === 'links' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setActiveTab('links')}
        >
          Links
        </button>
        <button
          className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${
            activeTab === 'media' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setActiveTab('media')}
        >
          Media
        </button>
        <button
          className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${
            activeTab === 'structuredData' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setActiveTab('structuredData')}
        >
          Structured Data
        </button>
      </div>

      {/* Content Section */}
      {activeTab === 'content' && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Content</h3>
          <p><strong>Title:</strong> {sampleData.title}</p>
          <p><strong>Meta Description:</strong> {sampleData.metaDescription}</p>

          <div className="mt-4">
            <h4 className="text-md sm:text-lg font-semibold">Headings:</h4>
            <ul className="list-disc pl-5">
              {sampleData.headings.map((heading, index) => (
                <li key={index}>{heading}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-md sm:text-lg font-semibold">Paragraphs:</h4>
            <ul className="list-inside">
              {sampleData.content.map((paragraph, index) => (
                <li key={index} className="mt-2">{paragraph}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Links Section */}
      {activeTab === 'links' && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Links</h3>
          <div>
            <h4 className="font-semibold">Internal Links:</h4>
            <ul className="list-disc pl-5">
              {sampleData.links.internal.map((link, index) => (
                <li key={index}><a href={link.url} className="text-blue-500 hover:underline">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">External Links:</h4>
            <ul className="list-disc pl-5">
              {sampleData.links.external.map((link, index) => (
                <li key={index}><a href={link.url} className="text-blue-500 hover:underline">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Media Section */}
      {activeTab === 'media' && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Media</h3>
          {sampleData.media.map((media, index) => (
            <div key={index} className="mt-4">
              {media.type === 'image' && (
                <div>
                  <img src={media.url} alt={media.altText} className="max-w-full rounded-md shadow-sm" />
                  <p className="mt-2 text-center text-sm">{media.altText}</p>
                </div>
              )}
              {media.type === 'video' && (
                <div>
                  <a href={media.url} className="text-blue-500 hover:underline">Watch Demo Video</a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Structured Data Section */}
      {activeTab === 'structuredData' && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Structured Data</h3>
          {sampleData.structuredData.faq.map((faq, index) => (
            <div key={index} className="mt-4">
              <p><strong>Q:</strong> {faq.question}</p>
              <p><strong>A:</strong> {faq.answer}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Content;