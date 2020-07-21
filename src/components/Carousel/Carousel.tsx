import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Carousel.scss";

class Carousel extends Component<
  {},
  { carouselImage: number; appear: boolean }
> {
  constructor(props) {
    super(props);
    this.state = {
      carouselImage: 1,
      appear: true,
    };
    this.handleForward = this.handleForward.bind(this);
    this.handleBackward = this.handleBackward.bind(this);
  }

  componentDidMount() {
    setInterval(() => this.handleForward(), 5000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  // if carouselImage is less than 4, then increment, otherwise, set to 1

  handleForward() {
    this.state.carouselImage < 4
      ? this.setState((state) => ({
          carouselImage: state.carouselImage + 1,
        }))
      : this.setState(() => ({
          carouselImage: 1,
        }));
    console.log(this.state.carouselImage); // this works
  }

  // if carousel is greater than 1, then decrement, otherwise, set to 4

  handleBackward() {
    this.state.carouselImage > 1
      ? this.setState((state) => ({
          carouselImage: state.carouselImage - 1,
        }))
      : this.setState(() => ({
          carouselImage: 4,
        }));
    console.log(this.state.carouselImage); // this works
  }

  render() {
    return (
      <div>
        <div className="carousel-btn-container">
          <button
            className="carousel-btn carousel-btn-left"
            onClick={this.handleBackward}
          >{`<`}</button>
          <button
            className="carousel-btn carousel-btn-right"
            onClick={this.handleForward}
          >{`>`}</button>
        </div>
        <TransitionGroup className="img-container">
          <CSSTransition
            key={this.state.carouselImage}
            in={this.state.appear}
            appear={true}
            timeout={1000}
            classNames="fade"
          >
            <img
              className="carousel-img"
              src={require(`./carouselImages/img${this.state.carouselImage.toString()}.webp`)}
              alt="city scape"
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default Carousel;

// import React, { useState, useEffect } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import "./Carousel.scss";

// const Carousel = () => {
//   const [carouselImage, setCarouselImage] = useState(1);
//   const [appear] = useState(true);

//   const handleForward = () => {
//     carouselImage < 4
//       ? setCarouselImage(carouselImage + 1)
//       : setCarouselImage(1);
//   };

//   const handleBackward = () => {
//     carouselImage > 1
//       ? setCarouselImage(carouselImage - 1)
//       : setCarouselImage(4);
//   };

//   useEffect(() => {
//     setInterval(() => handleForward(), 5000);
//     return () => {
//       clearInterval();
//     };
//   }, []);

//   return (
//     <div>
//       <div className="carousel-btn-container">
//         <button
//           className="carousel-btn carousel-btn-left"
//           onClick={() => handleBackward()}
//         >{`<`}</button>
//         <button
//           className="carousel-btn carousel-btn-right"
//           onClick={() => handleForward()}
//         >{`>`}</button>
//       </div>
//       <TransitionGroup className="img-container">
//         <CSSTransition
//           key={carouselImage}
//           in={appear}
//           appear={true}
//           timeout={1000}
//           classNames="fade"
//         >
//           <img
//             className="carousel-img"
//             src={require(`./carouselImages/img${carouselImage.toString()}.webp`)}
//             alt="city scape"
//           />
//         </CSSTransition>
//       </TransitionGroup>
//     </div>
//   );
// };

// export default Carousel;

// state of Carousel is only used by Carousel component so remains in local state
// useEffect sets timer on mount, does nothing on update due to [] arg, clears timer on unmount as this function is returned from useEffect
