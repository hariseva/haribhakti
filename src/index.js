import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routings from "./Routings";
import { Provider } from "react-redux";
import store from "./store";

 ReactDOM.render(<Provider store={store}>
  
    <Routings />
 </Provider>,document.getElementById('root')
);

