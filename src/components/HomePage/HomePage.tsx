import React from "react";
import Carousel from "./Carousel/Carousel";
import SectionA from "./SectionA/SectionA";
import SectionB from "./SectionB/SectionB";
import SectionC from "./SectionC/SectionC";
import SectionD from "./SectionD/SectionD";

const HomePage = (props) => {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div>
      <Carousel data-testid="Carousel" darkMode={props.darkMode} />
      <SectionA darkMode={props.darkMode} />
      <SectionB loremText={loremText} darkMode={props.darkMode} />
      <SectionC loremText={loremText} darkMode={props.darkMode} />
      <SectionD />
    </div>
  );
};

export default HomePage;
