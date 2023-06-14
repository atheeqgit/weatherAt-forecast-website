import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Current, Highlights, Hourly } from "./components";
import Context from "./context.js";
import Axios from "axios";
//import { data } from "./data/data.js";

function App() {
  const [data, setData] = useState("");
  const [hourlyData, setHourlyData] = useState("");
  const [search, setSearch] = useState("chennai");
  const [place, setPlace] = useState("");
  const APIkey = "b96b25ed2985fe84a64054a95d73a9ea";
  const dateObj = new Date();
  const date = `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;

  let lat;
  let lon;

  async function latlon() {
    Axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${APIkey}`
    ).then((response) => {
      if (response.status === 200) {
        lat = response.data[0].lat;
        lon = response.data[0].lon;
        let city = response.data[0].name;
        let country = response.data[0].country;
        setPlace(`${city},${country}`);
        fetchData();
        fetchHourlyData();
      }
    });
  }

  async function fetchData() {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
    ).then((response) => {
      //console.log(response.data);
      if (response.status === 200) {
        setData(response.data);
      } else console.log(response);
    });
  }
  async function fetchHourlyData() {
    // `api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=${APIkey}`
    // `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${APIkey}`
    Axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b96b25ed2985fe84a64054a95d73a9ea&units=metric`
    ).then((response) => {
      //console.log(response);
      if (response.status === 200) {
        setHourlyData(response.data.list);
      } else console.log(response);
    });
  }

  useEffect(() => {
    latlon();
  }, [search]);

  return (
    <div className="app">
      <Context.Provider value={{ data, place, date, hourlyData, setSearch }}>
        <Navbar />
        <div className="main-grid">
          <div className="top">
            {data ? <Current /> : "LOADING"}
            {data ? <Highlights /> : "LOADING"}
          </div>
          {hourlyData ? <Hourly /> : "LOADING"}
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
