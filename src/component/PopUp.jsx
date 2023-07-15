import React from "react";

const PopUp = ({ setPopup, popData, fullMenu }) => {
  console.log("🚀 ~ file: PopUp.jsx:4 ~ PopUp ~ specialMenu:", fullMenu);

  const closePopup = () => {
    setPopup(false);
  };

  let dishDetails = fullMenu
    .filter((menu) => {
      return menu.strMeal === popData;
    })
    .map((item) => {
      return (
        <div className="popup-content-data">
          <div className="popup-header">
            <img src={item.strMealThumb} alt="" />
            <h5 className="popup-header-category">{item.strCategory}</h5>
          </div>
          <h2>{item.strMeal}</h2>
          <p>{item.strInstructions}</p>
          <ul className="dish-ingredients flex">
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>
          </ul>
        </div>
      );
    });

  return (
    <div className="popup">
      <div className="popup-content">
        {dishDetails}
        <button>Order Now</button>
        <h5 className="popup-close" onClick={closePopup}>
          Close
        </h5>
      </div>
    </div>
  );
};

export default PopUp;