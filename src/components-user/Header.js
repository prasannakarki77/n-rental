import React, { useState } from "react";
import {
  MdCarRental,
  MdArrowDropDown,
  MdSpaceDashboard,
  MdSettingsSuggest,
} from "react-icons/md";
import user_icon from "../images/user_icon.png";
import "./../styles/header.scss";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { BiCategoryAlt } from "react-icons/bi";
import { ImBlog } from "react-icons/im";
import { AiFillCar } from "react-icons/ai";
import { BsFillBookmarksFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import "../styles/admin_nav.scss";
import { NavDropdown } from "react-bootstrap";

const Header = () => {
  const [userDetails, setUserDetails] = useState("");

  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:90/user/dashboard", config)
      .then((res) => {
        setUserDetails(res.data);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const menuClickHandler = (e) => {
    e.preventDefault();
    setOpenMenu((p) => !p);
  };

  const logout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };
  const [menuState, setmenuState] = useState(false);
  const sidemenuClickHandler = (e) => {
    e.preventDefault();
    setmenuState((p) => !p);
  };

  return (
    <>
      {localStorage.getItem("userType") === "admin" ? (
        <>
          <div className="header">
            <div
              className={`backdrop ${
                menuState ? `backdrop--open` : `backdrop--close`
              }`}
              onClick={sidemenuClickHandler}
            ></div>
            <div className="header__side-menu" onClick={sidemenuClickHandler}>
              <FiMenu />
            </div>
            <div className="user-dropdown">
              <Link to="/admin_dashboard" className="user">
                <img
                  src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
                  alt="user"
                  className="user__image"
                />
                <span className="user__username">{userDetails.username}</span>
                <MdArrowDropDown />
              </Link>
            </div>

            <div
              className={`sidenav ${
                menuState ? `sidenav--open` : `sidenav--close`
              }`}
            >
              <div className="sidenav__menu" onClick={sidemenuClickHandler}>
                {menuState ? <MdOutlineClose /> : <FiMenu />}
              </div>

              <div className="sidenav__logo">
                <MdCarRental />
                N-Rental
              </div>

              <NavLink to="/admin_dashboard" className="sidenav__item">
                <MdSpaceDashboard />
                Dashboard
              </NavLink>
              <NavLink to="/vehicle_dashboard" className="sidenav__item">
                <AiFillCar />
                Vehicles
              </NavLink>
              <NavLink to="/category_dashboard" className="sidenav__item">
                <BiCategoryAlt />
                Category
              </NavLink>
              <NavLink to="/article_dashboard" className="sidenav__item">
                <ImBlog />
                Article
              </NavLink>
              <NavLink to="/booking_dashboard" className="sidenav__item">
                <BsFillBookmarksFill />
                Bookings
              </NavLink>
              <NavLink to="/e" className="sidenav__item">
                <BsFillBookmarkCheckFill />
                Favourites
              </NavLink>

              <div className="sidenav__profile">
                <NavLink to="/f" className="sidenav__item">
                  <MdSettingsSuggest />
                  Settings
                </NavLink>
                <NavLink to="" className="sidenav__item" onClick={logout}>
                  <FaSignOutAlt />
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
        </>
      ) : (
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
              {localStorage.getItem("userToken") ? (
                <>
                  {/* <Link className="" aria-current="page" to="/login">
                  <button className="nav__btn" onClick={logout}>
                    Log Out
                  </button>
                </Link> */}
                  <div className="user-dropdown">
                    <NavDropdown
                      title={
                        <Link to="/profile" className="user">
                          <img
                            src={
                              userDetails.profile_img
                                ? `http://localhost:90/${userDetails.profile_img}`
                                : user_icon
                            }
                            alt="user"
                            className="user__image"
                          />
                          <span className="user__username">
                            {userDetails.username}
                          </span>
                          <MdArrowDropDown />
                        </Link>
                      }
                      id="collasible-nav-dropdown"
                      show={show}
                      onMouseEnter={showDropdown}
                      onMouseLeave={hideDropdown}
                    >
                      <Link to="/profile" className="user-menu__option">
                        Profile
                      </Link>
                      <Link
                        to="/user/myfavourites"
                        className="user-menu__option"
                      >
                        Favourites
                      </Link>
                      <Link to="/user/mybookings" className="user-menu__option">
                        Bookings
                      </Link>
                      <Link
                        to="/login"
                        className="user-menu__option"
                        onClick={logout}
                      >
                        Logout
                      </Link>
                    </NavDropdown>
                  </div>
                </>
              ) : (
                <Link className="" aria-current="page" to="/login">
                  <button className="nav__btn">Sign In</button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
