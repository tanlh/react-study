import React from "react";

import styles from "./Burger.module.css";
import BurgerIngredient, {
  IngredientType,
} from "./BurgerIngredient/BurgerIngredient";

export const Burger = (props) => {
  let burgerIngredients = Object.keys(props.ingredients)
    .map((igKey) =>
      [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);
  if (burgerIngredients.length === 0) {
    burgerIngredients = <p>Please add ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type={IngredientType.BreadTop} />
      {burgerIngredients}
      <BurgerIngredient type={IngredientType.BreadBottom} />
    </div>
  );
};

export default Burger;
