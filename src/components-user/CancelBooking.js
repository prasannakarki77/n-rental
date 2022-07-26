import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {toast } from "react-toastify";
const CancelBooking = (props) => {
  const id = props.booking._id;

  const cancelBooking = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios
      .delete(`http://localhost:90/booking/delete/${id}`, config)
      .then((res) => {
        if (res.data.success === true) {
          window.location.replace("/user/mybookings");
          console.log("Booking Canceled");
          toast.success("Booking Canceled");
        } else {
          console.log("Please Try Again! Something Went Wrong!!!");
        }
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h5>Are you sure you want to cancel this booking?</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={cancelBooking}>Yes</Button>
        <Button className="btn-danger" onClick={props.onHide}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CancelBooking;
