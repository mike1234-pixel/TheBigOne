import React from "react";
import "./SectionA.scss";
import PropTypes from "prop-types";

const SectionA = (props) => {
  return (
    <div className="section-a grid-container">
      <div className="grid-item grid-item-one">
        <h2 className="section-a-text">Fast</h2>
        <br />
        <p className="section-a-text">
          I create super-fast web applications using the most up-to-date
          development styles and frameworks, based primarily around the
          JavaScript programming language.
        </p>
      </div>

      <div className="grid-item grid-item-two">
        <h2 className="section-a-text">Simple</h2>
        <br />
        <p className="section-a-text">
          My designs are simple with attractive and responsive form and a focus
          on function. My user interfaces look good across all devices,
          including mobile, tablet and desktop.
        </p>
      </div>

      <div className="grid-item grid-item-three">
        <h2 className="section-a-text">Maintainable</h2>
        <br />
        <p className="section-a-text">
          I write clean, readable code in a functional, declarative style. It’s
          modular, descriptive and therefore easy to maintain, reuse and adapt.
        </p>
      </div>
    </div>
  );
};

export default SectionA;

SectionA.propTypes = {
  darkMode: PropTypes.bool,
};
