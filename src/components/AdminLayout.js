import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
const AdminLayout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default AdminLayout;
