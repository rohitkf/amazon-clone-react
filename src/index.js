import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {StateProvider} from './components/StateProvider'
import reducer,{initialState} from './components/Reducer'

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
,  document.getElementById("root")
);
