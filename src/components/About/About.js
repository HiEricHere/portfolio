import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Project from "../Project/Project";

const About = props => {
  const { projectList } = props;
  return (
    <>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h1>Projects</h1>
      <ul>
        {projectList.map(project => {
          return <Project key={project.id} details={project} />;
        })}
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  return { projectList: state.projectReducer };
};

About.propTypes = {
  projectList: PropTypes.arrayOf(PropTypes.object)
};

About.defaultProps = {
  projectList: []
};

export default connect(mapStateToProps)(About);
