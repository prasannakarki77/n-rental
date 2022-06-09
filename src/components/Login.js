import { useState } from "react";
import axios from "axios";
import "../styles/login.scss";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {};

  return (
    <>
      <div className="login-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="login-container__wave"
        >
          <path
            fill="#ff5500"
            fill-opacity="1"
            d="M0,96L34.3,90.7C68.6,85,137,75,206,96C274.3,117,343,171,411,181.3C480,192,549,160,617,122.7C685.7,85,754,43,823,37.3C891.4,32,960,64,1029,96C1097.1,128,1166,160,1234,181.3C1302.9,203,1371,213,1406,218.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
        <form className="login">
          <div className="login__username ">
            <FaUserAlt />
            <input
              type="text"
              placeholder="Username"
              className="login__form-field"
            />
          </div>
          {/* <div className="login__email">
            <MdEmail />
            <input
              type="email"
              placeholder="Email"
              className="login__form-field"
            />
          </div> */}

          <div className="login__password">
            <FaKey />
            <input
              type="password"
              placeholder="Password"
              className="login__form-field"
            />
          </div>
          <div>
            <input type="submit" value="Sign In" className="login__btn" />
          </div>
          <div className="login__signup">
            <span className="login__signup--text">
              Not Registered to N-Rental ?
            </span>
            <Link to="/register">
              <button className="login__signup--btn">Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
