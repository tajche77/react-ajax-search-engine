import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(
      <ul>
        <li>
          Current weather in {city} is {response.data.weather[0].description}
        </li>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind speed: {Math.round(response.data.wind.speed)}km/h</li>
        <li>
          <img
            src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
          />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="submit" value="search" />
      </form>
      <h3>{forecast}</h3>
    </div>
  );
}
