import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";

const Menu = () => {

   let [menu,setMenu]= useState([])

    useEffect(() => {
        getAllMenu();
    },[]);
    
    const getAllMenu = async () => {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
      let response = await fetch(API_URL);
      let data = await response.json();
      console.log("🚀 ~ file: Menu.js:15 ~ getAllMenu ~ data:", data)
      
      setMenu(data.meals)
    };

  return(

    <div>
    <Hero/>
    <SpecialDishes specialMenu={menu}/>
    </div>
    )
};

export default Menu;
