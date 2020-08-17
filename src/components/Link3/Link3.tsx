import React from "react";
import "./Link3.scss";
import SectionB from "../HomePage/SectionB/SectionB";
import SectionC from "../HomePage/SectionC/SectionC";
import img17 from "../HomePage/Carousel/carouselImages/img17.jpg";
import img16 from "../HomePage/Carousel/carouselImages/img16.jpg";
import img15 from "../HomePage/Carousel/carouselImages/img15.jpg";

const Link3 = (props) => {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div
      className={
        props.darkMode
          ? `about-page-dark-mode about-page`
          : `about-page-light-mode about-page`
      }
    >
      <h1 className="about-title">Link3</h1>
      <SectionB loremText={loremText} darkMode={props.darkMode} img={img17} />
      <SectionC loremText={loremText} darkMode={props.darkMode} img={img16} />
      <SectionB loremText={loremText} darkMode={props.darkMode} img={img15} />
    </div>
  );
};

export default Link3;
