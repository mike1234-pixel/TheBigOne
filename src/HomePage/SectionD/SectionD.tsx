import React from "react";
import "./SectionD.scss";

const SectionD = () => {
  return (
    <div className="section-d">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source
            src={require("../../backgroundImages/video.mp4")}
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
