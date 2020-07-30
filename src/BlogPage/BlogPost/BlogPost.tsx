import React, { useEffect } from "react";
import "./BlogPost.scss";
import { useStore } from "react-redux";

const BlogPost = (props) => {
  const store = useStore();
  const state = store.getState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={
        state.darkMode ? `dark-mode blog-page` : `light-mode blog-page`
      }
    >
      <h1>{props.location.state.title}</h1>
      <img
        src={props.location.state.img}
        alt={props.location.state.title}
        className="blog-post-img"
      />
      <p>{props.location.state.content}</p>
      <p>{props.location.state.date}</p>
    </div>
  );
};

export default BlogPost;
