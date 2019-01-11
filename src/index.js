import React, { Component } from "react";
import ReactDOM from "react-dom";
import Company from "./Company";
import Input from "./Employee";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      cName: "IBM",
      experience: "3 years"
    };
  }
  render() {
    return (
      <div className="App">
        <Company
          companyName={this.state.cName}
          totalExper={this.state.experience}
        />
        <hr />
        <Company
          companyName={this.state.cName}
          totalExper={this.state.experience}
        >
          <span>Job Profile</span>
          <span>Application Developer</span>
        </Company>
        <hr />
        <div>
          <Input
            type="text"
            id="name"
            label="Name"
            placeholder="Enter your name"
            value={this.state.name}
            onchange={newValue => this.setState({ name: newValue })}
            labelClass="form-label"
            inputClass="form-input"
            wrapClass="form-input-wrap"
          />
          <p>Hello {this.state.name}</p>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
