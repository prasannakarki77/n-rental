import "../styles/vehicle.scss";
import { BiSearchAlt } from "react-icons/bi";
import car_red from "../images/car-red.png";
import bike_red from "../images/bike-red.png";
import bus_red from "../images/bus-red.png";
import van_red from "../images/van-red.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiViewGrid } from "react-icons/hi";
import axios from "axios";
import { BsFillBookmarkFill } from "react-icons/bs";
const Vehicle = () => {
  const [vehicleList, setVehicleList] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
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

  const filterByCategory = (category) => {
    axios
      .get("http://localhost:90/vehicle/filter/" + category)
      .then((res) => {
        setVehicleList(res.data.data);
        console.log(vehicleList);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const loadAll = () => {
    axios
      .get("http://localhost:90/vehicle/get", config)
      .then((res) => {
        setVehicleList(res.data.data);
        console.log(vehicleList);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="search">
        <div className="search__field">
          <input
            type="text"
            placeholder="Search Vehicle"
            className="search__box"
            onChange={(e) => setQuery(e.target.value)}
          />

          <BiSearchAlt />
        </div>

        <div className="search__categories">
          <div
            className="search__category"
            onClick={(e) => filterByCategory("Car")}
          >
            <img src={car_red} alt="car" className="search__category--logo" />
            <span className="search__category--name">Car</span>
          </div>
          <div
            className="search__category"
            onClick={(e) => filterByCategory("Bike")}
          >
            <img src={bike_red} alt="car" className="search__category--logo" />
            <span className="search__category--name">Bike</span>
          </div>
          <div
            className="search__category"
            onClick={(e) => filterByCategory("Bus")}
          >
            <img src={bus_red} alt="car" className="search__category--logo" />
            <span className="search__category--name">Bus</span>
          </div>
          <div
            className="search__category"
            onClick={(e) => filterByCategory("Van")}
          >
            <img src={van_red} alt="car" className="search__category--logo" />
            <span className="search__category--name">Van</span>
          </div>
          <div className="search__category" onClick={(e) => loadAll()}>
            <HiViewGrid />
            <span className="search__category--name">View All</span>
          </div>
        </div>
      </div>
      <section className="featured">
        <div className="featured__vehicles">
          {vehicleList
            .filter((vehicle) =>
              vehicle.vehicle_name.toLowerCase().includes(query)
            )
            .map((vehicle) => (
              <div className="vehicle-card" key={vehicle._id}>
                <div className="vehicle-card__img">
                  <img
                    src={`http://localhost:90/${vehicle.vehicle_image}`}
                    alt="vehicle"
                  />
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
