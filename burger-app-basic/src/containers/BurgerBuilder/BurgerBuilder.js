import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";

class BuilderBuider extends Component {
  state = {
    ingredients: {
      meat: 1,
      salad: 2,
      bacon: 1,
      cheese: 1,
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
