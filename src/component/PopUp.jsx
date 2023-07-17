import React, { useContext } from "react";
import { AllmenuContext } from "./allMenuContext";

const PopUp = ({ closePopup, popData,addToCartHandler }) => {
  const allMenu = useContext(AllmenuContext);

  let dishDetails = allMenu
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

          <button onClick={()=>addToCartHandler(item.strMealThumb,item.strMeal)}>Add to Cart</button>
          <h5 className="popup-close" onClick={closePopup}>
            Close
          </h5>
        </div>
      );
    });

  return (
    <div className="popup">
      <div className="popup-content">
        {dishDetails}
        
      </div>
    </div>
  );
};

export default PopUp;
