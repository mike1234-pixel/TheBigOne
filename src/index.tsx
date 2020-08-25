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

let pageLoading: boolean = true;

const store: object = createStore(reducer);

if (pageLoading) {
  ReactDOM.render(<LoadingSpinner />, document.getElementById("root"));
}
axios.get(`https://thebigone-api.herokuapp.com/blogEntries`).then((result) => {
  console.log(result);
  let data: object[] = result.data.data.blogEntries;
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

// fetch(
//   `https://cors-anywhere.herokuapp.com/thebigone-api.herokuapp.com/blogEntries`,
//   {
//     headers: { "Access-Control-Allow-Origin": "*" },
//   }
// ) //// --------------------DEV
// fetch(`https://thebigone-api.herokuapp.com/blogEntries`, {
//   headers: { "Access-Control-Allow-Origin": "*" },
// }) //// ---------------PROD
// .then((res) => res.json())
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// fetch("https://thebigone-api.herokuapp.com/blogEntries") // production
