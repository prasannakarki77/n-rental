import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
function DeleteBooking(props) {
  console.log(props.booking);
  const id = props.booking._id;

  const deleteBooking = (e) => {
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
          window.location.replace("/booking_dashboard");
          console.log("Booking Deleted Successfully");
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
        <h5>Are you sure you want to delete this booking?</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={deleteBooking}>Yes</Button>
        <Button className="btn-danger" onClick={props.onHide}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteBooking;
