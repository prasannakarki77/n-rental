import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Vehicle from "./Vehicle";
import Blog from "./Blog";

import ArticlePage from "./ArticlePage";
import ScrollToTop from "../components/ScrollToTop";
import About from "./About";
import PrivateRoute from "../components/ProtectedRoute";
import VehiclePage from "./VehiclePage";
import CategoryDashboard from "../components-admin/category/CategoryDashboard";
import VehicleDashboard from "../components-admin/vehicle/VehicleDashboard";
import ArticleDashboard from "../components-admin/article/ArticleDashboard";
import Profile from "../components-admin/Profile";
import AddBookingForm from "./AddBookingForm";
import Bookings from "./Bookings";
const Body = () => {
  return (
    <>
      <div className="body-container">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/vehicle"
              element={
                <PrivateRoute>
                  <Vehicle />
                </PrivateRoute>
              }
            />
            <Route
              path="/vehicle/:id"
              element={
                <PrivateRoute>
                  <VehiclePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/vehicle/booking/:id"
              element={
                <PrivateRoute>
                  <AddBookingForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/mybookings"
              element={
                <PrivateRoute>
                  <Bookings />
                </PrivateRoute>
              }
            />

            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/article/single/:id" element={<ArticlePage />} />
            <Route path="/admin_dashboard" element={<Profile />} />
            <Route path="/private" element={<PrivateRoute />} />
            <Route path="/category_dashboard" element={<CategoryDashboard />} />
            <Route path="/vehicle_dashboard" element={<VehicleDashboard />} />
            <Route path="/article_dashboard" element={<ArticleDashboard />} />
          </Routes>
        </ScrollToTop>
      </div>
    </>
  );
};

export default Body;
