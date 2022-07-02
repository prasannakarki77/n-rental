import React from "react";
import "../styles/vehicle_page.scss";
const VehiclePage = () => {
  return (
    <div className="vehicle">
      <div className="vehicle__image">
        <img
          src="https://i.pinimg.com/originals/10/06/df/1006df84fbdbab5362776c21cbcecd52.png"
          alt="bike"
        />
      </div>
      <div className="vehicle__details">
        <div className="vehicle__name">Yamaha Bike</div>
        <div className="vehicle__desc">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="vehicle__cost">
          {" "}
          <span className="vehicle__cost--rs">Rs. 10000</span> / day
        </div>
        <button className="vehicle__book-btn">Book now</button>
      </div>
    </div>
  );
};

export default VehiclePage;
