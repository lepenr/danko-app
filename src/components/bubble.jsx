import React, { Component } from "react";
import InputText from "./inputText";

import "../Bubble.css";

class Bubble extends Component {
  render() {
    return (
      <div className="bubble">
        <div className="speech-bubble">
          <div id="text-input" className="arrow bottom right" />
          {this.props.bubbleValue}
        </div>
      </div>
    );
  }
}

export default Bubble;
