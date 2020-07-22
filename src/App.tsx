import React from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Carousel from "./components/Carousel/Carousel";
import CarouselTint from "./components/Carousel/CarouselTint/CarouselTint";
import SectionA from "./components/SectionA/SectionA";
import SectionB from "./components/SectionB/SectionB";
import SectionC from "./components/SectionC/SectionC";
import SectionD from "./components/SectionD/SectionD";
import { connect } from "react-redux";

function App(props) {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const darkModeButton = (
    <button
      className={
        props.darkMode
          ? `dark-mode-btn btn-dark-background`
          : `dark-mode-btn btn-light-background`
      }
      onClick={() => props.dispatch({ type: "TOGGLE_DARKMODE" })}
    >
      {props.darkMode ? `Light Mode` : `Dark Mode`}
    </button>
  );
  return (
    <div className="App">
      <Nav darkModeButton={darkModeButton} darkMode={props.darkMode} />
      <Carousel darkMode={props.darkMode} />
      <CarouselTint />
      <SectionA />
      <SectionB loremText={loremText} />
      <SectionC loremText={loremText} />
      <SectionD />
    </div>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
});

export default connect(mapStateToProps)(App);
