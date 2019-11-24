import React, { Component } from "react";
import axios from "axios";

class Cart extends Component {
  state = {
    cart: [],
    subtotal: 0,
    tax: 0,
    total: 0
  };

  componentDidMount = () => {
    this.getCart();
  };

  getCart = () => {
    axios.get("/cart").then(res => {
      const subtotal = res.data
        .map(el => {
          return el.price;
        })
        .reduce((price1, price2) => {
          return +price1 + +price2;
        }, 0);
      const tax = subtotal * 0.07;
      this.setState({
        cart: res.data,
        subtotal: subtotal,
        tax: tax,
        total: subtotal + tax
      });
    });
  };

  goBack = () => {
    window.history.back();
  }

  render() {
    const cart = this.state.cart.map((el, i) => {
      return (
        <div key={i}>
          <div className="sub-category">
            <div className="order-item">
              <h2>{el.title}</h2>
              <h4> ${el.price}</h4>
            </div>
            <p>{el.description}</p>
          </div>
        </div>
      );
    });
    return (
      <div className='cart'>
          <div className='overlay'></div>
        <div className="sub-header">
          <i
            onClick={this.goBack}
            className="fas fa-arrow-circle-left fa-2x fa-gradient-two"
          ></i>
          <h2>
            CART:
          </h2>
        </div>
            <div className="cart-line"></div>

        {cart}
        <div className="sub-category">
          <div className="order-total">
            <h4>Subtotal: ${this.state.subtotal.toFixed(2)}</h4>
            <h4 className='tax'>Tax: ${this.state.tax.toFixed(2)}</h4>
            <h3>Total: ${this.state.total.toFixed(2)}</h3>
          </div>
        </div>
          <div className="checkout-button">proceed to payment</div>
      </div>
    );
  }
}

export default Cart;
