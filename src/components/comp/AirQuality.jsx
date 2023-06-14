import React, { useContext } from "react";
import Context from "../../context.js";
import { CiTempHigh } from "react-icons/ci";

const AirQuality = () => {
  const { data } = useContext(Context);

  const { temp_max, temp_min, humidity, pressure } = data.main;
  const { deg, speed } = data.wind;
  return (
    <div className="rect-card p-bg">
      <div className="card-name">
        <p className="s-font">temprature & other Details</p>
        {/* <span className="card-rating">very poor</span> */}
      </div>
      <ul className="card-infos">
        <li className="li-info">
          <CiTempHigh size={40} />
        </li>
        <li className="li-info">
          <h3 className="li-title s-font">min</h3>
          <p className="p-font">{temp_min}°c</p>
        </li>
        <li className="li-info">
          <h3 className="li-title s-font">max</h3>
          <p className="p-font">{temp_max}°c</p>
        </li>
        <li className="li-info">
          <h3 className="li-title s-font">wind</h3>
          <p className="p-font">{deg}°</p>
        </li>
        <li className="li-info">
          <h3 className="li-title s-font">speed</h3>
          <p className="p-font">{speed}Km</p>
        </li>
      </ul>
    </div>
  );
};

export default AirQuality;
