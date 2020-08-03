// ADD LOADING SPINNER
import React, { useEffect, useState } from "react";
import "./App.scss";
import Nav from "./Nav/Nav";
import HomePage from "./HomePage/HomePage";
import BlogPage from "./BlogPage/BlogPage";
import BlogPost from "./BlogPage/BlogPost/BlogPost";
import ContactPage from "./ContactPage/ContactPage";
import PageNotFound from "./PageNotFound/PageNotFound";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  const [newRoutes, setNewRoutes] = useState("");

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

  // URLIFY BLOGTITLE
  const urlifyArticleTitle = (articleTitle) => {
    let urlifiedTitle = articleTitle
      .toLowerCase()
      .replace(/\.|\s|\//g, "-")
      .replace(/\(|\)|\?/g, "")
      .replace(/"-"$/, "");

    if (urlifiedTitle.charAt(urlifiedTitle.length - 1) === "-") {
      return urlifiedTitle.replace(/.$/, "");
    }
    return urlifiedTitle;
  };

  const spinMeBlogRoutes = () => {
    let data;

    fetch("http://localhost:4000/blogEntries")
      .then((res) => res.json())
      .then((result) => {
        data = result.data.blogEntries;
        // this result is an array of react elements
        let results = data.map((blogPost) => (
          <Route
            exact
            path={`/BlogPost/${urlifyArticleTitle(blogPost.title)}`}
            // pass data as props to BlogPost
            render={(routeProps) => <BlogPost {...routeProps} {...blogPost} />}
          />
        ));

        setNewRoutes(results);
      });
  };

  // create new routes dynamically on app first loading... just one get request is made.
  useEffect(() => {
    spinMeBlogRoutes();
  }, []);

  return (
    <BrowserRouter className="App">
      <Nav darkModeButton={darkModeButton} darkMode={props.darkMode} />
      <Route exact path="/" component={HomePage} />
      <Route path="/Blog" component={BlogPage} />

      <Route exact path={`/BlogPost/${props.urlTitle}`} component={BlogPost} />
      <Route path="/Contact" component={ContactPage} />

      {/* BlogPost routes - dynamically created by spinMeBlogRoutes() function based on data from backend */}
      {newRoutes}
      <Route path="*" component={PageNotFound} />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
  urlTitle: state.urlTitle,
});

export default connect(mapStateToProps)(App);
