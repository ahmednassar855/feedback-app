import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

export class Payment extends Component {
  //   stripeKey() {
  //     return import.meta.env.VITE_REACT_APP_STRIPE_KEY;
  //   }

  stKey = import.meta.env.VITE_REACT_APP_STRIPE_KEY;

  render() {
    debugger;

    return (
      <StripeCheckout
        name="FeedBack"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={this.stKey}
      >
        <button className="btn">
          Add Credit
        </button>

      </StripeCheckout>
    );
  }
}

export default Payment;
