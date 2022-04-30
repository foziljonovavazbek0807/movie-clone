import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Branch from "../components/branch/Branch";
import Footer from "../components/footer/Footer";
import AllFilm from "../components/films/AllFilm";
import Again from "../components/films/Again";

function Serials() {
  return (
    <div className="Serials">
      <Navbar />
      <Header />
      <Branch name1="OTHERS" name2="SERIALS" />
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

export default Serials;
