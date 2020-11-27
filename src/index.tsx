import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'

import Routes from "./routes";
import store from './redux'
import Connect from './test/connect'

import "./styles.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes />
        <Connect />
    </BrowserRouter>
  </Provider>,
    document.getElementById("root"),
);
