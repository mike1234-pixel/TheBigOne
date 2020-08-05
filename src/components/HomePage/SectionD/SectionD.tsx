import React from "react";
import "./SectionD.scss";
import PropTypes from "prop-types";

const SectionD = (props) => {
  return (
    <div className="section-d">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source
            src={require("../../../staticResources/backgroundImages/video.mp4")}
            type="video/mp4"
          />
          Your browser is not supported
        </video>
      </div>
    </div>
  );
};
// video autoplay
export default SectionD;

SectionD.propTypes = {
  darkMode: PropTypes.bool,
};
