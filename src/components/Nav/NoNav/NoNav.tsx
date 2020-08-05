import React from "react";
import "./NoNav.scss";
import PropTypes from "prop-types";

const NoNav = (props) => {
  return (
    <div
      className={props.darkMode ? "no-navbar-dark" : "no-navbar-light"}
    ></div>
  );
};

export default NoNav;

// typecheck props

NoNav.propTypes = {
  darkMode: PropTypes.bool,
};
