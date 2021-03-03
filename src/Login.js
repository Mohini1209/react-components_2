import React from "react";
import ReactDOM from "react-dom";

function Login(props) {
  return (
    <div>
      <form>
        Username :{props.username} <input type="text" name="username" />
        <br />
        Password :{props.password} <input type="password" name="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
export default Login;
