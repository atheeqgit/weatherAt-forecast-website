import React, { useContext } from "react";
import "./current.css";
import Context from "../../context.js";

import { BsFillCalendarDateFill, BsFillClockFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const Current = () => {
  const { data, place, date } = useContext(Context);

  const dateObj = new Date();
  const time = dateObj.toLocaleTimeString();
  //console.log(data);

  return (
    <div className="current-div s-bg">
      <div className="title">Current</div>
      <div className="current-info">
        <h1>{Math.floor(data.main.temp)}°c</h1>
        <div className="img-box">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          />
        </div>
      </div>
      <p className="p-font">
        {data.weather[0].main} , {data.weather[0].description}
      </p>

      <hr />
      <div className="dd date s-font">
        <BsFillCalendarDateFill /> {date}
      </div>
      <div className="dd date s-font">
        <BsFillClockFill /> {time}
      </div>
      <div className="dd day s-font">
        <HiLocationMarker /> {place}
      </div>
    </div>
  );
};

export default Current;
