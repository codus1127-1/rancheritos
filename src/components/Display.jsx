import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckOutForm';

class Display extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_qTJVfAucmSExNH1BpCMUyv3y00HBLBE6Ug">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Display;