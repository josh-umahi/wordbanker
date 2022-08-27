import { CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";

const postsReducer = (state = { isLoading: true, posts: [] }, action: any) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true, posts: [] };
    case "END_LOADING":
      return { ...state, isLoading: false };
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

export default postsReducer;
