import "../styles/vehicle.scss";
import { BiSearchAlt } from "react-icons/bi";
import car_red from "../images/car-red.png";
import bike_red from "../images/bike-red.png";
import bus_red from "../images/bus-red.png";
import van_red from "../images/van-red.png";
const Vehicle = () => {
  return (
    <>
      <div className="search">
        <div className="search__field">
          <input
            type="text"
            placeholder="Search Vehicle"
            className="search__box"
          />
          <BiSearchAlt />
        </div>
        <div className="search__categories">
          <div className="search__category">
            <img src={car_red} alt="car" className="search__category--logo" />
            <span className="search__category--name">Car</span>
          </div>
          <div className="search__category">
            <img src={bike_red} alt="car" className="search__category--logo" />
            <span className="search__category--name">Bike</span>
          </div>
          <div className="search__category">
            <img src={bus_red} alt="car" className="search__category--logo" />
            <span className="search__category--name">Bus</span>
          </div>
          <div className="search__category">
            <img src={van_red} alt="car" className="search__category--logo" />
            <span className="search__category--name">Van</span>
          </div>
        </div>
      </div>
      <section className="featured">
        <div className="featured__vehicles">
          <div className="vehicle-card">
            <div className="vehicle-card__img">
              <img
                src="https://www.carrentalsrinagar.com/wp-content/uploads/2018/12/13Seater-winger-900x600.webp"
                alt="vehicle"
              />
            </div>
            <div className="vehicle-card__name">TATA winger</div>
            <div className="vehicle-card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              morbi facilisis feugiat viverra sit.
            </div>
            <div className="vehicle-card__bookcost">
              <span className="vehicle-card__bookcost--rs">Rs 1000 </span>/ day
            </div>
            <button className="vehicle-card__btn">Book now</button>
          </div>
          <div className="vehicle-card">
            <div className="vehicle-card__img">
              <img
                src="https://www.pngmart.com/files/4/Tesla-PNG-Transparent-Picture.png"
                alt="vehicle"
              />
            </div>
            <div className="vehicle-card__name">Tesla</div>
            <div className="vehicle-card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              morbi facilisis feugiat viverra sit.
            </div>
            <div className="vehicle-card__bookcost">
              <span className="vehicle-card__bookcost--rs">Rs 1000 </span>/ day
            </div>
            <button className="vehicle-card__btn">Book now</button>
          </div>
          <div className="vehicle-card">
            <div className="vehicle-card__img">
              <img
                src="https://www.freeiconspng.com/thumbs/bus-png/bus-png-4.png"
                alt="vehicle"
              />
            </div>
            <div className="vehicle-card__name">Hiace Bus</div>
            <div className="vehicle-card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              morbi facilisis feugiat viverra sit.
            </div>
            <div className="vehicle-card__bookcost">
              <span className="vehicle-card__bookcost--rs">Rs 1000 </span>/ day
            </div>
            <button className="vehicle-card__btn">Book now</button>
          </div>
          <div className="vehicle-card">
            <div className="vehicle-card__img">
              <img
                src="https://ic1.maxabout.us/autos/tw_india//Y/2022/4/yamaha-mt-15-ice-fluo-edition-side-view.jpg"
                alt="vehicle"
              />
            </div>
            <div className="vehicle-card__name">MT-15 BS6</div>
            <div className="vehicle-card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              morbi facilisis feugiat viverra sit.
            </div>
            <div className="vehicle-card__bookcost">
              <span className="vehicle-card__bookcost--rs">Rs 1000 </span>/ day
            </div>
            <button className="vehicle-card__btn">Book now</button>
          </div>
          <div className="vehicle-card">
            <div className="vehicle-card__img">
              <img
                src="https://www.carrentalsrinagar.com/wp-content/uploads/2018/12/13Seater-winger-900x600.webp"
                alt="vehicle"
              />
            </div>
            <div className="vehicle-card__name">TATA winger</div>
            <div className="vehicle-card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              morbi facilisis feugiat viverra sit.
            </div>
            <div className="vehicle-card__bookcost">
              <span className="vehicle-card__bookcost--rs">Rs 1000 </span>/ day
            </div>
            <button className="vehicle-card__btn">Book now</button>
          </div>
          <div className="vehicle-card">
            <div className="vehicle-card__img">
              <img
                src="https://www.pngmart.com/files/4/Tesla-PNG-Transparent-Picture.png"
                alt="vehicle"
              />
            </div>
            <div className="vehicle-card__name">Tesla</div>
            <div className="vehicle-card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              morbi facilisis feugiat viverra sit.
            </div>
            <div className="vehicle-card__bookcost">
              <span className="vehicle-card__bookcost--rs">Rs 1000 </span>/ day
            </div>
            <button className="vehicle-card__btn">Book now</button>
          </div>
          <div className="vehicle-card">
            <div className="vehicle-card__img">
              <img
                src="https://www.freeiconspng.com/thumbs/bus-png/bus-png-4.png"
                alt="vehicle"
              />
            </div>
            <div className="vehicle-card__name">Hiace Bus</div>
            <div className="vehicle-card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              morbi facilisis feugiat viverra sit.
            </div>
            <div className="vehicle-card__bookcost">
              <span className="vehicle-card__bookcost--rs">Rs 1000 </span>/ day
            </div>
            <button className="vehicle-card__btn">Book now</button>
          </div>
          <div className="vehicle-card">
            <div className="vehicle-card__img">
              <img
                src="https://ic1.maxabout.us/autos/tw_india//Y/2022/4/yamaha-mt-15-ice-fluo-edition-side-view.jpg"
                alt="vehicle"
              />
            </div>
            <div className="vehicle-card__name">MT-15 BS6</div>
            <div className="vehicle-card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              morbi facilisis feugiat viverra sit.
            </div>
            <div className="vehicle-card__bookcost">
              <span className="vehicle-card__bookcost--rs">Rs 1000 </span>/ day
            </div>
            <button className="vehicle-card__btn">Book now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vehicle;
