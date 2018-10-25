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
      //outputArray.push(array + " ");
      let firstElement = newArray.shift();
      let secondElement = newArray.pop();
      console.log(newArray.length);
      //outputArray.push(firstElement + " " + secondElement + " " + newArray);
      console.log("mojPole", newArray);
      let test = newArray;

      newArray.map(sentece => {
        let random = Math.floor(Math.random() * newArray.length);
        middlValue = middlValue + " " + test[random]; //newArray[random];
        test.slice(random, 1);
        console.log("random", random);
      });
      outputArray.push(firstElement + middlValue + " " + secondElement);
      console.log("middle", middlValue);
    });
    console.log("outputArray", outputArray);
    return outputArray;
  };
  //te  dasd asd asdasdasdasst
  render() {
    console.log("prosp", this.props);
    return (
      <div className="textInput form-rounded">
        <textarea
          className="form-control"
          id="exampleTextarea"
          rows="3"
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
