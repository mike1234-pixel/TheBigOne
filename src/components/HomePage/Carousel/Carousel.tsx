import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Carousel.scss";

// MEMORY LEAK HERE SOMEWHERE

class Carousel extends Component<
  { darkMode: boolean },
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

  componentDidMount(): void {
    setInterval(() => this.handleForward(), 5000);
  }

  componentWillUnmount(): void {
    clearInterval();
  }

  // if carouselImage is less than 4, then increment, otherwise, set to 1

  handleForward(): void {
    this.state.carouselImage < 4
      ? this.setState((state) => ({
          carouselImage: state.carouselImage + 1,
        }))
      : this.setState(() => ({
          carouselImage: 1,
        }));
  }

  // if carousel is greater than 1, then decrement, otherwise, set to 4

  handleBackward(): void {
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
        <div>
          <div className="carousel-btn-container">
            <button
              className={
                this.props.darkMode
                  ? `dark-background carousel-btn carousel-btn-left`
                  : `light-background carousel-btn carousel-btn-left`
              }
              onClick={this.handleBackward}
            >{`<`}</button>
            <button
              className={
                this.props.darkMode
                  ? `dark-background carousel-btn carousel-btn-right`
                  : `light-background carousel-btn carousel-btn-right`
              }
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
                src={require(`./carouselImages/hero${this.state.carouselImage.toString()}.jpg`)}
                alt="banner"
              />
            </CSSTransition>
            <div className="fg-video-1">
              <video className="fg-video-1__content" autoPlay muted loop>
                <source
                  // src={require("./carouselImages/video.mp4")}
                  src="https://coding-video.s3.eu-west-2.amazonaws.com/video.mp4"
                  type="video/mp4"
                />
                Your browser is not supported
              </video>
            </div>
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default Carousel;
