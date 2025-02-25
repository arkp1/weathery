import { createContext, useContext, useEffect, useState } from "react";

const Weathercontext = createContext();

export const WeatherProvider = ({ children }) => {
  //Weather API
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const geoApiKey = import.meta.env.VITE_GEOLOCATION_API_KEY;

  // GeoLocation API
  const fetchGeolocation = async () => {
    if (location) return;
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${geoApiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    setLocation(data.city);
  };

  const fetchWeather = async () => {
    if (!location) return;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
      const response = await fetch(url);
      if (!response.ok) return "Cannot fetch response";

      const weatherData = await response.json();
      setWeather(weatherData);
      console.log(weatherData)
      return weatherData;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGeolocation();
  }, []);

  useEffect(() => {
    if(location)
    fetchWeather();
  }, [location]);

  return (
    <Weathercontext.Provider
      value={{ location, setLocation, weather, setWeather, fetchWeather }}
    >
      {children}
    </Weathercontext.Provider>
  );
};

export const useWeather = () => useContext(Weathercontext);
