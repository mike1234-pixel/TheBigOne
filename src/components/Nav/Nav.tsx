import React, { useState } from "react";
import "./Nav.scss";
import YesNav from "./YesNav/YesNav";
import NoNav from "./NoNav/NoNav";
import ToggleNavButton from "./ToggleNavButton/ToggleNavButton";

const Nav = (props) => {
  const [navVisible, setNavVisible] = useState(true);

  return (
    <div className="triangle-container-container">
      {navVisible ? (
        <YesNav
          darkModeButton={props.darkModeButton}
          darkMode={props.darkMode}
        />
      ) : (
        <NoNav darkMode={props.darkMode} />
      )}
      <div onClick={() => setNavVisible(!navVisible)}>
        <ToggleNavButton darkMode={props.darkMode} navVisible={navVisible} />
      </div>
    </div>
  );
};

export default Nav;

// state of Nav is only used by Nav component so remains in local state
