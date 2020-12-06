import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
const initialState = {
  names: [],
  items: [],
};

const reducer = (store = initialState, action) => {
  if (action.type === "ADD_NAME") {
    return {
      ...store,
      names: [...store.names, action.payload],
    };
  }

  return store;
};

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
