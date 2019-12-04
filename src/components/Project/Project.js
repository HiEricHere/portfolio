import React from "react";
import PropTypes from "prop-types";

const Project = props => {
  const { details } = props;
  const {
    title,
    description,
    tools,
    splash,
    github,
    link,
    sampleImage
  } = details;
  return (
    <li>
      {splash.length ? <img src={splash} alt={title} /> : <h1>{title}</h1>}
      {link.length ? (
        <p>
          [ <a href={github}>GitHub</a> | <a href={link}>Link</a> ]
        </p>
      ) : (
        <p>
          [ <a href={github}>GitHub</a> ]
        </p>
      )}
      <p className="align-left">{description}</p>
      {sampleImage.length ? (
        <img className="sample-image" src={sampleImage} alt={title} />
      ) : null}
      <div className="tools-style align-left background-offwhite">
        <p className="dark-orange">Tools Used</p>
        <p className="green" style={{ margin: 0 }}>
          {tools}
        </p>
      </div>
    </li>
  );
};

Project.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  details: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  tools: PropTypes.string,
  sampleImage: PropTypes.string
};

Project.defaultProps = {
  details: {},
  title: "",
  description: "",
  tools: "",
  sampleImage: ""
};

export default Project;
