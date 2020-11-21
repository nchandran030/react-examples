import React from "react";
import classes from "./Burger.css";
import BurgerIngridents from "./BurgerIngridents/BurgerIngridents";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredient)
    .map((igkey) => {
      return [...Array(props.ingredient[igkey])].map((_, i) => {
        return <BurgerIngridents key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngridents type="bread-top"></BurgerIngridents>
      {transformedIngredients}
      <BurgerIngridents type="bread-bottom"></BurgerIngridents>
    </div>
  );
};

export default burger;
