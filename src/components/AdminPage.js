import AdminNav from "./AdminNav";

import { BrowserRouter } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import "../styles/admin-dashboard.scss";

const AdminPage = () => {
  return (
    <>
      <div className="dashboard-container bg-light">
        <BrowserRouter>
          <AdminNav />
          <AdminLayout />
        </BrowserRouter>
      </div>
    </>
  );
};

export default AdminPage;
