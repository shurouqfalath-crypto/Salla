
import axios from "axios";

const token = localStorage.getItem('user-token')?.replace(/"/g, '');

export const api = axios.create({
  baseURL: "https://dummyjson.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }, 
})

 

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("user-token")?.replace(/"/g, "");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });