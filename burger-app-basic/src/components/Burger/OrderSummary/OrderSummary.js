import React from "react";
import PropTypes from "prop-types";

import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const displayedIngredients = Object.entries(props.ingredients).map(
    ([key, value]) => (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>: {value}
      </li>
    )
  );

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{displayedIngredients}</ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </>
  );
};

OrderSummary.propTypes = {};

export default OrderSummary;
