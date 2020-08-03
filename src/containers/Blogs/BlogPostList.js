import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

const BlogPostList = ({ index }) => {
  return (
    <Link to="/fullBlog">
      <div className="row my-2 bordered p-2 no-gutters pointer">
        <div className="col-4 image-container">
          <img className="img-responsive w-100 h-auto" src={`https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(${index + 1}).jpg`} />
        </div>
        <div className="col-8 px-2">
          <h5 className="mb-0">Title</h5>
          <span className="text-secondary">02 August 2020</span>
        </div>
      </div>
    </Link>
  );
}

export default BlogPostList;