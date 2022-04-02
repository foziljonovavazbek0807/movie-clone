import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="title">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi
          itaque ipsam doloribus sint! At vero cumque natus quod quis.
        </h1>
        <div className="btn_block">
            <a href="#!" className="btn_watch">Watch Now</a>
            <a href="#!" className="btn_download">Download Now</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
