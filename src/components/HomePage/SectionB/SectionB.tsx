import React from "react";
import "./SectionB.scss";
import { useStore } from "react-redux";

const SectionB = (props) => {
  const store = useStore();
  const state = store.getState();

  return (
    <div
      className={
        state.darkMode
          ? `section-b grid-container-b grid-container-b-dark-mode`
          : `section-b grid-container-b grid-container-b-light-mode`
      }
    >
      <div
        className={
          state.darkMode
            ? `grid-item-b grid-item-b-dark-mode grid-item-text-box`
            : `grid-item-b grid-item-b-light-mode grid-item-text-box`
        }
      >
        <h2>Lorem Ipsum Delor</h2>
        <p>{props.loremText}</p>
      </div>
      <div
        className={
          state.darkMode
            ? `grid-item-b grid-item-b-dark-mode grid-item-image-box`
            : `grid-item-b grid-item-b-light-mode grid-item-image-box`
        }
      ></div>
    </div>
  );
};

export default SectionB;
