// import { BsFillPenFill } from "react-icons/bs";
// import { FaTrashAlt } from "react-icons/fa";
// import { BsPlusLg } from "react-icons/bs";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { useState } from "react";
// import FormModal from "./AddVehicleForm";

// const Category = () => {
//   const [modalShow, setModalShow] = useState(false);

//   return (
//     <>
//       <div className="dashboard-content">
//         <div className="container ">
//           <div className="d-flex ">
//             <Button variant="primary" onClick={() => setModalShow(true)}>
//               <BsPlusLg /> Add Category
//             </Button>

//             <FormModal show={modalShow} onHide={() => setModalShow(false)} />

//             <button type="button" class=" ms-2 btn btn-danger">
//               <FaTrashAlt /> Delete All
//             </button>
//           </div>
//           <table class="table mt-3 ">
//             <thead class="thead-dark bg-dark text-white">
//               <tr>
//                 <th scope="col">S.No</th>
//                 <th scope="col">First</th>
//                 <th scope="col">Last</th>
//                 <th scope="col">Handle</th>
//                 <th scope="col">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <th scope="row">1</th>
//                 <td>Mark</td>
//                 <td>Otto</td>
//                 <td>@mdo</td>
//                 <td className="action-btns d-flex ">
//                   <button type="button" class="btn btn-primary btn-sm">
//                     <BsFillPenFill />
//                   </button>
//                   <button type="button" class=" btn btn-danger btn-sm ms-2">
//                     <FaTrashAlt />
//                   </button>
//                 </td>
//               </tr>
//               <tr>
//                 <th scope="row">2</th>
//                 <td>Jacob</td>
//                 <td>Thornton</td>
//                 <td>@fat</td>
//                 <td className="action-btns d-flex ">
//                   <button type="button" class="btn btn-primary btn-sm">
//                     <BsFillPenFill />
//                   </button>
//                   <button type="button" class=" btn btn-danger btn-sm ms-2">
//                     <FaTrashAlt />
//                   </button>
//                 </td>
//               </tr>
//               <tr>
//                 <th scope="row">3</th>
//                 <td>Larry</td>
//                 <td>the Bird</td>
//                 <td>@twitter</td>
//                 <td className="action-btns d-flex ">
//                   <button type="button" class="btn btn-primary btn-sm">
//                     <BsFillPenFill />
//                   </button>
//                   <button type="button" class=" btn btn-danger btn-sm ms-2">
//                     <FaTrashAlt />
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Category;
