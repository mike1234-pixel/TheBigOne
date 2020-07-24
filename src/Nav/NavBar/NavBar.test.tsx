import React from "react";
import NavBar from "./NavBar";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// test that Carousel is...

it("has 'Cool Frontends' inner text", () => {
  let mockDarkModeState = true;

  const mockDarkModeButton = (
    <button
      className={
        mockDarkModeState
          ? `dark-mode-btn btn-dark-background`
          : `dark-mode-btn btn-light-background`
      }
      onClick={() =>
        mockDarkModeButton
          ? (mockDarkModeState = false)
          : (mockDarkModeState = true)
      }
    >
      {mockDarkModeState ? `Light Mode` : `Dark Mode`}
    </button>
  );

  const { getByTestId } = render(
    <NavBar darkModeButton={mockDarkModeButton} darkMode={mockDarkModeState} />
  );
  expect(getByTestId("NavBar")).toHaveTextContent("Cool Frontends");
});
