import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import { AllMenu } from "./allMenuContext";

const Menu = () => {
  let [categoryData, setCategory] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);

    let categoryData = await response.json();

    setCategory(categoryData.categories);
  };

  return (
    <div>
      <Header />
      <Hero />
      <AllMenu>
        <SpecialDishes />
        <FilteredDishes allMenuCategory={categoryData} />
      </AllMenu>
    </div>
  );
};

export default Menu;
