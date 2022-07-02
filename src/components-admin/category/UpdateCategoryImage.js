import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useEffect, useState } from "react";

function UpdateCategoryImage(props) {
  const [category_image, setCategoryImage] = useState("");

  const updateCategoryImage = (e) => {
    e.preventDefault();
    console.log(props.category);
    const data = new FormData();
    data.append("_id", props.category._id);
    data.append("c_img", category_image);

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };
    axios
      .put("http://localhost:90/category/update_image", data, config)
      .then((res) => {
        if (res.data.success === true) {
          window.location.replace("/category_dashboard");
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
          Update Category Image
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select New Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                setCategoryImage(e.target.files[0]);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={updateCategoryImage}>
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

export default UpdateCategoryImage;
