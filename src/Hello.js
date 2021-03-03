import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  showDate() {
    return "03/03/2021";
  }
  render() {
    return (
      <div>
        <p>
          Hello {this.props.name} From Class Component {this.showDate()}
        </p>
      </div>
    );
  }
}
export default Hello;
