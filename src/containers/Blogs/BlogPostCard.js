import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogPostCard = ({ index, data }) => {

  const { blogs } = useSelector(state => ({ blogs: state.blogs }))
  return (
    <div className="row">
      {
        blogs.map(blog =>
          <div className="col-12 col-sm-6 my-2" key={blog.blog_id}>
            <Link className="no-underline" to={{ pathname: `/admin/read-blog/${blog.blog_slug}`, state: { blog_id: blog.blog_id } }}>
              <div className="card">

                <div className="view overlay pointer">
                  <img className="card-img-top" src={blog.blog_image}
                    alt="Card image cap" />
                </div>

                <div className="card-body">

                  <h4 className="card-title text-dark">{blog.blog_heading}</h4>
                  <p className="card-text text-dark">
                    {blog.blog_meta_description}</p>
                  <div className="d-flex">
                    <span className="text-secondary">{blog.blog_date && blog.blog_date.split('-').join(" ")}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      }
    </div>
  );
}

export default BlogPostCard;