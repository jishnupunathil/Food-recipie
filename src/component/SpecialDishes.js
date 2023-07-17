import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import PopUp from "./PopUp";
import { AllmenuContext } from "./allMenuContext";

const SpecialDishes = () => {
  const allMenus = useContext(AllmenuContext);
  const maxDish = 8;

  let [popup, setPopup] = useState(false);
  let [popData, setPopData] = useState("");

  const showPopUp = (name) => {
    setPopup(true);
    setPopData(name);
  };

  const closePopup = () => {
    setPopup(false);
  };
  // eslint-disable-next-line array-callback-return
  let specialMenu = allMenus.map((menu, index) => {
    if (index < maxDish) {
      return <CardDish menu={menu} showPopUp={showPopUp} />;
    }
  });

  return (
    <section className="special-dishes">
      {popup ? (
        <PopUp setPopup={setPopup} popData={popData} closePopup={closePopup} />
      ) : null}
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
