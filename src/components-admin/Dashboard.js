import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [details, setDetails] = useState("");
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:90/user/dashboard", config)
      .then((res) => {
        setDetails(res.data);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="dashboard-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>Dashboard</p>
              <p>Username: {details.username} </p>
              <p>Phone: {details.phone}</p>
              <p>Email: {details.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
