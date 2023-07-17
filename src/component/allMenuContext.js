import React, { useEffect, useState } from "react";
import Loader from "./Loader";

export const AllmenuContext = React.createContext();

export const AllMenu = (props) => {
  let [menu, setMenu] = useState([]);
  let [loading, setLoading] = useState(false);

  const getAllMenu = async () => {
    setLoading(true);
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    setMenu(data.meals);
    setLoading(false);
  };

  useEffect(() => {
    getAllMenu();
  }, []);

  return (
    <AllmenuContext.Provider value={menu}>
      {!loading ? props.children : <Loader />}
    </AllmenuContext.Provider>
  );
};
