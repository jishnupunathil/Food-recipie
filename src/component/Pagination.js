import React from "react";

const Pagination = (props) => {
  let numberOfPages = [];

  for (
    let i = 1;
    i <= Math.ceil(props.filterdDish.length / props.itemsPerPage);
    i++
  )
    numberOfPages.push(i);

  let pages = numberOfPages.map((pageNumber) => {
    return (
      <li id={pageNumber} onClick={showNextDishes}>
        {pageNumber}
      </li>
    );
  });

  function showNextDishes(event) {
    let currentPage = event.target.id;
    props.setCurrentPage(currentPage);
  }

  return (
    <section>
      <ul className="pagination flex">{pages}</ul>
    </section>
  );
};

export default Pagination;
