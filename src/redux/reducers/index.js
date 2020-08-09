const initialState = {
  blogs: [],
  recentBlogsData: [],
  trendingBlogsData: [],
  isLoadingBLogs: false,
  isLoadingRecentBlogs: false,
  isLoadingTrendingBlogs: false,
};

export default function rootreducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_BLOG_DATA_START':
      return { ...state, isLoadingBLogs: true }
    case 'FETCH_BLOG_DATA_SUCCESS':
      return { ...state, blogs: action.payload, isLoadingBLogs: false }
    case 'FETCH_BLOG_DATA_FAIL':
      return { ...state, isLoadingBLogs: true }
    case 'FETCH_RECENT_BLOG_DATA_START':
      return { ...state, isLoadingRecentBlogs: true }
    case 'FETCH_RECENT_BLOG_DATA_SUCCESS':
      return { ...state, recentBlogsData: action.payload, isLoadingRecentBlogs: false }
    case 'FETCH_RECENT_BLOG_DATA_FAIL':
      return { ...state, isLoadingRecentBlogs: true }
    case 'FETCH_TRENDING_BLOG_DATA_START':
      return { ...state, isLoadingTrendingBlogs: true }
    case 'FETCH_TRENDING_BLOG_DATA_SUCCESS':
      return { ...state, trendingBlogsData: action.payload, isLoadingTrendingBlogs: false }
    case 'FETCH_TRENDING_BLOG_DATA_FAIL':
      return { ...state, isLoadingTrendingBlogs: true }
    default: return state
  }
}