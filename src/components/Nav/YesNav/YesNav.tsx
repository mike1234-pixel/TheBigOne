import React from "react";
import "./YesNav.scss";

const YesNav = (props) => {
  return (
    <div className={props.darkMode ? `flex-container` : `flex-container-dark`}>
      <div className="org-logo">Cool Frontends</div>
      {props.darkModeButton}
      <div className="nav-items">
        <div className="item">Item</div>
        <div className="item">item</div>
        <div className="item">item</div>
        <div className="item">item</div>
        <div className="item">item</div>
      </div>
    </div>
  );
};

export default YesNav;
