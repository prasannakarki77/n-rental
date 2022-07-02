import axios from "axios";
import { useEffect, useState } from "react";
import car_drive from "../images/car-drive.png";
import "../styles/profile.scss";
import { FaUserAlt, FaKey } from "react-icons/fa";
import { MdEmail, MdAddPhotoAlternate } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Profile = () => {
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

  const logout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  return (
    <>
      {/* <div className="dashboard-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>Dashboard</p>
              <p>Username: {details.username} </p>
              <p>Firstname: {details.firstname} </p>
              <p>Lastname: {details.lastname} </p>
              <p>Phone: {details.phone}</p>
              <p>Email: {details.email}</p>
              <button className="btn btn-primary me-2"> Update Profile</button>
              <button onClick={logout} className="btn btn-danger">
                {" "}
                Logout
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="profile">
        <div className="profile__image">
          <MdAddPhotoAlternate />
          <img src={car_drive} alt="profile_image" />
        </div>
        <div className="profile__details container">
          <p>My Profile</p>

          <div className="profile__detail">
            <p className="profile__detail--label">Username</p>
            <p className="profile__detail--value">
              {" "}
              <FaUserAlt className="me-2" />
              {details.username}
            </p>
          </div>
          <div className="row">
            <div className="profile__detail col-md-6">
              <p className="profile__detail--label">Firstname</p>
              <p className="profile__detail--value">
                {" "}
                <FaUserAlt className="me-2" />
                {details.firstname ? details.firstname : "----------"}
              </p>
            </div>
            <div className="profile__detail col-md-6">
              <p className="profile__detail--label">Lastname</p>
              <p className="profile__detail--value">
                <FaUserAlt className="me-2" />{" "}
                {details.lastname ? details.lastname : "----------"}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="profile__detail col-md-6">
              <p className="profile__detail--label">Address</p>
              <p className="profile__detail--value">
                <FaUserAlt className="me-2" />{" "}
                {details.address ? details.address : "----------"}
              </p>
            </div>
            <div className="profile__detail col-md-6">
              <p className="profile__detail--label">Gender</p>
              <p className="profile__detail--value">
                <FaUserAlt className="me-2" />{" "}
                {details.gender ? details.gender : "----------"}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="profile__detail col-md-6">
              <p className="profile__detail--label">Email</p>
              <p className="profile__detail--value">
                <MdEmail className="me-2" />{" "}
                {details.email ? details.email : "----------"}
              </p>
            </div>
            <div className="profile__detail col-md-6">
              <p className="profile__detail--label">Phone</p>
              <p className="profile__detail--value">
                <BsTelephoneFill className="me-2" />{" "}
                {details.phone ? details.phone : "----------"}
              </p>
            </div>
          </div>
          {/* <p>Username: {details.username} </p>
          <p>Firstname: {details.firstname} </p>
          <p>Lastname: {details.lastname} </p>
          <p>Phone: {details.phone}</p>
          <p>Email: {details.email}</p> */}
          <div className="row">
            <div className="col-md-6">
              {" "}
              <button className="btn btn-primary me-2 profile__btn">
                {" "}
                Update Profile
              </button>
            </div>
            <div className="col-md-6">
              {" "}
              <button onClick={logout} className="btn btn-danger profile__btn">
                {" "}
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
