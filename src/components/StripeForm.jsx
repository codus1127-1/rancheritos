import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Swal from "sweetalert2";
import stripeImg from '../assets/stripe.png'

class StripeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      toggle: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      let { token } = await this.props.stripe.createToken({
        name: this.state.name
      });
      console.log(token);
      let amount = +this.props.total;
      if (amount === +this.props.total) {
        await fetch("/auth/payment", {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({ token, amount })
          });
          this.toggle()
          this.props.toggle2()
      } else {
          Swal.fire({
              title: "Insufficient Payment. $8 required to access.",
              icon: 'error'
          })
      }
     
      // redirect, clear inputs, thank alert, toast
      
    } catch (e) {
      throw e;
    }
  };
  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  toggle = () => {
      this.setState({
          toggle: true
      })
  }

  render() {
    return (

      <div>
          {!this.state.toggle ?
           <div>
              <div className="overlay1"></div>
              <main className="form-container">
                <form className="stripe-form" onSubmit={this.handleSubmit}>
                    <div onClick={()=>this.props.toggle()} className="back">X</div>
                  <img className="by-stripe" src={stripeImg} alt="stripe" />
                  <h1> Subtotal: ${this.props.subtotal}</h1>
                  <h1> Tax: ${this.props.tax}</h1>
                  {/* <label>Order Total: </label> */}
                  <h1> Total: ${this.props.total}</h1>
                  {/* <label>Name</label>
                  <input
                    type="text"
                    className="name-input"
                    value={this.state.name}
                    onChange={e => this.handleChange("name", e.target.value)}
                  />
                  <label>Amount (8 $USD)</label>
                  <input
                    type="text"
                    className="value-input"
                    value={this.state.amount}
                    onChange={e => this.handleChange("amount", e.target.value)}
                  /> */}
                  <label>Card Info</label>
                  <CardElement className="card-element" />
                  <button className="submit-btn">Confirm Payment</button>
                </form>
              </main>
          </div> 
          : null}
      </div>
    );
  }
}

export default injectStripe(StripeForm);