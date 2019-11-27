import React from "react";

import Skill from "../Skill/Skill";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", url: "/assets/skills/html.png" },
    { name: "CSS", url: "/assets/skills/css.png" },
    { name: "JavaScript", url: "/assets/skills/javascript.png" },
    { name: "jQuery", url: "/assets/skills/jquery.jpg" },
    { name: "React", url: "/assets/skills/react.png" },
    { name: "Redux", url: "/assets/skills/redux.png" },
    { name: "Node", url: "/assets/skills/node.png" },
    { name: "MongoDB", url: "/assets/skills/mongodb.png" },
    { name: "GitHub", url: "/assets/skills/github.png" }
  ];

  return (
    <section id="container-skills">
      <h1>Dev Toolbox</h1>
      <div id="skill-list">
        {skills.map(skill => {
          return <Skill url={skill.url} name={skill.name} key={skill.name} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
