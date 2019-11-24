import React from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../ducks/reducer";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import logo from "../assets/rancheritos_logo.png";

class Header extends React.Component {
  state = {
    cartCount: 0,
    toggle: false
  };
  // componentDidUpdate = (prevProps, prevState)=> {
  //   if (prevProps.data !== this.props.data)
  //   this.setState({
  //     cartCount: this.props.data
  //   })
  // }

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

  cartCount = () => {
    axios.get("/cart").then(res => {
      this.setState({
        cartCount: res.data.length
      });
    });
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      // <div>
        <div className="header-container">
          {this.state.toggle ? (
            <Link to="/">
           <div onClick={this.logout} className="logout">logout</div>
            </Link>
          ) : null}
          <div className="header">
            <img src={logo} alt="logo" />
          </div>
          <div className="top-right">
            <Link to="/cart">
              <h1>{this.state.cartCount}</h1>
              <i className="fas fa-cart-plus fa-2x"></i>
            </Link>
              <i className="fas fa-user fa-2x" onClick={()=> this.toggle()}></i>
          </div>
        </div>
      // </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps, { updateUserInfo })(Header);
