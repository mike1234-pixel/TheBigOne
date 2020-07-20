import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Carousel.scss";

const Carousel = () => {
  const [carouselImage, setCarouselImage] = useState(1);
  const [appear] = useState(true);

  const handleForward = () => {
    carouselImage < 4
      ? setCarouselImage(carouselImage + 1)
      : setCarouselImage(1);
  };

  const handleBackward = () => {
    carouselImage > 1
      ? setCarouselImage(carouselImage - 1)
      : setCarouselImage(4);
  };

  useEffect(() => {
    setInterval(() => handleForward(), 5000);
    return () => {
      clearInterval();
    }; // return function from useEffect to cleanup
  });

  return (
    <div>
      <div className="carousel-btn-container">
        <button
          className="carousel-btn carousel-btn-left"
          onClick={() => handleBackward()}
        >{`<`}</button>
        <button
          className="carousel-btn carousel-btn-right"
          onClick={() => handleForward()}
        >{`>`}</button>
      </div>
      <TransitionGroup className="img-container">
        <CSSTransition
          key={carouselImage}
          in={appear}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <img
            className="carousel-img"
            src={require(`./carouselImages/img${carouselImage.toString()}.webp`)}
            alt="city scape"
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Carousel;
