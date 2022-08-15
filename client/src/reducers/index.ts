import postsReducer from "./posts";
import authReducer from "./auth";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof reducers>;
