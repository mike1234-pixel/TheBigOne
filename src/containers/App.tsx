import React, { useEffect, useState } from "react";
import "./App.scss";
import { connect, useStore } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { toggleDarkMode } from "../actions/actionCreators";
import urlifyArticleTitle from "../functions/urlifyArticleTitle";
import Nav from "../components/Nav/Nav";
import HomePage from "../components/HomePage/HomePage";
import AboutPage from "../components/AboutPage/AboutPage";
import TechPage from "../components/TechPage/TechPage";
import ApproachPage from "../components/ApproachPage/ApproachPage";
import BlogPage from "../components/BlogPage/BlogPage";
import BlogPost from "../components/BlogPage/BlogPost/BlogPost";
import ContactPage from "../components/ContactPage/ContactPage";
import Footer from "../components/Footer/Footer";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import PropTypes from "prop-types";

const App = (props) => {
  const store = useStore();
  const state = store.getState();
  // server data is accessed with props.data
  const [newRoutes, setNewRoutes] = useState<string>("");

  // create new routes dynamically on app first loading... just one get request is made.
  useEffect((): void => {
    const spinMeBlogRoutes = (): void => {
      let results = props.data.map((blogPost, index) => (
        <Route
          exact
          path={`/blog-post/${urlifyArticleTitle(blogPost.title)}`}
          key={index}
          // pass data as props to BlogPost
          render={() => <BlogPost {...blogPost} />}
        />
      ));
      setNewRoutes(results);
    };

    spinMeBlogRoutes();
  }, [props, props.data]);

  return (
    <BrowserRouter className="App">
      <Nav toggleDarkMode={props.onClick} darkMode={state.darkMode} />
      {/* <Route component={PageNotFound} /> */}
      <Route exact path="/" render={() => <HomePage {...state} />} />
      <Route path="/about" render={() => <AboutPage {...state} />} />
      <Route path="/tech" render={() => <TechPage {...state} />} />
      <Route path="/approach" render={() => <ApproachPage {...state} />} />
      <Route path="/blog" render={() => <BlogPage {...state} {...props} />} />
      <Route path="/contact" render={() => <ContactPage {...state} />} />
      {newRoutes}
      {/* <Route path="/404" render={() => <PageNotFound {...state} />} />
      <Redirect from="*" to="/404" /> */}
      <Footer darkMode={state.darkMode} />
    </BrowserRouter>
  );
};
// actions are dispatched in container component app.js
// onClick handler is passed as props to presentational components (app-->nav-->navbar)
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(toggleDarkMode());
    },
  };
};
const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
  urlTitle: state.urlTitle,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

// typecheck props

App.propTypes = {
  darkMode: PropTypes.bool,
  data: PropTypes.array,
  onClick: PropTypes.func,
};
