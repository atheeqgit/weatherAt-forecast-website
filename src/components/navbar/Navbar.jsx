import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="     https://openweathermap.org/img/wn/02d.png" />
        WeatherAt.in
      </div>
      <form className="search-box">
        <input type="text" placeholder="search" />
      </form>
      <button>Current Location</button>
    </nav>
  );
};

export default Navbar;
