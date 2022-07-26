import React, { useEffect, useState } from "react";
import "../styles/vehicle_page.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AddBookingForm from "./AddBookingForm";
import { MdRateReview, MdBookmarkAdd } from "react-icons/md";
import user_icon from "../images/user_icon.png";
import Rating from "@mui/material/Rating";
const VehiclePage = () => {
  const [vehicle, setVehicle] = useState([]);
  const [addForm, setAddFormShow] = useState(false);
  const [reviews, setReviews] = useState([]);
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
    axios
      .get("http://localhost:90/review/get/" + id)
      .then((res) => {
        setReviews(res.data.data);
        console.log(reviews);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const addFavourite = (e) => {
    e.preventDefault();
    if (localStorage.getItem("userToken") == null) {
      window.location.replace("/login");
    } else {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
      };
      const data = {};
      axios
        .post(
          "http://localhost:90/favourite/insert/" + vehicle._id,
          data,
          config
        )
        .then((res) => {
          console.log(res);
          if (res.data.success === true) {
            console.log("Favourite Added Successfully");
            toast.success("Added to Favourites");
          } else {
            console.log("Please Try Again! Something Went Wrong!!!");
            toast.error("Failed");
          }
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <>
      <div className="vehicle">
        <AddBookingForm
          show={addForm}
          onHide={() => setAddFormShow(false)}
          vehicle_id={vehicle._id}
        />

        <div className="vehicle__image">
          <img
            src={"http://localhost:90/" + vehicle.vehicle_image}
            alt="bike"
          />
          <div></div>
          <MdBookmarkAdd className="bookmark" onClick={addFavourite} />
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

          <button
            className="vehicle__book-btn"
            onClick={() => setAddFormShow(true)}
          >
            Book now
          </button>
        </div>
      </div>
      <div className="reviews-container">
        <h3>
          <MdRateReview /> Reviews
        </h3>

        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="review">
              <div className="review__user">
                <div>
                  <img
                    className="review__user--image"
                    src={
                      review.user_id.profile_img
                        ? `http://localhost:90/${review.user_id.profile_img}`
                        : user_icon
                    }
                    alt="user"
                  />
                </div>
                <span className="review__user--name">
                  {review.user_id.username}
                </span>
              </div>
              <span className="review__rating">
                {
                  <Rating
                    name="read-only"
                    value={review.rating}
                    className="review__rating--stars"
                    readOnly
                  />
                }
              </span>
              <p className="review__text">{review.review}</p>
            </div>
          ))
        ) : (
          <p>No Reviews yet.</p>
        )}
      </div>
    </>
  );
};

export default VehiclePage;
