import { BsFillPenFill, BsPlusLg } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddArticle from "./AddCategory";
import DeleteCategory from "./DeleteCategory";
import UpdateCategoryImage from "./UpdateCategoryImage";
import AddCategory from "./AddCategory";
import UpdateCategory from "./UpdateCategory";

const CategoryDashboard = () => {
  const [addCategory, setAddCategory] = useState(false);
  const [updateCategory, setUpdateCategory] = useState(false);
  const [deleteCategory, setDeleteCategory] = useState(false);
  const [updateCategoryImage, setUpdateCategoryImage] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  };
  useEffect(() => {
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

  const updateCategoryHandler = (category) => {
    setCategory(category);
    setUpdateCategory(true);
  };
  const deleteCategoryHandler = (category) => {
    setCategory(category);

    setDeleteCategory(true);
  };
  const updateCategoryImageHandler = (category) => {
    setCategory(category);
    setUpdateCategoryImage(true);
  };

  return (
    <>
      <div className="dashboard-content">
        <div className="container ">
          <div className="d-flex ">
            <Button variant="primary" onClick={() => setAddCategory(true)}>
              <BsPlusLg /> Add Category
            </Button>
            <AddCategory
              show={addCategory}
              onHide={() => setAddCategory(false)}
            />
            <UpdateCategory
              show={updateCategory}
              onHide={() => setUpdateCategory(false)}
              category={category}
            />
            <DeleteCategory
              show={deleteCategory}
              onHide={() => setDeleteCategory(false)}
              category={category}
            />
            <UpdateCategoryImage
              show={updateCategoryImage}
              onHide={() => setUpdateCategoryImage(false)}
              category={category}
            />
            <button type="button" className=" ms-2 btn btn-danger">
              <FaTrashAlt /> Delete All
            </button>
          </div>
          <div className="table-responsive">
            <table className="table mt-3 ">
              <thead className="thead-dark bg-dark text-white">
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">Category Name</th>

                  <th scope="col">Description</th>

                  <th scope="col">Image</th>

                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categoryList.map((category) => (
                  <tr key={category._id}>
                    <th scope="row">{categoryList.indexOf(category) + 1}</th>
                    <td>{category.category_name}</td>
                    <td>{category.category_desc}</td>
                    <td>
                      <div className="table-image">
                        <img
                          src={`http://localhost:90/${category.category_image}`}
                          alt="category"
                          height={100}
                          width={200}
                        />
                        <button
                          type="button"
                          className="btn action-btns btn-success table-image__btn btn-sm m-1"
                          onClick={() => updateCategoryImageHandler(category)}
                        >
                          <MdAddPhotoAlternate />
                        </button>
                      </div>
                    </td>

                    <td className="action-btns ">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm m-1"
                        onClick={() => updateCategoryHandler(category)}
                      >
                        <BsFillPenFill />
                      </button>
                      <Link to="">
                        <button
                          type="button"
                          className=" btn btn-danger btn-sm m-1"
                          onClick={() => deleteCategoryHandler(category)}
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

export default CategoryDashboard;
