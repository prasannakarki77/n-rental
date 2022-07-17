import React from "react";
import { useEffect, useState } from "react";
import { FaPenAlt } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";
import { AiFillCar, AiFillCaretRight } from "react-icons/ai";
import {
  MdOutlineEditNote,
  MdBookmarkAdded,
  MdBookmarkRemove,
} from "react-icons/md";
import "../styles/favourites.scss";
import axios from "axios";
import { Link } from "react-router-dom";
const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [vehicleId, setVehicleId] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:90/favourite/get", config)
      .then((res) => {
        console.log(res.data);
        setFavourites(res.data.data);
        console.log(favourites);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div className="favourites">
        <div className="favourites__title">
          <span className="favourites__title--text">
            <MdBookmarkAdded /> My Favourites
          </span>
        </div>
        <div className="favourite-container">
          {favourites.length > 0 ? (
            favourites.map((favourite) => {
              if (favourite != null) {
                return (
                  <div className="favourite">
                    <MdBookmarkRemove className="favourite__remove-btn" />

                    <div className="favourite__img">
                      <img
                        src={
                          "http://localhost:90/" +
                          favourite.vehicle_id.vehicle_image
                        }
                        alt="favourite_image"
                      />
                    </div>
                    <div className="favourite__detail">
                      <div className="favourite__detail--vehicle-name">
                        {favourite.vehicle_id.vehicle_name}
                      </div>
                      <div className="favourite__detail--vehicle-desc">
                        <span className="favourite__detail--title">
                          Description: <br />
                        </span>
                        {favourite.vehicle_id.vehicle_desc}
                      </div>
                      <div className="favourite__detail--vehicle-cost">
                        <span className="vehicle__cost--rs">
                          Rs {favourite.vehicle_id.booking_cost}
                        </span>{" "}
                        / day
                      </div>
                      <div className="d-flex justify-content-end">
                        <Link to={"/vehicle/" + favourite.vehicle_id._id}>
                          <button
                            className="favourite__detail--view-details css-button-sliding-to-left--red"
                            // onClick={() => updateBookingHandler(booking)}
                          >
                            View Details <AiFillCaretRight />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return <p>No data</p>;
              }
            })
          ) : (
            <p className="text-center">No any Bookings</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Favourites;
