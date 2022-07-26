import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect, useState } from "react";

function UpdateBookingStatus(props) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status === "") {
      setStatus(props.booking.status);
    }
  }, []);

  const UpdateBookingStatus = (e) => {
    e.preventDefault();
    const data = {
      status: status,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios
      .put(
        "http://localhost:90/booking/update/status/" + props.booking._id,
        data,
        config
      )
      .then((res) => {
        if (res.data.success === true) {
          window.location.replace("/booking_dashboard");
          console.log("Booking Status Updated Successfully");
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
          Update Booking Status
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formGridCategory" className="mb-4">
            <Form.Label>Booking Status</Form.Label>
            <Form.Select
              defaultValue={props.booking.status}
              aria-label="Default select example"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value={"pending"}>pending</option>
              <option value={"renting"}>renting</option>
              <option value={"expired"}>expired</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={UpdateBookingStatus}>
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

export default UpdateBookingStatus;
