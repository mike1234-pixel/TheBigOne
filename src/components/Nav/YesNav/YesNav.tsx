import React from "react";
import "./YesNav.scss";

const YesNav = (props) => {
  return (
    <div className={props.darkMode ? `flex-container` : `flex-container-dark`}>
      <div className="org-logo">Cool Frontends</div>
      <div className="nav-items">
        <div
          className={
            props.darkMode ? `button-item-dark item` : `button-item-light item`
          }
        >
          {props.darkModeButton}
        </div>
        <div className="item">item</div>
        <div className="item">item</div>
        <div className="item">item</div>
        <div className="item">item</div>
      </div>
    </div>
  );
};

export default YesNav;
