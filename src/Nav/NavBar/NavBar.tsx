import React from "react";
import "./NavBar.scss";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const noDarkModeButton = useMediaQuery({ query: "(max-width: 1530px)" }); // returns boolean

  return (
    <div
      data-testid="NavBar"
      className={props.darkMode ? `flex-container` : `flex-container-dark`}
    >
      <div className="org-logo">
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          Cool Frontends
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
            {props.darkModeButton}
            {/*make this conditional on screen size */}
          </div>
        )}
        <div className={props.darkMode ? `item item-dark` : `item item-light`}>
          item
        </div>
        <div className={props.darkMode ? `item item-dark` : `item item-light`}>
          item
        </div>
        <div className={props.darkMode ? `item item-dark` : `item item-light`}>
          item
        </div>
        <div className={props.darkMode ? `item item-dark` : `item item-light`}>
          <Link
            to="/Blog"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Blog
          </Link>
        </div>
        <div className={props.darkMode ? `item item-dark` : `item item-light`}>
          item
        </div>
      </div>
    </div>
  );
};

export default NavBar;
