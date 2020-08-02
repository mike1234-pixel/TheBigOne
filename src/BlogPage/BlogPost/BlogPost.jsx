import React, { useEffect, useState } from "react";
import "./BlogPost.scss";
import { useStore } from "react-redux";
import axios from "axios";
import qs from "qs";
const Filter = require("bad-words");

const BlogPost = (props) => {
  const store = useStore();
  const state = store.getState();

  // profanity filter
  const filter = new Filter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [dummyName, setDummyName] = useState([]);
  const [dummyComment, setDummyComment] = useState([]);

  const [submitMessage, setSubmitMessage] = useState("");

  const handleComment = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    let payload = {
      articleTitle: props.location.state.title,
      name: filter.clean(name),
      comment: filter.clean(comment),
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

    // these work, don't use .push in react
    setDummyName([...dummyName, filter.clean(name)]);
    setDummyComment([...dummyComment, filter.clean(comment)]);

    setName("");
    setComment("");
    setSubmitMessage(
      "Thanks for your comment. Your comment will be visible shortly."
    );
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
        {/* dummy comment */}
        {dummyName !== [] && dummyComment !== []
          ? dummyName.map((name, index) => {
              return (
                <div className="user-comment">
                  <p>{name}</p>
                  <p>{dummyComment[index]}</p>
                </div>
              );
            })
          : ""}
      </form>
    </div>
  );
};

export default BlogPost;
