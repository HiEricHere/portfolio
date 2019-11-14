import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Project from "../Project/Project";

const Portfolio = props => {
  const { projectList } = props;
  return (
    <>
      <h1>Portfolio</h1>
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

Portfolio.propTypes = {
  projectList: PropTypes.arrayOf(PropTypes.object)
};

Portfolio.defaultProps = {
  projectList: []
};

export default connect(mapStateToProps)(Portfolio);
