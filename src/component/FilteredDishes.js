import React, { useState } from "react";

const FilteredDishes = (props) => {
console.log("🚀 ~ file: FilteredDishes.js:4 ~ FilteredDishes ~ props:", props)

  let [menu,setMenu]=useState(props.allMenu)

  let [filterdDish,setFilteredDish]=useState([])

  const showFilteredData=(category)=>{


    let filteredDishes=menu.filter((item)=>{
      return item.strCategory === category
    })
    .map((menu)=>{
      return(
        <li>
        <img src={menu.strMealThumb} alt="" className="br-10" />
        <h5>{menu.strMeal }</h5>
        </li>
        )
      })

    setFilteredDish(filteredDishes)

  }

  let allCategory = props.allMenuCategory.map((cate) => {
    return <li onClick={()=>{showFilteredData(cate.strCategory)}}>{cate.strCategory}</li>;
  });
  return (
    <div className="filtered-dished">
      <div className="container">
        <div className="text-center">
          <h2>Choose your Dishes</h2>
          <p>
            diam vel quam elementum pulvinar etiam non quam lacus suspendisse
            faucibus interdum posuere lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="filterd-dishes">
          <ul> 
            {allCategory}
          </ul>
        </div>
        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-30">
          {filterdDish}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilteredDishes;
