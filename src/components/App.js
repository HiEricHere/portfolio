import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Blog from "./Blog/Blog";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
