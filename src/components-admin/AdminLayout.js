import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/ProtectedRoute";
import ArticleDashboard from "./article/ArticleDashboard";

import CategoryDashboard from "./category/CategoryDashboard";
import Profile from "./Profile";

import VehicleDashboard from "./vehicle/VehicleDashboard";

const AdminLayout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/private" element={<PrivateRoute />} />
        <Route
          path="/category"
          element={
            <PrivateRoute>
              <CategoryDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/vehicle" element={<VehicleDashboard />} />
        <Route path="/article" element={<ArticleDashboard />} />
      </Routes>
    </>
  );
};

export default AdminLayout;
