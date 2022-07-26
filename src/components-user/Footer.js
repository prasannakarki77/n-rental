import { MdCarRental } from "react-icons/md";
import React from "react";
import "./../styles/footer.scss";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-about">
          <div className="footer-about__logo logo">
            <MdCarRental /> N-Rental
          </div>
          <div className="footer-about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            arcu feugiat scelerisque purus senectus nunc. Et id quisque risus,
            dictum quis morbi eget. Amet, tellus auctor aliquet tristique
            interdum.
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links__title">Quick Links</div>
          <div className="footer-links__items">
            <a href="/" className="footer-links__item">
              Home
            </a>
            <a href="/about" className="footer-links__item">
              About
            </a>
            <a href="/vehicle" className="footer-links__item">
              Vehicles
            </a>
            <a href="/blog" className="footer-links__item">
              Blogs
            </a>
          </div>
        </div>
        <div className="contact">
          <div className="contact__title"> Contact Us</div>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="contact__email"
            />
          </div>
          <div>
            <textarea
              placeholder="Enter message"
              className="contact__message"
            />
          </div>
          <button className="contact__btn">Send</button>
          <div className="contact__details">
            +977- 9834223443 Dillibazar, Kathmandu
          </div>
        </div>

        <div className="footer__copyright">
          &copy; 2022 All rights reserved. N-Rental
        </div>
      </section>
    </>
  );
};

export default Footer;
