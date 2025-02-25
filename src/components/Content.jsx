// import React, { useEffect, useState } from "react";
// import { useWeather } from "../Utils";
// import {
//   TiWeatherCloudy,
//   TiWeatherDownpour,
//   TiWeatherPartlySunny,
//   TiWeatherNight,
//   TiWeatherSnow,
//   TiWeatherWindy,
//   TiWeatherShower,
//   TiWeatherSunny,
//   TiWeatherWindyCloudy,
//   TiWavesOutline,
//   TiWeatherStormy,
// } from "react-icons/ti";

// export default function Content() {
//   const { weather } = useWeather();

//   const getWeatherIcon = (condition) => {
//     const conditionText = condition.toLowerCase();

//     if (conditionText.includes("Sunny") || conditionText.includes("clear")) {
//       return <TiWeatherSunny className="w-24 h-24 text-yellow-400" />;
//     } else if (conditionText.includes("cloud")) {
//       return <TiWeatherCloudy className="w-24 h-24 text-gray-400" />;
//     } else if (conditionText.includes("rain")) {
//       return <TiWeatherDownpour className="w-24 h-24 text-blue-400" />;
//     } else if (conditionText.includes("snow")) {
//       return <TiWeatherSnow className="w-24 h-24 text-white" />;
//     } else if (conditionText.includes("thunderstorm")) {
//       return <TiWeatherStormy className="w-24 h-24 text-purple-400" />;
//     } else {
//       // Default icon for unknown conditions
//       return <TiWeatherPartlySunny className="w-24 h-24 text-yellow-400" />;
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white overflow-hidden font-merriweather"> 
//       {/* Weather Card */}
//       {weather ? (
//         <div className="relative bg-gray-800/70 backdrop-blur-md mb-12 ml-5 mr-5 p-8 sm:p-8 md:p-10 rounded-3xl shadow-2xl text-center w-fit sm:w-fit border border-gray-700 transition-transform duration-300 hover:scale-105">
//           {/* Location */}
//           <h2 className="text-lg sm:text-4xl font-light tracking-wide">
//             {weather.location.name}, {weather.location.region}
//           </h2>

//           {/* Temperature */}
//           <div className="flex items-center justify-center space-x-3 mt-4">
//             <span className="text-4xl sm:text-7xl md font-bold">
//               {weather.current.temp_c}°C
//             </span>
//             <span className="text-4xl text-gray-400">|</span>
//             <span className="text-4xl font-light text-gray-400">
//               {weather.current.temp_f}°F
//             </span>
//           </div>

//           {/* Condition */}
//           <p className="text-lg font-light text-gray-300 mt-4 tracking-wider">
//             {weather.current.condition.text}
//           </p>

//           {/* Weather Icon */}
//           <div className="flex justify-center mt-6">
//             {getWeatherIcon(weather.current.condition.text)}
//           </div>
//         </div>
//       ) : (

//         <p className="text-3xl">Enter your city</p>
//       )}
//     </div>
//   );
// }



import React from "react";
import { useWeather } from "../Utils";

