import React from "react";
import "./Card.css";
import Img from "../../assets/img1.jpg";

function Card() {
  return (
    <div className="Card">
      <div className="card_cub">
        <img src={Img} alt="img" />
        <small className="tim">NEW</small>
        <b className="title">Avengers</b>
        <a href="#!" className="stream_btn">
          Watch Now
        </a>
      </div>
      <div className="card_cub">
        <img src={Img} alt="img" />
        <small className="tim">NEW</small>
        <b className="title">Avengers</b>
        <a href="#!" className="stream_btn">
          Watch Now
        </a>
      </div>
      <div className="card_cub">
        <img src={Img} alt="img" />
        <small className="tim">NEW</small>
        <b className="title">Avengers</b>
        <a href="#!" className="stream_btn">
          Watch Now
        </a>
      </div>
      <div className="card_cub">
        <img src={Img} alt="img" />
        <small className="tim">NEW</small>
        <b className="title">Avengers</b>
        <a href="#!" className="stream_btn">
          Watch Now
        </a>
      </div>
      <div className="card_cub">
        <img src={Img} alt="img" />
        <small className="tim">NEW</small>
        <b className="title">Avengers</b>
        <a href="#!" className="stream_btn">
          Watch Now
        </a>
      </div>
      <div className="card_cub">
        <img src={Img} alt="img" />
        <small className="tim">NEW</small>
        <b className="title">Avengers</b>
        <a href="#!" className="stream_btn">
          Watch Now
        </a>
      </div>
      <div className="card_cub">
        <img src={Img} alt="img" />
        <small className="tim">NEW</small>
        <b className="title">Avengers</b>
        <a href="#!" className="stream_btn">
          Watch Now
        </a>
      </div>
    </div>
  );
}

export default Card;
