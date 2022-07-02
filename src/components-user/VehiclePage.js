import React, { useEffect, useState } from "react";
import "../styles/vehicle_page.scss";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
const VehiclePage = () => {
  const [vehicle, setVehicle] = useState([]);
  const [bookmarkStatus, setBookmarkStatus] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:90/vehicle/" + id)
      .then((res) => {
        setVehicle(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const bookmarkHandler = (e) => {
    e.preventDefault();
    setBookmarkStatus((p) => !p);
  };
  return (
    <div className="vehicle">
      <>
        <div className="vehicle__image">
          <img
            src={"http://localhost:90/" + vehicle.vehicle_image}
            alt="bike"
          />
          <BsFillBookmarkFill
            className={`bookmark ${
              bookmarkStatus ? "bookmark--select" : "bookmark-unselect"
            }`}
            onClick={bookmarkHandler}
          />
        </div>
        <div className="vehicle__details">
          <div className="vehicle__name">{vehicle.vehicle_name}</div>
          <div className="vehicle__desc">{vehicle.vehicle_rich_desc}</div>
          <div className="vehicle__cost">
            {" "}
            <span className="vehicle__cost--rs">
              Rs. {vehicle.booking_cost}
            </span>{" "}
            / day
          </div>

          <button className="vehicle__book-btn">Book now</button>
        </div>
      </>
    </div>
  );
};

export default VehiclePage;
