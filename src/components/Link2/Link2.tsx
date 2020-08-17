import React from "react";
import "./Link2.scss";
import SectionB from "../HomePage/SectionB/SectionB";
import SectionC from "../HomePage/SectionC/SectionC";
import img11 from "../HomePage/Carousel/carouselImages/img11.jpg";
import img12 from "../HomePage/Carousel/carouselImages/img12.jpg";
import img5 from "../HomePage/Carousel/carouselImages/img5.jpg";

const Link2 = (props) => {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div
      className={
        props.darkMode
          ? `link2-page-dark-mode link2-page`
          : `link2-page-light-mode link2-page`
      }
    >
      <h1 className="link2-title">Link2</h1>
      <SectionC loremText={loremText} darkMode={props.darkMode} img={img12} />
      <SectionB loremText={loremText} darkMode={props.darkMode} img={img5} />
      <SectionC loremText={loremText} darkMode={props.darkMode} img={img11} />
    </div>
  );
};

export default Link2;
