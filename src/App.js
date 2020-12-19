//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Chicago" />
      </div>
    </div>
  );
}

export default App;
