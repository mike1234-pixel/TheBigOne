import React from "react";
import "./SectionA.scss";
import PropTypes from "prop-types";

const SectionA = (props) => {
  const loremText =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

  return (
    <div className="section-a grid-container">
      <div className="grid-item grid-item-one">
        <h2>item</h2>
        <p>{loremText}</p>
      </div>

      <div className="grid-item grid-item-two">
        <h2>item</h2>
        <p>{loremText}</p>
      </div>

      <div className="grid-item grid-item-three">
        <h2>item</h2>
        <p>{loremText}</p>
      </div>
    </div>
  );
};

export default SectionA;

SectionA.propTypes = {
  darkMode: PropTypes.bool,
};
