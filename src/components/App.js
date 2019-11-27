import React from "react";

import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

import "./App.css";

const App = () => {
  console.log(
    "Hey there, this site was built to practice React and also to give me pressure to work on more projects - basically to keep me busy learning. \n - Eric"
  );
  return (
    <>
      <div id="AppContainer">
        <NavBar />
        <div id="container-view">
          <Home />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
