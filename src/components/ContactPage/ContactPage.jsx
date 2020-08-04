import React, { useState } from "react";
import "./ContactPage.scss";
import axios from "axios";
import qs from "qs";

const ContactPage = (props) => {
  // state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const [emailMessage, setEmailMessage] = useState(
    "We will never share your email address with anyone, ever."
  );

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || email === "" || message === "") {
      setEmailMessage(
        "Please enter a first name, last name, email and message."
      );
      return;
    }
    let payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };

    axios
      .post("http://localhost:4000/contact", qs.stringify(payload))
      .then((err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
        }
      });

    setEmailMessage("Thanks for your message. We will be in touch shortly.");
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  // ONCHANGE HANDLERS
  const firstNameHandler = (e) => {
    setFirstName(e.target.value, firstNameValidator(e));
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value, lastNameValidator(e));
  };

  const emailHandler = (e) => {
    setEmail(e.target.value, emailValidator(e));
  };

  const messageHandler = (e) => {
    setMessage(e.target.value, messageValidator(e));
  };

  // VALIDATORS
  // error message appears if: name has chars other than letters or length greater than 20 or it contains a space
  const firstNameValidator = (e) => {
    if (
      (e.target.value !== "" && /^[a-zA-Z]+$/.test(e.target.value) === false) ||
      e.target.value.length > 20 ||
      /␣/g.test(e.target.value)
    ) {
      setFirstNameErrorMessage("Please enter a valid first name");
    } else {
      setFirstNameErrorMessage("");
    }
  };

  const lastNameValidator = (e) => {
    if (
      (e.target.value !== "" && /^[a-zA-Z]+$/.test(e.target.value) === false) ||
      e.target.value.length > 20 ||
      /␣/g.test(e.target.value)
    ) {
      setLastNameErrorMessage("Please enter a valid last name name");
    } else {
      setLastNameErrorMessage("");
    }
  };

  // email must contain at least one @ and one .
  const emailValidator = (e) => {
    if (
      e.target.value !== "" &&
      /[@]/.test(e.target.value) === false &&
      /[\.]/.test(e.target.value) === false
    ) {
      setEmailErrorMessage("Please enter a valid email");
    } else {
      setEmailErrorMessage("");
    }
  };

  // message must be 10 characters or longer
  const messageValidator = (e) => {
    if (e.target.value.length < 10) {
      setMessageError("Message must 10 characters or longer.");
    } else {
      setMessageError("");
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Me</h1>
      <form
        className={
          props.darkMode ? `dark-mode contact-form` : `light-mode contact-form`
        }
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          id="first-name-input"
          className="contact-input"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => firstNameHandler(e)}
        ></input>
        <p className="error-message">{firstNameErrorMessage}</p>
        <input
          id="last-name-input"
          className="contact-input"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => lastNameHandler(e)}
        ></input>
        <p className="error-message">{lastNameErrorMessage}</p>
        <input
          id="email-input"
          className="contact-input"
          value={email}
          placeholder="Email"
          onChange={(e) => emailHandler(e)}
        ></input>
        <p className="error-message">{emailErrorMessage}</p>
        <textarea
          id="message-input"
          className="contact-input"
          placeholder="Your Message"
          value={message}
          onChange={(e) => messageHandler(e)}
        ></textarea>
        <p className="error-message">{messageError}</p>
        <p>{emailMessage}</p>
        <button type="submit" className="contact-button">
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
