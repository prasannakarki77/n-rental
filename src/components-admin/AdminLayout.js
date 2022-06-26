import { Routes, Route } from "react-router-dom";
import ArticleDashboard from "./article/ArticleDashboard";

import CategoryDashboard from "./category/CategoryDashboard";
import AddVehicle from "./Dashboard";
import VehicleDashboard from "./vehicle/VehicleDashboard";

const AdminLayout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AddVehicle />} />
        <Route path="/category" element={<CategoryDashboard />} />
        <Route path="/vehicle" element={<VehicleDashboard />} />
        <Route path="/article" element={<ArticleDashboard />} />
      </Routes>
    </>
  );
};

export default AdminLayout;
