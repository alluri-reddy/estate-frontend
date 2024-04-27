import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estate-backend-aq9k.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;