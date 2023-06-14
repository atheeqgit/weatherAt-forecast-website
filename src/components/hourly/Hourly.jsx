import React, { useContext } from "react";
import Context from "../../context.js";
import "./hourly.css";

const Hourly = () => {
  const { hourlyData } = useContext(Context);

  return (
    <div className="hourly-div">
      <div className="title p-font">Hourly forecast</div>
      <div className="hourly-grid">
        {hourlyData.map((data, index) => {
          if (index < 8) {
            const sec = data.dt;
            const date = new Date(sec * 1000);
            const timestr = date.toLocaleTimeString();

            return (
              <div className="hourly-card s-bg">
                <h3 className="p-font">{data.dt_txt}</h3>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt=""
                />
                <p className="s-font">{data.main.temp}°c</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Hourly;
