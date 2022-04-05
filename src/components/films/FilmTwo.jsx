import React from "react";
import "./Film.css";
import FilmPoster from "../../assets/img1.jpg";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineDislike } from "react-icons/ai";
// import { BsFillEyeFill } from "react-icons/bs";

function FilmTwo() {
  return (
    <div className="FilmTwo">
      <div className="film_poster">
        <img src={FilmPoster} alt="FilmPoster" />
        <small>2022</small>
        <div className="such">
            <FaRegHeart className="like_icon" />
            <AiOutlineDislike className="like_icon" />
        </div>
      </div>
      <div className="about">
        <h3>Avengers - End Game</h3>
        <div className="about_film">
          <span>
            <h5>Homeland :</h5>
            <p>USA</p>
          </span>
          <span>
            <h5>Language :</h5>
            <p>English</p>
          </span>
          <span>
            <h5>Time :</h5>
            <p>125 min / 2:05</p>
          </span>
          <span>
            <h5>Genre :</h5>
            <p>Fantasy, Horror, Action</p>
          </span>
        </div>
        <div className="watch_btn">
          <a href="#!" className="btn_watch">
            Watch Now
          </a>
          <a href="#!" className="btn_watch_trailer">
            Trailer
          </a>
        </div>
      </div>
    </div>
  );
}

export default FilmTwo;
