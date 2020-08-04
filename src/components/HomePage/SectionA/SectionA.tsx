import React from "react";
import "./SectionA.scss";

const SectionA = (props) => {
  const loremText =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

  return (
    <div className="section-a grid-container">
      <div className="grid-item grid-item-one">
        <h2>item</h2>
        <p>{loremText}</p>
        <p>{props.darkMode ? `DARK MODE ON` : `DARK MODE OFF`}</p>
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

// hover over text to reveal a picture
