import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

let pageLoading: boolean = true;

const store: object = createStore(reducer);
// fetch("https://thebigone-api.herokuapp.com/blogEntries") // production

if (pageLoading) {
  ReactDOM.render(<LoadingSpinner />, document.getElementById("root"));
}

fetch(
  `https://cors-anywhere.herokuapp.com/thebigone-api.herokuapp.com/blogEntries`,
  {
    headers: { "Access-Control-Allow-Origin": "*" },
  }
) // --------------------------------------------- development ------------------------------------------
  .then((res) => res.json())
  .then((result) => {
    let data: object[] = result.data.blogEntries;
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App data={data} />
        </Provider>
      </React.StrictMode>,
      document.getElementById("root")
    );
    pageLoading = false;
  });

serviceWorker.register();
