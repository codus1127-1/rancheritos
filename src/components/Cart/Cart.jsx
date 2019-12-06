import React, { Component } from "react";
import axios from "axios";
import { StripeProvider, Elements } from "react-stripe-elements";
import StripeForm from "../Stripe/StripeForm";
import Swal from "sweetalert2";
import {connect} from 'react-redux'
import {removeCount, clearCount} from '../../ducks/reducer'
import Clock from 'react-live-clock'
import { toast } from 'react-toastify';

toast.configure()

class Cart extends Component {
  state = {
    cart: [],
    subtotal: 0,
    tax: 0,
    total: 0,
    toggle: false,
    toggle2: false
  };

  componentDidMount = () => {
    console.log(<Clock />)
    this.getCart();
  };

  getCart = () => {
    axios.get("/cart").then(res => {
      const subtotal = res.data
        .map(el => {
          console.log(el.price)
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
  };

  deleteCart = i => {
    axios.delete(`/cart/${i}`).then(res => {
      this.getCart();
      this.props.removeCount(res.data)

      // window.location.reload()
    });
  };

  submitOrder = () => {
    axios.post('/order').then(() => {
      Swal.fire({
        title: 'Order received.',
        text: `It will be ready in 15 minutes!`,
        width: 400,
        padding: '3em',
        background: 'url(https://ae01.alicdn.com/kf/HTB1VVnbqf5TBuNjSspcq6znGFXaH/rustic-Light-wood-texture-old-natural-table-top-Vintage-backgrounds-Vinyl-cloth-High-quality-Computer-print.jpg) center no-repeat',
        backdrop: `
          rgba(29,29,29,0.4)
        `
      })
      this.props.clearCount()
      this.props.history.push("/dashboard");
    });
  };

  toggle = () => {
      this.setState({
          toggle: !this.state.toggle
        
      })
  }

  toggle2 = () => {
      this.setState({
          toggle2: true
      })
      toast.success('Card added successfully!')
    //   toast('Succuss', {type: 'success'}) 
  }

  render() {
    const cart = this.state.cart.map((el, i) => {
      // console.log(el.addOns.map(el => console.log(el.title)).title)
      return (
        <div className='dash2' key={i}>
          <div className="sub-category">
            <div className="order-item">
              <h2>{el.title}</h2>
              <h4> ${el.price}</h4>
            </div>
            <div className="plus">
              <p>{el.description}</p>
              <br />
              {/* <p>{el.addOns[0].title}</p> */}
              {el.addOns.map((element, index) => {
                return (
                  <div key={index}>
                    <p className="extras">{element.title},</p>
                  </div>
                );
              })}
              {!this.state.toggle2 ? (
              <i
                onClick={() => this.deleteCart(i)}
                className="fas fa-minus-circle fa-2x"
              ></i>  
              ) : null} 
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="cart">
        <div className="overlay"></div>
        <div className="white-space"></div>
        <div className="sub-header">
          <i
            onClick={this.goBack}
            className="fas fa-arrow-circle-left fa-2x fa-gradient-two"
          ></i>
          <h2>CART:</h2>
        </div>
          {this.state.toggle2 ? (
          <h2 className='order-review'>ORDER REVIEW</h2>
           ) : null} 
        <div className="cart-line"></div>
        <div className="mapped">
          {cart}
        </div>
        <div className="sub-category">
          <div className="order-total">
            <h4>Subtotal: ${this.state.subtotal.toFixed(2)}</h4>
            <h4 className="tax">Tax: ${this.state.tax.toFixed(2)}</h4>
            <h3>Total: ${this.state.total.toFixed(2)}</h3>
           {this.state.toggle ? <StripeProvider apiKey="pk_test_qTJVfAucmSExNH1BpCMUyv3y00HBLBE6Ug">
              <Elements>
                <StripeForm
                toggle={this.toggle}
                toggle2={this.toggle2}
                total={this.state.total.toFixed(2)}
                subtotal={this.state.subtotal.toFixed(2)}
                tax={this.state.tax.toFixed(2)}
                />
              </Elements>
            </StripeProvider> : null} 
            <div className="stripe">
          </div>
        
          </div>
        </div>
        {this.state.toggle ? null : <div onClick={() => this.toggle()} className="checkout-button">
          proceed to payment
        </div> }
        {this.state.toggle2 ? <div onClick={()=>this.submitOrder()} className="checkout-button">submit order</div> : null}
      </div>
    );
  }
}

function mapStateToProps( state ) {
    const { cartCount } = state;
  
    return {
      cartCount
    };
  }

export default connect(mapStateToProps, {removeCount, clearCount}) (Cart);
