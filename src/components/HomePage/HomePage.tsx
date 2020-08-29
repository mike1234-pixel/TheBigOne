import React, { useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import SectionA from "./SectionA/SectionA";
import SectionB from "./SectionB/SectionB";
import SectionC from "./SectionC/SectionC";
import SectionD from "./SectionD/SectionD";
import PropTypes from "prop-types";
import img18 from "../HomePage/Carousel/carouselImages/img18.jpg";
import img19 from "../HomePage/Carousel/carouselImages/img19.jpg";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  // const loremText =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const homepageTextBoxOne = () => {
    return (
      <Link to="/about" style={{ color: "inherit", textDecoration: "inherit" }}>
        <div>
          <h1>About</h1>
          <br />
          <p>
            I am a web developer from Sheffield, UK. I like to create, build,
            plug and play, break down problems and find solutions. Good design
            is important to me and I seek to implement this in the user
            interfaces I create and the code I write behind the scenes.
          </p>
        </div>
      </Link>
    );
  };

  const homepageTextBoxTwo = () => {
    return (
      <Link to="/tech" style={{ color: "inherit", textDecoration: "inherit" }}>
        <div>
          <h1>Tech</h1>
          <br />
          <p>
            I work with technologies across the full stack, mainly in the
            JavaScript programming language. I can build and deploy client-side
            or server-side rendered applications. My toolbox includes Sass,
            React, Node.js with Express, Mongoose, MongoDB, AWS and Heroku.
          </p>
        </div>
      </Link>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Carousel data-testid="Carousel" darkMode={props.darkMode} />
      <SectionA darkMode={props.darkMode} />
      <SectionB
        innerJSX={homepageTextBoxOne}
        darkMode={props.darkMode}
        img={img18}
      />
      <SectionC
        innerJSX={homepageTextBoxTwo}
        darkMode={props.darkMode}
        img={img19}
      />
      <SectionD darkMode={props.darkMode} />
    </div>
  );
};

export default HomePage;

HomePage.propTypes = {
  darkMode: PropTypes.bool,
};
