import React, { useState } from "react";

const FilteredDishes = (props) => {
  console.log(
    "🚀 ~ file: FilteredDishes.js:4 ~ FilteredDishes ~ props:",
    props
  );

  // eslint-disable-next-line no-unused-vars
  let [menu, setMenu] = useState(props.allMenu);

  let [filterdDish, setFilteredDish] = useState([]);

  let [activeDish, setActive] = useState();

  let [initial, setInitail] = useState(false);

  const showFilteredData = (category) => {
    setActive(category);
    setInitail(true);

    let filteredDishes = menu
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((menu) => {
        return (
          <li>
            <img src={menu.strMealThumb} alt="" className="br-10" />
            <h5>{menu.strMeal}</h5>
          </li>
        );
      });

    setFilteredDish(filteredDishes);
  };
  console.log(filterdDish.length);

  let allCategory = props.allMenuCategory.map((cate) => {
    return (
      <li
        className={cate.strCategory === activeDish ? "active" : ""}
        onClick={() => {
          showFilteredData(cate.strCategory);
        }}
      >
        {cate.strCategory}
      </li>
    );
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
          <ul>{allCategory}</ul>
        </div>
        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-30">
            {filterdDish.length !== 0 ? (
              filterdDish
            ) : (
              <div className={`alert ${!initial ? "dis" : ""}`}>
                <h3>Sorry, NO items Found</h3>
                <h4>Please try another dish</h4>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilteredDishes;
