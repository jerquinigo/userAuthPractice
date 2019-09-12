import React, { Component } from "react";
import SignUp from "./SignUp.js";
import Login from "./Login.js";

class MainForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        MainForm
        <SignUp />
      </div>
    );
  }
}

export default MainForm;
