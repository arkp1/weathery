import React, { useState } from "react";
import { useWeather } from "../Utils";
import { FaSearch} from "react-icons/fa";

function Header() {
  const { setLocation, fetchWeather } = useWeather();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setLocation(searchQuery);
    setSearchQuery("");
    fetchWeather();
  };

  return (
    <header className="w-full bg-gradient-to-tr from-indigo-900 to-blue-700 text-white font-merriweather px-4 py-4 backdrop-blur-lg shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">
        <h1 className="text-4xl md:text-5xl h-[52px] font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
          weathery<span className="text-blue-300">.</span>
        </h1>

        <form onSubmit={handleSearch} className="mt-4 md:mt-0 w-full md:w-auto">
          <div className="flex items-center backdrop-blur-md bg-white/10 rounded-full overflow-auto border border-white/20 shadow-lg hover:shadow-blue-400/20 transition-all duration-300">
            <input
              type="text"
              placeholder="Search city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent w-full md:w-64 px-4 py-2 focus:outline-none text-white placeholder-blue-100"
            />
            <button
              type="submit"
              className="bg-blue-600/60 hover:bg-blue-500/80 text-white px-5 py-3 transition-colors flex items-center justify-center"
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;