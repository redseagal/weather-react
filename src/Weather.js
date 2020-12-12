/*import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Chicago",
    date: "Tuesday 10:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
    humidity: 80,
    wind: 10,
    temperature: 70,
  };

  return (
    <div className="app-wrapper">
      <div className="Weather">
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Last updated:{weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="units"></span>
                <a href="/">°C</a> | <a href="/">°F</a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
          <div>
            <form id="search-form" className="mt-4">
              <div className="row">
                <div className="col-10">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    className="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="search"
                    className="btn btn-primary w-200"
                    id="search-btn"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <small id="link">
        <a href="https://github.com/redseagal/weather-app" target="_blank">
          Open-source code
        </a>
        by Iliana Ramirez
      </small>
    </div>
  );
}*/

import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "6b639f16df2a6ce6f88ae77448e6832f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Welcome to React</h2>;
}
