import React from "react";
import "./App.scss";
import Nav from "./Nav/Nav";
import HomePage from "./HomePage/HomePage";
import { connect } from "react-redux";

function App(props) {
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
      <HomePage darkMode={props.dakMode} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
});

export default connect(mapStateToProps)(App);
