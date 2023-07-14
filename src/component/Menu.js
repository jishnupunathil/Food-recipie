import React, { useState, useEffect } from "react";

const Menu = () => {

   let [menu,setMenu]= useState([])

    useEffect(() => {
        getAllMenu();
    },[]);
    
    const getAllMenu = async () => {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
      let response = await fetch(API_URL);
      let data = await response.json();
      console.log("🚀 ~ file: Menu.js:15 ~ getAllMenu ~ data:", data)
      
      setMenu(data.meals)
    };

    console.log("the menus are" ,menu);

    let menuImages=menu.map((meals)=>{
      return(
        <div>
          <img src={meals.strMealThumb} alt=""/>
          <h2>{meals.strCategory}</h2>
        </div>
      )
    })
  return <div>{menuImages}</div>;
};

export default Menu;
