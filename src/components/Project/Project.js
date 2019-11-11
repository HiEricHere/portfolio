import React from "react";
import PropTypes from "prop-types";

const Project = props => {
  const { details } = props;
  const { title, description, concepts, tech } = details;
  return (
    <li>
      <h1>Title: {title}</h1>
      <p>Description: {description}</p>
      <p>Concept: {concepts}</p>
      <p>Tech: {tech}</p>
    </li>
  );
};

Project.propTypes = {
  details: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string,
  description: PropTypes.string,
  concepts: PropTypes.string,
  tech: PropTypes.string
};

Project.defaultProps = {
  details: {},
  title: "",
  description: "",
  concepts: "",
  tech: ""
};

export default Project;
