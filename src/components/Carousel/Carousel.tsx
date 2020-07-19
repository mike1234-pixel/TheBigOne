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
    setInterval(() => this.handleForward(), 3000);
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
        <button onClick={this.handleBackward}>{`<`}</button>
        <button onClick={this.handleForward}>{`>`}</button>
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

// carousel to display 4 images, change on click, then add a timer
