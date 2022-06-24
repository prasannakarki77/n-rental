import { Routes, Route } from "react-router-dom";
import Category from "./Category";
import AddVehicle from "./Dashboard";
import UpdateVehicleForm from "./UpdateVehicleForm";

import VehicleDashboard from "./VehicleDashboard";

const AdminLayout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AddVehicle />} />
        <Route path="/category" element={<Category />} />
        <Route path="/vehicle" element={<VehicleDashboard />} />
        <Route path="/updatev/:id" element={<UpdateVehicleForm />} />
      </Routes>
    </>
  );
};

export default AdminLayout;
