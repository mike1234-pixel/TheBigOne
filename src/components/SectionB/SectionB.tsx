import React from "react";
import "./SectionB.scss";

const SectionB = (props) => {
  return (
    <div className="section-b grid-container-b">
      <div className="grid-item-b grid-item-text-box">
        <h2>Lorem Ipsum Delor</h2>
        <p>{props.loremText}</p>
      </div>
      <div className="grid-item-b grid-item-image-box"></div>
    </div>
  );
};

export default SectionB;
