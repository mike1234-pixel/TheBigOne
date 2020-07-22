import React from "react";
import "./NavBar.scss";
import { useMediaQuery } from "react-responsive";

const NavBar = (props) => {
  const noDarkModeButton = useMediaQuery({ query: "(max-width: 1530px)" }); // returns boolean

  return (
    <div className={props.darkMode ? `flex-container` : `flex-container-dark`}>
      <div className="org-logo">Cool Frontends</div>
      <div className="nav-items">
        <div
          className={props.darkMode ? `button-item-dark` : `button-item-light`}
        >
          {noDarkModeButton ? "" : props.darkModeButton}{" "}
          {/*make this conditional on screen size */}
        </div>
        <div className="item">item</div>
        <div className="item">item</div>
        <div className="item">item</div>
        <div className="item">item</div>
        <div className="item">item</div>
      </div>
    </div>
  );
};

export default NavBar;
