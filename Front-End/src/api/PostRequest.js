import axios from 'axios';

const API = axios.create({ baseURL: process.env.URL});

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likedPost = (postId, userid) => API.put(`/post/${postId}/like`, { userId: userid });