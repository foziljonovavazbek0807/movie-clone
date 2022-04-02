import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">Navbar</div>
      <form action="#!" className="search">
        <input type="text" placeholder="Movie Search" className="search_input" />
      </form>
      <ul className="menu">
        <li>
          <a href="#!">New</a>
        </li>
        <li>
          <a href="#!">Movies</a>
        </li>
        <li>
          <a href="#!">Serials</a>
        </li>
        <li>
          <a href="#!">Cartoons</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
