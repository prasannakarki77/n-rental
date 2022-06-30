import { FaChevronCircleRight } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Blog = () => {
  const [articleList, setArticleList] = useState([]);
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
  return (
    <>
      <section className="blogs">
        <div className="blogs__title">
          <span className="blogs__title--text">
            Articles and Blogs <FaMapMarkedAlt />
          </span>
        </div>

        <div className="blog-container">
          {articleList.map((article) => (
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
                <Link to={"/article/single/" + article._id}>
                  <button className="blog__read-more-btn">
                    Read more <FaChevronCircleRight />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
