import React, { useEffect, useState } from "react";
import "./App.scss";
import { connect, useStore } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { toggleDarkMode } from "../actions/actionCreators";
import urlifyArticleTitle from "../functions/urlifyArticleTitle";
import Nav from "../components/Nav/Nav";
import HomePage from "../components/HomePage/HomePage";
import BlogPage from "../components/BlogPage/BlogPage";
import BlogPost from "../components/BlogPage/BlogPost/BlogPost";
import ContactPage from "../components/ContactPage/ContactPage";
import PageNotFound from "../components/PageNotFound/PageNotFound";

const App = (props) => {
  const store = useStore();
  const state = store.getState();
  // server data is accessed with props.data

  const [newRoutes, setNewRoutes] = useState("");

  // create new routes dynamically on app first loading... just one get request is made.
  useEffect(() => {
    const spinMeBlogRoutes = () => {
      let results = props.data.map((blogPost, index) => (
        <Route
          exact
          path={`/BlogPost/${urlifyArticleTitle(blogPost.title)}`}
          key={index}
          // pass data as props to BlogPost
          render={() => <BlogPost {...blogPost} />}
        />
      ));
      setNewRoutes(results);
    };

    spinMeBlogRoutes();
  }, [props.data]);

  return (
    <BrowserRouter className="App">
      <Nav toggleDarkMode={props.onClick} darkMode={state.darkMode} />
      <Route exact path="/" render={() => <HomePage {...state} />} />
      {/* render={(props) => <Greeting text="Hello, " {...props} */}
      <Route path="/Blog" render={() => <BlogPage {...state} {...props} />} />
      <Route path="/Contact" render={() => <ContactPage {...state} />} />
      {/* BlogPost routes - dynamically created by spinMeBlogRoutes() function based on data from backend */}
      {newRoutes}
      <Route path="*" component={PageNotFound} />
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
