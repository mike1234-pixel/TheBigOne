import React from "react";
import "./SectionB.scss";
import PropTypes from "prop-types";

const SectionB = (props) => {
  return (
    <div
      className={
        props.darkMode
          ? `section-b grid-container-b grid-container-b-dark-mode`
          : `section-b grid-container-b grid-container-b-light-mode`
      }
    >
      <div
        className={
          props.darkMode
            ? `grid-item-b grid-item-b-dark-mode grid-item-b-text-box`
            : `grid-item-b grid-item-b-light-mode grid-item-b-text-box`
        }
      >
        {props.innerJSX()}
      </div>
      <div
        className={
          props.darkMode
            ? `grid-item-b grid-item-b-dark-mode grid-item-b-image-box`
            : `grid-item-b grid-item-b-light-mode grid-item-b-image-box`
        }
      >
        <img className="grid-item-b-img" src={props.img} alt={props.imgs}></img>
      </div>
    </div>
  );
};

export default SectionB;

SectionB.propTypes = {
  innerJSX: PropTypes.func,
  darkMode: PropTypes.bool,
  img: PropTypes.string,
};
