import React, { useState } from "react";
import "./Nav.scss";
import YesNav from "./YesNav/YesNav";
import NoNav from "./NoNav/NoNav";
import ToggleNavButton from "./ToggleNavButton/ToggleNavButton";

const Nav = () => {
  const [navVisible, setNavVisible] = useState(true);

  return (
    <div className="triangle-container-container">
      {navVisible ? <YesNav /> : <NoNav />}
      <div onClick={() => setNavVisible(!navVisible)}>
        <ToggleNavButton navVisible={navVisible} />
      </div>
    </div>
  );
};

export default Nav;

// state of Nav is only used by Nav component so remains in local state
