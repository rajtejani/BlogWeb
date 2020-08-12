import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import BlogPostList from './BlogPostList';
import { getRecentBlogsData, getTrendingBlogsData } from '../../redux/actions';

const SideBarBlogs = () => {
  const dispacth = useDispatch();

  const { recentBlogsData,
    trendingBlogsData,
    isLoadingRecentBlogs,
    isLoadingTrendingBlogs } = useSelector(state => ({
      recentBlogsData: state.recentBlogsData,
      trendingBlogsData: state.trendingBlogsData,
      isLoadingRecentBlogs: state.isLoadingRecentBlogs,
      isLoadingRecentBlogs: state.isLoadingTrendingBlogs
    }))
  useEffect(() => {
    dispacth(getRecentBlogsData());
    dispacth(getTrendingBlogsData());
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12 mb-4">
          <div className="">
            <h3>Recents</h3>
          </div>
          <div>
            {
              isLoadingRecentBlogs &&
              <div className="col-12 text-center">
                <FontAwesomeIcon className="fa-spin" icon={faCircleNotch} />
              </div>
            }
            {
              recentBlogsData.map((d, i) =>
                <BlogPostList
                  key={i}
                  index={i}
                  data={d} />)
            }
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="">
            <h3>Trending</h3>
          </div>
          <div>
            {
              isLoadingTrendingBlogs &&
              <div className="col-12 text-center">
                <FontAwesomeIcon className="fa-spin" icon={faCircleNotch} />
              </div>
            }
            {
              trendingBlogsData.map((d, i) =>
                <BlogPostList
                  key={i}
                  index={i}
                  data={d} />)
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SideBarBlogs;