import React, { useState } from "react";
import { MdCarRental } from "react-icons/md";
import "./../styles/header.scss";

const Header = () => {
  // const [activeNav, setActiveNav] = useState(false);
  // const clicked = (e) => {
  //   e.preventDefault();
  //   setActiveNav((p) => !p);
  // };
  const [openMenu, setOpenMenu] = useState(false);

  const menuClickHandler = (e) => {
    e.preventDefault();
    setOpenMenu((p) => !p);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <MdCarRental />
          N-Rental
        </div>
        <div
          className={`menu ${openMenu ? "menu--open" : ""}`}
          onClick={menuClickHandler}
        >
          <div className="menu__line "></div>
          <div className="menu__line "></div>
          <div className="menu__line  "></div>
        </div>
        <nav className={`nav ${openMenu ? "nav--slide" : ""}`}>
          <div className="nav__items">
            <a
              href="/"
              // onClick={clicked}
              // className={`nav__item ${activeNav ? "nav--active" : ""}`}
              className="nav__item"
            >
              Home
            </a>
            <a href="/" className="nav__item">
              About
            </a>
            <a href="/" className="nav__item">
              Vehicles
            </a>
            <a href="/" className="nav__item">
              Blogs
            </a>
            <button className="nav__btn">Sign In</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
