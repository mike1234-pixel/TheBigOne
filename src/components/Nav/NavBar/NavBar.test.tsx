import React from "react";
import NavBar from "./NavBar";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

// after rendering from a test, use cleanup to remove what was just rendered in the previous test from the dom tree
afterEach(cleanup);

// MOCKS

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

it("has 'Cool Frontends' inner text", () => {
  const { getByTestId } = render(
    <NavBar darkModeButton={mockDarkModeButton} darkMode={mockDarkModeState} />
  );
  expect(getByTestId("NavBar")).toHaveTextContent("Cool Frontends");
});

// SNAPSHOT TEST

// press u in terminal to update failing snapshot if you have made intentional changes to the component file and it doesn't match the current snapshot

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <div
        data-testid="NavBar"
        className={mockDarkModeState ? `flex-container` : `flex-container-dark`}
      >
        <div className="org-logo">Cool Frontends</div>
        <div className="nav-items">
          {mockDarkModeButton ? (
            ""
          ) : (
            <div
              className={
                mockDarkModeState ? `button-item-dark` : `button-item-light`
              }
            >
              {mockDarkModeButton}
              {/*make this conditional on screen size */}
            </div>
          )}
          <div
            className={mockDarkModeState ? `item item-dark` : `item item-light`}
          >
            item
          </div>
          <div
            className={mockDarkModeState ? `item item-dark` : `item item-light`}
          >
            item
          </div>
          <div
            className={mockDarkModeState ? `item item-dark` : `item item-light`}
          >
            item
          </div>
          <div
            className={mockDarkModeState ? `item item-dark` : `item item-light`}
          >
            item
          </div>
          <div
            className={mockDarkModeState ? `item item-dark` : `item item-light`}
          >
            item
          </div>
        </div>
      </div>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
