import React from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../ducks/reducer";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import logo from "../assets/rancheritos_logo.png";

class Header extends React.Component {
  state = {
    cartCount: ""
  };

  logout = () => {
    axios.delete("/auth/logout").then(res => {
      Swal.fire(res.data.message);
      //   props.history.push('/')
      this.props.updateUserInfo({
        email: "",
        name: "",
        user_id: ""
      });
    });
  };

  

  render() {
    return (
      <div>
        <div className="header-container">
          <div className="header">
            <img src={logo} alt="logo" />
          </div>
          <div className="top-right">
            <Link to="/cart">
              <h1></h1>
              <i className="fas fa-cart-plus fa-2x"></i>
            </Link>
            <Link to="/">
              <i className="fas fa-user fa-2x" onClick={this.logout}></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps, { updateUserInfo })(Header);
