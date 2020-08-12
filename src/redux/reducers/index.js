const initialState = {
  blogs: [],
  totalBlogsCount: 0,
  recentBlogsData: [],
  trendingBlogsData: [],
  detailedBlogData: {
    blog: null,
    prevBlog: null,
    nextBlog: null
  },
  isLoadingBLogs: false,
  isLoadingRecentBlogs: false,
  isLoadingTrendingBlogs: false,
  isLoadingDetailedBlogs: false,
};

export default function rootreducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_BLOG_DATA_START':
      return { ...state, isLoadingBLogs: true }
    case 'FETCH_BLOG_DATA_SUCCESS':
      return { ...state, blogs: action.payload, totalBlogsCount: action.count, isLoadingBLogs: false }
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
    case 'FETCH_DETAILED_BLOG_DATA_START':
      return { ...state, isLoadingDetailedBlogs: true }
    case 'FETCH_DETAILED_BLOG_DATA_SUCCESS':
      return {
        ...state,
        detailedBlogData: {
          blog: action.blog,
          prevBlog: action.prev,
          nextBlog: action.next,
        },
        isLoadingDetailedBlogs: false
      }
    case 'FETCH_DETAILED_BLOG_DATA_FAIL':
      return { ...state, isLoadingDetailedBlogs: true }
    default: return state
  }
}