const initialState = {
  blogs: [],
  isLoadingBLogs: false
};

export default function rootreducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_BLOG_DATA_START':
      return { ...state, isLoadingBLogs: true }
    case 'FETCH_BLOG_DATA_SUCCESS':
      return { ...state, blogs: action.payload, isLoadingBLogs: false }
    case 'FETCH_BLOG_DATA_FAIL':
      return { ...state, isLoadingBLogs: true }
    default: return state
  }
}