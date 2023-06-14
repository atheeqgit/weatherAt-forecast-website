import React, { useContext, useState } from "react";
import Context from "../../context.js";
import "./navbar.css";

const Navbar = () => {
  const { setSearch, color } = useContext(Context);
  const [input, setInput] = useState("");

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="     https://openweathermap.org/img/wn/02d.png" />
        WeatherAt.in
      </div>
      <div className="nav-holder">
        <form
          className="search-box"
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(input);
            setInput("");
          }}
        >
          <input
            value={input}
            type="text"
            placeholder="search"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            style={{ border: `2px solid ${color}` }}
          />
        </form>
        <button>Current Location</button>
      </div>
    </nav>
  );
};

export default Navbar;
