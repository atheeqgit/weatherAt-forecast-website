import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Current, Highlights, Hourly } from "./components";
import Wait from "./components/comp/Wait";
import Context from "./context.js";
import Axios from "axios";
//import { data } from "./data/data.js";

function App() {
  const [data, setData] = useState("");
  const [hourlyData, setHourlyData] = useState("");
  const [search, setSearch] = useState("");
  const [color, setColor] = useState("");
  const [userLocation, setUserLocation] = useState();
  const [place, setPlace] = useState("");
  const [loading, setLoading] = useState(
    "The Content is loading please wait...."
  );
  const APIkey = "b96b25ed2985fe84a64054a95d73a9ea";
  const dateObj = new Date();
  const date = `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;

  let lat;
  let lon;

  if (userLocation) {
    lat = userLocation.coords.latitude;
    lon = userLocation.coords.longitude;
  }
  function useLocation() {
    if (userLocation) {
      fetchLocationData();
    }
  }

  async function latlon() {
    if (search != "") {
      Axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${APIkey}`
      ).then((response) => {
        if (response.status === 200) {
          if (response.data.length === 0) {
            setColor("#ff6161");
            return console.log("not Availible");
          }
          setColor("var(--primary-font)");
          lat = response.data[0].lat;
          lon = response.data[0].lon;
          let city = response.data[0].name;
          let country = response.data[0].country;
          setPlace(`${city},${country}`);
          fetchData();
          fetchHourlyData();
        }
      });
    } else {
      setColor("#ff6161");
    }
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

  async function fetchLocationData() {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
    ).then((response) => {
      //
      if (response.status === 200) {
        setSearch(response.data.name);
      } else console.log(response);
    });
  }
  useEffect(() => {
    latlon();
  }, [search]);

  useEffect(() => {
    useLocation();
    // fetchLocationData();
  }, [userLocation]);

  return (
    <div className="app">
      <Context.Provider
        value={{
          data,
          place,
          date,
          hourlyData,
          setSearch,
          color,
          setUserLocation,
        }}
      >
        <Navbar />
        {data && hourlyData ? (
          <div className="main-grid">
            <div className="top">
              {data ? <Current /> : loading}
              {data ? <Highlights /> : loading}
            </div>
            {hourlyData ? <Hourly /> : loading}
          </div>
        ) : search == "" ? (
          <Wait msg="please search your place" />
        ) : (
          <Wait msg="Please Wait content is loading ......" />
        )}
      </Context.Provider>
    </div>
  );
}

export default App;
