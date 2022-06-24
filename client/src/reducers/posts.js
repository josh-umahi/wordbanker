import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH } from '../constants/actionTypes';

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log(action.payload)
      return action.payload;
    case FETCH_BY_SEARCH:
      return action.payload.data;
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default postsReducer