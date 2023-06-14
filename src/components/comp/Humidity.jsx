import React, { useContext } from "react";
import Context from "../../context.js";

import { MdOutlineAir } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";

const Humidity = () => {
  const { data } = useContext(Context);

  const { humidity, pressure, feels_like } = data.main;
  const vKm = data.visibility / 1000;
  const { deg, speed } = data.wind;

  return (
    <div className="highlights-bottom">
      <div className="sq-card p-bg">
        <p className="s-font sq-title ">humidity</p>
        <div className="sq-infos">
          <div>
            <WiHumidity size={30} />
          </div>
          <p className="font-p">{humidity}%</p>
        </div>
      </div>
      <div className="sq-card p-bg">
        <p className="s-font sq-title">pressure</p>
        <div className="sq-infos">
          <div>
            {" "}
            <MdOutlineAir size={30} />
          </div>
          <p className="font-p">{pressure}hPa</p>
        </div>
      </div>
      <div className="sq-card p-bg">
        <p className="s-font sq-title">visibility</p>
        <div className="sq-infos">
          <div>
            <AiOutlineEye size={30} />
          </div>
          {/* <p className="font-p">{data.visibility}m</p> */}
          <p className="font-p">{vKm}Km</p>
        </div>
      </div>
      <div className="sq-card p-bg">
        <p className="s-font sq-title">feels like</p>
        <div className="sq-infos">
          <div>
            <CiTempHigh size={30} />
          </div>
          <p className="font-p">{feels_like}°</p>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
