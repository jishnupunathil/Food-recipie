import React from "react";

const Header = () => {
  return (
    <header className="flex flex-center flex-between">
      <a href="/" className="logo">
        Food Dairy
      </a>
      <nav>
        <ul className="flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Checkout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
