import React from "react";
import CardDish from "./CardDish";

const SpecialDishes = (props) => {
  const maxDish = 8;

  // eslint-disable-next-line array-callback-return
  let specialMenu = props.specialMenu.map((menu, index) => {
    if (index < maxDish) {
      return <CardDish menu={menu} />;
    }
  });

  return (
    <section className="special-dishes">
      <div className="container">
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            diam vel quam elementum pulvinar etiam non quam lacus suspendisse
            faucibus interdum posuere lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30 ">{specialMenu}</ul>
        </div>
      </div>
    </section>
  );
};

export default SpecialDishes;
