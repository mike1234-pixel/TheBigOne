import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

// set initialState of redux store here
const initialState = {
  darkMode: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_DARKMODE":
      return {
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
