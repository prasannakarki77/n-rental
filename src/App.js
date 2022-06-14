import { BrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";

import AdminNav from "./components/AdminNav";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./components/AdminDashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
      {/* <BrowserRouter>
        <AdminNav />
        <AdminDashboard />
      </BrowserRouter> */}
    </>
  );
}

export default App;
