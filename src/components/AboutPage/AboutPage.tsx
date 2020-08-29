import React, { useEffect } from "react";
import "./AboutPage.scss";
import SectionB from "../HomePage/SectionB/SectionB";
import SectionC from "../HomePage/SectionC/SectionC";
import img8 from "../HomePage/Carousel/carouselImages/img8.jpg";
import img10 from "../HomePage/Carousel/carouselImages/img10.jpg";
import img1 from "../HomePage/Carousel/carouselImages/img1.jpg";

const AboutPage = (props) => {
  // const loremText =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const aboutpageTextBoxOne = () => {
    return (
      <div>
        <h1>UI Design</h1>
        <br />
        <p>
          I have always enjoyed design; how shapes fit together to produce
          visual harmony. My interest in design is what started me coding – I
          wanted to design and create user interfaces. I started learning the
          CSS language, which controls the visual layout of pages. Before long I
          wanted to add behaviour and interactivity to my applications, so I
          learned the JavaScript programming language.{" "}
        </p>
      </div>
    );
  };

  const aboutpageTextBoxTwo = () => {
    return (
      <div>
        <h1>Code Design</h1>
        <br />
        <p>
          My interest in design developed from a user interface preoccupation to
          wanting to write well-designed code behind the scenes. Well-written
          code adheres to principles of good design, such as
          don’t-repeat-yourself, modularity, immutability, pure functions, and
          declarative programming.{" "}
        </p>
      </div>
    );
  };

  const aboutpageTextBoxThree = () => {
    return (
      <div>
        <h1>Harmonious Deployment</h1>
        <br />
        <p>
          When you write the code for different parts of an application, it’s
          like writing the sheet music for each musician in an orchestra.
          There's great satisfaction to be had when the different parts of your
          application play together harmoniously as you intended.
        </p>
      </div>
    );
  };

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
      <SectionB
        innerJSX={aboutpageTextBoxOne}
        darkMode={props.darkMode}
        img={img8}
      />
      <SectionC
        innerJSX={aboutpageTextBoxTwo}
        darkMode={props.darkMode}
        img={img1}
      />
      <SectionB
        innerJSX={aboutpageTextBoxThree}
        darkMode={props.darkMode}
        img={img10}
      />
    </div>
  );
};

export default AboutPage;
