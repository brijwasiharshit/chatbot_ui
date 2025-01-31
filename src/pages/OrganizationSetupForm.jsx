import React, { useState } from "react";
import { useNavigate } from "react-router";

const OrganizationSetupForm = ({ name }) => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [isFetching, setIsFetching] = useState(false);
    

const handleMoveToNext = () => {
  if (companyName.trim() !== "" && websiteUrl.trim() !== "" && companyDescription.trim() !== "") {
    navigate("/body/scraping");
  } else {
    alert("Please fill in all fields before proceeding.");
  }
}
  
  // Function to fetch meta description from the website URL
  const fetchMetaDescription = async () => {
    if (!websiteUrl.trim()) {
      alert("Please enter a valid website URL.");
      return;
    }

    setIsFetching(true);

    try {
      const response = await fetch("https://api.linkpreview.net", {
        method: "POST",
        headers: {
          "X-Linkpreview-Api-Key": "123456",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ q: websiteUrl }),
      });

      const result = await response.json();
      console.log(result);

      if (result.description) {
        setCompanyDescription(result.description);
      } else {
        alert("No meta description found for this website.");
      }
    } catch (error) {
      console.error("Error fetching meta description:", error);
      alert("Failed to fetch meta description. Please try again.");
    } finally {
      setIsFetching(false);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      companyName,
      websiteUrl,
      companyDescription,
    });
    alert("Organization setup complete!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        <span className="text-red-500">Hi, {name}</span>
        <div>Setup your Organisation</div>
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Company Name Field */}
        <div className="mb-4">
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter your company name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Website URL Field */}
        <div className="mb-4">
          <label
            htmlFor="websiteUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Company Website URL
          </label>
          <div className="flex gap-2 mt-1">
            <input
              type="url"
              id="websiteUrl"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="Enter your company website URL"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <button
              type="button"
              onClick={fetchMetaDescription}
              disabled={isFetching}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isFetching ? "Fetching..." : "Fetch Meta"}
            </button>
          </div>
        </div>

        {/* Company Description Field */}
        <div className="mb-6">
          <label
            htmlFor="companyDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Company Description
          </label>
          <textarea
            id="companyDescription"
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
            placeholder="Describe your company"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
        onClick={handleMoveToNext}
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Save and Continue
        </button>
      </form>
    </div>
  );
};

export default OrganizationSetupForm;
