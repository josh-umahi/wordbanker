import axios from "axios";
import { getLocalStorageProfile } from "../utils/localStorage";

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASEURL_DEVELOPMENT,
});

API.interceptors.request.use((req) => {
  let profile = getLocalStorageProfile();
  if (profile) {
    req.headers.Authorization = `Bearer ${profile.token}`;
  }

  return req;
});

export const fetchPost = (id: string, isWotd = false) => {
  return API.get(`/posts/${id}/?isWotd=${isWotd ? "YES" : "NO"}`);
};

export const fetchPosts = (page: any) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery: any) =>
  API.get(`/posts/search?searchQuery=${searchQuery.search || "none"}`);
export const createPost = (newPost: any) => API.post("/posts", newPost);
export const likePost = (id: string) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id: string, updatedPost: any) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id: string) => API.delete(`/posts/${id}`);

export const signIn = (formData: any) => API.post("/user/signin", formData);
export const signUp = (formData: any) => API.post("/user/signup", formData);

