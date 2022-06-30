import { BiSearchAlt } from "react-icons/bi";
import { FaChevronCircleRight } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import "./../styles/home.scss";
import car_drive from "../images/car-drive.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [articleList, setArticleList] = useState([]);
  const [vehicleList, setVehicleList] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:90/article/get", config)
      .then((res) => {
        setArticleList(res.data.data);
        console.log(articleList);
      })
      .catch((e) => {
        console.log(e);
      });
    axios
      .get("http://localhost:90/vehicle/get", config)
      .then((res) => {
        setVehicleList(res.data.data);
        console.log(vehicleList);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <section className="hero">
        <div className="hero__desc">
          <div className="hero__text">
            <span className="hero__text--highlight">Rent </span>
            and <span className="hero__text--highlight">Drive </span>
            anywhere, anytime
          </div>
          <button className="hero__btn">
            Search Vehicles <BiSearchAlt />
          </button>
        </div>
      </section>
      <section className="featured">
        <div className="section-title">
          Featured Rides <FaChevronCircleRight />
        </div>
        <div className="featured__vehicles">
          {vehicleList.map((vehicle) => {
            if (vehicle.is_featured) {
              return (
                <div className="vehicle-card">
                  <div className="vehicle-card__img">
                    <img
                      src={`http://localhost:90/${vehicle.vehicle_image}`}
                      alt="vehicle"
                    />
                  </div>
                  <div className="vehicle-card__name">
                    {vehicle.vehicle_name}
                  </div>
                  <div className="vehicle-card__desc">
                    {vehicle.vehicle_desc}
                  </div>
                  <div className="vehicle-card__bookcost">
                    <span className="vehicle-card__bookcost--rs">
                      Rs {vehicle.booking_cost}{" "}
                    </span>
                    / day
                  </div>
                  <button className="vehicle-card__btn">Book now</button>
                </div>
              );
            }
          })}
        </div>
        <Link to="/vehicle">
          <button className="featured__view-more-btn view-more-btn">
            View more <BsFillCaretRightFill />
          </button>
        </Link>
        <div className="featured__brands">
          <div className="featured__brands--img">
            <img
              src="https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-brands-logotypes-0.png"
              alt="brand"
            />
          </div>
          <div className="featured__brands--img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
              alt="brand"
            />
          </div>
          <div className="featured__brands--img">
            <img
              src="https://www.seekpng.com/png/full/71-717908_hyundai-logo-download-png-hyundai-car-logo-png.png"
              alt="brand"
            />
          </div>
          <div className="featured__brands--img">
            <img
              src="https://www.freepnglogos.com/uploads/tvs-logo-png/logo-tvs-motor-company-indonesia-logo-lambang-indonesia-7.png"
              alt="brand"
            />
          </div>
          <div className="featured__brands--img">
            <img
              src="https://wildernesscollective.com/wp-content/uploads/2020/05/Download-Yamaha-PNG-Free-Download-For-Designing-Projects.png"
              alt="brand"
            />
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about__img">
          <img src={car_drive} alt="" />
        </div>
        <div className="about__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ac
          urna, ultricies vulputate velit velit vitae, enim auctor. Lacinia quis
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ac
          urna, ultricies vulputate velit velit vitae, enim auctor. Lacinia quis
        </div>
      </section>
      <section className="blogs">
        <div className="blogs__title">
          <span className="blogs__title--text">
            Articles and Blogs <FaMapMarkedAlt />
          </span>
        </div>
        <div className="blog-container">
          {articleList.map((article) => {
            if (article.is_featured) {
              return (
                <div className="blog">
                  <div className="blog__img">
                    <img
                      src={`http://localhost:90/${article.image}`}
                      alt="blog_image"
                    />
                  </div>
                  <div className="blog__detail">
                    <div className="blog__title">{article.title}</div>
                    <div className="blog__desc">{article.description}</div>
                    <div className="blog__date">{article.date}</div>
                    <button className="blog__read-more-btn">
                      Read more <FaChevronCircleRight />
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <Link to="/blog">
          <button className="featured__view-more-btn view-more-btn">
            View all <BsFillCaretRightFill />
          </button>
        </Link>
      </section>
    </>
  );
};

export default Home;
