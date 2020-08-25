import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import axios from "axios";

// don't have to use cors if using axios?

let pageLoading: boolean = true;

const store: object = createStore(reducer);
// fetch("https://thebigone-api.herokuapp.com/blogEntries") // production

if (pageLoading) {
  ReactDOM.render(<LoadingSpinner />, document.getElementById("root"));
}

// fetch(
//   `https://cors-anywhere.herokuapp.com/thebigone-api.herokuapp.com/blogEntries`,
//   {
//     headers: { "Access-Control-Allow-Origin": "*" },
//   }
// )
fetch(`https://thebigone-api.herokuapp.com/blogEntries`, {
  headers: { "Access-Control-Allow-Origin": "*" },
})
  // axios
  //   .get("https://thebigone-api.herokuapp.com/blogEntries", {
  //     headers: { "Access-Control-Allow-Origin": "*" },
  //   })
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
    let data: object[] = result.data.blogEntries;
    pageLoading = false;
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

// if site takes forever to load cors-anywhere is the issue
// to fix:
// change to axios.get instead of fetch
// enable cors on the server and allow miketandy.com as an origin
// works fine for now so leaving it...
// get requests via normal route are instantaneous, cors-anywhere takes longer
