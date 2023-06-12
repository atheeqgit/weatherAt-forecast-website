import React from "react";
import "./current.css";

const Current = () => {
  return (
    <div className="current-div s-bg">
      <div className="title">Current</div>
      <div className="current-info">
        <h1>27°c</h1>
        <div className="img-box">
          <img src="https://openweathermap.org/img/wn/02d@2x.png" />
        </div>
      </div>
      <p className="p-font">clear sky</p>

      <hr />
      <div className="dd date s-font">o 12/07/2023</div>
      <div className="dd day s-font">o monday</div>
    </div>
  );
};

export default Current;
