import React, { Component } from "react";
import { Link } from "react-router-dom";
// import './Register.css'
import axios from "axios";
import { updateUserInfo } from "../../ducks/reducer";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import logo from "../../assets/rancheritos_logo.png";

class Register extends Component {
  state = {
    email: "",
    name: "",
    password1: "",
    password2: ""
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  register = () => {
    if (this.state.password1 === this.state.password2) {
      const { name, email, password1: password } = this.state;
      axios
        .post("/auth/register", { name, email, password })
        .then(res => {
          this.props.updateUserInfo(res.data.user);
          Swal.fire({
            title: `Hola, ${res.data.user.name}! `,
            text: `Welcome to Rancheritos!`,
            width: 300,
            padding: '3em',
            background: 'url(https://ae01.alicdn.com/kf/HTB1VVnbqf5TBuNjSspcq6znGFXaH/rustic-Light-wood-texture-old-natural-table-top-Vintage-backgrounds-Vinyl-cloth-High-quality-Computer-print.jpg) center no-repeat',
            backdrop: `
              rgba(29,29,29,0.4)
            `
          })
          this.props.history.push("/dashboard");
        })
        .catch(err => {
          Swal.fire({
            text: `${err.response.data.message}`,
            width: 300,
            padding: '3em',
            background: 'url(https://ae01.alicdn.com/kf/HTB1VVnbqf5TBuNjSspcq6znGFXaH/rustic-Light-wood-texture-old-natural-table-top-Vintage-backgrounds-Vinyl-cloth-High-quality-Computer-print.jpg) center no-repeat',
            backdrop: `
              rgba(29,29,29,0.4)
            `
          });
        });
    } else {
      Swal.fire({
        text: `passwords don't match`,
        width: 300,
        padding: '3em',
        background: 'url(https://ae01.alicdn.com/kf/HTB1VVnbqf5TBuNjSspcq6znGFXaH/rustic-Light-wood-texture-old-natural-table-top-Vintage-backgrounds-Vinyl-cloth-High-quality-Computer-print.jpg) center no-repeat',
        backdrop: `
          rgba(29,29,29,0.4)
        `
    });
    }
  };

  render() {
    return (
      <div className="register">
          <div className='overlay'></div>
           <img src={logo} alt="logo" />
        <input
          className="input"
          value={this.state.email}
          onChange={e => this.handleChange("email", e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          className="input"
          value={this.state.name}
          onChange={e => this.handleChange("name", e.target.value)}
          placeholder="Name"
          type="text"
        />
        <input
          className="input"
          value={this.state.password1}
          onChange={e => this.handleChange("password1", e.target.value)}
          placeholder="Password"
          type="password"
        />
        <input
          className="input"
          value={this.state.password2}
          onChange={e => this.handleChange("password2", e.target.value)}
          placeholder="Retype password"
          type="password"
        />
        <button onClick={() => this.register()}>Register!</button>
        <Link to="/">
          <h4>Already have an account? Login here</h4>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}
const mapActionsToProps = {
  updateUserInfo
};

export default connect(mapStateToProps, mapActionsToProps)(Register);
