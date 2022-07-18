import { BsFillPenFill, BsPlusLg } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import { ImBlog } from "react-icons/im";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddArticle from "./AddArticle";
import UpdateArticle from "./UpdateArticle";
import DeleteArticle from "./DeleteArticle";
import UpdateArticleImage from "./UpdateArticleImage";

const ArticleDashboard = () => {
  const [addArticle, setAddArticle] = useState(false);
  const [updateArticle, setUpdateArticle] = useState(false);
  const [deleteArticle, setDeleteArticle] = useState(false);
  const [updateArticleImage, setUpdateArticleImage] = useState(false);
  const [articleList, setArticleList] = useState([]);
  const [article, setArticle] = useState([]);

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
  }, []);

  const updateArticleHandler = (article) => {
    setArticle(article);
    setUpdateArticle(true);
  };
  const deleteArticleHandler = (article) => {
    setArticle(article);
    console.log(article);
    setDeleteArticle(true);
  };
  const updateArticleImageHandler = (article) => {
    setArticle(article);
    setUpdateArticleImage(true);
  };

  return (
    <>
      <div className="dashboard-content">
        <div className="dashboard__title">
          <h1 className="dashboard__title--text">
            <ImBlog /> Articles
          </h1>
        </div>
        <div className="container ">
          <div className="d-flex ">
            <Button variant="primary" onClick={() => setAddArticle(true)}>
              <BsPlusLg /> Add Article
            </Button>
            <AddArticle show={addArticle} onHide={() => setAddArticle(false)} />
            <UpdateArticle
              show={updateArticle}
              onHide={() => setUpdateArticle(false)}
              article={article}
            />
            <DeleteArticle
              show={deleteArticle}
              onHide={() => setDeleteArticle(false)}
              article={article}
            />
            <UpdateArticleImage
              show={updateArticleImage}
              onHide={() => setUpdateArticleImage(false)}
              article={article}
            />
            <button type="button" className=" ms-2 btn btn-danger">
              <FaTrashAlt /> Delete All
            </button>
          </div>
          <div className="table-responsive">
            <table className="table mt-3">
              <thead className="thead-dark bg-dark text-white">
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">Title</th>
                  <th scope="col">Publish Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">Rich Description</th>
                  <th scope="col">Image</th>
                  <th scope="col">Featured</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {articleList.map((article) => (
                  <tr key={article._id}>
                    <th scope="row">{articleList.indexOf(article) + 1}</th>
                    <td>{article.title}</td>
                    <td>{article.date}</td>
                    <td>{article.description}</td>
                    <td>{article.rich_description}</td>
                    <td>
                      <div className="table-image">
                        <img
                          src={`http://localhost:90/${article.image}`}
                          alt="vehicle"
                          height={100}
                          width={200}
                        />
                        <button
                          type="button"
                          className="btn action-btns btn-success table-image__btn btn-sm m-1"
                          onClick={() => updateArticleImageHandler(article)}
                        >
                          <MdAddPhotoAlternate />
                        </button>
                      </div>
                    </td>
                    <td>{`${article.is_featured}`}</td>

                    <td className="action-btns ">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm m-1"
                        onClick={() => updateArticleHandler(article)}
                      >
                        <BsFillPenFill />
                      </button>
                      <Link to="">
                        <button
                          type="button"
                          className=" btn btn-danger btn-sm m-1"
                          onClick={() => deleteArticleHandler(article)}
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

export default ArticleDashboard;
