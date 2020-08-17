import React from "react";
import "./PageNotFound.scss";

const PageNotFound = (props) => {
  console.log("HEEEELLELLECLEV" + props.darkMode);
  return (
    <div
      className={
        props.darkMode
          ? `page-not-found-dark-mode page-not-found`
          : `page-not-found-light-mode page-not-found`
      }
    >
      <h1 className="title-404">404</h1>
      <p className="text-404">PAGE NOT FOUND</p>
    </div>
  );
};

export default PageNotFound;
