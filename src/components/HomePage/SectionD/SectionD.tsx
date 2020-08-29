import React from "react";
import "./SectionD.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SectionD = (props) => {
  return (
    <div
      className={
        props.darkMode
          ? `section-d section-d-dark`
          : `section-d section-d-light`
      }
    >
      <Link
        to="/contact"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <p className="section-d-text">Got a project in mind? Get in touch...</p>
      </Link>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source
            // src={require("../Carousel/carouselImages/video.mp4")}
            src="https://coding-video.s3.eu-west-2.amazonaws.com/video.mp4"
            type="video/mp4"
          />
          Your browser is not supported
        </video>
      </div>
    </div>
  );
};
// video autoplay
// can i put a transparent div over the top of it and color the div?
export default SectionD;

SectionD.propTypes = {
  darkMode: PropTypes.bool,
};
