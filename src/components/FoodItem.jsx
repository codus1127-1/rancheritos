import React, { Component } from "react";
import { Link } from "react-router-dom";
import Customize from "./Customize";
import axios from "axios";

class FoodItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      el: { ...this.props.el, addOns: [] },
      addOnToggle: false,
      added: false
    };
  }

  addOns = () => {
    this.setState({
      addOnToggle: !this.state.addOnToggle
    });
  };

  addToCart = el => {
    axios.post("/category/items", el).then(res => {
      // console.log(res)

      this.setState({
        addOnToggle: false,
        el: { ...this.props.el, addOns: [] }
      });
      this.plusClicked();
    });
  };

  setAddOns = addOns => {
    const el = this.state.el;
    el.addOns = addOns;
    this.setState({
      el: el
    });
  };

  plusClicked = () => {
    this.setState({
      added: true
    });
  };

  render() {
    return (
      <div>
        <div key={this.props.index}>
          <div className="sub-category">
            <div className="order-item">
              <h2>{this.state.el.title}</h2>
              <h4> ${this.state.el.price}</h4>
            </div>
            <div className="plus">
              <p>{this.state.el.description}</p>
              {this.state.added ? <i className="fas fa-check fa-2x"></i> : null}
              <i
                onClick={() => this.addToCart(this.state.el)}
                className="fas fa-plus fa-2x"
              ></i>
            </div>
          </div>
          <Customize
            key={this.state.el.id}
            item={this.state.el}
            setAddOns={this.setAddOns}
            toggleAddOns={this.addOns}
            addOnToggle={this.state.addOnToggle}
          />
          {this.state.added ? (
            <Link to="/cart">
              <div className="checkout-button">view items in cart</div>
            </Link>
          ) : null}
        </div>
      </div>
    );
  }
}

export default FoodItem;
