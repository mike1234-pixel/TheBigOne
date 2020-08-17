import React from "react";
import Carousel from "./Carousel/Carousel";
import SectionA from "./SectionA/SectionA";
import SectionB from "./SectionB/SectionB";
import SectionC from "./SectionC/SectionC";
import SectionD from "./SectionD/SectionD";
import PropTypes from "prop-types";
import img18 from "../HomePage/Carousel/carouselImages/img18.jpg";
import img19 from "../HomePage/Carousel/carouselImages/img19.jpg";

const HomePage = (props) => {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div>
      <Carousel data-testid="Carousel" darkMode={props.darkMode} />
      <SectionA darkMode={props.darkMode} />
      <SectionB loremText={loremText} darkMode={props.darkMode} img={img18} />
      <SectionC loremText={loremText} darkMode={props.darkMode} img={img19} />
      <SectionD darkMode={props.darkMode} />
    </div>
  );
};

export default HomePage;

HomePage.propTypes = {
  darkMode: PropTypes.bool,
};
