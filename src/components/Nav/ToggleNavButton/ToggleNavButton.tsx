import React from "react";
import "./ToggleNavButton.scss";

const ToggleNavButton = (props) => {
  return (
    <div>
      <button className="nav-toggle-btn">
        {props.navVisible ? <p>HideNav</p> : <p>ShowNav</p>}
      </button>
    </div>
  );
};

export default ToggleNavButton;
