import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Vehicle from "./Vehicle";
import Blog from "./Blog";
import AddVehicle from "./Dashboard";
import GetUser from "./Dashboard";
import Dashboard from "./Dashboard";
const Body = () => {
  return (
    <>
      <div className="body-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
};

export default Body;
