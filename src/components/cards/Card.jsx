import React from "react";
import "./Card.css";
import Img from "../../assets/img1.jpg";

function Card() {
  return (
    <div className="Card">
      <img src={Img} alt="img" />
      <small className="tim">NEW</small>
      <b className="title">Avengers</b>
      <div className="stream_block">
        <a href="#!" className="stream_btn">
          Watch Now
        </a>
        <a href="#!" className="stream_trailer_btn">
          Trailer
        </a>
      </div>
    </div>
  );
}

export default Card;
