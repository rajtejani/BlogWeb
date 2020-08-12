import React, { useEffect } from 'react';
import {
  useLocation
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';


import SideBarBlogs from '../Blogs/SideBarBlogs';
import BlogPostList from '../Blogs/BlogPostList';
import { getSingleBlogData } from '../../redux/actions';


const FullBlog = () => {
  const { detailedBlogData, isLoadingDetailedBlogs } = useSelector(state => ({
    detailedBlogData: state.detailedBlogData,
    isLoadingDetailedBlogs: state.isLoadingDetailedBlogs,
  }))
  const location = useLocation();
  const queryBlogId = parseInt(useLocation().search.replace(/[^0-9]/, ""));
  const blog_id = location.state && location.state.blog_id ? location.state.blog_id : null;
  const { blog, prevBlog, nextBlog } = detailedBlogData;

  useEffect(() => {
    window.scrollTo(0, 0);
  })
  const dispatch = useDispatch();
  useEffect(() => {
    (queryBlogId || blog_id) && dispatch(getSingleBlogData(queryBlogId || blog_id));
  }, [blog_id, queryBlogId]);
  return (
    <div className="container">
      <div className="row mt-3">
        {
          isLoadingDetailedBlogs &&
          <div className="col-12 text-center">
            <FontAwesomeIcon className="fa-spin" icon={faCircleNotch} />
          </div>
        }
        <div className="col-12 col-md-8">
          <div className="row">
            {
              blog &&
              <React.Fragment>
                <div className="col-12">
                  <h3 className="mb-0">{blog.blog_heading}</h3>
                  <h6 className="text-secondary">{blog.blog_date && blog.blog_date.split("-").join(" ")}</h6>
                </div>
                <div className="col-12 justify-content-center d-flex">
                  <img className="img-responsive" className="w-100 h-auto" alt="image" src={blog.blog_image} />
                </div>
                <div className="col-12">
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
            }
            {
              !blog && !isLoadingDetailedBlogs &&
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

export default React.memo(FullBlog);