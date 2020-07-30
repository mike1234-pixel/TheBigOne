import React from "react";
import "./BlogPost.scss";

const BlogPost = (props) => {
  return (
    <div>
      <h1>{props.location.state.title}</h1>
      <p>{props.location.state.content}</p>
      <p>{props.location.state.date}</p>
    </div>
  );
};

export default BlogPost;
