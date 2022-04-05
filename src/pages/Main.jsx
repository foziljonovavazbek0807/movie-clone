import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Branch from "../components/branch/Branch";
import AllCard from "../components/cards/AllCard";
import Soon from "../components/soon/Soon";
import AllFilm from "../components/films/AllFilm";

function main() {
  return (
    <div className="Main">
      <Navbar />
      <Header />
      <Branch name1="SOON" name2="PREMIERE" />
      <Soon />
      <Branch name1="NEW" name2="PREMIERE" />
      <AllCard />
      <Branch name1="OTHERS" name2="MOVIES" />
      <AllFilm />
      <AllFilm />
      <AllFilm />
      <AllFilm />
      <AllFilm />
      <Branch name1="OTHERS" name2="MOVIES" />
    </div>
  );
}

export default main;
