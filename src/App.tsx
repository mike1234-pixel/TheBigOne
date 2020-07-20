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
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <CarouselTint />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
    </div>
  );
}

export default App;
