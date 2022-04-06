import React from "react";
import "./Footer.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer_first">
        <div className="logo">Footer</div>
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
      <div className="footer_contact">
        <FaTelegramPlane className="contact_icon" />
        <AiOutlineInstagram className="contact_icon" />
        <AiFillYoutube className="contact_icon" />
      </div>
    </div>
  );
}

export default Footer;
