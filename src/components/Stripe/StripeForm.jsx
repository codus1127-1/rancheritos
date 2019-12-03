import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Swal from "sweetalert2";
import stripeImg from '../../assets/stripe.png'

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
                  <div className="stripe-total">
                    <h1> Subtotal: ${this.props.subtotal}</h1>
                    <h1> Tax: ${this.props.tax}</h1>
                    <div className="stripe-line"></div>
                    <h2> Total: ${this.props.total}</h2>
                  </div>
                  <div className="card-info">
                    <label>Card Info</label>
                    <div className="stripe-line-2"></div>
                    <CardElement className="card-element" />
                  </div>
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