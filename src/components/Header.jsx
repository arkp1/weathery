import React, { useState } from "react";
import { useWeather } from "../Utils";

function Header() {
  const { setLocation, fetchWeather } = useWeather();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    setLocation(searchQuery);
    setSearchQuery("");
    fetchWeather();
  };

  return (
    <header className="w-screen bg-gradient-to-tr from-gray-900 to-gray-700 text-white px-3">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <h1 className="text-4xl md:text-7xl">weathery.</h1>

        <div className="flex items-center mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Enter location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-black border-2 indent-2 w-60 md:w-80 rounded-l-lg p-1.5 text-black border-none outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-gray-800 text-white p-2 w-16 rounded-r-lg hover:bg-gray-900"
          >
            Go
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
