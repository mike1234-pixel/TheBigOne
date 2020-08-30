import React, { useEffect } from "react";
import "./ApproachPage.scss";
import SectionB from "../HomePage/SectionB/SectionB";
import SectionC from "../HomePage/SectionC/SectionC";
import img20 from "../HomePage/Carousel/carouselImages/img20.jpg";
import img16 from "../HomePage/Carousel/carouselImages/img16.jpg";
import img22 from "../HomePage/Carousel/carouselImages/img22.jpg";

const Link3 = (props) => {
  // const loremText =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const approachpageTextBoxOne = () => {
    return (
      <div>
        <h1>Speed</h1>
        <br />
        <p>
          When you click an internal link on an old style website, a request for
          a new file is made, meaning it takes time to load. The modern approach
          is to create single page applications that load all resources for the
          website at once, making internal navigation instantaneous and
          resulting in a super fast user experience.
        </p>
      </div>
    );
  };

  const approachpageTextBoxTwo = () => {
    return (
      <div>
        <h1>Simplicity</h1>
        <br />
        <p>
          I create simple, easily navigable user interfaces. I aim to sit
          between form and function and build grid-based user interfaces that
          adapt to whatever shape and size of screen they are being viewed on;
          mobile, tablet or PC. Maintaining simplicity in design enables the
          website or application to be adaptable and maintainable for all screen
          types.
        </p>
      </div>
    );
  };

  const approachpageTextBoxThree = () => {
    return (
      <div>
        <h1>Maintainability</h1>
        <br />
        <p>
          Good design not only encapsulates how the website looks to the end
          user, but also extends to the code written behind the scenes. Simple,
          reusable and well thought out code is easier to maintain and make
          changes to. I write code in a modern declarative style, meaning that
          what I write is easy to read, reason about and adapt.
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
      <h1 className="about-title">Approach</h1>
      <SectionB
        innerJSX={approachpageTextBoxOne}
        darkMode={props.darkMode}
        img={img20}
      />
      <SectionC
        innerJSX={approachpageTextBoxTwo}
        darkMode={props.darkMode}
        img={img16}
      />
      <SectionB
        innerJSX={approachpageTextBoxThree}
        darkMode={props.darkMode}
        img={img22}
      />
    </div>
  );
};

export default Link3;
