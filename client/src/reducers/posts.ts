import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH, FETCH_POST, CLEAR_POST_DETAILS } from '../constants/actionTypes';

const postsReducer = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true, posts: [] };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload.data };
    case FETCH_POST:
      return {
        ...state,
        wordOfTheDayPost: action.payload?.wordOfTheDayPost,
        post: action.payload?.post,
        recommendedPosts: action.payload?.recommendedPosts
      };
    case CLEAR_POST_DETAILS:
      return {
        ...state,
        post: null,
        recommendedPosts: null
      };
    case UPDATE:
      return { ...state, post: action.payload };

    /* 
     * LIKE, CREATE, DELETE don't need to modify the state because 
     * the first is controlled by client to be made faster and the 
     * last two navigate to new routes which update the state for us
    */
    case LIKE:
      return state;
    case CREATE:
      return state;
    case DELETE:
      return state;
    default:
      return state;
  }
};

export default postsReducer