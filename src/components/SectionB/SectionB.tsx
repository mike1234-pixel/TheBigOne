import React from "react";
import "./SectionB.scss";

const SectionB = (props) => {
  return (
    <div className="section-b grid-container-b">
      <div className="grid-item-b grid-item-text-box">{props.loremText}</div>
      <div className="grid-item-b grid-item-image-box"></div>
    </div>
  );
};

export default SectionB;
