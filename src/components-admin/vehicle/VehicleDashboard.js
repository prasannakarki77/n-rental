import { BsFillPenFill, BsUpda } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { BsPlusLg, BsImageAlt } from "react-icons/bs";
import { MdAddPhotoAlternate } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import FormModal from "./AddVehicleForm";
import UpdateForm from "./UpdateVehicleForm";
import { useEffect } from "react";
import axios from "axios";
import AddVehicleForm from "./AddVehicleForm";
import UpdateVehicleForm from "./UpdateVehicleForm";
import { Link } from "react-router-dom";
import DeleteVehicle from "./DeleteVehicle";
import UpdateVehicleImage from "./UpdatVehicleImage";

const VehicleDashboard = () => {
  const [addForm, setAddFormShow] = useState(false);
  const [updateForm, setUpdateFormShow] = useState(false);
  const [deletePopup, setDeletePopUp] = useState(false);
  const [imageUpdate, setImageUpdate] = useState(false);
  const [vehicleList, setVehicleList] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:90/vehicle/get", config)
      .then((res) => {
        setVehicleList(res.data.data);
        console.log(vehicleList);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .get("http://localhost:90/category/get", config)
      .then((res) => {
        setCategoryList(res.data.data);
        console.log(categoryList);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const updateHandler = (vehicle) => {
    setVehicle(vehicle);
    setUpdateFormShow(true);
  };
  const deleteHandler = (vehicle) => {
    setVehicle(vehicle);
    setDeletePopUp(true);
  };
  const imageUpdateHandler = (vehicle) => {
    setVehicle(vehicle);
    setImageUpdate(true);
  };

  return (
    <>
      <div className="dashboard-content">
        <div className="dashboard__title mb-4">
          <h1 className="dashboard__title--text ">
            <AiFillCar /> Vehicles
          </h1>
        </div>
        <div className="container">
          <div className="d-flex ">
            <Button variant="primary" onClick={() => setAddFormShow(true)}>
              <BsPlusLg /> Add Vehicle
            </Button>
            <AddVehicleForm
              show={addForm}
              onHide={() => setAddFormShow(false)}
              categoryList={categoryList}
            />

            <UpdateVehicleForm
              show={updateForm}
              onHide={() => setUpdateFormShow(false)}
              vehicle={vehicle}
              categoryList={categoryList}
            />
            <DeleteVehicle
              show={deletePopup}
              onHide={() => setDeletePopUp(false)}
              vehicle={vehicle}
              categoryList={categoryList}
            />
            <UpdateVehicleImage
              show={imageUpdate}
              onHide={() => setImageUpdate(false)}
              vehicle={vehicle}
              categoryList={categoryList}
            />

            <button type="button" className=" ms-2 btn btn-danger">
              <FaTrashAlt /> Delete All
            </button>
          </div>
          <div className="table-responsive">
            <table className="table mt-3">
              <thead className="thead-dark bg-dark text-white">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Description</th>
                  <th scope="col">Rich Description</th>
                  <th scope="col">Featured</th>
                  <th scope="col">Booking Cost</th>
                  <th scope="col">SKU</th>
                  <th scope="col">Image</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {vehicleList.map((vehicle) => (
                  <tr key={vehicle._id}>
                    <th scope="row">{vehicleList.indexOf(vehicle) + 1}</th>
                    <td>{vehicle.vehicle_name}</td>
                    <td>{vehicle.vehicle_category}</td>
                    <td>{vehicle.vehicle_company}</td>
                    <td>{vehicle.vehicle_desc}</td>
                    <td>{vehicle.vehicle_rich_desc}</td>
                    <td>{`${vehicle.is_featured}`}</td>
                    <td>{vehicle.booking_cost}</td>
                    <td>{vehicle.vehicle_sku}</td>
                    <td>
                      <div className="table-image">
                        <img
                          src={`http://localhost:90/${vehicle.vehicle_image}`}
                          alt="vehicle"
                          height={100}
                          width={200}
                        />
                        <button
                          type="button"
                          className="btn action-btns btn-success table-image__btn btn-sm m-1"
                          onClick={() => imageUpdateHandler(vehicle)}
                        >
                          <MdAddPhotoAlternate />
                        </button>
                      </div>
                    </td>

                    <td className="action-btns ">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm m-1"
                        onClick={() => updateHandler(vehicle)}
                      >
                        <BsFillPenFill />
                      </button>
                      <Link to="">
                        <button
                          type="button"
                          className=" btn btn-danger btn-sm m-1"
                          onClick={() => deleteHandler(vehicle)}
                        >
                          <FaTrashAlt />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleDashboard;
