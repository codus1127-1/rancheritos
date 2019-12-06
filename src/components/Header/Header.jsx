import React from "react";
import { connect } from "react-redux";
import { updateUserInfo, clearCount } from "../../ducks/reducer";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import logo from "../../assets/rancheritos_logo.png";

class Header extends React.Component {
  state = {
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
      Swal.fire({
        text: res.data.message,
        width: 300,
        padding: "3em",
        background:
          "url(https://ae01.alicdn.com/kf/HTB1VVnbqf5TBuNjSspcq6znGFXaH/rustic-Light-wood-texture-old-natural-table-top-Vintage-backgrounds-Vinyl-cloth-High-quality-Computer-print.jpg) center no-repeat",
        backdrop: `
            rgba(29,29,29,0.4)
          `
      });
      this.props.clearCount();
      this.props.updateUserInfo({
        email: "",
        name: "",
        user_id: "",
        is_admin: false
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
          <div>
            <Link to="/">
              <div onClick={this.logout} className="logout">
                logout
              </div>
            </Link>
            {/* <Link to="/admin">
                <div onClick={this.toggle} className="logout2">admin</div>
              </Link> */}
          </div>
        ) : null}
        <div className="header">
          <Link to="/dashboard">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="top-right">
          <Link to="/cart">
            <i className="fas fa-cart-plus fa-2x"></i>
          </Link>
          <i className="fas fa-user fa-2x" onClick={() => this.toggle()}></i>
        </div>
      </div>
      // </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps, { updateUserInfo, clearCount })(Header);
