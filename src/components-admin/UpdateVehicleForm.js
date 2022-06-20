import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useState } from "react";

function UpdateVehicleForm(props) {
  const [vehicleName, setVehicleName] = useState(
    `${props.vehicle.vehicle_name}`
  );
  const [category, setCategory] = useState(`${props.vehicle.vehicle_category}`);
  const [company, setCompany] = useState(`${props.vehicle.vehicle_company}`);
  const [description, setDescription] = useState(
    `${props.vehicle.vehicle_desc}`
  );
  const [cost, setCost] = useState(`${props.vehicle.booking_cost}`);
  const [sku, setSku] = useState(`${props.vehicle.vehicle_sku}`);
  const [image, setImage] = useState("");

  const updateVehicle = (e) => {
    e.preventDefault();
    // if data is only text
    // const data = {
    //   vehicle_name: vehicleName,
    //   vehicle_category: category,
    //   vehicle_company: company,
    //   vehicle_desc: description,
    //   booking_cost: cost,
    //   vehicle_sku: sku,
    // };
    const data = new FormData();
    data.append("_id", props.vehicle._id);
    data.append("vehicle_name", vehicleName);
    data.append("vehicle_category", category);
    data.append("vehicle_company", company);
    data.append("vehicle_desc", description);
    data.append("booking_cost", cost);
    data.append("vehicle_sku", sku);
    if (image !== "") {
      data.append("v_img", image);
    }

    console.log(props.vehicle);
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };
    axios
      .put("http://localhost:90/vehicle/update", data, config)
      .then((res) => {
        if (res.data.success === true) {
          console.log("Vehicle Updated Successfully");
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
          Update Vehicle
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Vehicle Name</Form.Label>
            <Form.Control
              placeholder="Enter vehicle name"
              onChange={(e) => {
                setVehicleName(e.target.value);
              }}
              defaultValue={props.vehicle.vehicle_name}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Category</Form.Label>
              <Form.Control
                placeholder="Enter category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                defaultValue={props.vehicle.vehicle_category}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Company</Form.Label>
              <Form.Control
                placeholder="Enter company name"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                defaultValue={props.vehicle.vehicle_company}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Enter description"
              as="textarea"
              rows={3}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              defaultValue={props.vehicle.vehicle_desc}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Booking Cost</Form.Label>
              <Form.Control
                placeholder="Rs. ____"
                onChange={(e) => {
                  setCost(e.target.value);
                }}
                defaultValue={props.vehicle.booking_cost}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>SKU</Form.Label>
              <Form.Control
                placeholder="Enter sku code"
                onChange={(e) => {
                  setSku(e.target.value);
                }}
                defaultValue={props.vehicle.vehicle_sku}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridState">
            <Form.Label>Current Image</Form.Label>
            <Form.Control
              onChange={(e) => {
                setSku(e.target.value);
              }}
              defaultValue={props.vehicle.vehicle_image}
              disabled
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select New Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={updateVehicle}>
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

export default UpdateVehicleForm;
