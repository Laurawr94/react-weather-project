import React, { useState } from "react";
import axios from "axios";

import "./App";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <header>
        <div>
          <ul className="navigation-items">
            <li className="navigation-item">
              <a href="/" onClick={updateCity}>
                Lisbon
              </a>
            </li>
            <li className="navigation-item">
              <a href="/" onClick={updateCity}>
                Paris
              </a>
            </li>
            <li className="navigation-item">
              <a href="/" onClick={updateCity}>
                Sydney
              </a>
            </li>
            <li className="navigation-item">
              <a href="/">San Francisco</a>
            </li>
          </ul>
        </div>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          onChange={updateCity}
        />
        <button type="Submit">Search</button>
      </form>
      <h1>{weather.name}</h1>
      <div className="dateTime">Sunday 14:45</div>
      <div className="weatherDescription">{weather.description}</div>
      <div className="row">
        <div className="col-sm-6">
          <img src={weather.icon} alt={weather.description} width="88" />
          <span className="mainTemp">{weather.temperature}℃</span>
        </div>
        <div className="col-sm-6">
          <ul className="moreInfo">
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
