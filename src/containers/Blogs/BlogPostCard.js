import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostCard = ({ index, data }) => {
  const { blog_heading, blog_image, blog_meta_description, blog_date, blog_id } = data;
  return (
    <React.Fragment>
      <div className="col-12 col-sm-6 my-2">
        <div className="card">

          <div className="view overlay pointer">
            <Link to={`/${blog_id}`}>
              <img className="card-img-top" src={blog_image}
                alt="Card image cap" />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </Link>
          </div>

          <div className="card-body">

            <h4 className="card-title">{blog_heading}</h4>
            <p className="card-text">
              {blog_meta_description}</p>
            <div className="d-flex">
              <span className="text-secondary">{blog_date && blog_date.split('-').join(" ")}</span>
              <span className="ml-auto"><Link to={`/${blog_id}`}>View</Link></span>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}

export default BlogPostCard;