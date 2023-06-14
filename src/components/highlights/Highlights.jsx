import React, { useContext } from "react";
import "./highlights.css";
import Context from "../../context.js";
import AirQuality from "../comp/AirQuality";
import SunRise from "../comp/sunRise";
import Humidity from "../comp/Humidity";
const Highlights = () => {
  return (
    <div className="highlights-div rectangle-card s-bg">
      <div className="title">todays highlights</div>
      <div className="highlights-top">
        <AirQuality />
        <SunRise />
      </div>
      <Humidity />
    </div>
  );
};

export default Highlights;
