import React from "react";

const CardDish = ({ showPopUp, menu }) => {
  return (
    <React.Fragment>
      <li>
        <a
          // eslint-disable-next-line no-script-url
          href="javaScript:;"
          onClick={() => {
            showPopUp(menu.strMeal);
          }}
        >
          <img src={menu.strMealThumb} alt="none" className="br-10" />
          <h5>{menu.strMeal}</h5>
        </a>
      </li>
    </React.Fragment>
  );
};

export default CardDish;
