import React, { useContext, useState } from "react";
import Pagination from "./Pagination";
import CardDish from "./CardDish";
import PopUp from "./PopUp";
import { AllmenuContext } from "./Menu";

const FilteredDishes = (props) => {
 
  const allMenus=useContext(AllmenuContext)
  // eslint-disable-next-line no-unused-vars
  let [menu, setMenu] = useState(allMenus);

  let [filterdDish, setFilteredDish] = useState([]);

  let [activeDish, setActive] = useState();

  let [initial, setInitail] = useState(false);

  let [currentPage,setCurrentPage]=useState(1)

  // eslint-disable-next-line no-unused-vars
  let [itemsPerPage,setItemsPerPage]=useState(4)

  let indexOflastdish=currentPage * itemsPerPage

  let indexOfFirstDish=indexOflastdish-itemsPerPage

  let slicedDish=filterdDish.slice(indexOfFirstDish,indexOflastdish)

  let [popup,setpopup]=useState(false)
  let [popData,setPopData]=useState('')

  const  showPopUp=(name) => {
    setpopup(true)
    setPopData(name)
    }

    const closePopup = () => {
      setpopup(false);
    };



  const showFilteredData = (category) => {
    setActive(category);
    setInitail(true);

    let filteredDishes = menu
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((menu) => {
        return (
          <CardDish menu={menu} showPopUp={showPopUp}/>
        );
      });

    setFilteredDish(filteredDishes);
  };


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
    {popup?<PopUp showPopUp={showPopUp} popData={popData} fullMenu={menu} closePopup={closePopup}/>:null}
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
              slicedDish
            ) : (
              <div className={`alert ${!initial ? "dis" : ""}`}>
                <h3>Sorry, NO items Found</h3>
                <h4>Please try another dish</h4>
              </div>
            )}
          </ul>
        </div>

        <Pagination 
        filterdDish={filterdDish}
         itemsPerPage={itemsPerPage}
         currentPage={currentPage}
         setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
};

export default FilteredDishes;
