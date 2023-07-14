import React from "react";

const FilteredDishes = (props) => {
  console.log(
    "🚀 ~ file: FilteredDishes.js:4 ~ FilteredDishes ~ props:",
    props.allMenuCategory
  );

  let allCategory = props.allMenuCategory.map((cate) => {
    return <li>{cate.strCategory}</li>;
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
      </div>
    </div>
  );
};

export default FilteredDishes;
