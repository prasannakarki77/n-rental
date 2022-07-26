import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useState } from "react";

function AddArticle(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [rich_description, setRichDescription] = useState("");
  const [image, setImage] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const insertArticle = (e) => {
    console.log(isFeatured);
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
    data.append("title", title);
    data.append("date", date);
    data.append("description", description);
    data.append("rich_description", rich_description);
    data.append("a_img", image);
    data.append("is_featured", isFeatured);
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };
    axios
      .post("http://localhost:90/article/insert", data, config)
      .then((res) => {
        if (res.data.success === true) {
          console.log("Article Added Successfully");
          window.location.replace("/article_dashboard");
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
          Add Article
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Article Title</Form.Label>
            <Form.Control
              placeholder="Enter article title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Date</Form.Label>
            <Form.Control
              placeholder="Enter publish date"
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Enter description"
              as="textarea"
              rows={3}
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
              rows={6}
              onChange={(e) => {
                setRichDescription(e.target.value);
              }}
            />
          </Form.Group>

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
              label={`Featured Article`}
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={insertArticle}>
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

export default AddArticle;
