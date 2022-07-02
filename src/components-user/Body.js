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
              path="/vehicle_page"
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
          </Routes>
        </ScrollToTop>
      </div>
    </>
  );
};

export default Body;
