import React, { useEffect } from "react";
import "./TechPage.scss";
import SectionB from "../HomePage/SectionB/SectionB";
import SectionC from "../HomePage/SectionC/SectionC";
import img11 from "../HomePage/Carousel/carouselImages/img11.jpg";
import img12 from "../HomePage/Carousel/carouselImages/img12.jpg";
import img5 from "../HomePage/Carousel/carouselImages/img5.jpg";

const TechPage = (props) => {
  // const loremText =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const techpageTextBoxOne = () => {
    return (
      <div>
        <h1>Front</h1>
        <br />
        <h2>React / Redux</h2>
        <br />
        <p>
          React is a frontend view framework which enables the creation of
          single page applications. Rather than sending a new file every time a
          user clicks a link, React sends all files associated with the site at
          once, so page loads become instantaneous view changes, resulting in a
          super-fast user interface.
        </p>
        <br />
        <h2>Sassy CSS</h2>
        <br />
        <p>
          CSS is a stylesheet language which controls the look, feel and
          animations of a website. Sass introduces programmatic logic into your
          CSS, creating more compact and reusable code.
        </p>
        <br />
      </div>
    );
  };

  const techpageTextBoxTwo = () => {
    return (
      <div>
        <h1>Back</h1>
        <br />
        <h2>Node.js / express</h2>
        <br />
        <p>
          Node.js is a JavaScript runtime environment which enables you to write
          your backend code in JavaScript. Express is a middleware library for
          writing servers in the Node environment. Node.js offers the advantage
          of writing your entire application in one language.
        </p>
        <br />
        <h2>Mongoose</h2>
        <br />
        <p>
          Mongoose is a node.js library that allows you to perform create, read,
          update and delete operations on your MongoDB documents from your
          Node.js server.
        </p>
        <br />
      </div>
    );
  };

  const techpageTextBoxThree = () => {
    return (
      <div>
        <h1>Database & Deployment</h1>
        <br />
        <h2>MongoDB</h2>
        <br />
        <p>
          MongoDB is a NoSQL database that stores data in JSON format, making it
          a logical choice for JavaScript based applications.
        </p>
        <br />
        <h2>AWS / Heroku</h2>
        <br />
        <p>
          AWS provides a number of services, including Route 53 for domain
          management, S3 for cloud storage and Amplify for deploying your single
          page application to the cloud. Heroku is also a good choice for
          hosting remote servers and APIs.
        </p>
        <br />
      </div>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      className={
        props.darkMode
          ? `tech-page-dark-mode tech-page`
          : `tech-page-light-mode tech-page`
      }
    >
      <h1 className="tech-title">Tech</h1>
      <SectionC
        innerJSX={techpageTextBoxOne} // pass down the function and call it in sectionC
        darkMode={props.darkMode}
        img={img12}
      />
      <SectionB
        innerJSX={techpageTextBoxTwo}
        darkMode={props.darkMode}
        img={img5}
      />
      <SectionC
        innerJSX={techpageTextBoxThree}
        darkMode={props.darkMode}
        img={img11}
      />
    </div>
  );
};

export default TechPage;
