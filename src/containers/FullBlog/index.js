import React, { useEffect } from 'react';
import {
  useParams
} from "react-router-dom";

import BlogPostList from '../Blogs/BlogPostList';

const FullBlog = ({ data }) => {
  const { blog_id } = useParams();
  const index = data.findIndex(blog => blog.blog_id === blog_id);
  console.log('---- index----', index);
  const blog = index > -1 ? data[index] : {};
  const prevBlog = data[index - 1];
  const nextBlog = data[index + 1];
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className="row mt-3">
      <div className="col-12 my-3">
        <h3 className="mb-0">{blog.blog_heading}</h3>
        <h6 className="text-secondary">{blog.blog_date && blog.blog_date.split("-").join(" ")}</h6>
      </div>
      <div className="col-12 justify-content-center d-flex">
        <img className="img-responsive" alt="image" src={blog.blog_image} />
      </div>
      <div classNam="col-12">
        <p className="px-5 my-3 text-justify">
          {blog.blog_description}
        </p>
      </div>
      <div className="col-12 my-5">
        <div className="row justify-content-between">
          <div className="col-5">
            {
              prevBlog &&
              <React.Fragment>
                <h5>Prev</h5>
                <BlogPostList data={prevBlog} index={32} />
              </React.Fragment>
            }
          </div>
          <div className="col-5">
            { nextBlog &&
              <React.Fragment>
                <h5 className="text-right">Next</h5>
                <BlogPostList data={nextBlog} index={40} />
              </React.Fragment>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullBlog;