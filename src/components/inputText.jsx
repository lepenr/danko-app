import React, { Component } from "react";
import "../App.css";

class InputText extends Component {
  //state = {  }
  //   state = {
  //     count: this.props.value,
  //     tags: ["tag1", "tag2", "tag3"]
  //   };
  //   incrementNumber = () => {
  //     console.log("value", this.state.count.value);
  //     this.setState({ count: document.getElementById("exampleTextarea") });
  //   };

  state = {
    value: ""
  };

  handleChange = e => {
    const NS = { ...this.state };
    NS.value = e.value;
    this.setState(NS);
    // pull in the state.value
    // add e.target.value to it
    // resave to state.value
  };

  randomizeText = e => {
    let str = this.state.value;
    let result = [];
    //result = str.match(/[^\.!\?]+[\.!\?]+/g);
    console.log("resul1", result);
    if (str.match(/[^\.!\?]+[\.!\?]+/g) == null) {
      result.push(str);
    } else {
      result = str.match(/[^\.!\?]+[\.!\?]+/g);
    }
    console.log("regex", result);
    let outputArray = [];
    result.map(x => {
      let temp = x.trim();
      let newArray = temp.split(" ");
      let array = newArray[0] + " " + newArray[newArray.length - 1];
      let middlValue = "";
      let firstElement = newArray.shift();
      let secondElement = newArray.pop();

      let test = newArray;
      let calculator = [];
      newArray.map(sentece => {
        let random = Math.floor(Math.random() * newArray.length);
        while (calculator.includes(random)) {
          //ak to tam je false
          random = Math.floor(Math.random() * newArray.length);
        }
        middlValue = middlValue + " " + newArray[random]; //newArray[random];
        calculator.push(random);
      });

      let string1 = "";
      for (let i = 0; i < newArray.length; i++) {
        string1 = string1 + " " + newArray[i];
        newArray.slice(2, 3);
      }

      outputArray.push(firstElement + middlValue + " " + secondElement);
    });
    return outputArray;
  };
  render() {
    console.log("prosp", this.props);
    return (
      <div className="textInput form-rounded">
        <textarea
          className="form-control"
          id="exampleTextarea"
          maxlength="200"
          rows="2"
          value={this.state.value}
          onChange={e => this.handleChange(e.target)}
        />
        <div>
          <button
            id="generate-button"
            type="button"
            className="btn btn-light btn-cust"
            onClick={e =>
              this.props.newProp(this.randomizeText(this.state.value))
            }
          >
            Generuj!
          </button>

          <button type="button" className="btn btn-light btn-cust">
            Generuj text!
          </button>
        </div>
      </div>
    );
  }
}

export default InputText;
