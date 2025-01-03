import axios from 'axios';

const API= axios.create({baseURL:"http://localhost:5000"})

export const signUP=(fromData)=> API.post('/auth/register',formData);

export const logIN=(fromData)=>API.post('/auth/login',fromData);