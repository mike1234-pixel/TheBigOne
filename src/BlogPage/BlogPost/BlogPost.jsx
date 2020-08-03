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

  const [nameIsRequired, setNameIsRequired] = useState("");
  const [messageIsRequired, setMessageIsRequired] = useState("");

  const handleComment = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);

    if (name === "" || comment === "") {
      setNameIsRequired("Name field is required.");
      setMessageIsRequired("Message field is required.");
    } else {
      setNameIsRequired("");
      setMessageIsRequired("");

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
        "Thanks for your comment. Your comment is visible below."
      );
    }
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
      <form className="blog-post-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="blog-post-name-input"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        ></input>

        <textarea
          className="blog-post-textarea"
          placeholder="leave a comment"
          value={comment}
          onChange={(e) => handleComment(e)}
        ></textarea>

        <button type="submit" className="blog-post-submit-button">
          Submit
        </button>
        <div className="blog-post-error-message-container">
          <p className="blog-post-error-message">{nameIsRequired}</p>
          <p className="blog-post-error-message">{messageIsRequired}</p>
          <p className="blog-post-error-message">{submitMessage}</p>
        </div>
        <p>
          {/* LOOP THROUGH THE COMMENTS ARRAY AND RENDER THEM props.location.state.comment is an array*/}
          {props.location.state.comment
            ? props.location.state.comment.map((comment) => (
                <div className="user-comment">
                  <p className="user-comment-name">{comment.commentName}</p>
                  <p className="user-comment-comment">
                    {comment.commentContent}
                  </p>
                  <p className="user-comment-date">
                    Posted: {comment.commentDateAndTime.commentDate}-
                    {comment.commentDateAndTime.commentMonth}-
                    {comment.commentDateAndTime.commentYear}@
                    {comment.commentDateAndTime.commentTime}
                  </p>
                </div>
              ))
            : ""}
        </p>
        {/* dummy comment */}

        {dummyName !== [] && dummyComment !== []
          ? dummyName.map((name, index) => {
              const date = new Date();

              let time;

              if (date.getMinutes() >= 0 && date.getMinutes() <= 9) {
                time = date.getHours() + ":0" + date.getMinutes();
              } else {
                time = date.getHours() + ":" + date.getMinutes();
              }

              const year = date.getFullYear();
              const month = date.getMonth();
              const day = date.getDate();
              return (
                <div className="user-comment">
                  <p className="user-comment-name">{name}</p>
                  <p className="user-comment-comment">{dummyComment[index]}</p>
                  <p className="user-comment-date">
                    Posted: {day}-{month + 1}-{year}@{time}
                  </p>
                </div>
              );
            })
          : ""}
      </form>
    </div>
  );
};

export default BlogPost;
