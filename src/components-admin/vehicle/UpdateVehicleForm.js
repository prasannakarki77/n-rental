import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useEffect, useState } from "react";
import UpdateVehicleImage from "./UpdatVehicleImage";

function UpdateVehicleForm(props) {
  const [vehicleName, setVehicleName] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [richDescription, setRichDescription] = useState("");
  const [cost, setCost] = useState("");
  const [sku, setSku] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);

  useEffect(() => {
    if (vehicleName === "") {
      setVehicleName(props.vehicle.vehicle_name);
    }
    if (category === "") {
      setCategory(props.vehicle.vehicle_category);
    }
    if (company === "") {
      setCompany(props.vehicle.vehicle_company);
    }
    if (description === "") {
      setDescription(props.vehicle.vehicle_desc);
    }
    if (cost === "") {
      setCost(props.vehicle.booking_cost);
    }
    if (sku === "") {
      setSku(props.vehicle.vehicle_sku);
    }
    if (richDescription === "") {
      setRichDescription(props.vehicle.vehicle_rich_desc);
    }
    if (isFeatured === "") {
      setIsFeatured(props.vehicle.is_featured);
    }
  }, []);

  const updateVehicle = (e) => {
    e.preventDefault();
    // console.log(vehicleName);
    // console.log(vehicleName == "");
    // if (vehicleName == "") {
    //   console.log("vehicleName is empty");
    //   console.log(props.vehicle.vehicle_name);
    //   var name = props.vehicle.vehicle_name;
    //   console.log(name);
    //   setVehicleName(name);
    //   console.log(vehicleName);
    // }

    const data = {
      _id: props.vehicle._id,
      vehicle_name: vehicleName,
      vehicle_category: category,
      vehicle_company: company,
      vehicle_desc: description,
      booking_cost: cost,
      vehicle_sku: sku,
      vehicle_rich_desc: richDescription,
      is_featured: isFeatured,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios
      .put("http://localhost:90/vehicle/update", data, config)
      .then((res) => {
        if (res.data.success === true) {
          window.location.replace("/vehicle");
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
            {/* <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Category</Form.Label>
              <Form.Control
                placeholder="Enter category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                defaultValue={props.vehicle.vehicle_category}
              />
            </Form.Group> */}
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select
                defaultValue={props.vehicle.vehicle_category}
                aria-label="Default select example"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Rich Description</Form.Label>
            <Form.Control
              placeholder="Enter rich description"
              as="textarea"
              rows={4}
              onChange={(e) => {
                setRichDescription(e.target.value);
              }}
              defaultValue={props.vehicle.vehicle_rich_desc}
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
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Check
              type={"checkbox"}
              id={`default-checkbox`}
              label={`Featured Vehicle`}
              defaultChecked={props.vehicle.is_featured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formGridState">
            <Form.Label>Current Image</Form.Label>
            <div className="image-update">
              <Form.Control
                defaultValue={props.vehicle.vehicle_image}
                disabled
                className="image-update__field"
              />{" "}
              <Button
                variant="secondary"
                type="submit"
                className="image-update__btn ms-2"
              >
                Change Image
              </Button>
            </div>
          </Form.Group> */}

          {/* <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select New Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </Form.Group> */}

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
