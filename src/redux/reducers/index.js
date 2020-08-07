const initialState = {
  blogs: [],
  recentBlogsData: [],
  trendingBlogsData: [],
  isLoadingBLogs: false,
  isLoadingRecentBLogs: false,
  isLoadingTrendingBLogs: false,
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
      return { ...state, isLoadingRecentBLogs: true }
    case 'FETCH_RECENT_BLOG_DATA_SUCCESS':
      return { ...state, recentBlogsData: action.payload, isLoadingRecentBLogs: false }
    case 'FETCH_RECENT_BLOG_DATA_FAIL':
      return { ...state, isLoadingRecentBLogs: true }
    case 'FETCH_TRENDING_BLOG_DATA_START':
      return { ...state, isLoadingTrendingBLogs: true }
    case 'FETCH_TRENDING_BLOG_DATA_SUCCESS':
      return { ...state, trendingBlogsData: action.payload, isLoadingTrendingBLogs: false }
    case 'FETCH_TRENDING_BLOG_DATA_FAIL':
      return { ...state, isLoadingTrendingBLogs: true }
    default: return state
  }
}