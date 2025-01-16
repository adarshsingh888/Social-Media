import axios from 'axios';

const API = axios.create({ baseURL: process.env.URL });

export const signUP = (formData) => API.post('/auth/register', formData);

export const logIN = (formData) => API.post('/auth/login', formData);
