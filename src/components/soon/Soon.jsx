import React from "react";
import "./Soon.css";
import SoonImg from "../../assets/img1.jpg";

function Soon() {
  return (
    <div className="Soon">
      <div className="ad_one">
        <img src={SoonImg} alt="SoonImg" />
        <small className="ti">2022</small>
        <b className="title">Avengers</b>
        <a href="#!" className="trailer_btn">
          Watch Trailer
        </a>
      </div>
      <div className="ad_one">
        <img src={SoonImg} alt="SoonImg" />
        <small className="ti">2022</small>
        <b className="title">Avengers</b>
        <a href="#!" className="trailer_btn">
          Watch Trailer
        </a>
      </div>
      <div className="ad_one">
        <img src={SoonImg} alt="SoonImg" />
        <small className="ti">2022</small>
        <b className="title">Avengers</b>
        <a href="#!" className="trailer_btn">
          Watch Trailer
        </a>
      </div>
    </div>
  );
}

export default Soon;
