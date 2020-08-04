import React, { useState } from "react";
import "./Nav.scss";
import NavBar from "./NavBar/NavBar";
import NoNav from "./NoNav/NoNav";
import ToggleNavButton from "./ToggleNavButton/ToggleNavButton";
import { useStore } from "react-redux";

const Nav = (props) => {
  // state of Nav is only used by Nav component so remains in local state
  const [navVisible, setNavVisible] = useState(true);

  // getting darkMode state from redux store and passing as props to children: NavBar, NoNav and ToggleNavButton
  const store = useStore();
  const state = store.getState();

  return (
    <div className="triangle-container-container">
      {navVisible ? (
        <NavBar
          darkModeButton={props.darkModeButton}
          toggleDarkMode={props.toggleDarkMode}
          darkMode={state.darkMode}
        />
      ) : (
        <NoNav darkMode={state.darkMode} />
      )}
      <div onClick={() => setNavVisible(!navVisible)}>
        <ToggleNavButton darkMode={props.darkMode} navVisible={navVisible} />
      </div>
    </div>
  );
};

export default Nav;
