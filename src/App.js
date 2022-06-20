import { BrowserRouter } from "react-router-dom";
import Body from "./components-user/Body";
import Header from "./components-user/Header";
import Footer from "./components-user/Footer";

import AdminNav from "./components-admin/AdminNav";
import AdminLayout from "./components-admin/AdminLayout";
import AdminPage from "./components-admin/AdminPage";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter> */}
      {/* <BrowserRouter>
        <AdminNav />
        <AdminDashboard />
      </BrowserRouter> */}
      <AdminPage />
    </>
  );
}

export default App;
