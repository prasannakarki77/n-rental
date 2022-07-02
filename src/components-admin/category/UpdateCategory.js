import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect, useState } from "react";

function UpdateCategory(props) {
  const [category_name, setCategoryName] = useState("");
  const [category_desc, setCategoryDesc] = useState("");
  useEffect(() => {
    if (category_name === "") {
      setCategoryName(props.category.category_name);
    }
    if (category_desc === "") {
      setCategoryDesc(props.category.category_desc);
    }
  }, []);

  const updateCategory = (e) => {
    e.preventDefault();
    const data = {
      _id: props.category._id,
      category_name: category_name,
      category_desc: category_desc,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios
      .put("http://localhost:90/category/update", data, config)
      .then((res) => {
        if (res.data.success === true) {
          window.location.replace("/category_dashboard");
          console.log("Category Updated Successfully");
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
          Update Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              placeholder="Enter article title"
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
              defaultValue={props.category.category_name}
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
              defaultValue={props.category.category_desc}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={updateCategory}>
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

export default UpdateCategory;
