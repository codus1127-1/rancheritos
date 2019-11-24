import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { updateUserInfo } from "../ducks/reducer";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import logo from "../assets/rancheritos_logo.png";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  login = () => {
    const { email, password } = this.state;
    axios
      .post("/auth/login", { email, password })
      .then(res => {
        this.props.updateUserInfo(res.data.user);
        Swal.fire(res.data.message);
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        Swal.fire(err.response.data.message);
      });
  };

  render() {
    return (
      <div className="register">
        <div className='overlay'></div>
        <img src={logo} alt="logo"/>
        <div className="login">
          <input
            className="input"
            onChange={e => this.handleChange("email", e.target.value)}
            value={this.state.email}
            placeholder="Email"
            type="text"
          />
          <input
            className="input"
            onChange={e => this.handleChange("password", e.target.value)}
            value={this.state.password}
            placeholder="Password"
            type="password"
          />
          <button onClick={this.login}>Login!</button>
          <Link to="/register">
            <h4>Need an account? Register here!</h4>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, { updateUserInfo })(Login);
