import React from "react";

import styles from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

const IngredientType = {
  BreadTop: "bread-top",
  BreadBottom: "bread-bottom",
  Meat: "meat",
  Cheese: "cheese",
  Salad: "salad",
  Bacon: "bacon",
};

const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case IngredientType.BreadBottom:
      ingredient = <div className={styles.BreadBottom}></div>;
      break;
    case IngredientType.BreadTop:
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      );
      break;
    case IngredientType.Meat:
      ingredient = <div className={styles.Meat}></div>;
      break;
    case IngredientType.Cheese:
      ingredient = <div className={styles.Cheese}></div>;
      break;
    case IngredientType.Salad:
      ingredient = <div className={styles.Salad}></div>;
      break;
    case IngredientType.Bacon:
      ingredient = <div className={styles.Bacon}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export { IngredientType };
export default BurgerIngredient;
