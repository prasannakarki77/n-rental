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
import "../styles/admin_nav.scss";

const AdminNav = () => {
  return (
    <>
      <div className="sidenav">
        <div className=""></div>

        <div className="sidenav__logo">
          <MdCarRental />
          N-Rental
        </div>

        <NavLink to="/" className="sidenav__item">
          <MdSpaceDashboard />
          Dashboard
        </NavLink>
        <NavLink to="/dashboard_vehicle" className="sidenav__item">
          <AiFillCar />
          Vehicles
        </NavLink>
        <NavLink to="/b" className="sidenav__item">
          <BiCategoryAlt />
          Category
        </NavLink>
        <NavLink to="/c" className="sidenav__item">
          <ImBlog />
          Blogs
        </NavLink>
        <NavLink to="/d" className="sidenav__item">
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
