import React, { useState, useEffect } from "react";
import "./ContactPage.scss";
import axios from "axios";
import qs from "qs";
import PropTypes from "prop-types";
import Recaptcha from "react-recaptcha";

const ContactPage = (props) => {
  // state
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState<string>(
    ""
  );
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState<string>("");
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const [emailMessage, setEmailMessage] = useState<string>(
    "Your email will not be stored in a database or shared with anyone."
  );

  const [isVerfified, setIsVerified] = useState<boolean>(false);

  // payload interface [TS]
  interface contactFormMessagePayload {
    firstName: String;
    lastName: String;
    email: String;
    message: String;
  }

  // handleSubmit
  const handleSubmit = (e): void => {
    e.preventDefault();

    if (isVerfified === false) {
      alert("Please confirm you are human");
    }
    // fields should not be blank && error messages should be blank
    else if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      message === "" ||
      firstNameErrorMessage !== "" ||
      lastNameErrorMessage !== "" ||
      emailErrorMessage !== "" ||
      messageError !== ""
    ) {
      setEmailMessage(
        "Please enter a first name, last name, email and message."
      );
      return;
    }
    let payload: contactFormMessagePayload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };

    // axios
    //   // .post("http://localhost:4000/contact", qs.stringify(payload))
    //   .post(
    //     "https://personal-backend.herokuapp.com/",
    //     qs.stringify(payload)
    //   )
    //   // .post(
    //   //   `https://cors-anywhere.herokuapp.com/thebigone-api.herokuapp.com/contact`,
    //   //   {
    //   //     headers: { "Access-Control-Allow-Origin": "*" },
    //   //   },
    //   //   qs.stringify(payload)
    //   // )
    //   .then((err) => {
    //     if (err) {
    //       console.log(err);
    //     }
    //   });

    setEmailMessage("Thanks for your message. I will be in touch shortly.");
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  // ONCHANGE HANDLERS
  const firstNameHandler = (e): void => {
    setFirstName(e.target.value);
    firstNameValidator(e);
  };

  const lastNameHandler = (e): void => {
    setLastName(e.target.value);
    lastNameValidator(e);
  };

  const emailHandler = (e): void => {
    setEmail(e.target.value);
    emailValidator(e);
  };

  const messageHandler = (e): void => {
    setMessage(e.target.value);
    messageValidator(e);
  };

  // VALIDATORS
  // error message appears if: name has chars other than letters or length greater than 20 or it contains a space
  const nameValidator = (name: string): boolean => {
    if (
      (name !== "" && /^[a-zA-Z]+$/.test(name) === false) ||
      name.length > 20 ||
      /␣/g.test(name)
    ) {
      return true;
    }
    return false;
  };

  const firstNameValidator = (e): void => {
    if (nameValidator(e.target.value)) {
      setFirstNameErrorMessage("Please enter a valid first name");
    } else {
      setFirstNameErrorMessage("");
    }
  };

  const lastNameValidator = (e): void => {
    if (nameValidator(e.target.value)) {
      setLastNameErrorMessage("Please enter a valid last name name");
    } else {
      setLastNameErrorMessage("");
    }
  };

  // email must contain at least one @ and one .
  const emailValidator = (e): void => {
    if (e.target.value !== "" && /[@]/.test(e.target.value) === false) {
      setEmailErrorMessage("Please enter a valid email");
    } else {
      setEmailErrorMessage("");
    }
  };

  // message must be 10 characters or longer
  const messageValidator = (e): void => {
    if (e.target.value.length < 10) {
      setMessageError("Message must 10 characters or longer.");
    } else {
      setMessageError("");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const recaptchaLoaded = () => {
    console.log("recaptcha loaded");
  };

  const verifyCallback = (response) => {
    if (response) {
      setIsVerified(true);
    }
  };

  return (
    <div
      className={
        props.darkMode
          ? `contact-page-dark-mode contact-page`
          : `contact-page-light-mode contact-page`
      }
    >
      <h1 className="contact-title">Contact Me</h1>
      <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          id="first-name-input"
          className={
            props.darkMode
              ? `contact-input-dark-mode contact-input`
              : `contact-input-light-mode contact-input`
          }
          value={firstName}
          placeholder="First Name"
          onChange={(e) => firstNameHandler(e)}
        ></input>
        <p className="error-message">{firstNameErrorMessage}</p>
        <input
          id="last-name-input"
          className={
            props.darkMode
              ? `contact-input-dark-mode contact-input`
              : `contact-input-light-mode contact-input`
          }
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => lastNameHandler(e)}
        ></input>
        <p className="error-message">{lastNameErrorMessage}</p>
        <input
          id="email-input"
          className={
            props.darkMode
              ? `contact-input-dark-mode contact-input`
              : `contact-input-light-mode contact-input`
          }
          value={email}
          placeholder="Email"
          onChange={(e) => emailHandler(e)}
        ></input>
        <p className="error-message">{emailErrorMessage}</p>
        <textarea
          id="message-input"
          className={
            props.darkMode
              ? `contact-textarea-dark-mode contact-textarea`
              : `contact-textarea-light-mode contact-textarea`
          }
          placeholder="Your Message"
          value={message}
          onChange={(e) => messageHandler(e)}
        ></textarea>
        <p className="error-message">{messageError}</p>
        <p>{emailMessage}</p>
        <button type="submit" className="contact-button">
          submit
        </button>
        <Recaptcha
          sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY}
          render="explicit"
          onloadCallback={() => recaptchaLoaded()}
          verifyCallback={verifyCallback}
        />
        {/* onChange function in ReCAPTCHA is called when user successfully completes the captcha*/}
      </form>
    </div>
  );
};

export default ContactPage;

ContactPage.propTypes = {
  darkMode: PropTypes.bool,
};
