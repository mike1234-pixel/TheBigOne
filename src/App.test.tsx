import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "./containers/App";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// testing a connected component

it("renders without crashing", () => {
  const store = mockStore({ darkMode: true }); // Instead of {}, you can give your initial store
  shallow(
    <Provider store={store}>
      {/*Provides the store to your App*/}
      <App />
    </Provider>
  );
});

// when testing you need to create mocks of the dependencies of the component you are testing.
// in this case a mock of the initial redux store is passed as a store to the <App/> in the test
