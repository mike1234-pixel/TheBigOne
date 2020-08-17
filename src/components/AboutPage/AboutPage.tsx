import React, { useEffect } from "react";
import "./AboutPage.scss";
import SectionB from "../HomePage/SectionB/SectionB";
import SectionC from "../HomePage/SectionC/SectionC";
import img8 from "../HomePage/Carousel/carouselImages/img8.jpg";
import img10 from "../HomePage/Carousel/carouselImages/img10.jpg";
import img1 from "../HomePage/Carousel/carouselImages/img1.jpg";

const AboutPage = (props) => {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      className={
        props.darkMode
          ? `about-page-dark-mode about-page`
          : `about-page-light-mode about-page`
      }
    >
      <h1 className="about-title">About</h1>
      <SectionB loremText={loremText} darkMode={props.darkMode} img={img8} />
      <SectionC loremText={loremText} darkMode={props.darkMode} img={img1} />
      <SectionB loremText={loremText} darkMode={props.darkMode} img={img10} />
    </div>
  );
};

export default AboutPage;
