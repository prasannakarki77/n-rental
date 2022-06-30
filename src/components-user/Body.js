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
const Body = () => {
  return (
    <>
      {/* <div className="body-container"> */}
      <div className="">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vehicle" element={<Vehicle />} />
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
