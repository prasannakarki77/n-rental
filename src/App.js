import { BrowserRouter } from "react-router-dom";
import Body from "./components-user/Body";
import Header from "./components-user/Header";
import Footer from "./components-user/Footer";

import AdminNav from "./components-admin/AdminNav";
import AdminLayout from "./components-admin/AdminLayout";
import AdminPage from "./components-admin/AdminPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
      {/* <BrowserRouter>
        <AdminNav />
        <AdminDashboard />
      </BrowserRouter> */}
      {/* <AdminPage /> */}
    </>
  );
}

export default App;
