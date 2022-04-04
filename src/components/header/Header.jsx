import React from "react";
import "./Header.css";
import Poster from "../../assets/img1.jpg";
import TitleLogo from "../../assets/title-logo.png";

function Header() {
  return (
    <div className="Header">
      <img src={Poster} alt="Poster" className="poster" />
      <div className="heading">
        <img src={TitleLogo} alt="TitleLogo" className="titleLogo" />
        <h1>Avengers - End Game</h1>
        <p>The film is now posted on the site. Don't miss it.</p>
        <div className="block_btn">
          <a href="#!" className="stream_btn">
            Watch Now
          </a>
          <a href="#!" className="trailer_btn">
            Watch Trailer
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
