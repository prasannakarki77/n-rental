import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";

function UpdateVehicleImage(props) {
  const [image, setImage] = useState("");

  const updateVehicleImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("_id", props.vehicle._id);
    data.append("v_img", image);
    console.log(data);
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };
    axios
      .put("http://localhost:90/vehicle/update_image", data, config)
      .then((res) => {
        if (res.data.success === true) {
          window.location.replace("/vehicle_dashboard");
          console.log("Vehicle Image Updated Successfully");
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
          Update Vehicle Image
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select New Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={updateVehicleImage}>
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

export default UpdateVehicleImage;
