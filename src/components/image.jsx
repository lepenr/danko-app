import React, { Component } from "react";
import logo from "../kpt-01-e.png";

import "../App.css";

class Image extends Component {
  //state = {  }
  render() {
    return <img src={logo} className="App-logo" alt="logo" />;
  }
}

export default Image;
