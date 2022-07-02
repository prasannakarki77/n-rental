import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useState } from "react";

function AddVehicleForm(props) {
  const [vehicleName, setVehicleName] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [richDescription, setRichDescription] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [cost, setCost] = useState("");
  const [sku, setSku] = useState("");
  const [image, setImage] = useState("");

  const insertVehicle = (e) => {
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
    data.append("vehicle_name", vehicleName);
    data.append("vehicle_category", category);
    data.append("vehicle_company", company);
    data.append("vehicle_desc", description);
    data.append("vehicle_rich_desc", richDescription);
    data.append("is_featured", isFeatured);
    data.append("booking_cost", cost);
    data.append("vehicle_sku", sku);
    data.append("v_img", image);
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };
    axios
      .post("http://localhost:90/vehicle/insert", data, config)
      .then((res) => {
        if (res.data.success === true) {
          console.log("Vehicle Added Successfully");
          window.location.replace("/vehicle_dashboard");
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
          Add Vehicle
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
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option>Select category</option>
                {props.categoryList.map((data) => (
                  <option value={`${data.category_name}`}>
                    {data.category_name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Company</Form.Label>
              <Form.Control
                placeholder="Enter company name"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Enter description"
              as="textarea"
              rows={2}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Rich Description</Form.Label>
            <Form.Control
              placeholder="Enter rich description"
              as="textarea"
              rows={4}
              onChange={(e) => {
                setRichDescription(e.target.value);
              }}
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
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>SKU</Form.Label>
              <Form.Control
                placeholder="Enter sku code"
                onChange={(e) => {
                  setSku(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Check
              type={"checkbox"}
              id={`default-checkbox`}
              label={`Featured Vehicle`}
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={insertVehicle}>
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

export default AddVehicleForm;
