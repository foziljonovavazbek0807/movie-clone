import React from "react";
import "./Film.css";
import FilmPoster from "../../assets/img1.jpg";

function FilmTwo() {
  return (
    <div className="FilmTwo">
      <div className="film_poster">
        <img src={FilmPoster} alt="FilmPoster" />
        <small>2022</small>
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
            <p>3h 1m</p>
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
