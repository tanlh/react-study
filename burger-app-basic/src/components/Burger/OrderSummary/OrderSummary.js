import React from "react";
import PropTypes from "prop-types";

import styles from "./OrderSummary.module.css";

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
    </>
  );
};

OrderSummary.propTypes = {};

export default OrderSummary;
