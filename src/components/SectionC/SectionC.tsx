import React from "react";
import "./SectionC.scss";

const SectionC = (props) => {
  return (
    <div className="section-c grid-container-c">
      <div className="grid-item-b grid-item-image-box-c"></div>
      <div className="grid-item-b grid-item-text-box-c">
        <h2>Lorem Ipsum Delor</h2>
        <p>{props.loremText}</p>
      </div>
    </div>
  );
};

export default SectionC;
