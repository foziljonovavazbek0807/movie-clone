import React from "react";
import Navbar from "../components/navbar/Navbar";
import Branch from "../components/branch/Branch";
import AllFilm from "../components/films/AllFilm";
import Again from "../components/films/Again";
import Footer from "../components/footer/Footer";
import Provide from "../components/provide/Provide";
import Actors from "../components/actors/Actors";
import Play from "../components/playMovie/Play";

function Watching() {
  return (
    <div className="Watching">
      <Navbar />
      <Branch name1="ABOUT" name2="FILM" />
      <Provide />
      <Branch name1="FILM'S" name2="ACTORS" />
      <Actors />
      <Branch name1="YOUR" name2="FILM" />
      <Play />
      <Branch name1="OTHER" name2="FILMS" />
      <AllFilm />
      <AllFilm />
      <Again />
      <Footer />
    </div>
  );
}

export default Watching;
