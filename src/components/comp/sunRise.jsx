import React, { useContext } from "react";
import Context from "../../context.js";
import { TbSunrise, TbSunset } from "react-icons/tb";

const SunRise = () => {
  const { data } = useContext(Context);

  const { sunrise, sunset } = data.sys;

  const Rsec = sunrise;
  const Rdate = new Date(Rsec * 1000);
  const Risetimestr = Rdate.toLocaleTimeString();

  const Ssec = sunset;
  const Sdate = new Date(Ssec * 1000);
  const Srisetimestr = Sdate.toLocaleTimeString();

  //const { deg, speed } = data.wind;
  return (
    <div className="rect-card p-bg">
      <div className="card-name">
        <p className="s-font">sunrise & sunset</p>
        {/* <span className="card-rating">sunrise</span> */}
      </div>
      <div className="sun">
        <ul className="card-infos">
          <li className="li-info">
            <TbSunrise size={30} />
          </li>
          <li className="li-info">
            <h3 className="li-title s-font">sunrise</h3>
            <p className="p-font">{Risetimestr}</p>
          </li>
        </ul>
        <ul className="card-infos">
          <li className="li-info">
            <TbSunset size={30} />
          </li>
          <li className="li-info">
            <h3 className="li-title s-font">Sunset</h3>
            <p className="p-font">{Srisetimestr}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SunRise;
