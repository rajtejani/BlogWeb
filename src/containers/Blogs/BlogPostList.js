import React from "react";
import { Link } from 'react-router-dom';

import './style.css';

const BlogPostList = ({ index, data }) => {
  const { blog_heading, blog_image, blog_date, blog_id } = data;
  return (
    <Link to={`/admin/read-blog/${blog_id}`} className="no-underline">
      <div className="row my-2 bordered p-2 no-gutters pointer">
        <div className="col-4 image-container">
          <img className="img-responsive w-100 h-auto" src={blog_image} />
        </div>
        <div className="col-8 px-2">
          <h6 className="mb-0">{blog_heading}</h6>
          <small className="text-secondary">{blog_date && blog_date.split('-').join(" ")}</small>
        </div>
      </div>
    </Link>
  );
}

export default BlogPostList;