import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
function Welcome(props) {
  return (
    <div>
      <h2> Welcome {props.name} from {props.city}</h2>
      <App name="React JS" />
      <h3>End of Welcome</h3>
    </div>
  );
}
export default Welcome;
