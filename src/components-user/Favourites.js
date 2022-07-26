import React from "react";
import { useEffect, useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { toast } from "react-toastify";
import { MdBookmarkAdded, MdBookmarkRemove } from "react-icons/md";
import "../styles/favourites.scss";
import axios from "axios";
import { Link } from "react-router-dom";
const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
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
  const deleteFavourite = (e, favouriteId) => {
    e.preventDefault();
    axios
      .delete("http://localhost:90/favourite/delete/" + favouriteId, config)
      .then((res) => {
        if (res.data.success === true) {
          window.location.reload("/user/myfavourites");
          toast.success("Removed From Favourites");
        } else {
          console.log("Please Try Again! Something Went Wrong!!!");
        }
        console.log(res.data);
      });
  };

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
                  <div className="favourite" key={favourite._id}>
                    <MdBookmarkRemove
                      className="favourite__remove-btn"
                      onClick={(e) => {
                        deleteFavourite(e, favourite._id);
                      }}
                    />

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
                          <button className="favourite__detail--view-details css-button-sliding-to-left--red">
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
