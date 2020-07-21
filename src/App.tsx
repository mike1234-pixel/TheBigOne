import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Carousel from "./components/Carousel/Carousel";
import CarouselTint from "./components/Carousel/CarouselTint/CarouselTint";
import SectionA from "./components/SectionA/SectionA";
import SectionB from "./components/SectionB/SectionB";
import SectionC from "./components/SectionC/SectionC";
import SectionD from "./components/SectionD/SectionD";

function App() {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className="App">
      <Nav />
      <Carousel />
      <CarouselTint />
      <SectionA />
      <SectionB loremText={loremText} />
      <SectionC loremText={loremText} />
      <SectionD />
    </div>
  );
}

export default App;
