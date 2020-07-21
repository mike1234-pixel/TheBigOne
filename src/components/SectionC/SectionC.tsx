import React from "react";
import "./SectionC.scss";

const SectionC = (props) => {
  return (
    <div className="section-c grid-container-c">
      <div className="grid-item-b grid-item-image-box-c"></div>
      <div className="grid-item-b grid-item-text-box-c">{props.loremText}</div>
    </div>
  );
};

export default SectionC;
