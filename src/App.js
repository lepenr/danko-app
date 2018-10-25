import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import InputText from "./components/inputText";
import Image from "./components/image";
import Bubble from "./components/bubble";

class App extends Component {
  state = {
    value: 1,
    bubbleValue: "Ahoj ja som dusan? Ako sa mas Milos?",
    inputValue: ""
  };

  handleSubmit = value => {
    const NS = { ...this.state };
    NS.bubbleValue = value;
    this.setState(NS);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            //this.state.bubbleValue ? (
            <Bubble bubbleValue={this.state.bubbleValue} />
            // ) : (
            // ""
          }
          <Image />
          <p />
          <InputText
            newProp={this.handleSubmit}
            inputValue={this.state.inputValue}
            value={this.state.value}
          />
        </header>
      </div>
    );
  }
}

export default App;
