import { useEffect, useState } from "react";
import usePosition from "./usePosition";

const useFetch = () => {
  const { lat, long } = usePosition();
  const [weatherData, setWeatherData] = useState(null);
  const url = `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`;

  const fetchWeatherData = async () => {
    if (lat !== null && long !== null) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
      }
    }
  };

  useEffect(() => {
    fetchWeatherData();

    const intervalId = setInterval(fetchWeatherData, 60000); // Update every 10 mins

    return () => {
      clearInterval(intervalId);
    };
  }, [lat, long]);

  return { weatherData };
};

export default useFetch;