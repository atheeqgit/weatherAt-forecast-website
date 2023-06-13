import React, { useContext } from "react";
import "./current.css";
import Context from "../../context.js";

const Current = () => {
  const { data } = useContext(Context);

  // console.log(data);
  return (
    <div className="current-div s-bg">
      <div className="title">Current</div>
      <div className="current-info">
        <h1>{data.main.temp}</h1>
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
      <div className="dd date s-font">o 12/07/2023</div>
      <div className="dd day s-font">o monday</div>
    </div>
  );
};

export default Current;
