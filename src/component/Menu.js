import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";

const Menu = () => {

   let [menu,setMenu]= useState([])
   
   let [categoryData,setCategory]=useState([])
   console.log("🚀 ~ file: Menu.js:11 ~ Menu ~ categoryData:", categoryData)
   
   useEffect(() => {
     getAllMenu();
     getAllCategory()
    },[]);
    
    const getAllMenu = async () => {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
      let response = await fetch(API_URL);
      let data = await response.json();
      setMenu(data.meals)
    };
    
    const getAllCategory = async () => {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
      let response = await fetch(API_URL);

      let categoryData = await response.json();  

 
      setCategory(categoryData.categories)
      };

      
      return(

    <div>
    <Hero/>
    <SpecialDishes specialMenu={menu}/>
    <FilteredDishes allMenuCategory={categoryData}/>
    </div>
    )
};

export default Menu;
