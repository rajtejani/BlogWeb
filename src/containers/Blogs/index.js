import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import './style.css';
import BlogPostCard from './BlogPostCard';
import SideBarBlogs from './SideBarBlogs';

import { getBlogsData } from '../../redux/actions'

const Blogs = () => {
  const [activePage, _setActivePage] = useState(1);
  const { blogs, isLoadingBLogs } = useSelector(state => ({
    blogs: state.blogs,
    isLoadingBLogs: state.isLoadingBLogs
  }))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsData(activePage));
  }, [activePage]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 mt-5 pt-3">
            {
              isLoadingBLogs &&
              <div className="col-12 text-center">
                <FontAwesomeIcon className="fa-spin" icon={faCircleNotch} />
              </div>
            }
            <BlogPostCard />
            <div className="row justify-content-center">
              <Pagination
                itemClass="page-item"
                linkClass="page-link"
                innerClass="pagination justify-content-center"
                prevPageText='Prev'
                nextPageText='Next'
                firstPageText='First'
                lastPageText='Last'
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={blogs ? blogs.length : 0}
                pageRangeDisplayed={5}
                onChange={pageNumber => _setActivePage(pageNumber)}
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <SideBarBlogs />

          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Blogs;