import React from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import { AllMenu } from "./allMenuContext";

const Menu = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AllMenu>
        <SpecialDishes />
        <FilteredDishes />
      </AllMenu>
    </div>
  );
};

export default Menu;
