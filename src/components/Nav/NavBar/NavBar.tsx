import React from "react";
import "./NavBar.scss";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = (props) => {
  const noDarkModeButton = useMediaQuery({ query: "(max-width: 1202px)" }); // returns boolean 1530

  return (
    <div
      data-testid="NavBar"
      className={props.darkMode ? `flex-container` : `flex-container-dark`}
    >
      <div className="org-logo">
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          Michael Tandy Developer
        </Link>
      </div>
      <div className="nav-items">
        {noDarkModeButton ? (
          ""
        ) : (
          <div
            className={
              props.darkMode ? `button-item-dark` : `button-item-light`
            }
          >
            <button
              className={
                props.darkMode
                  ? `dark-mode-btn btn-dark-background`
                  : `dark-mode-btn btn-light-background`
              }
              onClick={props.toggleDarkMode}
            >
              {props.darkMode ? `Light Mode` : `Dark Mode`}
            </button>
          </div>
        )}
        <div className={props.darkMode ? `item item-dark` : `item item-light`}>
          <Link
            to="/about"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            About
          </Link>
        </div>
        <div className={props.darkMode ? `item item-dark` : `item item-light`}>
          <Link
            to="/tech"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Tech
          </Link>
        </div>
        <div className={props.darkMode ? `item item-dark` : `item item-light`}>
          <Link
            to="/approach"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Approach
          </Link>
        </div>
        <div className={props.darkMode ? `item item-dark` : `item item-light`}>
          <Link
            to="/blog"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Blog
          </Link>
        </div>
        <div className={props.darkMode ? `item item-dark` : `item item-light`}>
          <Link
            to="/contact"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// typecheck props

NavBar.propTypes = {
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func,
};
