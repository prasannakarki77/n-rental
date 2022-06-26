import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";

function AddCategory(props) {
  const [category_name, setCategoryName] = useState("");
  const [category_desc, setCategoryDesc] = useState("");
  const [category_image, setCategoryImage] = useState("");
  const insertCategory = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("category_name", category_name);
    data.append("category_desc", category_desc);
    data.append("c_img", category_image);

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };
    axios
      .post("http://localhost:90/category/insert", data, config)
      .then((res) => {
        if (res.data.success === true) {
          console.log("Category Added Successfully");
          window.location.replace("/category");
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
          Add Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              placeholder="Enter category name"
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Enter category description"
              as="textarea"
              rows={4}
              onChange={(e) => {
                setCategoryDesc(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Category Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                setCategoryImage(e.target.files[0]);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={insertCategory}>
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

export default AddCategory;
