import React from "react";
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

  // Function to determine which weather icon to show
  const getWeatherIcon = (condition) => {
    if (!condition) return <TiWeatherPartlySunny />;

    const conditionText = condition.toLowerCase();

    if (conditionText.includes("sunny") || conditionText.includes("clear")) {
      return <TiWeatherSunny className="w-20 h-20 text-yellow-400" />;
    } else if (conditionText.includes("cloud")) {
      return <TiWeatherCloudy className="w-20 h-20 text-gray-300" />;
    } else if (conditionText.includes("rain")) {
      return <TiWeatherDownpour className="w-20 h-20 text-blue-400" />;
    } else if (conditionText.includes("snow")) {
      return <TiWeatherSnow className="w-20 h-20 text-white" />;
    } else if (conditionText.includes("thunderstorm")) {
      return <TiWeatherStormy className="w-20 h-20 text-purple-400" />;
    } else if (conditionText.includes("mist")) {
      return <TiWeatherShower className="w-20 h-20 text-blue-600" />;
    } else if (conditionText.includes("fog")) {
      return <TiWeatherWindyCloudy className="w-20 h-20 text-yellow-200" />;
    } else if (conditionText.includes("overcast")) {
      return <TiWeatherPartlySunny className="w-20 h-20 text-yellow-500" />;
    } else {
      return <TiWeatherWindyCloudy className="w-20 h20 text-yellow-400" />;
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
    <div
      className={`flex flex-col items-center justify-start w-full min-h-screen pt-2 md:pt-1 pb-2 px-4 md:overflow-auto ${
        isDayTime
          ? "bg-gradient-to-br from-blue-400 to-blue-600"
          : "bg-gradient-to-br from-indigo-900 to-gray-900"
      } text-white font-merriweather hover:shadow-red-400/20 transition-all duration-300`}
    >
      <div className="w-full max-w-xl mx-auto">
        {weather ? (
          <div className="backdrop-blur-lg bg-white/10 rounded-xl shadow-lg border border-white/20 w-full">
            {/* Top Section */}
            <div className="p-4 md:pt-3 text-center">
              <h2 className="text-3xl font-bold">{weather.location.name}</h2>
              <p className="text-base text-blue-100">
                {weather.location.region}, {weather.location.country}
              </p>

              {/* Main Temperature Display */}
              <div className="mt-4 flex justify-center items-center">
                <span className="text-5xl font-bold">
                  {weather.current.temp_c}°
                </span>
                <span className="text-lg font-light text-blue-100 ml-2">
                  {weather.current.temp_f}°F
                </span>
              </div>

              {/* Weather Icon and Condition */}
              <div className="flex flex-col items-center justify-center mt-2">
                <div className="p-3 bg-white/5 rounded-full">
                  {getWeatherIcon(weather.current.condition.text)}
                </div>
                <p className="text-lg font-medium mt-1">
                  {weather.current.condition.text}
                </p>
              </div>
            </div>

            {/* Details Section - More compact grid */}
            <div className="bg-black/20 rounded-xl px-2 pt-4 md:pt-3 pb-3 md:pb-1.5">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
                  <span className="text-s font-light">Feels Like</span>
                  <span className="text-lg font-medium">
                    {weather.current.feelslike_c}°C
                  </span>
                </div>
                <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
                  <span className="text-s font-light">Humidity</span>
                  <span className="text-lg font-medium">
                    {weather.current.humidity}%
                  </span>
                </div>
                <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
                  <span className="text-s font-light">Wind</span>
                  <span className="text-lg font-medium">
                    {weather.current.wind_kph} km/h
                  </span>
                </div>
                <div className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
                  <span className="text-s font-light">Pressure</span>
                  <span className="text-lg font-medium">
                    {weather.current.pressure_mb} mb
                  </span>
                </div>
              </div>

              {/* Last Updated - Standalone card with higher visibility */}
              <div className="mt-3 p-2 md:p-1.5 bg-blue-400/20 rounded-xl text-center">
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
