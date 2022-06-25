import { Routes, Route } from "react-router-dom";
import ArticleDashboard from "./article/ArticleDashboard";
import Category from "./Category";
import AddVehicle from "./Dashboard";
import VehicleDashboard from "./vehicle/VehicleDashboard";

const AdminLayout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AddVehicle />} />
        <Route path="/category" element={<Category />} />
        <Route path="/vehicle" element={<VehicleDashboard />} />
        <Route path="/article" element={<ArticleDashboard />} />
      </Routes>
    </>
  );
};

export default AdminLayout;
