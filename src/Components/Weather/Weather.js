import React, { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";

const Weather = () => {
  const initialValue = {
    latitude: 0,
    longitude: 0,
  };

  const [coordinates, setCoordinates] = useState(initialValue);
  const [weather, setWeather] = useState(null);
  const [cityName] = useState(localStorage.getItem("cityName"));

  const FetchWeatherData = async () => {
    try {
      const response =
        coordinates.latitude !== 0 &&
        (await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?${
            cityName !== null
              ? `q=${cityName}`
              : `lat=${coordinates.latitude}&lon=${coordinates.longitude}`
          }&appid=f3b54ecb4e9937fcb8377bee47363beb`
        ));

      setWeather({
        location: response.data.name,
        icon: response.data.weather[0].icon,
        temperature: (response.data.main.temp - 273.15).toFixed(0),
      });
    } catch (weatherError) {
      console.log("weather mai masla hogya ji", weatherError);
    }
  };

  useEffect(() => {
    cityName !== null && localStorage.setItem("cityName", cityName);
  }, [cityName]);

  useEffect(
    () =>
      navigator.geolocation.getCurrentPosition((x) =>
        setCoordinates({
          latitude: x.coords.latitude,
          longitude: x.coords.longitude,
        })
      ),
    []
  );

  useEffect(() => {
    FetchWeatherData();
    // eslint-disable-next-line
  }, [coordinates, cityName]);

  return (
    <div className="weather">
      {weather !== null && (
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            width="50px"
            height="50px"
            alt="weather-icon"
          />
          {weather.temperature}°C
          <div> {weather.location}</div>
        </div>
      )}
    </div>
  );
};

export default Weather;
