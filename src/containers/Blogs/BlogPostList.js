import React from "react";
import { Link } from 'react-router-dom';

import './style.css';

const BlogPostList = ({ index, data }) => {
  const { blog_heading, blog_image, blog_date, blog_id } = data;
  return (
    <Link to={`/${blog_id}`} className="no-underline">
      <div className="row my-2 bordered p-2 no-gutters pointer">
        <div className="col-4 image-container">
          <img className="img-responsive w-100 h-auto" src={blog_image} />
        </div>
        <div className="col-8 px-2">
          <h5 className="mb-0">{blog_heading}</h5>
          <span className="text-secondary">{blog_date && blog_date.split('-').join(" ")}</span>
        </div>
      </div>
    </Link>
  );
}

export default BlogPostList;