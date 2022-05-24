import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";
import App from "./App";


const container = document.getElementById("root");

// App render
ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  container
);

