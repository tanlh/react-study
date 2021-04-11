import React from "react";
import PropTypes from "prop-types";

import styles from "./BuildControls.module.css";
import { IngredientType } from "../BurgerIngredient/BurgerIngredient";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: IngredientType.Salad },
  { label: "Cheese", type: IngredientType.Cheese },
  { label: "Meat", type: IngredientType.Meat },
  { label: "Bacon", type: IngredientType.Bacon },
];

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Current price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}
      <button
        className={styles.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

BuildControls.propTypes = {};

export default BuildControls;
