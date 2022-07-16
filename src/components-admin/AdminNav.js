import { Link, NavLink } from "react-router-dom";
import {
  MdSpaceDashboard,
  MdCarRental,
  MdSettingsSuggest,
} from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { ImBlog } from "react-icons/im";
import { AiFillCar } from "react-icons/ai";
import { BsFillBookmarksFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import "../styles/admin_nav.scss";
import { useState } from "react";

const AdminNav = () => {
  const [menuState, setmenuState] = useState("false");
  const menuClickHandler = (e) => {
    e.preventDefault();
    setmenuState((p) => !p);
  };
  return (
    <>
      <div
        className={`sidenav ${menuState ? `sidenav--open` : `sidenav--close`}`}
      >
        <div className="sidenav__menu" onClick={menuClickHandler}>
          {menuState ? <MdOutlineClose /> : <FiMenu />}
        </div>

        <div className="sidenav__logo">
          <MdCarRental />
          N-Rental
        </div>

        <NavLink to="/" className="sidenav__item">
          <MdSpaceDashboard />
          Dashboard
        </NavLink>
        <NavLink to="/vehicle" className="sidenav__item">
          <AiFillCar />
          Vehicles
        </NavLink>
        <NavLink to="/category" className="sidenav__item">
          <BiCategoryAlt />
          Category
        </NavLink>
        <NavLink to="/article" className="sidenav__item">
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
          <NavLink to="/g" className="sidenav__item">
            <FaSignOutAlt />
            Logout
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminNav;
