import React, { useEffect, useState } from "react";
import "./BlogPost.scss";
import { useStore } from "react-redux";
import axios from "axios";
import qs from "qs";
import { render } from "@testing-library/react";

const BlogPost = (props) => {
  const store = useStore();
  const state = store.getState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [submitMessage, setSubmitMessage] = useState("");

  // .replace(/</g, "&lt;").replace(/>/g, "&gt;"))

  const handleComment = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    let payload = {
      articleTitle: props.location.state.title,
      name: name,
      comment: comment,
    };

    axios
      .post("http://localhost:4000/blogComment", qs.stringify(payload))
      .then((err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
        }
      });

    setName("");
    setComment("");
    setSubmitMessage("thanks for your comment");
  };

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
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        ></input>

        <textarea
          placeholder="leave a comment"
          value={comment}
          onChange={(e) => handleComment(e)}
        ></textarea>
        <button type="submit">Submit</button>
        <p>{submitMessage}</p>
        <p>
          {/* LOOP THROUGH THE COMMENTS ARRAY AND RENDER THEM props.location.state.comment is an array*/}
          {props.location.state.comment
            ? props.location.state.comment.map((comment) => (
                <div className="user-comment">
                  <p>{comment.commentName}</p>
                  <p>{comment.commentContent}</p>
                </div>
              ))
            : ""}
        </p>
      </form>
    </div>
  );
};

export default BlogPost;
