import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
