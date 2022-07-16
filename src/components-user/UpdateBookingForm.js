import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useEffect, useState } from "react";

function UpdateBookingForm(props) {
  const [noOfDays, setNoOfDays] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (noOfDays === "") {
      setNoOfDays(props.booking.no_of_days);
    }
    if (date === "") {
      setDate(props.booking.booking_date);
      console.log(props.booking.booking_date);
    }
    if (time === "") {
      setTime(props.booking.booking_time);
    }
    if (contactNo === "") {
      setContactNo(props.booking.contact_no);
    }
    if (address === "") {
      setAddress(props.booking.address);
    }
  }, []);

  const updateBooking = (e) => {
    e.preventDefault();

    const data = {
      vehicle_id: props.booking.vehicle_id._id,
      no_of_days: noOfDays,
      booking_date: date,
      booking_time: time,
      contact_no: contactNo,
      address: address,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios
      .put(
        "http://localhost:90/booking/update/" + props.booking._id,
        data,
        config
      )
      .then((res) => {
        if (res.data.success === true) {
          window.location.replace("/user/mybookings");
          console.log("Booking Updated Successfully");
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Booking
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
              defaultValue={props.booking.no_of_days}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Booking Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Booking Date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                defaultValue={props.booking.booking_date}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Booking Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Booking Time"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                defaultValue={props.booking.booking_time}
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
                defaultValue={props.booking.address}
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
                defaultValue={props.booking.contact_no}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" onClick={updateBooking}>
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

export default UpdateBookingForm;
