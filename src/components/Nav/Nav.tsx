import React, { useState } from "react";
import "./Nav.scss";
import NavBar from "./NavBar/NavBar";
import NoNav from "./NoNav/NoNav";
import ToggleNavButton from "./ToggleNavButton/ToggleNavButton";
import PropTypes from "prop-types";

const Nav = (props) => {
  const [navVisible, setNavVisible] = useState(true);

  return (
    <div className="triangle-container-container">
      {navVisible ? (
        <NavBar
          toggleDarkMode={props.toggleDarkMode}
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

// typecheck props

Nav.propTypes = {
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func,
};
