import React from "react";
import "./NoNav.scss";

const NoNav = (props) => {
  return (
    <div
      className={props.darkMode ? "no-navbar-dark" : "no-navbar-light"}
    ></div>
  );
};

export default NoNav;
