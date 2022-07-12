import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
function AddBookingForm(props) {
  const [noOfDays, setNoOfDays] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const addBooking = (e) => {
    e.preventDefault();
    const data = {
      no_of_days: noOfDays,
      booking_date: bookingDate,
      booking_time: bookingTime,
      address: address,
      contact_no: contactNo,
    };
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };
    axios
      .post("http://localhost:90/booking/add/" + props.vehicle_id, data, config)
      .then((res) => {
        if (res.data.success === true) {
          toast.success("Vehicle Booked Successfully");
          window.location.replace("/user/mybookings");
        } else {
          toast.error("Please Try Again! Something Went Wrong!!!");
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book Vehicle
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>No of. days</Form.Label>
            <Form.Control
              type="text"
              placeholder="No of. days"
              onChange={(e) => {
                setNoOfDays(e.target.value);
              }}
            />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Booking Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Booking Date"
                onChange={(e) => {
                  setBookingDate(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Booking Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Booking Time"
                onChange={(e) => {
                  setBookingTime(e.target.value);
                }}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="address"
                placeholder="Enter the address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the contact no."
                onChange={(e) => {
                  setContactNo(e.target.value);
                }}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" onClick={addBooking}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddBookingForm;
