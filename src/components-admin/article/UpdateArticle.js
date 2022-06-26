import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect, useState } from "react";

function UpdateArticle(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [rich_description, setRichDescription] = useState("");
  const [is_featured, setIsFeatured] = useState("");
  useEffect(() => {
    if (title === "") {
      setTitle(props.article.title);
    }
    if (date === "") {
      setDate(props.article.date);
    }
    if (description === "") {
      setDescription(props.article.description);
    }
    if (rich_description === "") {
      setRichDescription(props.article.rich_description);
    }
    if (is_featured === "") {
      setIsFeatured(props.article.is_featured);
    }
  }, []);

  const updateArticle = (e) => {
    e.preventDefault();
    const data = {
      _id: props.article._id,
      title: title,
      date: date,
      description: description,
      rich_description: rich_description,
      is_featured: is_featured,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios
      .put("http://localhost:90/article/update", data, config)
      .then((res) => {
        if (res.data.success === true) {
          window.location.replace("/article");
          console.log("Article Updated Successfully");
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
          Update Article
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
              defaultValue={props.article.title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Date</Form.Label>
            <Form.Control
              placeholder="Enter publish date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              defaultValue={props.article.date}
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
              defaultValue={props.article.description}
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
              defaultValue={props.article.rich_description}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Check
              type={"checkbox"}
              id={`default-checkbox`}
              label={`Featured Article`}
              defaultChecked={props.article.is_featured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={updateArticle}>
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

export default UpdateArticle;
