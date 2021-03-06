import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import axios from "axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICE = {
  meat: 1.2,
  salad: 0.4,
  bacon: 0.8,
  cheese: 0.5,
};

class BuilderBuider extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then((response) =>
        this.setState({ ingredients: response && response.data })
      )
      .then((error) => this.setState({ error: true }));
  }

  updatePurchasable = (updatedIngredients) => {
    const numberOfIngredients = Object.values(updatedIngredients).reduce(
      (sum, el) => sum + el,
      0
    );

    this.setState({ purchasable: numberOfIngredients !== 0 });
  };

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
    this.updatePurchasable(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
    this.updatePurchasable(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Tan, Le",
        address: {
          street: "Nam Ky Khoi Nghia",
          district: "1",
          country: "Vietnam",
        },
        email: "huutan@gmail.com",
      },
      deliveryMethod: "express",
    };

    axios
      .post("/orders.json", order)
      .then((response) => this.setState({ loading: false, purchasing: false }))
      .catch((error) => this.setState({ loading: false, purchasing: false }));
  };

  render() {
    const disableInfo = { ...this.state.ingredients };
    for (let key in disableInfo) {
      disableInfo[key] = this.state.ingredients[key] <= 0;
    }

    let content = <Spinner />;
    if (this.state.error) {
      content = (
        <h2 style={{ textAlign: "center" }}>Ingredients cannot be loaded!</h2>
      );
    }

    if (this.state.ingredients) {
      content = (
        <>
          <Modal
            show={this.state.purchasing}
            modalClosed={this.purchaseCancelHandler}
          >
            {this.state.loading ? (
              <Spinner />
            ) : (
              <OrderSummary
                ingredients={this.state.ingredients}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.state.totalPrice}
              />
            )}
          </Modal>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disableInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </>
      );
    }

    return content;
  }
}

export default withErrorHandler(BuilderBuider);
