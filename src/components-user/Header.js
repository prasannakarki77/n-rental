import React, { useState } from "react";
import { MdCarRental } from "react-icons/md";
import "./../styles/header.scss";
import { Link, NavLink } from "react-router-dom";
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
        <Link to="/">
          <div className="logo">
            <MdCarRental />
            N-Rental
          </div>
        </Link>
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
            <Link
              to="/"
              // onClick={clicked}
              // className={`nav__item ${activeNav ? "nav--active" : ""}`}
              className="nav__item"
            >
              Home
            </Link>
            <Link to="/about" className="nav__item">
              About
            </Link>
            <Link to="/vehicle" className="nav__item">
              Vehicles
            </Link>
            <Link to="/blog" className="nav__item">
              Blogs
            </Link>
            <Link className="" aria-current="page" to="/login">
              <button className="nav__btn">Sign In</button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
