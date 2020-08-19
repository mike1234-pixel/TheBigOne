import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

const store: object = createStore(reducer);
fetch("https://thebigone-api.herokuapp.com/blogEntries") // production
  // fetch(
  //   `https://cors-anywhere.herokuapp.com/thebigone-api.herokuapp.com/blogEntries`,
  //   {
  //     headers: { "Access-Control-Allow-Origin": "*" },
  //   }
  // ) // --------------------------------------------- development ------------------------------------------
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
  });

serviceWorker.register();
