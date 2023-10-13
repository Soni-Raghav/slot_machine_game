import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import GamePlay from "./components/gamePlay";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <GamePlay />
        <Footer />
      </div>
    </>
  );
};

export default App;
