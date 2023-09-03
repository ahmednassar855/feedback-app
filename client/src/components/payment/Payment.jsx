import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from '../../actions';


export class Payment extends Component {
  

  stripeKey () {
    if(import.meta.env.MODE === 'development'){
      console.log(import.meta.env.VITE_REACT_APP_STRIPE_KEY);
      return import.meta.env.VITE_REACT_APP_STRIPE_KEY;
    }
    else{
      console.log(process.env.STRIPE_PUBLISHABLE_KEY);
      return process.env.STRIPE_PUBLISHABLE_KEY;
    }
  }
  render() {
    // debugger;

    return (
      <StripeCheckout
        name="FeedBack"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={this.stripeKey()}
      >
        <button className="btn">
          Add Credit
        </button>

      </StripeCheckout>
    );
  }
}

export default connect(null , actions)(Payment);


