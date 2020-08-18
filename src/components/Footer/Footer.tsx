import React from "react";
import "./Footer.scss";
import {
  FaJs,
  FaFreeCodeCamp,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaStackOverflow,
} from "react-icons/fa";
import { GrCloudlinux } from "react-icons/gr";
import { Link } from "react-router-dom";

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
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/Link2"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Link2
          </Link>
        </li>
        <li>
          <Link
            to="/Link3"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Link3
          </Link>
        </li>
        <li>
          <Link
            to="/Blog"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Contact
          </Link>
        </li>
      </ul>
      <ul className="footer-div profile-links">
        <li>
          <a
            href="https://github.com/mike1234-pixel"
            className="footer-anchor"
            target="_blank"
          >
            Github
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/fcc64cf2f0b-2faa-4dac-bbae-48a1bc7f9538"
            className="footer-anchor"
            target="_blank"
          >
            freeCodeCamp
            <FaFreeCodeCamp />
          </a>
        </li>
        <li>
          <a
            href="https://www.codewars.com/users/Michael-tandy"
            className="footer-anchor"
            target="_blank"
          >
            CodeWars
            <GrCloudlinux />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mike-tandy/"
            className="footer-anchor"
            target="_blank"
          >
            LinkedIn
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/13808892/michael-tandy"
            className="footer-anchor"
            target="_blank"
          >
            Stack Overflow
            <FaStackOverflow />
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
