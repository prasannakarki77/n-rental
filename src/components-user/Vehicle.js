import "../styles/vehicle.scss";
import { BiSearchAlt } from "react-icons/bi";
import car_red from "../images/car-red.png";
import bike_red from "../images/bike-red.png";
import bus_red from "../images/bus-red.png";
import van_red from "../images/van-red.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BsFillBookmarkFill } from "react-icons/bs";
const Vehicle = () => {
  const [vehicleList, setVehicleList] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:90/vehicle/get", config)
      .then((res) => {
        setVehicleList(res.data.data);
        console.log(vehicleList);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div className="search">
        <div className="search__field">
          <input
            type="text"
            placeholder="Search Vehicle"
            className="search__box"
          />
          <BiSearchAlt />
        </div>
        <div className="search__categories">
          <div className="search__category">
            <img src={car_red} alt="car" className="search__category--logo" />
            <span className="search__category--name">Car</span>
          </div>
          <div className="search__category">
            <img src={bike_red} alt="car" className="search__category--logo" />
            <span className="search__category--name">Bike</span>
          </div>
          <div className="search__category">
            <img src={bus_red} alt="car" className="search__category--logo" />
            <span className="search__category--name">Bus</span>
          </div>
          <div className="search__category">
            <img src={van_red} alt="car" className="search__category--logo" />
            <span className="search__category--name">Van</span>
          </div>
        </div>
      </div>
      <section className="featured">
        <div className="featured__vehicles">
          {vehicleList.map((vehicle) => (
            <div className="vehicle-card" key={vehicle._id}>
              <div className="vehicle-card__img">
                <img
                  src={`http://localhost:90/${vehicle.vehicle_image}`}
                  alt="vehicle"
                />
                <BsFillBookmarkFill className="bookmark" />
              </div>
              <div className="vehicle-card__name">{vehicle.vehicle_name}</div>
              <div className="vehicle-card__desc">{vehicle.vehicle_desc}</div>
              <div className="vehicle-card__bookcost">
                <span className="vehicle-card__bookcost--rs">
                  Rs {vehicle.booking_cost}{" "}
                </span>
                / day
              </div>
              <Link to={"/vehicle/" + vehicle._id}>
                <button className="vehicle-card__btn">Book now</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Vehicle;
