import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from '../../actions';


export class Payment extends Component {
  
  strip_Key = import.meta.env.VITE_REACT_APP_STRIPE_KEY
 
  render() {
    // debugger;

    return (
      <StripeCheckout
        name="FeedBack"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={this.strip_Key}
      >
        <button className="btn">
          Add Credit
        </button>

      </StripeCheckout>
    );
  }
}

export default connect(null , actions)(Payment);


