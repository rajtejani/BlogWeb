import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
      isLoadingTrendingBlogs: state.isLoadingTrendingBlogs
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
              <div className="my-5 py-5 text-center">
                <i className=" fa fa-spin fa-circle-o-notch"></i>
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
              <div className="my-5 py-5 text-center">
                <i className=" fa fa-spin fa-circle-o-notch"></i>
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