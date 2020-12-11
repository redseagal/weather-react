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
