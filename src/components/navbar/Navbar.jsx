import React, { useContext, useState } from "react";
import Context from "../../context.js";
import "./navbar.css";

const Navbar = () => {
  const { setSearch } = useContext(Context);
  const [input, setInput] = useState("");

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="     https://openweathermap.org/img/wn/02d.png" />
        WeatherAt.in
      </div>
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
        />
      </form>
      <button>Current Location</button>
    </nav>
  );
};

export default Navbar;
