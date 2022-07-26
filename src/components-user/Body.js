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
import BookingDashboard from "../components-admin/booking/BookingDashboard";
import Favourites from "./Favourites";
import AdminDashboard from "../components-admin/AdminDashboard";
const Body = () => {
  return (
    <>
      <div className="body-container">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vehicle" element={<Vehicle />} />
            <Route path="/vehicle/:id" element={<VehiclePage />} />
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
            <Route
              path="/user/myfavourites"
              element={
                <PrivateRoute>
                  <Favourites />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin_dashboard"
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />

            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  {" "}
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/article/single/:id" element={<ArticlePage />} />
            <Route
              path="/admin/settings"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/private" element={<PrivateRoute />} />
            <Route
              path="/category_dashboard"
              element={
                <PrivateRoute>
                  <CategoryDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/vehicle_dashboard"
              element={
                <PrivateRoute>
                  <VehicleDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/article_dashboard"
              element={
                <PrivateRoute>
                  <ArticleDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/booking_dashboard"
              element={
                <PrivateRoute>
                  <BookingDashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </ScrollToTop>
      </div>
    </>
  );
};

export default Body;
