import React, { useState } from "react";
import "./Nav.scss";
import YesNav from "./YesNav/YesNav";
import NoNav from "./NoNav/NoNav";

const Nav = () => {
  const [navVisible, setNavVisible] = useState(true);

  return (
    <div className="triangle-container-container">
      {navVisible ? <YesNav /> : <NoNav />}
      <div onClick={() => setNavVisible(!navVisible)}>
        <div className="triangle-container">
          <svg height="50" width="50">
            <polygon points="25,6 10,40 40,40" className="triangle" />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Nav;