// Simple SVG icons to replace react-icons
const WeatherIcons = {
  Sunny: () => (
    <svg viewBox="0 0 24 24" className="w-16 h-16 text-yellow-400">
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  Cloudy: () => (
    <svg viewBox="0 0 24 24" className="w-16 h-16 text-gray-400">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" 
        fill="currentColor" stroke="white" strokeWidth="0.5" />
    </svg>
  ),
  Rain: () => (
    <svg viewBox="0 0 24 24" className="w-16 h-16 text-blue-400">
      <path d="M16 14a5 5 0 00-5-5 6 6 0 00-6 6c0 1.7.7 3.2 1.8 4.3a5 5 0 003.2 1.7h6" 
        fill="currentColor" stroke="white" strokeWidth="0.5" />
      <path d="M8 18l-1 2M12 18l-1 2M16 18l-1 2" 
        stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Snow: () => (
    <svg viewBox="0 0 24 24" className="w-16 h-16 text-white">
      <path d="M16 14a5 5 0 00-5-5 6 6 0 00-6 6c0 1.7.7 3.2 1.8 4.3a5 5 0 003.2 1.7h6" 
        fill="currentColor" stroke="#e5e7eb" strokeWidth="0.5" />
      <circle cx="8" cy="19" r="1" fill="white" />
      <circle cx="12" cy="19" r="1" fill="white" />
      <circle cx="16" cy="19" r="1" fill="white" />
    </svg>
  ),
  Thunderstorm: () => (
    <svg viewBox="0 0 24 24" className="w-16 h-16 text-purple-400">
      <path d="M16 14a5 5 0 00-5-5 6 6 0 00-6 6c0 1.7.7 3.2 1.8 4.3a5 5 0 003.2 1.7h6" 
        fill="currentColor" stroke="white" strokeWidth="0.5" />
      <path d="M13 11l-4 8h4l-1 4 4-8h-4l1-4z" 
        fill="yellow" stroke="yellow" strokeWidth="0.3" />
    </svg>
  ),
  PartlySunny: () => (
    <svg viewBox="0 0 24 24" className="w-16 h-16 text-yellow-400">
      <circle cx="9" cy="9" r="3" fill="currentColor" />
      <path d="M9 4v1M4 9h1M14 9h1M9 14v1M6.3 6.3l.7.7M12 6.3l-.7.7" 
        stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M17 13a4 4 0 00-4-4 5 5 0 00-5 5c0 1.4.6 2.6 1.5 3.4a4 4 0 002.6 1.6h5" 
        fill="#94a3b8" stroke="white" strokeWidth="0.3" />
    </svg>
  )
};

export default function Content() {
  const { weather } = useWeather();

  // Function to determine which weather icon to show
  const getWeatherIcon = (condition) => {
    if (!condition) return <WeatherIcons.PartlySunny />;
    
    const conditionText = condition.toLowerCase();

    if (conditionText.includes("sunny") || conditionText.includes("clear")) {
      return <WeatherIcons.Sunny />;
    } else if (conditionText.includes("cloud")) {
      return <WeatherIcons.Cloudy />;
    } else if (conditionText.includes("rain")) {
      return <WeatherIcons.Rain />;
    } else if (conditionText.includes("snow")) {
      return <WeatherIcons.Snow />;
    } else if (conditionText.includes("thunderstorm")) {
      return <WeatherIcons.Thunderstorm />;
    } else {
      return <WeatherIcons.PartlySunny />;
    }
  };

  // Function to format time (e.g., "19:00" → "7:00 PM")
  const formatTime = (timeString) => {
    if (!timeString) return "";
    
    const timeParts = timeString.split(":");
    let hours = parseInt(timeParts[0], 10);
    const minutes = timeParts[1];
    const ampm = hours >= 12 ? "PM" : "AM";
    
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12
    
    return `${hours}:${minutes} ${ampm}`;
  };

  // Get last updated time if available
  const getLastUpdated = () => {
    if (!weather || !weather.current.last_updated) return "";
    
    const dateTimeParts = weather.current.last_updated.split(" ");
    if (dateTimeParts.length < 2) return "";
    
    return formatTime(dateTimeParts[1]);
  };

  // Determine if it's day or night for background styling
  const isDayTime = weather?.current?.is_day === 1;

  return (
    <div className={`flex flex-col items-center justify-start w-full min-h-screen pt-1 pb-16 px-4 ${isDayTime ? 'bg-gradient-to-br from-blue-400 to-blue-600' : 'bg-gradient-to-br from-indigo-900 to-gray-900'} text-white font-merriweather hover:shadow-red-400/20 transition-all duration-300`}>
      <div className="w-full max-w-sm mx-auto ">
        {weather ? (
          <div className="backdrop-blur-lg bg-white/10 rounded-xl shadow-lg border border-white/20 w-full">
            {/* Top Section */}
            <div className="p-4 text-center">
              <h2 className="text-3xl font-bold">{weather.location.name}</h2>
              <p className="text-base text-blue-100">{weather.location.region}, {weather.location.country}</p>
              
              {/* Main Temperature Display */}
              <div className="mt-4 flex justify-center items-center">
                <span className="text-5xl font-bold">{weather.current.temp_c}°</span>
                <span className="text-lg font-light text-blue-100 ml-2">{weather.current.temp_f}°F</span>
              </div>
              
              {/* Weather Icon and Condition */}
              <div className="flex flex-col items-center justify-center mt-2">
                <div className="p-2 bg-white/5 rounded-full">
                  {getWeatherIcon(weather.current.condition.text)}
                </div>
                <p className="text-lg font-medium mt-1">{weather.current.condition.text}</p>
              </div>
            </div>
            
            {/* Details Section - More compact grid */}
            <div className="bg-black/20 px-2 pt-8 pb-6">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
                  <span className="text-s font-light">Feels Like</span>
                  <span className="text-lg font-medium">{weather.current.feelslike_c}°C</span>
                </div>
                <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
                  <span className="text-s font-light">Humidity</span>
                  <span className="text-lg font-medium">{weather.current.humidity}%</span>
                </div>
                <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
                  <span className="text-s font-light">Wind</span>
                  <span className="text-lg font-medium">{weather.current.wind_kph} km/h</span>
                </div>
                <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
                  <span className="text-s font-light">Pressure</span>
                  <span className="text-lg font-medium">{weather.current.pressure_mb} mb</span>
                </div>
              </div>
              
              {/* Last Updated - Standalone card with higher visibility */}
              <div className="mt-3 p-2 bg-blue-400/20 rounded-lg text-center">
                <span className="text-s">Last updated: {getLastUpdated()}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-10 mt-20 backdrop-blur-lg bg-white/10 rounded-xl shadow-lg border border-white/20">
            <p className="text-xl font-light">Enter your city</p>
          </div>
        )}
      </div>
    </div>
  );
}