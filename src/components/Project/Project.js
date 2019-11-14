import React from "react";
import PropTypes from "prop-types";

const Project = props => {
  const { details } = props;
  const { title, description, concepts, tech, splash, github, link } = details;
  return (
    <li>
      <h1>{title}</h1>
      {splash.length ? <img src={splash} alt={title} /> : null}
      {link.length ? (
        <p>
          <a href={github}>GitHub</a> | <a href={link}>Link</a>
        </p>
      ) : (
        <p>
          <a href={github}>GitHub</a>
        </p>
      )}
      <p>{description}</p>
      <p>Concepts Learned</p>
      {concepts.map(element => {
        return (
          <div>
            <p>{element.concept}</p>
            <p>{element.description}</p>
          </div>
        );
      })}
      <p>Tech Used</p>
      <p>{tech}</p>
    </li>
  );
};

Project.propTypes = {
  details: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string,
  description: PropTypes.string,
  concepts: PropTypes.arrayOf(PropTypes.object),
  tech: PropTypes.string
};

Project.defaultProps = {
  details: {},
  title: "",
  description: "",
  concepts: [],
  tech: ""
};

export default Project;
