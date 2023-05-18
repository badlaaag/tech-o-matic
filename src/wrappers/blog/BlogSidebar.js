
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  return (
    <div className="sidebar-style">
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Search </h4>
        <div className="pro-sidebar-search mb-55 mt-25">
          <form className="pro-sidebar-search-form" action="#">
            <input type="text" placeholder="Search here..." />
            <button>
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Recent Blogs </h4>
        <div className="sidebar-project-wrap mt-30">
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-1.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Nokia</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  Nokia
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-2.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>IPhone 14 Pro Max</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  Apple
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-4.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Huawei P60</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  Huawei
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-4.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>S23 Ultra</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  Samsung
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      
      <div className="sidebar-widget mt-50">
        <h4 className="pro-sidebar-title">Tag </h4>
        <div className="sidebar-widget-tag mt-25">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Samsung
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                IPhone
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Huawei
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>Technology</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Gadgets
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
