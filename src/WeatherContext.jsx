import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!location) return;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
      const response = await fetch(url);
      if (!response.ok) return "Cannot fetch response";
      const weatherData = await response.json();
      console.log("Weather Data from API:", weatherData); // Debugging log
      setWeather(weatherData);
      return weatherData;
    } catch (error) {
      console.error("Fetch Error:", error); // Log fetch errors
    }
  };

  return (
    <WeatherContext.Provider
      value={{ location, setLocation, weather, setWeather, fetchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);