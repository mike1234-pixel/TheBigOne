// ADD LOADING SPINNER
import React from "react";
import "./App.scss";
import Nav from "./Nav/Nav";
import HomePage from "./HomePage/HomePage";
import BlogPage from "./BlogPage/BlogPage";
import BlogPost from "./BlogPage/BlogPost/BlogPost";
import ContactPage from "./ContactPage/ContactPage";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  var urlExtension = "and-thats-the-way-we-do-this";

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

      <Route exact path={`/BlogPost`} component={BlogPost} />

      <Route path="/Contact" component={ContactPage} />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
  urlTitle: state.urlTitle,
});

export default connect(mapStateToProps)(App);
