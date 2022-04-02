import React from "react";
import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
import AllCard from "./components/cards/AllCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Header /> */}
      <AllCard />
    </div>
  );
}

export default App;
