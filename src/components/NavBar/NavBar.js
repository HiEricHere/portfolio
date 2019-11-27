import React from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          [ <a href="#container-home">Home</a> ]
        </li>
        <li>
          [ <a href="#container-skills">Toolbox</a> ]
        </li>
        <li>
          [ <a href="#container-portfolio">Portfolio</a> ]
        </li>
        <li>
          [ <a href="#container-contacts">Contact</a> ]
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
