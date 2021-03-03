import React from "react";
import ReactDOM from "react-dom";

function Registration() {
  return (
    <div>
      <form>
        Name : <input type="text" name="name" />
        <br />
        Email : <input type="email" name="email" />
        <br />
        Address : <input type="text" name="address" />
        <br />
        Contact : <input type="number" name="contact" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Registration;
