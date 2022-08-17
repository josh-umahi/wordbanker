import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";
import * as api from "../api/index";
import { getLocalStorageProfile } from "../utils/localStorage";

export const getPost = async (id: string) => {
  const {
    data: { data },
  } = await api.fetchPost(id);

  return data;
};

export const getWordOfTheDayPost = async (id: string) => {
  const {
    data: { data },
  } = await api.fetchPost(id, true);

  return data;
};

export const getPosts = (page: any) => async (dispatch: any) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchPosts(page);

    dispatch({
      type: FETCH_ALL,
      payload: { data, currentPage, numberOfPages },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery: any) => async (dispatch: any) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost =
  (post: any, navigate: any) => async (dispatch: any) => {
    try {
      const { data } = await api.createPost(post);

      dispatch({ type: CREATE, payload: data });

      navigate(`/posts/${data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

export const updatePost = (id: any, post: any) => async (dispatch: any) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const likePost = (id: any) => async (dispatch: any) => {
  let profile = getLocalStorageProfile();
  const user = profile;

  try {
    // @ts-ignore
    // TODO: Yes. Passing the token into every privileged request is ideal. But the `likePost()` only takes one argument
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const deletePost = (id: any, navigate: any) => async (dispatch: any) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });

    navigate(`/posts`);
  } catch (error: any) {
    console.log(error.message);
  }
};
