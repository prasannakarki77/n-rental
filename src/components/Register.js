import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/register.scss";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      email: email,
      phone: phone,
      password: password,
    };
    axios
      .post("http://localhost:90/user/register", data)
      .then((res) => {
        console.log(res);
      })
      .catch();
  };

  return (
    <>
      <div className="register-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="register-container__wave"
        >
          <path
            fill="#ff5500"
            fill-opacity="1"
            d="M0,96L34.3,90.7C68.6,85,137,75,206,96C274.3,117,343,171,411,181.3C480,192,549,160,617,122.7C685.7,85,754,43,823,37.3C891.4,32,960,64,1029,96C1097.1,128,1166,160,1234,181.3C1302.9,203,1371,213,1406,218.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
        <form className="register">
          <div className="register__username ">
            <FaUserAlt />
            <input
              type="text"
              placeholder="Username"
              className="register__form-field"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="register__email">
            <MdEmail />
            <input
              type="email"
              placeholder="Email"
              className="register__form-field"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="register__phone">
            <BsTelephoneFill />
            <input
              type="number"
              placeholder="Phone"
              className="register__form-field"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="register__password">
            <FaKey />
            <input
              type="password"
              placeholder="Password"
              className="register__form-field"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Sign Up"
              className="register__btn"
              onClick={registerUser}
            />
          </div>
          <div className="register__signin">
            <span className="register__signin--text">
              Already registered to N-Rental ?
            </span>
            <Link to="/login">
              <button className="register__signin--btn">Sign In</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
