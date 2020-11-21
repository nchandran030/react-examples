import React, { Component } from "react";
import CheckOutSummary from "../../components/Order/CheckOutSummary/CheckOutSummary";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  // state = {
  //   ingredient: null,
  //   price: 0,
  // };

  // componentWillMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let price = 0;
  //   for (let param of query.entries()) {
  //     if (param[0] === "price") {
  //       price = param[1];
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }
  //   }
  //   this.setState({ ingredient: ingredients, totalPrice: price });
  // }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/"></Redirect>;
    if (this.props.ings) {
      summary = (
        <div>
          <CheckOutSummary
            ingredient={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          ></CheckOutSummary>
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          ></Route>
        </div>
      );
    }
    return { summary };
    {
      /* <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData
              ingredient={this.state.ingredient}
              price={this.state.totalPrice}
              {...props}
            ></ContactData>
          )}
        ></Route> */
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
  };
};
export default connect(mapStateToProps)(Checkout);
