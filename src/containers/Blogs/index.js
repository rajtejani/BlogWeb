import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import './style.css';
import BlogPostCard from './BlogPostCard';
import SideBarBlogs from './SideBarBlogs';
import Mtips from '../Mtips';

import { getBlogsData, getMtipsData } from '../../redux/actions'

const Blogs = () => {
  const [activePage, _setActivePage] = useState(1);
  const { blogs, isLoadingBLogs, totalBlogsCount, mtipsData, state } = useSelector(state => ({
    totalBlogsCount: state.totalBlogsCount,
  }))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsData(activePage));
  }, [activePage]);

  useEffect(() => {
    dispatch(getMtipsData());
  }, []);
  
  return (
    <React.Fragment>
      <div className="container  full-page">
        <div className="row">
          <div className="col-12 col-md-8 mt-5 pt-3">
            <Mtips />
            <BlogPostCard />
            <div className="row justify-content-center">
              <Pagination
                itemClass="page-item"
                linkClass="page-link"
                innerClass="pagination justify-content-center py-4"
                prevPageText='Prev'
                nextPageText='Next'
                firstPageText='First'
                lastPageText='Last'
                activePage={activePage}
                itemsCountPerPage={5}
                totalItemsCount={totalBlogsCount}
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