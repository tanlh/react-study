import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";

class BuilderBuider extends Component {
  state = {
    ingredients: {
      meat: 0,
      salad: 2,
      bacon: 0,
      cheese: 0,
    },
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div>Build controler</div>
      </>
    );
  }
}

export default BuilderBuider;
