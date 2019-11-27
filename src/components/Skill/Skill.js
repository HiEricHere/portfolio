import React, { useState } from "react";
import PropTypes from "prop-types";

const Skill = props => {
  const [visible, setVisible] = useState(false);
  const { url, name } = props;

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <figure
      className="container-skill"
      onMouseEnter={toggleVisible}
      onMouseLeave={toggleVisible}
    >
      <img className="skill-img" src={url} alt={name} />
      <figcaption className={visible ? null : "hide-caption"}>
        {name}
      </figcaption>
    </figure>
  );
};

Skill.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string
};

Skill.defaultProps = {
  url: "",
  name: ""
};

export default Skill;
