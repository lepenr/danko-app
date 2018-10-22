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
            onClick={e => this.props.newProp(this.state.value)}
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
