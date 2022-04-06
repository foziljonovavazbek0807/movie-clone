import React from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">Navbar</div>
      <form action="#!" className="search">
        <AiOutlineSearch className="search_icon" />
        <input
          type="text"
          placeholder="Movie Search"
          className="search_input"
        />
        <button className="search_btn">Search</button>
      </form>
      <ul className="menu">
        <li>
          <a href="#!">TV</a>
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
