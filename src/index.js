import React from "react";
import ReactDOM from "react-dom";

import Welcome from "./Welcome.js";
import App from "./App.js";
import Login from "./Login.js";
import Registration from "./Registration.js";
import Hello from "./Hello.js";
ReactDOM.render(
  <div>
    <App name="React" />
    <Welcome name="Mohini" city="Indore" />
    <Hello name="Mohini" />
  </div>,
  document.getElementById("root")
);
/*  <Login />
    <Registration /> 
     <App name="React" />
    <Welcome name="Mohini" />
     <Login username="Mohini" />
    */
