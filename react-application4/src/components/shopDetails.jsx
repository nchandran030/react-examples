import React, { Component } from "react";

class ShopDetails extends Component {
  state = {
    shopId: "",
  };
  constructor(props) {
    super(props);
    this.state.shopId = props.match.params.id;
    console.log('props---',props.match.params.id);
  }

  render() {
    return <h3>{this.state.shopId} </h3>;
  }
}

export default ShopDetails;
