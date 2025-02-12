import axios from "axios";

const API = axios.create({ baseURL:process.env.URL});

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//       req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }

//     return req;
//   });

export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser = (id, formData) => API.put(`/user/update/${id}`, formData);
export const getAllUser = () => API.get('/user')
export const followUser = (id, data) => API.put(`/user/follow/${id}`, data)
export const unfollowUser = (id, data) => API.put(`/user/unfollow/${id}`, data)
export const deleteUser = (id, data) => 
    API.delete(`/user/delete/${id}`, {
      data: data, // Include the data payload here
    });
  