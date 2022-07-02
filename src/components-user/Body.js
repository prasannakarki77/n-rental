import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Vehicle from "./Vehicle";
import Blog from "./Blog";
import Dashboard from "../components-admin/Dashboard";
import ArticlePage from "./ArticlePage";
import ScrollToTop from "../components/ScrollToTop";
import About from "./About";
import PrivateRoute from "../components/ProtectedRoute";
import VehiclePage from "./VehiclePage";
import CategoryDashboard from "../components-admin/category/CategoryDashboard";
import VehicleDashboard from "../components-admin/vehicle/VehicleDashboard";
import ArticleDashboard from "../components-admin/article/ArticleDashboard";
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

            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/article/single/:id" element={<ArticlePage />} />
            <Route path="/admin_dashboard" element={<Dashboard />} />
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
