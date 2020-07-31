import React, { useState } from "react";
import "./ContactPage.scss";

const ContactPage = () => {
  // state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  // handleSubmit
  const handleSubmit = (e) => {
    console.log("SUBMITTED");
    // check all error messages are "" before submitting
    // else send error message to user
    // send post request
    e.preventDefault();
  };

  // name handler
  const firstNameHandler = (e) => {
    setFirstName(e.target.value, nameValidator(e));
  };

  // name handler
  const lastNameHandler = (e) => {
    setLastName(e.target.value, nameValidator(e));
  };

  const emailHandler = (e) => {
    setEmail(e.target.value, emailValidator(e));
  };

  const messageHandler = (e) => {
    setMessage(e.target.value, messageValidator(e));
  };

  // validate firstName
  // error message appears if: name has chars other than letters or length greater than 20 or it contains a space
  const nameValidator = (e) => {
    if (
      (e.target.value !== "" && /^[a-zA-Z]+$/.test(e.target.value) === false) ||
      e.target.value.length > 20 ||
      /␣/g.test(e.target.value)
    ) {
      setNameErrorMessage("Please enter a valid name");
    } else {
      setNameErrorMessage("");
    }
  };

  // email must contain at least one @ and one .
  const emailValidator = (e) => {
    if (
      e.target.value !== "" &&
      /[@][\.]/.test(e.target.value) === false &&
      /[\.]/.test(e.target.value) === false
    ) {
      setEmailErrorMessage("Please enter a valid email");
    } else {
      setEmailErrorMessage("");
    }
  };

  const messageValidator = (e) => {
    if (e.target.value.length < 10) {
      setMessageError("Message must be longer than 10 characters.");
    } else {
      setMessageError("");
    }
  };

  return (
    <div className="contact-page">
      <p>CONTACT ME PWEEEEASSSE X</p>
      <form onSubmit={() => handleSubmit()}>
        <input
          id="first-name-input"
          className="contact-input"
          value={firstName}
          onChange={(e) => firstNameHandler(e)}
        ></input>
        <input
          id="last-name-input"
          className="contact-input"
          value={lastName}
          onChange={(e) => lastNameHandler(e)}
        ></input>
        <input
          id="email-input"
          className="contact-input"
          value={email}
          onChange={(e) => emailHandler(e)}
        ></input>
        <textarea
          id="message-input"
          className="contact-textarea"
          defaultValue="your message"
          value={message}
          onChange={(e) => messageHandler(e)}
        ></textarea>
        <button type="submit">submit</button>
      </form>
      <p>{`firstName: ${firstName}`}</p>
      <p>{`lastName: ${lastName}`}</p>
      <p>{`email: ${email}`}</p>
      <p>{`message: ${message}`}</p>
      <p>NAME ERROR: {nameErrorMessage}</p>
      <p>EMAIL ERROR: {emailErrorMessage}</p>
      <p>MESSAGE ERROR: {messageError}</p>
    </div>
  );
};

export default ContactPage;
