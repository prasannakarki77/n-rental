import React from "react";
import car_drive from "../images/car-drive.png";
const About = () => {
  return (
    <section className="about about-page" id="about">
      <div className="about__img">
        <img src={car_drive} alt="" />
      </div>
      <div className="about__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ac urna,
        ultricies vulputate velit velit vitae, enim auctor. Lacinia quis
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ac urna,
        ultricies vulputate velit velit vitae, enim auctor. Lacinia quis
      </div>
    </section>
  );
};

export default About;
