import React from "react";
import "./Footer.scss";
import {
  FaJs,
  FaFreeCodeCamp,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

const Footer = (props) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div
      className={props.darkMode ? `footer footer-dark` : `footer footer-light`}
    >
      <ul className="footer-div contact-links">
        <li>Phone</li>
        <li>Email</li>
        <li>Location</li>
      </ul>
      <div className="footer-div footer-div-2"></div>
      <div className="footer-div footer-div-3"></div>
      <div className="footer-div footer-div-4"></div>
      <ul className="footer-div site-links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Link2</a>
        </li>
        <li>
          <a href="#">Link3</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul className="footer-div profile-links">
        <li>
          <a href="#">
            Github
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="#">
            freeCodeCamp
            <FaFreeCodeCamp />
          </a>
        </li>
        <li>
          <a href="#">CodeWars</a>
        </li>
        <li>
          <a href="#">
            LinkedIn
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <div className="footer-footnote">
        Website Designed and Built by Michael Tandy, written in <FaJs />
        {` with `}
        <FaReact />
        {` and `}
        <FaNodeJs /> {year}
      </div>
    </div>
  );
};

export default Footer;
