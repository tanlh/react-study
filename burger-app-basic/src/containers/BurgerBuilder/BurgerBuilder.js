import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import Burger from "../../components/Burger/Burger";

const INGREDIENT_PRICE = {
  meat: 1.2,
  salad: 0.4,
  bacon: 0.8,
  cheese: 0.5,
};

class BuilderBuider extends Component {
  state = {
    ingredients: {
      meat: 0,
      salad: 0,
      bacon: 0,
      cheese: 0,
    },
    totalPrice: 0,
  };

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredient = { ...this.state.ingredients };
    updatedIngredient[type] = updatedCount;

    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

    this.setState({ ingredients: updatedIngredient, totalPrice: updatedPrice });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredient = { ...this.state.ingredients };
    updatedIngredient[type] = updatedCount;

    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];

    this.setState({ ingredients: updatedIngredient, totalPrice: updatedPrice });
  };

  render() {
    const disableInfo = { ...this.state.ingredients };
    for (let key in disableInfo) {
      disableInfo[key] = this.state.ingredients[key] <= 0;
    }

    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disableInfo}
        />
      </>
    );
  }
}

export default BuilderBuider;
