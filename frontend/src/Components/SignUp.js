import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      profile_pic: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signUpForm = () => {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="profile_pic"
            name="profile_pic"
            value={this.state.profile_pic}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  };

  render() {
    console.log(this.state);
    return (
      <div>
        this is the signup form
        {this.signUpForm()}
      </div>
    );
  }
}

export default SignUp;
