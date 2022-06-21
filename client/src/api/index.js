import axios from 'axios';

const url = 'http://localhost:4000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const signIn = (formData) => axios.post('/user/signin', formData);
export const signUp = (formData) => axios.post('/user/signup', formData);