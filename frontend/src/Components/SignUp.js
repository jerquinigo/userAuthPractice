import React, { Component } from "react";
import axios from "axios";
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      password: "",
      profile_pic: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let { name, username, password, profile_pic } = this.state;
    // if (name && email && password) {
    axios.post("/api/users/signUp", {
      name: name,
      username: username,
      password: password
    });

    // }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signUpForm = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
            placeholder="username"
            name="username"
            value={this.state.username}
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
          <button type="submit">on Submit</button>
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
