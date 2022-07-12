import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
function AddReview(props) {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [value, setValue] = useState(1);
  const addReview = (e) => {
    e.preventDefault();
    const data = {
      rating: rating,
      review: review,
    };
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };
    axios
      .post(
        "http://localhost:90/review/insert/" + props.vehicle_id,
        data,
        config
      )
      .then((res) => {
        if (res.data.success === true) {
          toast.success("Review Added Successfully");
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
        <Modal.Title id="contained-modal-title-vcenter">Add Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              placeholder="Rating"
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
          </Form.Group> */}
          <div className="text-center">
            <Typography component="legend" className="mb-2">
              Rate it!!
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(e, newValue) => {
                setValue(newValue);
                setRating(newValue);
              }}
            />
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Review"
              onChange={(e) => {
                setReview(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={addReview}>
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

export default AddReview;
