import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Loader from "./Loader";
import Header from "./Header";

export const AllmenuContext=React.createContext()

const Menu = () => {
  let [menu, setMenu] = useState([]);
  let [categoryData, setCategory] = useState([]);
  let [loading, setLoading] = useState(false);


  useEffect(() => {
    getAllMenu();
    getAllCategory();
  }, []);

  const getAllMenu = async () => {
    setLoading(true);
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    setMenu(data.meals);
    setLoading(false);
  };

  const getAllCategory = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);

    let categoryData = await response.json();

    setCategory(categoryData.categories);
  };

  return (
    <div>
    <Header/>
      <Hero />
      <AllmenuContext.Provider value={menu}>
      {!loading ? <SpecialDishes/> :<Loader/>}
      {!loading ? (
        <FilteredDishes allMenuCategory={categoryData}/>
        ) : null}
        </AllmenuContext.Provider>
    </div>
  );
};

export default Menu;
