import React, { useEffect, useState } from "react";
import SoilCard from "./SoilCard";
import "./Weather.css";
import { textTransform } from "@mui/system";
import WeatherCard from "./WeatherCard";
const Weather = () => {
  const [data, setData] = useState({});
  const apiKey = "3ae8af74b95539197a6bb13266e206a3";

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [place, setPlace] = useState("Manipal");
  const geoAPIKey = "AIzaSyCG2EJVnD6OqtU-7qRrHyR-ygXU2CpnEaA";
  const [wind, setWind] = useState(0);
  const [imgSource, setImgSource] = useState("./images/weather.png ");

  useEffect(() => {
    // Fetch geolocation data
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${geoAPIKey}`
    )
      .then((response) => response.json())
      .then((geodataAPI) => {
        if (geodataAPI.status === "OK" && geodataAPI.results.length > 0) {
          const location = geodataAPI.results[0].geometry.location;
          setLat(location.lat);
          setLon(location.lng);
        } else {
          // Handle geocoding error
          console.error("Geocoding failed. Check the place name and API key.");
        }
      })
      .catch((err) => {
        // Handle fetch error
        console.error("Error fetching geolocation data:", err);
      });
  }, [place, geoAPIKey]);

  useEffect(() => {
    // Fetch weather data based on latitude and longitude
    if (lat !== null && lon !== null) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((dataAPI) => setData(dataAPI))
        .catch((err) => {
          // Handle fetch error
          console.error("Error fetching weather data:", err);
        });
        if (data.weather && data.weather.length > 0) {
          setImgSource(`https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        } else {
          setImgSource("./images/weather.png"); // Set a default value if data.weather is undefined or empty
        }
        
    }
  }, [lat, lon, apiKey]);

  return (
    <div>
      <div className="section-1-weather w-full bg-white h-3/5">
        <h1>WEATHERCROP</h1>
        <h1>INFO</h1>
      </div>
      <div className="section-2-weather">
        <form className="flex items-center">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i className="fa fa-map-marker icon-class" aria-hidden="true"></i>
            </div>
            <input
              type="text"
              onChange={(e) => setPlace(e.target.value)}
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full pl-10 p-2.5  dark:bg-green-700 dark:border-green-700 dark:placeholder-white dark:text-white dark:focus:ring-green-600 dark:focus:border-green-500 text-center"
              placeholder="Search Loaction"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <i className="fa fa-microphone icon-class" aria-hidden="true"></i>
            </button>
          </div>
          <button
            onClick={(e) => setPlace(e.target.value)}
            type="button"
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-black bg-yellow-300 rounded-lg border-2 border-black hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-300 dark:hover:bg-yellow-300 dark:focus:ring-yellow-300"
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
        </form>
      </div>
      <h1 className="text-center text-5xl fontR">
        Weather Information for{" "}
        <span
          className="font-bold text-green-700"
          style={{ textTransform: "uppercase" }}
        >
          {place}
        </span>
      </h1>
      <WeatherCard
        name={place}
        temp={data.main ? `${(data.main.temp - 273.15).toFixed(2)}°C` : "N/A"}
        img={imgSource}
        wind={data.wind && data.wind.speed}
        text={data.clouds && `Cloudiness: ${data.clouds.all}%`}
        humid={data.main ? `${data.main.humidity}%` : "N/A"}
      />
      <SoilCard />
    </div>
  );
};

export default Weather;
