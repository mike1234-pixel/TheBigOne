import React, { useState } from "react";
import "./ContactPage.scss";

const ContactPage = () => {
  // state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  // handleSubmit
  const handleSubmit = (e) => {
    console.log("SUBMITTED");
    // send post request
    e.preventDefault();
  };

  // name handler
  const nameHandler = (e) => {
    setFirstName(e.target.value, validator(e));
  };

  // validate firstName
  const validator = (e) => {
    if (firstName !== "" && e.target.value.includes("1")) {
      setErrorMessage("Please enter a valid first Name");
    } else {
      setErrorMessage("");
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
          onChange={(e) => nameHandler(e)}
        ></input>
        <input
          id="last-name-input"
          className="contact-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          id="email-input"
          className="contact-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <textarea
          id="message-input"
          className="contact-textarea"
          defaultValue="your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">submit</button>
      </form>
      <p>{`firstName: ${firstName}`}</p>
      <p>{`lastName: ${lastName}`}</p>
      <p>{`email: ${email}`}</p>
      <p>{`message: ${message}`}</p>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ContactPage;
