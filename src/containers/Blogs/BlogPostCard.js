import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogPostCard = ({ index, data }) => {

  const { blogs } = useSelector(state => ({ blogs: state.blogs }))
  return (
    <div className="row">
      {
        blogs.map(blog =>
          <div className="col-12 col-sm-6 my-2">
            <div className="card">

              <div className="view overlay pointer">
                <Link to={`/${blog.blog_id}`}>
                  <img className="card-img-top" src={blog.blog_image}
                    alt="Card image cap" />
                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </Link>
              </div>

              <div className="card-body">

                <h4 className="card-title">{blog.blog_heading}</h4>
                <p className="card-text">
                  {blog.blog_meta_description}</p>
                <div className="d-flex">
                  <span className="text-secondary">{blog.blog_date && blog.blog_date.split('-').join(" ")}</span>
                  <span className="ml-auto"><Link to={`/${blog.blog_id}`}>View</Link></span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default BlogPostCard;