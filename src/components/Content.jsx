import React, { useEffect, useState } from "react";
import { useWeather } from "../Utils";
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherNight,
  TiWeatherSnow,
  TiWeatherWindy,
  TiWeatherShower,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
  TiWavesOutline,
  TiWeatherStormy,
} from "react-icons/ti";

export default function Content() {
  const { weather } = useWeather();

  const getWeatherIcon = (condition) => {
    const conditionText = condition.toLowerCase();

    if (conditionText.includes("Sunny") || conditionText.includes("clear")) {
      return <TiWeatherSunny className="w-24 h-24 text-yellow-400" />;
    } else if (conditionText.includes("cloud")) {
      return <TiWeatherCloudy className="w-24 h-24 text-gray-400" />;
    } else if (conditionText.includes("rain")) {
      return <TiWeatherDownpour className="w-24 h-24 text-blue-400" />;
    } else if (conditionText.includes("snow")) {
      return <TiWeatherSnow className="w-24 h-24 text-white" />;
    } else if (conditionText.includes("thunderstorm")) {
      return <TiWeatherStormy className="w-24 h-24 text-purple-400" />;
    } else {
      // Default icon for unknown conditions
      return <TiWeatherPartlySunny className="w-24 h-24 text-yellow-400" />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white overflow-hidden"> 
      {/* Weather Card */}
      {weather ? (
        <div className="relative bg-gray-800/70 backdrop-blur-md mb-12 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl text-center w-auto max-w-full sm:max-w-md md:max-w-lg border border-gray-700 transition-transform duration-300 hover:scale-105">
          {/* Location */}
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            {weather.location.name}, {weather.location.region}
          </h2>

          {/* Temperature */}
          <div className="flex items-center justify-center space-x-3 mt-4">
            <span className="text-7xl md font-bold">
              {weather.current.temp_c}°C
            </span>
            <span className="text-3xl text-gray-400">|</span>
            <span className="text-4xl font-light text-gray-400">
              {weather.current.temp_f}°F
            </span>
          </div>

          {/* Condition */}
          <p className="text-lg font-light text-gray-300 mt-4 tracking-wider">
            {weather.current.condition.text}
          </p>

          {/* Weather Icon */}
          <div className="flex justify-center mt-6">
            {getWeatherIcon(weather.current.condition.text)}
          </div>
        </div>
      ) : (

        <p className="text-3xl">Enter your city</p>
      )}
    </div>
  );
}
