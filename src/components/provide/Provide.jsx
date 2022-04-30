import React from "react";
import "./Provide.css";
import Poster from "../../assets/img1.jpg";
import {
  AiOutlineHeart,
  AiOutlineDislike,
  AiOutlineStar,
} from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

function Provide() {
  return (
    <div className="Provide">
      <div className="provide_about">
        <img src={Poster} alt="Poster" />
        <div className="about_texts">
          <div className="tit_head">
            <h2> Avengers - End Game (2019) </h2>
            <small>16+</small>
          </div>
          <div className="likes">
            <AiOutlineHeart className="like_icon" />
            <AiOutlineStar className="like_icon" />
            <AiOutlineDislike className="like_icon" />
            <BsTrash className="like_icon" />
          </div>
          <div className="anent">
            <span>
              <b>Homeland :</b>
              <p>USA</p>
            </span>
            <span>
              <b>Language :</b>
              <p>English</p>
            </span>
            <span>
              <b>Time :</b>
              <p>3h 1m</p>
            </span>
            <span>
              <b>Genre :</b>
              <p>Science Fiction, Adventure</p>
            </span>
          </div>
          <h4 className="overview_h4"> Overview </h4>
          <p className="overview_p">
            Lorem ipsum dolor, sit quo quasi id alias. Libero minima ad quos
            nisi quia Ad, id a aut quo sed fugit nihil nostrum Quos ipsum quo
            nisi in nihil sit culpa error! Dolor, id quos aut, hic eum in
            provident ex.
          </p>
          <div className="btn_bloc">
            <a href="#!" className="download_btn">
              Download
            </a>
            <a href="#!" className="trailer_btn">
              Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Provide;
