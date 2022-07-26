import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useEffect, useState } from "react";

function UpdateProfile(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (firstname === "") {
      setFirstname(props.profile.firstname);
    }
    if (lastname === "") {
      setLastname(props.profile.lastname);
    }
    if (address === "") {
      setAddress(props.profile.address);
    }
    if (phone === "") {
      setPhone(props.profile.phone);
    }
    if (gender === "") {
      setGender(props.profile.gender);
    }
    if (username === "") {
      setUsername(props.profile.username);
    }
    if (email === "") {
      setEmail(props.profile.email);
    }
  }, []);

  const updateProfile = (e) => {
    e.preventDefault();

    const data = {
      firstname: firstname,
      lastname: lastname,
      address: address,
      phone: phone,
      gender: gender,
      username: username,
      email: email,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios
      .put("http://localhost:90/user/update_profile", data, config)
      .then((res) => {
        if (res.data.success === true) {
          window.location.replace("/profile");
          console.log("Profile Updated Successfully");
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
          Update Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Vehicle Name</Form.Label>
            <Form.Control
              placeholder="Enter username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              defaultValue={props.profile.username}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                placeholder="Enter firstname"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                defaultValue={props.profile.firstname}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                placeholder="Enter lastname"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                defaultValue={props.profile.lastname}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                placeholder="Enter phone number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                defaultValue={props.profile.phone}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="Enter address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                defaultValue={props.profile.address}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                defaultValue={props.profile.email}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Gender</Form.Label>
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  label="Male"
                  name="group1"
                  type="radio"
                  onChange={(e) => {
                    setGender("Male");
                  }}
                  id={`inline-radio-1`}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="group1"
                  type="radio"
                  onChange={(e) => {
                    setGender("Female");
                  }}
                  id={`inline-radio-2`}
                />
                <Form.Check
                  inline
                  label="Other"
                  name="group1"
                  type="radio"
                  onChange={(e) => {
                    setGender("Other");
                  }}
                  id={`inline-radio-3`}
                />
              </div>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" onClick={updateProfile}>
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

export default UpdateProfile;
