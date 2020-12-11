//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Chicago</h1>
        <Weather city="Chicago" />
      </header>
    </div>
  );
}

export default App;
