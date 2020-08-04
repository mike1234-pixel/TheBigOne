import React from "react";
import "./ToggleNavButton.scss";

const ToggleNavButton = (props) => {
  return (
    <div>
      <button
        className={
          props.darkMode ? `nav-toggle-btn-dark` : `nav-toggle-btn-light`
        }
      >
        {props.navVisible ? <p>HideNav</p> : <p>ShowNav</p>}
      </button>
    </div>
  );
};

export default ToggleNavButton;
