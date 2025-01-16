import axios from 'axios';

const API = axios.create({ baseURL: process.env.URL});

export const uploadImage = (data) => API.post('/upload/', data)

export const Post = (formData) => API.post('/post', formData);