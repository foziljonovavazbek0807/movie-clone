import React from "react";
import Navbar from "../components/navbar/Navbar";
import Branch from "../components/branch/Branch";
import Tv from "../components/tv/Tv";
import Footer from "../components/footer/Footer";
import AllFilm from "../components/films/AllFilm";
import Again from "../components/films/Again";

function Television() {
  return (
    <div className="Television">
      <Navbar />
      <Branch name1="TV" name2="CHANNELS" />
      <Tv />
      <Branch name1="OTHERS" name2="FILMS" />
      <AllFilm />
      <AllFilm />
      <AllFilm />
      <AllFilm />
      <AllFilm />
      <Again />
      <Footer />
    </div>
  );
}

export default Television;
