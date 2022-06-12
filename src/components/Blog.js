import { FaChevronCircleRight } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
const Blog = () => {
  return (
    <>
      <section className="blogs">
        <div className="blogs__title">
          <span className="blogs__title--text">
            Articles and Blogs <FaMapMarkedAlt />
          </span>
        </div>

        <div className="blog-container">
          <div className="blog">
            <div className="blog__img">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt="blog_image"
              />
            </div>
            <div className="blog__detail">
              <div className="blog__title">
                Lorem ipsum dolor sit amet, consectetur
              </div>
              <div className="blog__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero,
                amet, tortor sit eros, habitasse lectus tincidunt est vulputate.
                Vel risus euismod viverra in ac. Leo quisque vitae duis ante
                dignissim et aliquam.
                <br />
                <br />
                Elementum bibendum blandit etiam purus. Praesent viverra ac
                sagittis elit nulla egestas dui nunc. Auctor elementum nisl in
                semper quis nulla. Diam sit lectus sagittis pellentesque.
              </div>
              <div className="blog__date">Jan 20, 2021</div>
              <button className="blog__read-more-btn">
                Read more <FaChevronCircleRight />
              </button>
            </div>
          </div>
          <div className="blog">
            <div className="blog__img">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="blog_image"
              />
            </div>
            <div className="blog__detail">
              <div className="blog__title">
                Lorem ipsum dolor sit amet, consectetur
              </div>
              <div className="blog__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero,
                amet, tortor sit eros, habitasse lectus tincidunt est vulputate.
                Vel risus euismod viverra in ac. Leo quisque vitae duis ante
                dignissim et aliquam.
                <br />
                <br />
                Elementum bibendum blandit etiam purus. Praesent viverra ac
                sagittis elit nulla egestas dui nunc. Auctor elementum nisl in
                semper quis nulla. Diam sit lectus sagittis pellentesque.
              </div>
              <div className="blog__date">Jan 20, 2021</div>
              <button className="blog__read-more-btn">
                Read more <FaChevronCircleRight />
              </button>
            </div>
          </div>
        </div>
        <button className="featured__view-more-btn view-more-btn">
          View all <BsFillCaretRightFill />
        </button>
      </section>
    </>
  );
};

export default Blog;
