import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
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
                  <strong>{Math.round(weatherData.temperature)}</strong>
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
              <form>
                <div className="row">
                  <div className="col-10">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      className="form-control"
                      autoFocus="on"
                      autocomplete="off"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="submit"
                      value="search"
                      className="btn btn-primary w-200"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer id="link">
          This project was coded by Iliana Ramirez and is{" "}
          <a
            href="https://github.com/redseagal/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    );
  } else {
    const apiKey = "6b639f16df2a6ce6f88ae77448e6832f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
