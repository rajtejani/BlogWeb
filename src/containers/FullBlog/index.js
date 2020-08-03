import React from 'react';

import BlogPostList from '../Blogs/BlogPostList';

const FullBlog = () => {

  return (
    <div className="row mt-3">
      <div className="col-12 my-3">
        <h3 className="mb-0">What is Lorem Ipsum?</h3>
        <h6 className="text-secondary">02 August 2020</h6>
      </div>
      <div className="col-12 justify-content-center d-flex">
        <img className="img-responsive" alt="image" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" />
      </div>
      <div classNam="col-12">
        <p className="px-5 my-3 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised
          in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="col-12 my-5">
        <div className="row justify-content-between">
          <div className="col-5">
            <h5>Prev</h5>
            <BlogPostList index={32} />
          </div>
          <div className="col-5">
            <h5 className="text-right">Next</h5>
            <BlogPostList index={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullBlog;