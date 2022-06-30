import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/article.scss";
const ArticlePage = () => {
  const [article, setArticle] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:90/article/single/" + id)
      .then((res) => {
        console.log(res);
        setArticle(res.data.data);
        console.log(article);
      })
      .catch();
  }, []);
  return (
    <>
      <div className="article">
        <p className="article__image">
          <img
            src={"http://localhost:90/" + article.image}
            className="img-fluid"
            alt="article_image"
          />
        </p>
        <p className="article__date">{article.date}</p>
        <p className="article__title">{article.title}</p>
        <p className="article__desc">{article.rich_description}</p>
      </div>
    </>
  );
};

export default ArticlePage;
