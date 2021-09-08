import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
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
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "6b639f16df2a6ce6f88ae77448e6832f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="app-wrapper">
          <div className="Weather">
            <WeatherInfo data={weatherData} />
            <WeatherForecast city={weatherData.city} />
            <div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-10">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      className="form-control"
                      autoFocus="on"
                      autocomplete="off"
                      onChange={handleCityChange}
                      id="search"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="submit"
                      value="search"
                      className="btn btn-primary w-250"
                      id="searchbtn"
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
    search();
    return "loading...";
  }
}
