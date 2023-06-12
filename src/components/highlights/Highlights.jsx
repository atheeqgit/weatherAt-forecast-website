import React from "react";
import "./highlights.css";

const Highlights = () => {
  return (
    <div className="highlights-div rectangle-card s-bg">
      <div className="title">todays highlights</div>
      <div className="highlights-top">
        <div className="rect-card p-bg">
          <div className="card-name">
            <p className="s-font">air quality index</p>
            <span Index className="card-rating">
              very poor
            </span>
          </div>
          <ul className="card-infos">
            <li>icon</li>
            <li className="li-info">
              <h3 className="li-title s-font">PM25</h3>
              <p className="p-font">177</p>
            </li>
            <li className="li-info">
              <h3 className="li-title s-font">PM25</h3>
              <p className="p-font">177</p>
            </li>
            <li className="li-info">
              <h3 className="li-title s-font">PM25</h3>
              <p className="p-font">177</p>
            </li>
            <li className="li-info">
              <h3 className="li-title s-font">PM25</h3>
              <p className="p-font">177</p>
            </li>
          </ul>
        </div>
        <div className="rect-card p-bg">
          <div className="card-name">
            <p className="s-font">air quality index</p>
            <span Index className="card-rating">
              very poor
            </span>
          </div>
          <ul className="card-infos">
            <li>icon</li>
            <li className="li-info">
              <h3 className="li-title s-font">PM25</h3>
              <p className="p-font">177</p>
            </li>
            <li className="li-info">
              <h3 className="li-title s-font">PM25</h3>
              <p className="p-font">177</p>
            </li>
            <li className="li-info">
              <h3 className="li-title s-font">PM25</h3>
              <p className="p-font">177</p>
            </li>
            <li className="li-info">
              <h3 className="li-title s-font">PM25</h3>
              <p className="p-font">177</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="highlights-bottom">
        <div className="sq-card p-bg">
          <p className="s-font sq-title ">humidity</p>
          <div className="sq-infos">
            <div>icon</div>
            <p className="font-p">70%22</p>
          </div>
        </div>
        <div className="sq-card p-bg">
          <p className="s-font sq-title">humidity</p>
          <div className="sq-infos">
            <div>icon</div>
            <p className="font-p">70%22</p>
          </div>
        </div>
        <div className="sq-card p-bg">
          <p className="s-font sq-title">humidity</p>
          <div className="sq-infos">
            <div>icon</div>
            <p className="font-p">70%22</p>
          </div>
        </div>
        <div className="sq-card p-bg">
          <p className="s-font sq-title">humidity</p>
          <div className="sq-infos">
            <div>icon</div>
            <p className="font-p">70%22</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
