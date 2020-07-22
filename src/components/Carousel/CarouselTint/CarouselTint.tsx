import React from "react";
import "./CarouselTint.scss";
import { useStore } from "react-redux";

const CarouselTint = () => {
  const store = useStore();
  const state = store.getState();

  return (
    <div
      className={
        state.darkMode ? `carousel-tint dark-tint` : `carousel-tint light-tint`
      }
    ></div>
  );
};

export default CarouselTint;

// CarouselTint is just a black background that sits behind the carousel
// need this because the carousel images are taken out of the normal flow due to the css transitions

// black background color adds black tint between transitions
