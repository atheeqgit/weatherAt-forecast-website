import React, { useState } from "react";
import "./App.css";
import { Navbar, Current, Highlights, Hourly } from "./components";
import Context from "./context.js";
import { data } from "./data/data.js";

//dffb11af425f766aed6829d8dabbc708
function App() {
  const [test, setTest] = useState(1);

  const APIkey = "9d06d9b4825f10f79591ff063769f070"; // other persons
  // const APIkey = "dffb11af425f766aed6829d8dabbc708";
  // const APIkey = "b96b25ed2985fe84a64054a95d73a9ea";
  const lat = 13.08268;
  const lon = 80.270721;

  async function fetchData() {
    const res = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&&appid=${APIkey}`
    );

    const data = await res.JSON;
    return data;
  }

  console.log(fetchData());
  //console.log(test);

  const increment = () => {
    setTest(test + 1);
  };
  return (
    <div className="app">
      <Context.Provider value={{ test, increment, data }}>
        <Navbar />
        <div className="main-grid">
          <div className="top">
            <Current />
            <Highlights />
          </div>
          <Hourly />
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
