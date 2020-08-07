import React, { useEffect } from 'react';
import {
  useParams
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SideBarBlogs from '../Blogs/SideBarBlogs';
import BlogPostList from '../Blogs/BlogPostList';
import { getBlogsData } from '../../redux/actions';

const FullBlog = () => {
  const history = useHistory();
  const { blogs, isLoadingBLogs } = useSelector(state => ({
    blogs: state.blogs,
    isLoadingBLogs: state.isLoadingBLogs
  }))

  const { blog_id } = useParams();
  const index = blogs.findIndex(blog => blog.blog_id === blog_id);
  const blog = index > -1 ? blogs[index] : {};
  const prevBlog = blogs[index - 1];
  const nextBlog = blogs[index + 1];



  useEffect(() => {
    window.scrollTo(0, 0);
  })
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsData());
  }, []);
  return (
    <div className="container">
      <div className="row mt-3">
        {
          isLoadingBLogs &&
          <div className="col-12 py-5">
            <i className="fa fa-spin fa-cricle-o-notch py-5"></i>
          </div>
        }
        <div className="col-12 col-md-8">
          <div className="row">
            {
              index > -1 ?
                <React.Fragment>
                  <div className="col-12 my-3">
                    <h3 className="mb-0">{blog.blog_heading}</h3>
                    <h6 className="text-secondary">{blog.blog_date && blog.blog_date.split("-").join(" ")}</h6>
                  </div>
                  <div className="col-12 justify-content-center d-flex">
                    <img className="img-responsive" className="w-100 h-auto" alt="image" src={blog.blog_image} />
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
                        {nextBlog &&
                          <React.Fragment>
                            <h5 className="text-right">Next</h5>
                            <BlogPostList data={nextBlog} index={40} />
                          </React.Fragment>}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
                :
                <div className="col-12 py-5 mt-5 text-center">
                  <h1 className="display-2 mt-5">Ooops....!</h1>
                  <h5>We couldn't find this post.</h5>
                </div>
            }
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="row">
            <SideBarBlogs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullBlog;