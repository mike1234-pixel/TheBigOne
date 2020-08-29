import React from "react";
import "./SectionC.scss";
import PropTypes from "prop-types";

const SectionC = (props) => {
  return (
    <div
      className={
        props.darkMode
          ? `section-c grid-container-c grid-container-c-dark-mode`
          : `section-c grid-container-c grid-container-c-light-mode`
      }
    >
      <div
        className={
          props.darkMode
            ? `grid-item-c grid-item-c-dark-mode grid-item-c-image-box`
            : `grid-item-c grid-item-c-light-mode grid-item-c-image-box`
        }
      >
        <img className="grid-item-c-img" src={props.img} alt={props.img}></img>
      </div>
      <div
        className={
          props.darkMode
            ? `grid-item-c grid-item-c-dark-mode grid-item-c-text-box`
            : `grid-item-c grid-item-c-light-mode grid-item-c-text-box`
        }
      >
        {props.innerJSX()}
      </div>
    </div>
  );
};

export default SectionC;

SectionC.propTypes = {
  innerJSX: PropTypes.func,
  darkMode: PropTypes.bool,
  img: PropTypes.string,
};
