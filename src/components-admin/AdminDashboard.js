import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { ImBlog } from "react-icons/im";
import { AiFillCar } from "react-icons/ai";
import { BsFillBookmarksFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/dashboard.scss";
const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__title">
        <h1 className="dashboard__title--text">
          <MdSpaceDashboard /> Dashboard
        </h1>
      </div>
      <div className="dashboard__boxes">
        <Link to="/vehicle_dashboard">
          <div className="dashboard__box">
            <div className="dashboard__box--icon">
              <AiFillCar />
            </div>
            <div className="dashboard__box--count">10</div>
            <div className="dashboard__box--label">Vehicles</div>
          </div>
        </Link>
        <Link to="/category_dashboard">
          <div className="dashboard__box">
            <div className="dashboard__box--icon">
              <BiCategoryAlt />
            </div>
            <div className="dashboard__box--count">10</div>
            <div className="dashboard__box--label">Categories</div>
          </div>
        </Link>
        <Link to="/article_dashboard">
          <div className="dashboard__box">
            <div className="dashboard__box--icon">
              <ImBlog />
            </div>
            <div className="dashboard__box--count">10</div>
            <div className="dashboard__box--label">Articles</div>
          </div>
        </Link>
        <Link to="/bookmark_dashboard">
          <div className="dashboard__box">
            <div className="dashboard__box--icon">
              <BsFillBookmarksFill />
            </div>
            <div className="dashboard__box--count">10</div>
            <div className="dashboard__box--label">Bookings</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
