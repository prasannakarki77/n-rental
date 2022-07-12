import React from "react";
import { useEffect, useState } from "react";
import { FaPenAlt } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import "../styles/booking.scss";
import axios from "axios";
import CancelBooking from "./CancelBooking";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [deletePopup, setDeletePopUp] = useState(false);
  const [booking, setBooking] = useState([]);
  const deleteHandler = (booking) => {
    setBooking(booking);
    setDeletePopUp(true);
  };
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:90/user/booking/get", config)
      .then((res) => {
        console.log(res.data);
        setBookings(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div className="bookings">
        <CancelBooking
          show={deletePopup}
          onHide={() => setDeletePopUp(false)}
          booking={booking}
        />
        <div className="bookings__title">
          <span className="bookings__title--text">My Bookings</span>
        </div>
        <div className="booking-container">
          {bookings.map((booking) => {
            if (booking != null) {
              return (
                <div className="booking">
                  <div className="booking__img">
                    <img
                      src={
                        "http://localhost:90/" +
                        booking.vehicle_id.vehicle_image
                      }
                      alt="booking_image"
                    />
                  </div>
                  <div className="booking__detail">
                    <div className="booking__detail--vehicle-name">
                      <span className="booking__detail--title">Vehicle: </span>
                      {booking.vehicle_id.vehicle_name}
                    </div>
                    <div className="booking__detail--vehicle-desc">
                      <span className="booking__detail--title">
                        Description: <br />
                      </span>
                      {booking.vehicle_id.vehicle_desc}
                    </div>
                    <div className="booking__detail--vehicle-cost">
                      <span className="booking__detail--title">
                        Booking Cost:{" "}
                      </span>{" "}
                      <span>Rs {booking.vehicle_id.booking_cost}</span>/day
                    </div>
                    <div className="booking__detail--days">
                      <span className="booking__detail--title">
                        No of Days:{" "}
                      </span>
                      {booking.no_of_days}2
                    </div>
                    <div className="booking__detail--date">
                      <span className="booking__detail--title">
                        Date and Time:{" "}
                      </span>
                      <span>
                        {booking.booking_date}, {booking.booking_time}
                      </span>
                    </div>
                    <div className="booking__detail--contact">
                      <span className="booking__detail--title">
                        Contact No:{" "}
                      </span>
                      <span>{booking.contact_no}</span>
                    </div>
                    <div className="booking__detail--address">
                      <span className="booking__detail--title">Address: </span>
                      {booking.address}
                    </div>
                    <div className="booking__detail--status">
                      <span className="booking__detail--title">Status: </span>
                      {booking.status}
                    </div>
                    <div className="booking__detail--btns">
                      <div>
                        {" "}
                        <button className="booking__add-review">
                          Add Review <FaPenAlt />
                        </button>
                      </div>
                      <div>
                        <button
                          className="booking__cancel-btn"
                          onClick={() => deleteHandler(booking)}
                        >
                          Cancel Booking <FcCancel />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return <p>No data</p>;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Bookings;
