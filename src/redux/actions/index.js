import axios from 'axios';

const _fetchBlogDataStart = () => ({ type: "FETCH_BLOG_DATA_START"});
const _fetchBlogDataSuccess = (payload) => ({ type: "FETCH_BLOG_DATA_SUCCESS", payload });
const _fetchBlogDataFail= () => ({ type: "FETCH_BLOG_DATA_FAIL"});

export const getBlogsData = (activePage) => (dispatch) => {
  dispatch(_fetchBlogDataStart());
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: 'https://playdevelopers.com/react/json/blogs/',
    })
      .then(res => {
        console.log('------- data---------', typeof res.data);
        dispatch(_fetchBlogDataSuccess(res.data));
      })
      .catch(error => {
        console.log('------- error ---------', error);
        dispatch(_fetchBlogDataFail());
      })
  })
}
const _fetchRecentBlogDataStart = () => ({ type: "FETCH_RECENT_BLOG_DATA_START"});
const _fetchRecentBlogDataSuccess = (payload) => ({ type: "FETCH_RECENT_BLOG_DATA_SUCCESS", payload });
const _fetchRecentBlogDataFail= () => ({ type: "FETCH_RECENT_BLOG_DATA_FAIL"});

export const getRecentBlogsData = () => (dispatch) => {
  dispatch(_fetchRecentBlogDataStart());
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: 'https://playdevelopers.com/react/json/recent',
    })
      .then(res => {
        dispatch(_fetchRecentBlogDataSuccess(res.data));
      })
      .catch(error => {
        console.log('------- error ---------', error);
        dispatch(_fetchRecentBlogDataFail());
      })
  })
}
const _fetchTrendingBlogDataStart = () => ({ type: "FETCH_TRENDING_BLOG_DATA_START"});
const _fetchTrendingBlogDataSuccess = (payload) => ({ type: "FETCH_TRENDING_BLOG_DATA_SUCCESS", payload });
const _fetchTrendingBlogDataFail= () => ({ type: "FETCH_TRENDING_BLOG_DATA_FAIL"});

export const getTrendingBlogsData = () => (dispatch) => {
  dispatch(_fetchTrendingBlogDataStart());
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: 'https://playdevelopers.com/react/json/trending',
    })
      .then(res => {
        dispatch(_fetchTrendingBlogDataSuccess(res.data));
      })
      .catch(error => {
        console.log('------- error ---------', error);
        dispatch(_fetchTrendingBlogDataFail());
      })
  })
}

