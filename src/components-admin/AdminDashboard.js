import React, { useState, useEffect } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { ImBlog } from "react-icons/im";
import { AiFillCar } from "react-icons/ai";
import { BsFillBookmarksFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/dashboard.scss";
import axios from "axios";
const AdminDashboard = () => {
  const [vehicleCount, setVehicleCount] = useState();
  const [categoryCount, setCategoryCount] = useState();
  const [articleCount, setArticleCount] = useState();
  const [bookingCount, setBookingCount] = useState();
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:90/vehicle/get", config)
      .then((res) => {
        setVehicleCount(Object.keys(res.data.data).length);
        console.log(vehicleCount);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .get("http://localhost:90/category/get", config)
      .then((res) => {
        setCategoryCount(Object.keys(res.data.data).length);
        console.log(categoryCount);
      })
      .catch((e) => {
        console.log(e);
      });
    axios
      .get("http://localhost:90/article/get", config)
      .then((res) => {
        setArticleCount(Object.keys(res.data.data).length);
        console.log(articleCount);
      })
      .catch((e) => {
        console.log(e);
      });
    axios
      .get("http://localhost:90/booking/get", config)
      .then((res) => {
        setBookingCount(Object.keys(res.data.data).length);
        console.log(bookingCount);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
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
            <div className="dashboard__box--count">{vehicleCount}</div>
            <div className="dashboard__box--label">Vehicles</div>
          </div>
        </Link>
        <Link to="/category_dashboard">
          <div className="dashboard__box">
            <div className="dashboard__box--icon">
              <BiCategoryAlt />
            </div>
            <div className="dashboard__box--count">{categoryCount}</div>
            <div className="dashboard__box--label">Categories</div>
          </div>
        </Link>
        <Link to="/article_dashboard">
          <div className="dashboard__box">
            <div className="dashboard__box--icon">
              <ImBlog />
            </div>
            <div className="dashboard__box--count">{articleCount}</div>
            <div className="dashboard__box--label">Articles</div>
          </div>
        </Link>
        <Link to="/booking_dashboard">
          <div className="dashboard__box">
            <div className="dashboard__box--icon">
              <BsFillBookmarksFill />
            </div>
            <div className="dashboard__box--count">{bookingCount}</div>
            <div className="dashboard__box--label">Bookings</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
