// ADD LOADING SPINNER
import React from "react";
import "./App.scss";
import Nav from "./Nav/Nav";
import HomePage from "./HomePage/HomePage";
import BlogPage from "./BlogPage/BlogPage";
import BlogPost from "./BlogPage/BlogPost/BlogPost";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

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
  console.log(props.urlTitle);
  return (
    <BrowserRouter className="App">
      <Nav darkModeButton={darkModeButton} darkMode={props.darkMode} />
      <Route exact path="/" component={HomePage} />
      <Route path="/Blog" component={BlogPage} />
      <Route path={`/BlogPost`} component={BlogPost} />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
  urlTitle: state.urlTitle,
});

export default connect(mapStateToProps)(App);
