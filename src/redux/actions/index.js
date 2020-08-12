import axios from 'axios';
import qs from 'querystring';

const _fetchBlogDataStart = () => ({ type: "FETCH_BLOG_DATA_START" });
const _fetchBlogDataSuccess = (data) =>
  ({ type: "FETCH_BLOG_DATA_SUCCESS", payload: data.blogs, count: data.count });
const _fetchBlogDataFail = () => ({ type: "FETCH_BLOG_DATA_FAIL" });

export const getBlogsData = (activePage) => (dispatch) => {
  dispatch(_fetchBlogDataStart());
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: 'https://playdevelopers.com/react/blog/' + activePage,
    })
      .then(res => {
        dispatch(_fetchBlogDataSuccess(res.data));

      })
      .catch(error => {
        console.log('------- error ---------', error);
        dispatch(_fetchBlogDataFail());
      })
  })
}
const _fetchRecentBlogDataStart = () => ({ type: "FETCH_RECENT_BLOG_DATA_START" });
const _fetchRecentBlogDataSuccess = (payload) => ({ type: "FETCH_RECENT_BLOG_DATA_SUCCESS", payload });
const _fetchRecentBlogDataFail = () => ({ type: "FETCH_RECENT_BLOG_DATA_FAIL" });

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
const _fetchTrendingBlogDataStart = () => ({ type: "FETCH_TRENDING_BLOG_DATA_START" });
const _fetchTrendingBlogDataSuccess = (payload) => ({ type: "FETCH_TRENDING_BLOG_DATA_SUCCESS", payload });
const _fetchTrendingBlogDataFail = () => ({ type: "FETCH_TRENDING_BLOG_DATA_FAIL" });

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

const _fetchDetailedBlogDataStart = () => ({ type: "FETCH_DETAILED_BLOG_DATA_START" });
const _fetchDetailedBlogDataSuccess = (payload) => ({ type: "FETCH_DETAILED_BLOG_DATA_SUCCESS", ...payload });
const _fetchDetailedBlogDataFail = () => ({ type: "FETCH_DETAILED_BLOG_DATA_FAIL" });

export const getSingleBlogData = (blog_id) => (dispatch) => {
  dispatch(_fetchDetailedBlogDataStart());
  const data = { blog_id: blog_id };
  return new Promise((resolve, reject) => {
    axios.post('https://playdevelopers.com/react/json/viewed',
      qs.stringify(data), {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then(res => {
      dispatch(_fetchDetailedBlogDataSuccess(res.data));
    })
      .catch(error => {
        console.log('------- error ---------', error);
        dispatch(_fetchDetailedBlogDataFail());
      })
  })
}



const _fetchMtipsStart = () => ({ type: "FETCH_MTIP_BLOG_DATA_START" });
const _fetchMtipsSuccess = (payload) => ({ type: "FETCH_MTIP_BLOG_DATA_SUCCESS", payload });
const _fetchMtipsFail = () => ({ type: "FETCH_MTIP_BLOG_DATA_FAIL" });

export const getMtipsData = (blog_id) => (dispatch) => {
  dispatch(_fetchMtipsStart());
  const data = { blog_id: blog_id };
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: 'https://playdevelopers.com/react/json/mtips',
    }).then(res => {
      dispatch(_fetchMtipsSuccess(res.data));
    })
      .catch(error => {
        console.log('------- error ---------', error);
        dispatch(_fetchMtipsFail());
      })
  })
}

const _fetchRtipsStart = () => ({ type: "FETCH_RTIP_BLOG_DATA_START" });
const _fetchRtipsSuccess = (payload) => ({ type: "FETCH_RTIP_BLOG_DATA_SUCCESS", payload });
const _fetchRtipsFail = () => ({ type: "FETCH_RTIP_BLOG_DATA_FAIL" });

export const getRtipsData = (blog_id) => (dispatch) => {
  dispatch(_fetchRtipsStart());
  const data = { blog_id: blog_id };
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: 'https://playdevelopers.com/react/json/rtips',
    }).then(res => {
      dispatch(_fetchRtipsSuccess(res.data));
    })
      .catch(error => {
        console.log('------- error ---------', error);
        dispatch(_fetchRtipsFail());
      })
  })
}

const _fetchVtipStart = () => ({ type: "FETCH_VTIP_BLOG_DATA_START" });
const _fetchVtipSuccess = (payload) => ({ type: "FETCH_VTIP_BLOG_DATA_SUCCESS", payload });
const _fetchVtipFail = () => ({ type: "FETCH_VTIP_BLOG_DATA_FAIL" });

export const getVtipData = (mr_id) => (dispatch) => {
  dispatch(_fetchVtipStart());
  const data = { mr_id: mr_id };
  return new Promise((resolve, reject) => {
    axios.post('https://playdevelopers.com/react/json/vtips',
      qs.stringify(data), {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then(res => {
      dispatch(_fetchVtipSuccess(res.data));
    })
      .catch(error => {
        console.log('------- error ---------', error);
        dispatch(_fetchVtipFail());
      })
  })
}