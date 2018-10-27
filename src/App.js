import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import InputText from "./components/inputText";
import Image from "./components/image";
import Bubble from "./components/bubble";
import Footer from "./components/footer";

class App extends Component {
  state = {
    value: 1,
    bubbleValue:
      "Ahoj ja som tvoj generátor náhodný, skomlím čo mi povieš ty. Tak to napíš dole a uvidím ja čo poviem ti!",
    inputValue: "",
    teststate: "Milos"
  };

  handleKeyPress(target) {
    if (target.charCode == 13) {
      alert("Enter clicked!!!");
    }
  }
  handleSubmit = value => {
    const NS = { ...this.state };
    NS.bubbleValue = value;
    this.setState(NS);
  };

  handleSubmitSecond = value2 => {
    const NS = { ...this.state };
    NS.bubbleValue = value2;
    this.setState(NS);
    console.log("pressed", NS.teststate);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {<Bubble bubbleValue={this.state.bubbleValue} />}
          <Image />
          <p />
          <InputText
            newProp={this.handleSubmit}
            inputValue={this.state.inputValue}
            value={this.state.value}
            newProp2={this.handleSubmitSecond}
          />
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
