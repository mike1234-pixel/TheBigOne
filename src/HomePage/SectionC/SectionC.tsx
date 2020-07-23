import React from "react";
import "./SectionC.scss";
import { useStore } from "react-redux";

const SectionC = (props) => {
  const store = useStore();
  const state = store.getState();

  return (
    <div
      className={
        state.darkMode
          ? `section-c grid-container-c grid-container-c-dark-mode`
          : `section-c grid-container-c grid-container-c-light-mode`
      }
    >
      <div
        className={
          state.darkMode
            ? `grid-item-c grid-item-c-dark-mode grid-item-image-box`
            : `grid-item-c grid-item-c-light-mode grid-item-image-box`
        }
      ></div>
      <div
        className={
          state.darkMode
            ? `grid-item-c grid-item-c-dark-mode grid-item-text-box`
            : `grid-item-c grid-item-c-light-mode grid-item-text-box`
        }
      >
        <h2>Lorem Ipsum Delor</h2>
        <p>{props.loremText}</p>
      </div>
    </div>
  );
};

export default SectionC;
