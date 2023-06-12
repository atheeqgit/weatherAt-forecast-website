import { useState } from "react";
import "./App.css";
import { data } from "./data/data.js";
import { Navbar, Current, Highlights, Hourly } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-grid">
        <div className="top">
          <Current />
          <Highlights />
        </div>
        <Hourly />
      </div>
    </div>
  );
}

export default App;
