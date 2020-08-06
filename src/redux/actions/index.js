import axios from 'axios';

const _fetchBlogDataStart = () => ({ type: "FETCH_BLOG_DATA_START"});
const _fetchBlogDataSuccess = (payload) => ({ type: "FETCH_BLOG_DATA_SUCCESS", payload });
const _fetchBlogDataFail= () => ({ type: "FETCH_BLOG_DATA_FAIL"});

export const getBlogsData = () => (dispatch) => {
  dispatch(_fetchBlogDataStart());
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: 'https://playdevelopers.com/react/json/blogs',
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